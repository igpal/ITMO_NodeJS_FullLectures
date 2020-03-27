﻿class Sample {
    constructor() {
        this.value = 0;
    }
    increment() {
        this.value++;
        return this;
    }
    add(num) {
        this.value += num;
        return this;
    }
    outAlert() {
        //alert(this.value)
        return this;
    }
    getValue() {
        return this.value;
    }
}

let obj = new Sample();

let temp = obj.increment()
    .add(10)
    .increment()
    .outAlert()
    .getValue();
console.log(temp);

$(document).on("contextmenu", function(e) {
    e.preventDefault();
    //return false;
});

$('tr').filter(":odd")
    .find('td')
    .filter(':odd')
    .css({ "backgroundColor": "#eee", "border": "1px solid black" })
    .end().end().end()
    .filter(":even")
    .find('td')
    .filter(':even')
    .css({ "backgroundColor": "#eee", "border": "1px solid black" });

$('#3').click(function() {
    window.print();
    return false;
})

$('button').one('click', function() {
    $(this).text('Меня нажали');
})

$('#inputText').on('input', function(e) {
    let len = $(this).val().length;
    $('#label').text(`Осталось ${15 - len} символ(ов)`);
})

/*$('#inputText').on('change', function(e) {
    let len = $(this).val().length;
    $('#label').text(`Осталось ${15 - len} символ(ов)`);
})
*/

$('p').each(function() {
    let arr = $(this).html().split(' ');
    arr[0] = '<strong>' + arr[0] + '</strong>'
    $(this).html(arr.join(" "));
})

let $divElem = $('<div>', { id: 'test', css: { 'backgroundColor': '#eee' } }).text('dfgsdgdgdfghfdghfdghfgdhfgh');

$('body').append($divElem);



$('#1').click(function() {
    $('html').scrollTop(0);
    return false;
});
$('#2').click(function() {
    $('html').animate({ 'scrollTop': 0 }, 5000);
    return false;
});

function blink() {
    $('.blink').fadeOut(500).fadeIn(500);
}

setInterval(blink, 2000);

function blink() {
    $('.blink').slideDown(500)
        .slideUp(500);
}
setInterval(blink, 1000);

function blink() {
    $('.blink').hide(500)
        .show(500);
}
setInterval(blink, 1000);

$('.box_').on('click', function() {
    if ($(this).parent().attr("id") === "box1") {
        $(this).detach().appendTo('#box2');
    } else {
        $(this).detach().appendTo('#box1');
    }

});