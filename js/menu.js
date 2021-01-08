var menu_icon = document.getElementById("menu");
var menu_links = document.getElementById("dropdown");
var menu_cancelar = document.getElementById("cancelar");




menu_icon.onclick = () => {
    //menu_links.setAttribute("style", "display:flex;");
    menu_links.setAttribute("style", "opacity:1;");
    menu_icon.setAttribute("style", "display: none;");
    menu_cancelar.setAttribute("style", "display: block;");
};

menu_cancelar.onclick = () => {
    //menu_links.setAttribute("style", "display:none;");
    menu_links.setAttribute("style", "opacity:0;");
    menu_icon.setAttribute("style", "display: block;");
    menu_cancelar.setAttribute("style", "display: none;");
};
