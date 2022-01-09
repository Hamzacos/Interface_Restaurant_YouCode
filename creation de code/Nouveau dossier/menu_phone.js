const section = document.getElementById("media");
const login_1 = document.getElementById("hedding-nav");
const iconcircle = document.getElementById("icon-circle")

login_1.addEventListener("click", () => {
    section.classList.add("add");
});


iconcircle.addEventListener("click", () => {
    section.classList.remove("add");
});