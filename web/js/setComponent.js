var TOP = 0, CENTER = 1, BOTTOM = 2, ABSOLUTE = 3, NONE = 4;
var LEFT = 0, RIGHT = 2;

var currentElement;
var listComponent;
var selTypeEl;

function formCompon() {
    listComponent = new Array();
    listComponent[0] = {};
    listComponent[0].name = 'Layouts';
    listComponent[0].children = new Array({name: 'LinearLayout', typeBlock: 1}, 
            {name: 'RelativeLayout', typeBlock: 2},
            {name: 'FrameLayout', typeBlock: 2});
    listComponent[1] = {};
    listComponent[1].name = 'Text';
    listComponent[1].children = new Array({name: 'TextView', typeBlock: 0}, 
            {name: 'EditText', typeBlock: 0});
    listComponent[2] = {};
    listComponent[2].name = 'Containers';
    listComponent[2].children = new Array({name: 'CardView', typeBlock: 10},
            {name: 'RecyclerView', typeBlock: 10},
            {name: 'ScrollView', typeBlock: 10},
            {name: 'HorizontalScrollView', typeBlock: 11}, 
            {name: 'ViewPager', isBlock: false}, 
            {name: 'Spinner', typeBlock: 10});
    listComponent[3] = {};
    listComponent[3].name = 'Widgets';
    listComponent[3].children = new Array({name: 'ImageView', typeBlock: 0}, 
            {name: 'VideoView', typeBlock: 0},
            {name: 'Gallery', typeBlock: 0},
            {name: 'Indicator', typeBlock: 0},
            {name: 'Map', typeBlock: 0},
            {name: 'SheetBottom', typeBlock: 2},
            {name: 'CalendarView', typeBlock: 0});
    listComponent[4] = {};
    listComponent[4].name = 'Progress';
    listComponent[4].children = new Array({name: 'ProgressGroup', typeBlock: 2}, 
            {name: 'ProgressCircle', typeBlock: 0},
            {name: 'ProgressLine', typeBlock: 0});
            
    var ik = listComponent.length;
    category.innerHTML = "";
    for (var i = 0; i < ik; i++) {
        var div = createDivClick(i);
        div.className = 'category-item';
        div.innerHTML = listComponent[i].name;
        category.appendChild(div);
    }
}

function clickCategory(i){
    var lc = document.getElementById('type_view');
    lc.innerHTML = '';
    var child = listComponent[i].children;
    var jk = child.length;
    selTypeEl = null;
    for (var j = 0; j < jk; j++) {
        var div = createDivClick2(i, j);
        div.className = 'type-item';
        div.innerHTML = child[j].name;
        lc.appendChild(div);
    }
}

function clickCategory2(i, j){
//    var type = listComponent[i].children[j].name;
    insertTypeFull = listComponent[i].children[j];
    setTypeInsert(insertTypeFull.name);
    if (selTypeEl != null) {
        selTypeEl.className = 'type-item';
    }
//    let arr = type_view.children;
    selTypeEl = type_view.children[j];
    selTypeEl.className = 'type_item_sel';
}

function createDivText() {
    var container = document.createElement('div')
    container.innerHTML = '<div class="text" style="position: absolute; white-space: pre-wrap; color: #808080;"></div>'
    return container.firstChild
}

function createDivMenuB() {
    var container = document.createElement('div');
    container.innerHTML = '<div class="menu_b" style="position: absolute;left:0;top:0;right:0;bottom:0"></div>'
    return container.firstChild
}

function createDivTab() {
    var container = document.createElement('div')
    container.innerHTML = '<div class="tab_layout" style="display:flex;flex-direction:row;align-items:center;justify-content:space-around;width:100%;height:100%;"></div>'
    return container.firstChild;
}

