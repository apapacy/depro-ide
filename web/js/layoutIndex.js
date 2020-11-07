    var DENSITY = 0;
    var MEASURE = 0;
    var dp_12, dp_14, dp_16, dp_18, dp_20, dp_24;
    var SCALE = 1;
    var ACTIVE = null, ACTIVE_X, ACTIVE_Y, ACTIVE_W, ACTIVE_H;
    var ACTIVE_CHILD;
    var currentScale = 100;
    var popUp;
    var popUpTitle;
    var popUpContainer;
    var scaleValue;
    var pxIn100mm = 630;
    var compon, content;
    var header, footer;
    var layoutParam, textValue;
//    var listCompon, hierarhy, separator;
    var px = 'px';
    var h_body, w_body;
    var h_header = 20, h_footer = 20, h_content;
    var w_left;
    var percent_w_compon = 0.6;
    var browser = 'f';
    var delta_w = 0;
    var delta_h = 0;
    var min_sep = 200, max_sep = 500;
    var marginCompon = 4;
    var headerTool;
    var root_g, root;
    var contourEl;
    var typeInsert, insertTypeFull;
    var selectViewElement;
    
    var sizeDevice;
    var sizeDeviceArray = [[360, 640], [420, 748], [420, 800], [480, 800]];
    var screenW; // dp
    var screenH; // dp
    var screenWpx;
    var screenHpx;
    
    var projectId = 0, projectName = "";
    var screenId = 0, screenName = "", screenData = "";
    
    onload = function () {
      /* Определяем браузер */
      var br = navigator.userAgent;
      if (br.indexOf("Opera") != -1) browser = 'o';
      else {
        if (br.indexOf("MSIE") != -1) browser = 'i';
        else {
          if (br.indexOf("Firefox") != -1) browser = 'f';
        }
      }
    }

    function setLayout() {
        selectViewElement = null;
        screenW = sizeDeviceArray[1][0];
        screenH = sizeDeviceArray[1][1];
        popUp = document.getElementById('popUp');
        contourEl = document.getElementsByClassName('contourEl')[0];
        popUpTitle = document.getElementById('popUpTitle');
        popUpContainer = document.getElementById('popUpContainer');
        headerTool = document.getElementById('header-tool');
//        navigatorEl = document.getElementById('navigatorEl');
        scaleValue = document.getElementById('scaleValue');
        layoutParam = document.getElementById('layout-par');
        textValue = document.getElementById('text_text_value');
        setTypeInsert('RelativeLayout');
        insertTypeFull = {name: 'RelativeLayout', typeBlock: 2};
        ux_ui.style.width = '100mm';
        DENSITY = ux_ui.clientWidth / pxIn100mm;
        MEASURE = DENSITY * SCALE;
        setDp();
        ux_ui.style.width = '50px';
        
        setSelectDevice();
        sizeDevice = document.getElementById('id-device');
        
        root_g = document.getElementById('root-g');
        root = document.getElementById('root');
        setRoot();
        ACTIVE = null;
        setActive(root);
        formCompon();
        setNavigatorRoot();
    }
    
    function setDp() {
        dp_12 = 12 * MEASURE;
        dp_14 = 14 * MEASURE;
        dp_16 = 16 * MEASURE;
        dp_18 = 18 * MEASURE;
        dp_20 = 20 * MEASURE;
        dp_24 = 24 * MEASURE;
    }
    
    function errorHandler(er) {
        alert('error='+er);
    }
    
    function setTypeInsert(t) {
        typeInsert = t;
        info_type_insert.innerHTML = t;
    }

    function setSelectDevice() {
        var strSel = '<select name="device" id="id-device" onchange="changeDevice(value)" style="width: 100px; height: 100%; margin-left: 5px">\n';
        for (var i = 0; i < sizeDeviceArray.length; i++) {
            var d = sizeDeviceArray[i];
            if (i == 1) {
                strSel += '<option selected value="' + i + '">' + d[0] + '*' + d[1] + '</option>\n';
            } else {
                strSel += '<option value="' + i + '">' + d[0] + '*' + d[1] + '</option>\n';
            }
        }
        strSel += '</select>';
        var dev = document.getElementById('dev');
        dev.innerHTML = strSel;
    }
    
    function setRoot() {
        screenWpx = screenW * MEASURE;
        screenHpx = screenH * MEASURE;
        root_g.style.width = screenWpx + px;
        root_g.style.height = screenHpx + px;
        root.style.width = screenWpx + px;
        root.style.height = screenHpx + px;
        
        if (currentScreen == null) {
            p = {};
            p.type = 'RelativeLayout';
            p.typeFull = {name: 'RelativeLayout', typeBlock: 2};
            p.parent = root_g;
            p.width = MATCH;
            p.height = MATCH;
            p.gravLayout = {};
            p.gravLayout.h = NONE;
            p.gravLayout.v = NONE;
            p.gravity = {};
            p.gravity.h = NONE;
            p.gravity.v = NONE;

            root.android = p;
        } else {
            root.android = currentScreen.layout;
            root.android.parent = root_g;
        }
    }
    
    function setActive(el) {
        if (ACTIVE != null) {
            ACTIVE.onmousedown = null;
        }
        ACTIVE = el;
        var rect = ACTIVE.getBoundingClientRect();
        ACTIVE_X = parseInt(rect.left);
        ACTIVE_Y = parseInt(rect.top);
      
        var id = 'no name ';
        if (el.android.viewId != undefined) {
            id = el.android.viewId + ' ';
        }
        info_active.innerHTML = id + el.android.type;
        ACTIVE.onmousedown = resizeContour;
    }
    
    function getXY(obj_event) {
      if (obj_event) {
        x = obj_event.pageX;
        y = obj_event.pageY;
      }
      else {
        x = window.event.clientX;
        y = window.event.clientY;
        if (browser == 'i') {
          y -= 2;
          x -= 2;
        }
      }
      var res = {};
      res.x = x;
      res.y = y;
      return res;
    }
    
function sepMove(e) {
    var point = getXY(e);
    delta_h = listCompon.clientHeight - point.y;
    document.onmousemove = resizeList;
    document.onmouseup = clearMove;
    if (browser === 'o' || browser === 'f') {
        document.addEventListener("onmousemove", resizeList, false);
    }
    return false;
}

function resizeList(event) {
    var point = getXY(event);
    var new_h = delta_h + point.y; 
    if (new_h > min_sep && new_h < max_sep) {
        listCompon.style.height = new_h + px; 
        hierarhy.style.top = (new_h + 3) + px;
        separator.style.top = (new_h) + px;
    }
}

function clearMove(e) {
    document.onmousemove = null;
}