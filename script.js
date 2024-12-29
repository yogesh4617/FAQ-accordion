let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let btnclose = function(excludeBox, excludeButton) {

    let boxes = ["innerbox1", "innerbox2", "innerbox3", "innerbox4"];
    let buttons = [btn1, btn2, btn3, btn4];

    boxes.forEach((box, index) => {
        if (box !== excludeBox) {
            document.getElementById(box).style.display = "none";
            buttons[index].style.backgroundImage = 'url("./assets/images/icon-plus.svg")';
        }
    });

};

btn1.addEventListener("click", () => {

    let innerbox = document.getElementById("innerbox1");
    btnclose("innerbox1", btn1);

    if (innerbox.style.display === "none" || innerbox.style.display === "") {
        innerbox.style.display = "block";
        btn1.style.backgroundImage = 'url("./assets/images/icon-minus.svg")';
    }
     else {
        innerbox.style.display = "none";
        btn1.style.backgroundImage = 'url("./assets/images/icon-plus.svg")';
    }

});

btn2.addEventListener("click", () => {

    let innerbox = document.getElementById("innerbox2");
    btnclose("innerbox2", btn2);

    if (innerbox.style.display === "none" || innerbox.style.display === "") {
        innerbox.style.display = "block";
        btn2.style.backgroundImage = 'url("./assets/images/icon-minus.svg")';
    }
     else {
        innerbox.style.display = "none";
        btn2.style.backgroundImage = 'url("./assets/images/icon-plus.svg")';
    }

});

btn3.addEventListener("click", () => {

    let innerbox = document.getElementById("innerbox3");
    btnclose("innerbox3", btn3);
    
    if (innerbox.style.display === "none" || innerbox.style.display === "") {
        innerbox.style.display = "block";
        btn3.style.backgroundImage = 'url("./assets/images/icon-minus.svg")';
    } 
    else {
        innerbox.style.display = "none";
        btn3.style.backgroundImage = 'url("./assets/images/icon-plus.svg")';
    }

});

btn4.addEventListener("click", () => {
  
    let innerbox = document.getElementById("innerbox4");
    btnclose("innerbox4", btn4);

    if (innerbox.style.display === "none" || innerbox.style.display === "") {
        innerbox.style.display = "block";
        btn4.style.backgroundImage = 'url("./assets/images/icon-minus.svg")';
    } 
    else {
        innerbox.style.display = "none";
        btn4.style.backgroundImage = 'url("./assets/images/icon-plus.svg")';
    }

}); 