function createForToolBar() {
    var container = document.createElement('div')
    container.innerHTML = '<div style="display:flex;flex-direction:row;align-items:center;position:absolute;width:100%;height:100%;">'
            +'<img class="img_back" width="'+dp_24+'" height="'+dp_24+'" style="margin-left:'+dp_16+'px;margin-right:'+dp_16+'px;">'
            +'<div class="title" style="display: inline-block; margin-left: 12px; white-space: pre-wrap;"></div>'
        + '</div>';
    return container.firstChild
}

function createDivEditText(el) {
    var marg = 4 * MEASURE;
    var bot = 10 * MEASURE;
    var margbot = 7 * MEASURE;
    var container = document.createElement('div')
    container.innerHTML = '<div class="line" style="position: absolute; top:0px; left:' + marg 
            + 'px;right:' + marg + 'px;border-bottom:1px solid #808080; bottom:' + margbot + 'px;"></div>' 
            + '<div class="text" style="position: absolute; white-space: pre-wrap; color: #808080"></div>';
    el.appendChild(container.firstChild);
    return container.getElementsByClassName("text")[0];
}

function createDivImg() {
    var container = document.createElement('div')
    container.innerHTML = '<div class="image" style="width:100%;height:100%"></div>'
    return container.firstChild
}

function clickElement(event, el) {
    if (formNewElem) return;
    if (el != ACTIVE) {
        hideContourEl();
        currentElement = el;
        setParamCompon();
        setPickElement(el);
        selectNavigatorEl(el);
    }
}

function setPickElement(el) {
    appendContour();
}

function hideContourEl() {
    if (currentElement != null) {
        let el = currentElement.getElementsByClassName('contourEl')[0];
        if (el != undefined) {
            currentElement.removeChild(el);
            currentElement.style.outline = '';
        }
    }
}

function hideSelectEl(e) {
    if (e.target.id == 'content') {
        hideContourEl();
        if (selectViewElement != null) {
            selectViewElement.style.backgroundColor = '#fff';
            selectViewElement = null;
        }
        layoutParam.style.display = 'none';
    }
}

function appendContour() {
    if (currentElement.getElementsByClassName('contourEl').length == 0) {
        let contour = createContour();
        contour.style.display = 'block';
        currentElement.appendChild(contour);
        currentElement.style.outline = '2px solid #00f';
    }
}

function createDivClick(num) {
    var container = document.createElement('div')
    container.innerHTML = '<div onclick="clickCategory('+num+')"> </div>';
    return container.firstChild
}

function createDivClick2(i, j) {
    var container = document.createElement('div')
    container.innerHTML = '<div onclick="clickCategory2('+i+','+j+')"> </div>';
    return container.firstChild
}

function viewCompon() {
    viewComponElem(currentElement);
}

function changeBackground(el) {
    var p = el.android;
    if (p.background != null) {
        el.style.backgroundColor = p.background;
    }
}

function showElemChilds(el) {
    let p = el.android;
    if (p != null) {
        viewComponElem(el);
        let ch = p.children;
        if (ch != null && ch.length > 0) {
            let ik = ch.length;
            for (let i = 0; i <ik; i++) {
                showElemChilds(ch[i].viewElement);
            }
            if (p.width == WRAP) {
                el.style.width = maxChildWidth(el) + px;
            }
            if (p.height == WRAP) {
                el.style.height = maxChildHeight(el) + px;
            }
        }
    }
}
        
