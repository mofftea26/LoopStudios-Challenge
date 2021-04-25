const hamOpen = document.querySelector("#hamopen");
const hamClose = document.querySelector("#hamclose");
const navContent = document.querySelector("#navcontent");



hamOpen.addEventListener("click", () => {
    console.log("click");
    hamOpen.classList.toggle("hide");
    hamClose.classList.toggle("hide");
    navContent.classList.toggle("nav-content");
    navContent.classList.toggle("hide");
})

hamClose.addEventListener("click", () => {
    console.log("click");
    hamOpen.classList.toggle("hide");
    hamClose.classList.toggle("hide");
    navContent.classList.toggle("hide");
    navContent.classList.toggle("nav-content");
})

