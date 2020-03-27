function filltable_Start() {
    let row = 8;
    let column = 8;
    generateTable(row, column);

    let td = document.querySelectorAll('.game_field TABLE TR TD');
    for (let i = 0; i < td.length; i++) {
        td[i].addEventListener("click", check_change);
    }

}

function generateTable(row, column) {

    let table = '<table>';
    let a = 0;
    for (let i = 1; i <= row; i++) {

        table += '<tr>';

        for (let j = 1; j <= column; j++) {

            let data_type = get_random_type();
            table += '<td data-xy=' + String(i) + '-' + String(j) + ' data-x=' + i + ' data-y=' + j + ' data-type=' + data_type +
                ' class=' + get_class_name(data_type) + '> </td>';
            a += 1;
        }
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('table').innerHTML = table;
}

function get_random_type() {
    return Math.floor(Math.random() * (5 - 1)) + 1;
}

function get_class_name(data_type) {
    let res = "";
    switch (data_type) {
        case 1:
            res = "class1";
            break;
        case 2:
            res = "class2";
            break;
        case 3:
            res = "class3";
            break;
        case 4:
            res = "class4";
            break;
    }
    return res;
}

let first_change = true;

function check_change(e) {

    let x_target = this.dataset.x;
    let y_target = this.dataset.y;


    let kol_class = document.getElementsByClassName('class_yeloow_shadow').length;
    if (kol_class >= 2) {
        return;
    }
    //if (first_change){
    this.classList.toggle("class_yeloow_shadow");
    first_change = false;
    //}

}