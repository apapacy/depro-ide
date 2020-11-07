package servlets;

import com.google.gson.JsonSyntaxException;
import db.UserDB;
import entity.AuthResult;
import entity.DataServlet;
import entity.Profile;
import entity.TokenUser;
import java.io.File;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "Auth", urlPatterns = {"/auth/*"})
public class Auth extends BaseServlet {

    @Override
    protected void processRequest(HttpServletRequest request, HttpServletResponse response, DataServlet ds) {
        Profile userC = null;
        Profile user = null;
        String data = "";
        int count;
        
        UserDB userDB = new UserDB(request);
        switch (ds.query) {
            case "/auth/login":
                try {
                    data = getStringRequest(request);
                    userC = gson.fromJson(data, Profile.class);
                } catch (JsonSyntaxException | IOException e) {
                    sendError(response, ERR.PROF_ERR + e.toString());
                }
                user = userDB.getUser(userC.login);
                if (user == null || ! user.password.equals(userC.password)) {
                    sendError(response, ERR.NO_USER);
                } else {
                    count = 0;
                    do {
                        ds.token = createRandomStr(30);
                        count++;
                    } while (userDB.setToken(ds.token, user.userId, user.resurseInd) < 1 || count > 3);
                    if (count > 3) {
                        sendError(response, ERR.NO_USER);
                        break;
                    }
                    TokenUser tu = baseDb.getUserByToken(ds.token);
                    ds.userId = tu.userId;
                    ds.userResurseInd = tu.userResurseInd;
//                    String basePath = request.getServletContext().getRealPath("") + File.separator;
                    String basePath = ds.patchOutsideProject;
                    formDir(basePath + Constants.USERS_DATA + ds.userResurseInd);
                    AuthResult ar = new AuthResult();
                    ar.token = ds.token;
                    user.password = null;
                    ar.profile = user;
                    sendResult(response, gson.toJson(ar));
                }
                break;
            case "/auth/register":
                try {
                    data = getStringRequest(request);
                    userC = gson.fromJson(data, Profile.class);
                } catch (IOException e) {
                    sendError(response, ERR.PROF_ERR + e.toString());
                }
                user = userDB.getUser(userC.login);
                if (user == null) {
                    userC.resurseInd = createRandomStr(20);
                    long id = -1;
                    id = userDB.createUserId(userC);
                    if (id > -1) {
                        count = 0;
                        userC.userId = id;
                        do {
                            ds.token = createRandomStr(30);
                            count++;
                        } while (userDB.setToken(ds.token, userC.userId, userC.resurseInd) < 1 || count > 3);
                        if (count > 3) {
                            sendError(response, ERR.NO_USER);
                            break;
                        }
                        AuthResult ar = new AuthResult();
                        ar.token = ds.token;
                        userC.password = null;
                        ar.profile = userC;
                        sendResult(response, gson.toJson(ar));
                    } else {
                        sendError(response, ERR.USER_DB_ERR);
                    }
                } else {
                    sendError(response, ERR.USER_EXISTS);
                }
                break;
        }
    }
    
    @Override
    public int needToLogin() {
        return 1;
    }

}