function viewComponElem(el) {
    setLayoutChange();
    var p = el.android;
    let rectParentEl = p.parent.getBoundingClientRect();
    let parentX = parseInt(rectParentEl.left);
    let parentY = parseInt(rectParentEl.top);
    var LL, RR, TT, BB;
    var pLL, pRR, pTT, pBB;
    LL = RR = TT = BB = 0;
    pLL = pRR = pTT = pBB = 0;
    if (p.margin != undefined) {
        if (p.margin == '') {
            el.style.margin = '';
        } else {
            LL = RR = TT = BB = parseInt(p.margin) * MEASURE;
            el.style.margin = LL + px;
        }
    }
    if (p.leftMarg != undefined) {
        if (p.leftMarg == '') {
            if (LL == 0) el.style.marginLeft = '';
        } else {
            LL = parseInt(p.leftMarg) * MEASURE;
            el.style.marginLeft = LL + px;
        }
    }
    
    if (p.topMarg != undefined) {
        if (p.topMarg == '') {
            if (TT == 0) el.style.marginTop = '';
        } else {
            TT = parseInt(p.topMarg) * MEASURE;
            el.style.marginTop = TT + px;
        }
    }
    if (p.rightMarg != undefined) {
        if (p.rightMarg == '') {
            if (RR == 0) el.style.marginRight = '';
        } else {
            RR = parseInt(p.rightMarg) * MEASURE;
            el.style.marginRight = RR + px;
        }
    }
    if (p.bottomMarg != undefined) {
        if (p.bottomMarg == '') {
            if (BB == 0) el.style.marginBottom = '';
        } else {
            BB = parseInt(p.bottomMarg) * MEASURE;
            el.style.marginBottom = BB + px;
        }
    }
    
    if (p.padding != undefined) {
        if (p.padding == '') {
            el.style.padding = '';
        } else {
            pLL = pRR = pTT = pBB = parseInt(p.padding) * MEASURE;
            el.style.padding = pLL + px;
        }
    }
    if (p.leftPad != undefined) {
        if (p.leftPad == '') {
            if (pLL == 0) el.style.paddingLeft = '';
        } else {
            pLL = parseInt(p.leftPad) * MEASURE;
            el.style.paddingLeft = pLL + px;
        }
    }
    
    if (p.topPad != undefined) {
        if (p.topPad == '') {
            if (pTT == 0) el.style.paddingTop = '';
        } else {
            pTT = parseInt(p.topPad) * MEASURE;
            el.style.paddingTop = pTT + px;
        }
    }
    if (p.rightPad != undefined) {
        if (p.rightPad == '') {
            if (pRR == 0) el.style.paddingRight = '';
        } else {
            pRR = parseInt(p.rightPad) * MEASURE;
            el.style.paddingRight = pRR + px;
        }
    }
    if (p.bottomPad != undefined) {
        if (p.bottomPad == '') {
            if (pBB == 0) el.style.paddingBottom = '';
        } else {
            pBB = parseInt(p.bottomPad) * MEASURE;
            el.style.paddingBottom = pBB + px;
        }
    }
    let img;
    try {
        uiFunction = eval("new ui" + p.type + "()");
        uiFunction.viewElementUI(p, el);
    } catch(e) {
    }
    let pp;
    let margR;
    if (p.parent != null) {
        pp = p.parent.android;
        if (pp.type == "List") {
            let span = pp.spanC;
            let mm = -1;
            if (span != null) {
                mm = parseInt(span);
            }
            if (mm > 1) {
                margR = screenWpx - screenWpx / mm;
            }
        }
    }
    if (p.parent != null) {
        let root_w = p.parent.offsetWidth;
        let root_h = p.parent.offsetHeight;
        let pParent = p.parent.android;
        if (p.width == MATCH) {
            el.style.width = "";
            el.style.left = "0px";
            if (margR != null) {
                el.style.right = margR + px;
            } else {
                el.style.right = "0";
            }
        } else if (p.width == WRAP) {
            let contentEl;
            let rectParent;
            let wWpx;
            el.style.width = "";
            el.style.left = "0px";
            el.style.right = "0px";
            switch(p.type) {
                case "EditText" :
                    contentEl = el.getElementsByClassName("text")[0];
                    rectParent = contentEl.getBoundingClientRect();
                    wWpx = parseInt(rectParent.right - rectParent.left);
                    if (wWpx == 0) {
                        wWpx = 10;
                    } 
                    wWpx = wWpx + 8;
                    el.style.width = wWpx + px;
                    break;
                case "TextView" :
                    contentEl = el.getElementsByClassName("text")[0];
                    rectParent = contentEl.getBoundingClientRect();
                    wWpx = parseInt(rectParent.right - rectParent.left) + 1;
                    el.style.right = "";
                    el.style.width = wWpx + px;
                    if (pLL > 0) {
                        contentEl.style.marginLeft = pLL + px;
                    } else {
                        contentEl.style.marginLeft = "";
                    }
                    if (pTT > 0) {
                        contentEl.style.marginTop = pTT + px;
                    } else {
                        contentEl.style.marginTop = "";
                    }
                    break;
                case "RelativeLayout" :
                    el.style.width = maxChildWidth(el) + px;
                    break;
                default:
                    el.style.width = maxChildWidth(el) + px;
//                    el.style.width = '';
            }
        } else {
            el.style.width = (p.width * MEASURE - pLL - pRR) + px;
        }
        if (typeof(p.height) == "string") {
            var hhh = findDimenByName(p.height);
            var hi = parseInt(hhh);
            el.style.height = (hi * MEASURE) + px;
        } else {
            if (p.height == MATCH) {
                el.style.height = "";
                el.style.top = "0px";
                el.style.bottom = "0px";
            } else if (p.height == WRAP) {
                switch(p.type) {
                    case "EditText" :
                        el.style.height = standartHeightEditText(p.textSize) * MEASURE + px;
                        break;
                    case "TextView" :
                        el.style.height = parseInt(p.textSize) * MEASURE + px;
                        break;
                    case "RelativeLayout" :
                        el.style.height = maxChildHeight(el) + px;
                        break;
                    default:
                        el.style.height = maxChildHeight(el) + px;
//                        el.style.height = '';
                }
            } else {
                el.style.height = (p.height * MEASURE - pTT - pBB) + px;
            }
        }
        
        if (p.type == "ImageView" || p.type == "Gallery" || p.type == "Map") {
            if (p.src != null && p.src != '') {
                var elDivImg = el.getElementsByClassName('image')[0];
                if (elDivImg == null) {
                    elDivImg = createDivImg();
                    el.appendChild(elDivImg);
                }
                elDivImg.innerHTML = '<IMG SRC="'+ p.src +'" style="width:100%;height:100%;pointer-events: none;">';
                elImg = elDivImg.firstChild;
                if (p.width != WRAP) {
                    var ww = parseInt(el.style.width);                    
                    elImg.width = ww;
                }
                if (p.height != WRAP) {
                    var hh = parseInt(el.style.height);                    
                    elImg.height = hh;
                }
            }
        }

        if (p.gravLayout != null) {
            el.style.position = 'absolute';
            if (p.height != MATCH) {
                switch(p.gravLayout.v) {
                    case NONE:
                    case TOP:
                        el.style.bottom = '';
                        el.style.top = '0px';
                        break
                    case BOTTOM:
                        el.style.top = '';
                        el.style.bottom = '0px';
                        break
                    case CENTER:
                        var ccc = el.clientHeight;
                        cc = root_h / 2 - ccc / 2;
                        el.style.bottom = '';
                        el.style.top = cc + px;
                        break
                }
            }
            if (p.width != MATCH) {
                switch(p.gravLayout.h) {
                    case RIGHT:
                        el.style.left = '';
                        if (pParent.rightPad != null && pParent.rightPad != "") {
                            el.style.right = (parseInt(pParent.rightPad) * MEASURE) + 'px';
                        } else {
                            el.style.right = '0px';
                        }
                        break
                    case NONE:
                    case LEFT:
                        el.style.right = '';
                        el.style.left = '0px';
                        break
                    case CENTER:
                        var ccc = el.clientWidth;
                        cc = root_w / 2 - ccc / 2;
                        el.style.right = '';
                        el.style.left = cc + px;
                        break
                }
            }
        }
    }
    
    let ik;
    if (p.toLeftOf != null && p.toLeftOf != "") {
        let leftOf = -1;
        let rectEl;
        let parentV = el.parentElement;
        let child = parentV.children;
        ik = child.length;
        let elem;
        for (let i = 0; i < ik; i++) {
            elem = child[i];
            if (elem.android != null && elem.android.viewId == p.toLeftOf) {
                rectEl = elem.getBoundingClientRect();
                leftOf = parseInt(rectParentEl.right - rectEl.left);
                break;
            }
        }
        if (leftOf > -1) {
            let leftMargElem = 0;
            if (elem.android.leftMarg != null) {
                leftMargElem = parseInt(elem.android.leftMarg) * MEASURE;
            }
            el.style.right = (leftOf + leftMargElem + RR) + px;
        }
    }
    
    if (p.toRightOf != null && p.toRightOf != "") {
        let rightOf = -1;
        let rectEl;
        let parentV = el.parentElement;
        let child = parentV.children;
        ik = child.length;
        let elem;
        for (let i = 0; i < ik; i++) {
            elem = child[i];
            if (elem.android != null && elem.android.viewId == p.toRightOf) {
                rectEl = elem.getBoundingClientRect();
                rightOf = parseInt(rectEl.right) - parentX;
                break;
            }
        }
        if (rightOf > -1) {
            el.style.marginLeft = (rightOf + LL) + px;
        }
    }

    if (p.below != null && p.below != "") {
        let below = -1;
        let parentV = el.parentElement;
        let child = parentV.children;
        let ik = child.length;
        let elem;
        for (let i = 0; i < ik; i++) {
            elem = child[i];
            if (elem.android != null && elem.android.viewId == p.below) {
                let rectEl = elem.getBoundingClientRect();
                below = parseInt(rectEl.bottom) - parentY;
                break;
            }
        }
        if (below > -1) {
            let botMargElem = 0;
            if (elem.android.bottomMarg != null) {
                botMargElem = parseInt(elem.android.bottomMarg) * MEASURE;
            }
            if (p.height == MATCH) {
                el.style.top = (below + botMargElem + TT) + px;
            } else {
                el.style.marginTop = (below + botMargElem + TT) + px;
            }
        }
    }
    
    if (p.above != null && p.above != "") {
        let above = -1;

        let parentV = el.parentElement;
        let child = parentV.children;
        let ik = child.length;
        let elem;
        for (let i = 0; i < ik; i++) {
            elem = child[i];
            if (elem.android != null && elem.android.viewId == p.above) {
                let rectEl = elem.getBoundingClientRect();
                above = parseInt(rectParentEl.bottom - rectEl.top);
                break;
            }
        }
        let topMargElem = 0;
        if (above > -1) {
            if (elem.android.topMarg != null && elem.android.topMarg != "") {
                topMargElem = parseInt(elem.android.topMarg) * MEASURE;
            }
            if (p.height == MATCH) {
                el.style.bottom = (above + topMargElem + BB) + px;
            } else {
                el.style.marginBottom = (above + topMargElem + BB) + px;
            }
        }
    }
    
    var hH = parseInt(el.style.height);
    var wW = parseInt(el.style.width);
    var contentEl;
    switch(p.type) {
        case "TextView":
            contentEl = el.getElementsByClassName("text")[0];
            switch(p.gravity.v) {
                case NONE:
                case TOP:
                    contentEl.style.bottom = '';
                    contentEl.style.top = '0px';
                    break;
                case BOTTOM:
                    contentEl.style.top = '';
                    contentEl.style.bottom = '0px';
                    break;
                case CENTER:
                    var ccc = contentEl.clientHeight;
                    cc = hH / 2 - ccc / 2;
                    contentEl.style.bottom = '';
                    contentEl.style.top = cc + px;
                    break;
            }
            switch(p.gravity.h) {
                case RIGHT:
                    contentEl.style.left = '';
                    contentEl.style.right = '0px';
                    break;
                case NONE:
                case LEFT:
                    contentEl.style.right = '';
                    contentEl.style.left = '0px';
                    break;
                case CENTER:
                    var ccc = contentEl.clientWidth;
                    cc = wW / 2 - ccc / 2;
                    contentEl.style.right = '';
                    contentEl.style.left = cc + 'px';
                    break;
            }
            break;
        case "EditText":
            contentEl = el.getElementsByClassName("text")[0];
            var pad4 = 4 * MEASURE;
            switch(p.gravity.v) {
                case TOP:
                    contentEl.style.bottom = '';
                    contentEl.style.top = '0px';
                    break;
                case BOTTOM:
                    contentEl.style.top = '';
                    contentEl.style.bottom = '0px';
                    break;
                case NONE:
                case CENTER:
//                    var ccc = contentEl.clientHeight;
                    var ccc = p.textSize * MEASURE;
                    cc = hH / 2 - ccc / 2;
                    contentEl.style.bottom = '';
                    contentEl.style.top = cc + 'px';
                    break;
            }
            switch(p.gravity.h) {
                case RIGHT:
                    contentEl.style.left = '';
                    contentEl.style.right = pad4 + px;
                    break;
                case NONE:
                case LEFT:
                    contentEl.style.right = '';
                    contentEl.style.left = pad4 + px;
                    break;
                case CENTER:
                    var ccc = contentEl.clientWidth;
                    cc = wW / 2 - ccc / 2;
                    contentEl.style.right = '';
                    contentEl.style.left = cc + 'px';
                    break;
            }
            break;
        case "ImageView":
            let pc = p.corners;
            if (pc != null) {
                contentEl = el.getElementsByTagName("img")[0];
                let stR = (parseInt(pc.lt) * MEASURE) + "px " + (parseInt(pc.tr) * MEASURE) + "px " + (parseInt(pc.rb) * MEASURE) + "px " 
                        + (parseInt(pc.bl) * MEASURE) + "px";
                contentEl.style.borderRadius = stR;
            }
            break;
        case "CardView":
            let radC = p.radiusCard;
            if (radC != null) {
                el.style.borderRadius = (parseInt(radC) * MEASURE) + px;
            }

            let elev = p.elevCardShadow;
            if (elev != null && elev > 0) {
                el.style.boxShadow = "0px 0px 5px " + elev + "px #eee";
            } else {
                el.style.boxShadow = "";
            }
            break;
        default:

            break;
    }
    
    el.style.id = p.id;

    setBackgoundEl(el, p);
    let parentW = el.parentElement;
    if (parentW != null && parentW.android != null && parentW.android.height == WRAP) {
        parentW.style.height = maxChildHeight(parentW) + px;
    }
    if (parentW != null && parentW.android != null && parentW.android.width == WRAP) {
        parentW.style.width = maxChildWidth(parentW) + px;
    }
    if (p.visibility != null && ! p.visibility) {
        el.oldDisplay = el.style.display;
        el.style.display = "none";
    } 
    else {
        if (p.viewId != null && p.viewId != "" && parentW != null && parentW.android != null) {
            let parCh = parentW.android.children;
            if (parCh != null && parCh.length > 0) {
                let idEl = p.viewId;
                let ik = parCh.length;
                for (let i = 0; i < ik; i++) {
                    let pCh = parCh[i];
                    if (pCh == p) {
                        break;
                    }
                    if (pCh.above == idEl || pCh.below == idEl || pCh.toRightOf == idEl || pCh.toLeftOf == idEl) {
                        viewComponElem(pCh.viewElement);
                    }
                }
            }
        }

        if (parentW != null && parentW.android != null) {
            
            if (p.width == WRAP && parentW.android.width == WRAP) {
                viewComponElem(parentW);
            }
            if (p.height == WRAP && parentW.android.height == WRAP) {
                viewComponElem(parentW);
            }
        }

    }

}

