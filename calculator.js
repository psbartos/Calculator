var clear = $('.clear'),
    equal = $('.equal'),
    display = $('.display-input');

$('.num, .method').on('click', function (e) {
var dptext = display.text(),
    dpSplit = display.text().split('')[0],
    dpSplit2 = display.text().split('')[1],
    dpSplice = display.text(display.text().split('').splice(0, 1)),
    dpSplice2 = display.text(display.text().split('').splice(0, 2));

     switch (dpSplit) {
         case "/":
         case "*":
         case ".":
         case "+":
            dpSplice;
            display.text(e.target.innerHTML);
            break;
          default:
             if (dpSplit === "0" && dpSplit2 === "0") {
                 dpSplice2;
                 display.text(e.target.innerHTML);
             } else if (dpSplit === "0" && dpSplit2 === ".") {
                 display.text(dptext + e.target.innerHTML)
             } else if (dpSplit === "0" && dpSplit2 >= "0") {
                 dpSplice;
                 display.text(e.target.innerHTML);
             } else display.text(dptext + e.target.innerHTML);
            break;
        };
    });

    clear.on('click', function () {
        display.text("");
    })

    equal.on('click', function () {
        display.text(eval(display.text()))

        if (display.text() === "Infinity") {
            display.text("ERROR!")
            throw "You can't divide by zero!"
        } else if (display.text() === NaN)
            display.text("ERROR!")
            throw "Displayed value is not a number!"
    });