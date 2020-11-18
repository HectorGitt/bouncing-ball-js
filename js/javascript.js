var innerdiv = document.querySelector(".in")
x = 0
y = 0
right = true
up = false

function move() {
    if (y < 550 && up == false){
        y += 1
        innerdiv.style.top = y +"px";
        if (y >= 550){
            up = true
        }
    }
    if (x < 550 && right == true){
        x += 1;
        innerdiv.style.left = x + "px";
        if (x >= 550){
            right = false;
        }
    }
    if (y <= 550 && up == true){
        y -= 1
        innerdiv.style.top = y +"px";
        if (y <= 1){
            up = false;
        }
    }

    if (x <= 550 && right == false){
        x -= 1
        innerdiv.style.left = x +"px";
        if (x <= 1){
            right = true;
        }
    }
    
}

var interval = setInterval(move, 1)




//Random Speed
x2 = 0
y2 = 0
right2 = true
up2 = false
var innerdiv2 = document.querySelector(".in2")
var speed = Math.floor(Math.random() * 10)
var speed2 = Math.floor(Math.random() * 10)
function moveB() {
    if (y2 < 550 && up2 == false){
        y2 += speed
        innerdiv2.style.top = y2 +"px";
        if (y2 >= 550){
            up2 = true
        }
    }
    if (x2 < 550 && right2 == true){
        x2 += speed2;
        innerdiv2.style.left = x2 + "px";
        if (x2 >= 550){
            right2 = false;
        }
    }
    if (y2 <= 561 && up2 == true){
        y2 -= speed
        innerdiv2.style.top = y2 +"px";
        if (y2 <= 1){
            up2 = false;
        }
    }

    if (x2 <= 561 && right2 == false){
        x2 -= speed2
        innerdiv2.style.left = x2 +"px";
        if (x2 <= 1){
            right2 = true;
        }
    }
    
}
var interval2 = setInterval(moveB,1)
