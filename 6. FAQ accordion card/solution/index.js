const buttons = document.querySelectorAll("button");

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        document.getElementsByClassName("question")[i].classList.toggle("bold");
        document.getElementsByClassName("answer")[i].classList.toggle("hide");
        document.getElementsByClassName("arrow-img")[i].classList.toggle("flip");
    })
})