function setBackgoundEl(el, p) {
    if (p.background != null) {
        if ( p.background == 100000) {
            if (p.src != null && p.src != "") {
                el.style.backgroundImage = "url('" + p.src + "')";
            } else {
                el.style.backgroundImage = "";
            }
        } else {
            if (p.background > 999) {
                if (el.style.backgroundColor.length > 0) {
                    el.style.backgroundColor = "";
                }
                if (p.background > 1999) {      // Selector

                } else {        // Drawable
                    if (p.background == 1999) {         // new Drawable
                        setDrawableEl(el, tempDrawable);
                    } else {
                        setDrawableEl(el, JSON.parse(findDrawableByIndex(p.background)));
                    }
                }
            } else {
                clearBackgroundDraw(el);
                el.style.backgroundColor = findColorByIndex(p.background);
            }
        }
    } else {
        clearBackgroundDraw(el);
        el.style.backgroundImage = "";
        el.style.backgroundColor = "";
    }
}

function maxChildWidth(el) {
    let child = el.children;
    ik = child.length;
    let elem;
    let maxR = 0;
    let minR = 1000000;
    let elL, elR, elPad, elTt;

    for (let i = 0; i < ik; i++) {
        elem = child[i];
        if (elem.android == null) {
            continue;
        }
        rectEl = elem.getBoundingClientRect();
        
        elL = elem.style.marginLeft;

        elTt = 0;
        if (elL != null && elL != "") {
            elTt = parseInt(elL);
        }
        let tt = rectEl.left - elTt;
        if (tt < minR) {
            minR = tt;
        }

        elR = elem.style.marginRight;
        elPad = 0;
        if (elR != null && elR != "") {
            elPad = parseInt(elR);
        }
        let bb = rectEl.right + elPad;
        if (bb > maxR) {
            maxR = bb;
        }
    }
    
    elL = el.style.paddingLeft;
    elTt = 0;
    if (elL != null && elL != "") {
        elTt = parseInt(elL);
    }
    
    elR = el.style.paddingRight;
    elPad = 0;
    if (elR != null && elR != "") {
        elPad = parseInt(elR);
    }
//    return maxR - minR + (elPad + elTt) * MEASURE;
    return maxR - minR;
}

