function uiMenu() {

    this.setElementUI = function(p, newEl, parent) {
        let myCompon = myComponent(p.viewId);
        showMenu(newEl, myCompon.model.menuList);
    }
    
    this.newElementUI = function(p) {
        return null;
    }
    
    this.setContent = function(p) {

    }
    
    this.viewElementUI = function(p, el) {

    }
}