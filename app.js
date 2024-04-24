document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("menu");
    const button = document.getElementById("boton");
    const escape = document.getElementById("escape");

    let menuState = false;

    function quitMenu() {
        menu.classList.add("quit");
        menu.classList.remove("show");
        escape.classList.remove("show")
    }
    
    function showMenu() {
        menu.classList.add("show");
        menu.classList.remove("quit");
        escape.classList.add("show");
    }

    function toggleMenu() {
        if(menuState)
            showMenu();
        else
            quitMenu();
        menuState = !menuState;
    }

    button.addEventListener("click", toggleMenu);
    escape.addEventListener("click", quitMenu);

})