function maxChildHeight(el) {
    let child = el.children;
    ik = child.length;
    let elem;
    let maxB = 0;
    let minB = 1000000;
    let elT, elB, elPad, elTt;
//console.log("maxChildHeight maxChildHeight ++++++  IK="+ik+" VIEW_ID="+el.android.viewId+"<<");
    for (let i = 0; i < ik; i++) {
        elem = child[i];
        if (elem.android == null) {
            continue;
        }
        rectEl = elem.getBoundingClientRect();
//console.log("IDID="+elem.android.viewId+"<< HHH="+elem.android.width+" TTT="+rectEl.top+" BBB="+rectEl.bottom);
        elT = elem.style.marginTop;

        elTt = 0;
        if (elT != null && elT != "") {
            elTt = parseInt(elT);
        }
        let tt = rectEl.top - elTt;
        if (tt < minB) {
            minB = tt;
        }
        
        elB = elem.style.marginBottom;
        elPad = 0;
        if (elB != null && elB != "") {
            elPad = parseInt(elB);
        }
        let bb = rectEl.bottom + elPad;
        if (bb > maxB) {
            maxB = bb;
        }
    }
    
    elT = el.style.paddingTop;
    elTt = 0;
    if (elT != null && elT != "") {
        elTt = parseInt(elT);
    }
    
    elB = el.style.paddingBottom;
    elPad = 0;
    if (elB != null && elB != "") {
        elPad = parseInt(elB);
    }
//console.log("maxChildHeight maxChildHeight ------------");
//console.log("----el.android.viewId="+el.android.viewId+"<<  HHHH="+(maxB - minB));
    return maxB - minB;
}

function standartHeightEditText(ts) {
    var tt = parseInt(ts);
    return tt + padTopEditText(tt) + 10;
}

function padTopEditText(ts) {
    return parseInt((ts - 10) * 0.32 + 12.8);
}

function findDimenByName(name) {
    var ik = listDimens.length;
    var result = "0";
    for (var i = 0; i < ik; i++) {
        if (name == listDimens[i].itemName) {
            result = listDimens[i].itemValue;
            break;
        }
    }
    return result;
}