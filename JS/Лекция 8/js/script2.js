document.addEventListener("DOMContentLoaded", function() {
    let presentContainer = document.getElementById("present_container");
    presentContainer.addEventListener("click", showPresent);

    let tds = document.getElementsByTagName("td");

    //tds.forEach((v) => v.addEventListener("click", calcAction));

    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", calcAction);
    }


    let shape = document.getElementById("box");
    document.addEventListener("keydown", function(e) {
        if (e.keyCode == 37) { // нажатие влево
            shape.style.left = (parseInt(shape.style.left) - 5) + "px";
        } else if (e.keyCode == 39) { // нажатие вправо
            shape.style.left = (parseInt(shape.style.left) + 5) + "px";
        } else if (e.keyCode == 40) { // нажатие вверх
            shape.style.top = (parseInt(shape.style.top) + 5) + "px";
        } else if (e.keyCode == 38) { // нажатие вниз
            shape.style.top = (parseInt(shape.style.top) - 5) + "px";
        }
    });

    function calcAction(e) {
        let type = this.innerText,
            display = document.getElementById("display");
        switch (type) {
            case 'C':
                display.value = "";
                break;
            case '=':
                display.value = eval(display.value);
                break;

            default:
                display.value += type;
                break;
        }
    }
})






function showPresent(e) {
    let clickElem = e.target,
        present = clickElem.dataset.present;

    if (present) {
        clickElem.textContent = libs()[present];
        clickElem.classList.add("present");
        this.removeEventListener("click", showPresent);
    }
}

function libs() {
    return {
        "car": "Машина",
        "book": "Самый лучший подарок",
        "dog": "Собака"
    }
}