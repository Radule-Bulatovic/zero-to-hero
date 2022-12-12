let timerIsOn = false;
let time = document.querySelector(".selected").dataset.length * 60 * 1000;
let timeDiv = document.querySelector(".time");

function setTime(msTime){
    timeDiv.innerHTML = Math.floor((time / 1000) / 60) + ":" + (time / 1000) % 60;
    document.title = `(${timeDiv.innerHTML}) TomatoTimer`;
}

(function () {
    document.querySelector(".start").addEventListener("click", () => {
        if(timerIsOn){
            Swal.fire("Timer is already running!");
            return;
        }
        timerIsOn = true;
        var timer = setInterval(() => {
            if(!(timerIsOn && time > 0)){
                console.log("STOP");
                clearInterval(timer);
                return;
            }
            time -= 1000;
            setTime(time);
        }, 1000);
    });

    document.querySelector(".stop").addEventListener("click", () => {
        timerIsOn = false;
    });

    document.querySelector(".reset").addEventListener("click", () => {
        timerIsOn = false;
        time = document.querySelector(".selected").dataset.length * 60 * 1000;
        setTime(time);
    });

    document.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", (e) => {
            if(e.target.classList.contains("selected")){
                return;
            }
            timerIsOn = false;
            document.querySelector(".selected").classList.remove("selected");
            e.target.classList += "selected";
            time = e.target.dataset.length * 60 * 1000;
            setTime(time);
        });
    });

})();