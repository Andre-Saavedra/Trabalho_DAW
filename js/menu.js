var menu_icon = document.getElementById("menu");
var menu_links = document.getElementById("dropdown");




menu_icon.onclick = () => {
    menu_links.setAttribute("style", "display:flex;");
};
