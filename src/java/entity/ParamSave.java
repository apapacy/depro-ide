package entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import projects.ItemResurces;
import projects.ItemStyle;

public class ParamSave {
    public String nameAPP, nameScreenStart, nameClassStart;
    public String currentScreen, path;
    public String toolId, menuId, scrollId;
    public String pathLayoutItem;
    public boolean noToolMenu, noDrawer, noFragmContainer;
    public Screen currentScreenObj;
    public int typeScreen;
    public List<String> arrayString;
    public List<String> addApp;
    public Set<String> addPermish;
    public List<ItemResurces> listString;
    public ListScreen sreens;
    public ListItemResurces colors, drawable, strings;
    public List<ItemStyle> styles;
    
    public List<ItemResurces> getListString() {
        if (listString == null) {
            listString = new ArrayList();
        }
        return listString;
    }
}
