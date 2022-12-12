function isPalindrome() {
    var inputString = "";
    let inputs = document.querySelectorAll(".char-input");
    for (let value of inputs) {
        inputString += value.value;
    }
    let charArray = inputString.toLowerCase().replace(/\s/g, "").split('');
    return charArray.join("") == charArray.reverse().join("");
}

function createInput() {

    let charDiv = document.createElement("div")
    charDiv.classList.add("char-div")

    let charInputElement = document.createElement("input");
    charInputElement.classList.add("char-input");
    charInputElement.maxLength = 1;
    charInputElement.type = "text";
    charInputElement.addEventListener("keypress", (event) => {
        event.preventDefault();
        if (/[a-zA-Z\s]/i.test(event.key)) {
            event.target.value = event.key;
            document.getElementById("target-div").innerHTML = `Unesena rijec ${isPalindrome() ? "je" : "nije"} palindrom!`;
            document.getElementById("target-div").style.background = isPalindrome() ? 'rgb(0, 255, 0)' : 'rgb(255,0,0)';
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Wrong input!',
                footer: "Only alphanumeric characters are allowed"
            })
        }
    })

    let btn = document.createElement('button');
    btn.classList.add('btn', 'cross', 'fas', 'fa-times');
    btn.addEventListener("click", (e) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure you want to delete?',
            showCancelButton: true,
            confirmButtonText: "Yes"
        }).then((input) => {
            if (input.isConfirmed) {
                console.log(e.target.parentNode.remove());
            }
            document.querySelector('.char-input').dispatchEvent(new KeyboardEvent('keypress'));
        })
    })

    charDiv.append(charInputElement);
    charDiv.append(btn);

    return charDiv;
}

let btn = document.createElement("button");
btn.id = "plus-btn";
btn.className = "btn";
btn.innerHTML = "+";
btn.addEventListener('click', (e) => {
    document.querySelector(".char-container").insertBefore(createInput(), e.target);
})

function generateSquares(num) {
    let target = document.querySelector('.char-container');;
    for (let i = 0; i < num[0]; i++) {
        target.appendChild(createInput());
    }
    target.appendChild(btn);
}
(function () {
    Swal.fire({
        title: 'Enter character number',
        html:
            '<input type="number" id="swal-input1" name="" class="swal2-input" min="0"></br>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
            ]
        }
    }).then((input) => {
        if (input.isConfirmed) {
            generateSquares(input.value);
        }
    })
})();