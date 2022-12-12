function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        container.style.background = changeImage(id--)
        container.style['background-size'] = 'cover';
        container.style['background-position'] = 'center center';
    }
    else if (e.keyCode == '39') {
        container.style.background = changeImage(id++)
        container.style['background-size'] = 'cover';
        container.style['background-position'] = 'center center';
    }
}

function changeImage(num) {
    return `url("https://picsum.photos/id/${num}/300/200") no-repeat center center`;
}

let container = document.querySelector('.container');
let id = 100;
(function () {
    let arrows = document.querySelectorAll('.arrow');
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener("click", (e) => {
            e.stopPropagation();
            container.style.background = arrows[i].classList.contains("left") ? changeImage(id--) : changeImage(id++);
            container.style['background-size'] = 'cover';
            container.style['background-position'] = 'center center';
        })
    }

    container.addEventListener("mouseenter", () => {
        document.onkeydown = checkKey;
    })

    container.addEventListener("mouseleave", () => {
        document.onkeydown = null;
    })
    
    container.addEventListener("click", () => {
        container.classList.add('expand');
        document.querySelector(".cross").style.display = "block";
    })
    
    document.querySelector(".cross").addEventListener("click", (e) => {
        e.stopPropagation();
        document.getElementById("container").classList.remove("expand");
        document.querySelector(".cross").style.display = "none";
    })

})();