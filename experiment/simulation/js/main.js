//Your JavaScript goes in here
var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var pipeSelection = document.querySelector("#pipeSelect")
var svg=document.getElementById("Layer_1");
var pipeSelectionText = document.getElementById("pipeSelectionText");
var manometerText = document.getElementById("manometer-text")
var count=0
let powerFlag=true;

// export { powerFlag };
var w2 = document.getElementById("Water_3")
var w3 = document.getElementById("Water_4")
var W2 = document.getElementById("Water_3_00000139995959920278110170000008624891076724554114_")
var W3 = document.getElementById("Water_4_00000149378642199363456520000006717561428352899975_")
var w4 = document.getElementById("Water_5")
var W4 = document.getElementById("Water_5_00000093136443619758743250000003865031603605405602_")
var w5 = document.getElementById("Water_5_00000062907981060019551920000004634209684482722736_")
var W5 = document.getElementById("Water_5_00000163785673980995530440000002069174802288365696_")
var w6 = document.getElementById("Manometer_Water_Right_00000080197925184150286820000005080878160067944331_")
var w7 = document.getElementById("Manometer_Water_Right")
var w8 = document.getElementById("Water_6")
var W8 = document.getElementById("Water_6_00000037681608339211205360000018162764288620513197_")
var w9 = document.getElementById("Water_7_00000026160027622340798420000012759389283181320354_")
var W9 = document.getElementById("Water_7_00000095297791783075268460000002251397007410733194_")
var w10 = document.getElementById("Water_8")
var w11 = document.getElementById("Water_9")

var tube_r1 = document.getElementById("tube-right-1")
var tube_r2 = document.getElementById("tube-right-2")
var tube_l1 = document.getElementById("tube-left-1")
var tube_l2 = document.getElementById("tube-left-2")

var waterTankFront = document.getElementById("Tank_Water_Front")
var waterTankBase = document.getElementById("Water_Tank_Base")
var waterTankBack = document.getElementById("Tank_Water_Back");
var waterTankLeft = document.getElementById("Tank_Water_Left");

let shouldStop=false;

var arrowRect = document.getElementById("arrow-rect")
var arrowPol = document.getElementById("arrow-pol")
var timerSec = document.getElementById("timer-sec")
var timerMS = document.getElementById("timer-ms")

window.appData = window.appData || {};
window.appData.powerFlag = false;

function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1

        waterFlow3()
    }else{
        if(!window.appData.powerFlag){
            alert("Please complete the experiment to turn power off!");
            count=1
        }else{
            location.reload()
        }
    }
}

// export { count };
function waterFlow3(){
    w2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "340");
    animateElement.setAttribute("dur", "5s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    animateElement.setAttribute("values", "0;340");
    animateElement.setAttribute("keyTimes", "0;1");
    animateElement.setAttribute("calcMode", "spline");
    animateElement.setAttribute("keySplines", "0.42 0 0.58 1");

    w2.appendChild(animateElement)

    animateElement.beginElement();

    setTimeout(function(){
        waterFlow4()
        waterFlow5()
    },4000);
}


function waterFlow4(){


    w3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "77.5");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    w3.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "1013.5");
    animateX.setAttribute("to", "936");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w3.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();
    
}

function waterFlow5(){
    W2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "87.6");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    W2.appendChild(animateElement)

    animateElement.beginElement();

    setTimeout(function(){
        waterFlow6()
    },1000);
}

function waterFlow6(){


    W3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "77.5");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    W3.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "1013.5");
    animateX.setAttribute("to", "936");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    W3.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Choose the pipe number."
        pipeSelection.disabled = false
      }, 1500);
    
}


function waterFlow7(){
    w4.setAttribute("opacity","1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "79");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("fill","freeze");

    w4.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "936.9");
    animateX.setAttribute("to", "857.9");
    animateX.setAttribute("dur", "2s");
    animateX.setAttribute("fill","freeze");

    w4.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        
        waterFlow8()
        // waterFlow6()
      }, 2000);
    
}

function waterFLOW7(){
    W4.setAttribute("opacity","1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "79");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("fill","freeze");

    W4.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "936.9");
    animateX.setAttribute("to", "857.9");
    animateX.setAttribute("dur", "2s");
    animateX.setAttribute("fill","freeze");

    W4.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFLOW8()
      }, 2000);
    
}

function waterFlow8(){
    w5.setAttribute("opacity","1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "350.9");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("fill","freeze");

    w5.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "828.1");
    animateX.setAttribute("to", "477.2");
    animateX.setAttribute("dur", "2s");
    animateX.setAttribute("fill","freeze");

    w5.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlow9()
      }, 50);
    setTimeout(function() {
        waterFlow10()
      }, 1700);
    setTimeout(function() {
        waterFlow11()
      }, 2000);
}

function waterFLOW8(){
    W5.setAttribute("opacity","1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "350.9");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("fill","freeze");

    W5.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "828.1");
    animateX.setAttribute("to", "477.2");
    animateX.setAttribute("dur", "2s");
    animateX.setAttribute("fill","freeze");

    W5.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        
        waterFlow9()
      }, 50);
    setTimeout(function() {
        waterFlow10()
      }, 1700);
    setTimeout(function() {
        waterFLOW11()
      }, 2000);
}


function waterFlow9(){


    //manometer water right
    var currentHeight = parseFloat(w6.getAttribute("height"))
    if (currentHeight < 110) {
        currentHeight += 3;
        w6.setAttribute("height", currentHeight);
        setTimeout(waterFlow9, 50);
    }
}
    
//     //manometer left water
function waterFlow10(){
    var currentHeight = parseFloat(w7.getAttribute("height"))
    if (currentHeight < 84.4) {
        currentHeight += 3;
        w7.setAttribute("height", currentHeight);
        setTimeout(waterFlow10, 50); 
    }
}

function waterFlow11(){
    w8.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "170.2");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("fill","freeze");

    w8.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "454.1");
    animateX.setAttribute("to", "283.9");
    animateX.setAttribute("dur", "2s");
    animateX.setAttribute("fill","freeze");

    w8.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlow12()
      }, 2000);

}

function waterFLOW11(){
    W8.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "170.2");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("fill","freeze");

    W8.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "454.1");
    animateX.setAttribute("to", "289.4");
    animateX.setAttribute("dur", "2s");
    animateX.setAttribute("fill","freeze");

    W8.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFLOW12()
      }, 2000);

}

function waterFlow12(){
    var currentHeight = parseFloat(w9.getAttribute("height"))
    
    if (currentHeight < 309.8) {
        currentHeight += 3;
        w9.setAttribute("height", currentHeight);
        setTimeout(waterFlow12, 25); 
    }
    setTimeout(function() {
        waterTankBase.setAttribute("opacity","1")
        waterFlow13()
      }, 2500);
}

function waterFLOW12(){
    var currentHeight = parseFloat(W9.getAttribute("height"))
    
    if (currentHeight < 365.2) {
        currentHeight += 3;
        W9.setAttribute("height", currentHeight);
        setTimeout(waterFLOW12, 25); 
    }
    setTimeout(function() {
        waterTankBase.setAttribute("opacity","1")
        waterFlow13()
      }, 3000);
}

function waterFlow13(){
    w10.style.opacity="1"
    var currentwidth = parseFloat(w10.getAttribute("width"))
    if(shouldStop){
        return;
    }else{
        if (currentwidth < 87.2) {
            currentwidth += 3;
            w10.setAttribute("width", currentwidth);
            setTimeout(waterFlow13, 100); 
        }
        setTimeout(function() {
            waterFlow14()
          }, 500);
    }
}

function waterFlow14(){
    var currentHeight = parseFloat(w11.getAttribute("height"))
    if(shouldStop){
        return;
    }else{
        if (currentHeight < 62.7) {
            currentHeight += 3;
            w11.setAttribute("height", currentHeight);
            setTimeout(waterFlow14, 100); 
        }
        setTimeout(function() {

            if(pipeSelection.value==1){
                manometerText.textContent = "0.068 m Hg"
            }
            if(pipeSelection.value==2){
                manometerText.textContent = "0.0303 m Hg"
            }

            document.getElementById("steps").innerHTML = "Take note of the manometer reading, and then close the gate valve using the close gate valve button."
            purzeButton.disabled = false;
        }, 1000);
    }
}

function fillTankFront(){

    waterTankFront.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "110");
    animateElement.setAttribute("dur","3.15s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    waterTankFront.appendChild(animateElement)
    animateElement.beginElement();

    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Take note of the current time on the timer, and select another pipe number for further readings."
        pipeSelection.disabled=false
        if(pipeSelection.value==2){
            document.getElementById("steps").innerHTML = "Take note of the current time on the timer."
        }
      }, 2500);

}   

function waterTankBackFlow(y){
    if (y > 398.1) {
        y -= 1;
        waterTankBack.setAttribute("points", `245.1,${y} 587.9,${y} 587.9,508.1 245.1,508.1 `);
        setTimeout(() => waterTankBackFlow(y), 21.5);
    }
}

function waterTankSideFlow(y1,y2){

    if (y1 > 469) {
        y1 -= 1;
        y2-=1;
        waterTankLeft.setAttribute("points", `245.2,506.9 187.2,577.5 187.2,${y1} 244.8,${y2}`);
        setTimeout(() => waterTankSideFlow(y1, y2), 21.5);
    }

}
   
let [milliseconds,seconds] = [0,0];
let int = null;
let timerRunning = true;

function timer(targetsec,targetms){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(function() {
        displayTimer(targetsec, targetms); 
    }, 10);
}


function displayTimer(targetsec,targetms){

    if(pipeSelection.value==1){
        if(timerRunning){
            milliseconds+=(10*(5/10));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        // ms=int(ms*10)
        timerSec.textContent = s;
        timerMS.textContent = parseInt(ms);
    }

    if(pipeSelection.value==2){
        if(timerRunning){
            milliseconds+=(12*(5/12));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec.textContent = s;
        timerMS.textContent = ms;
    }

    if(seconds==targetsec ){
        timerRunning = false;
        clearInterval(int);
        timerMS.textContent = targetms;
    }
}

function resetTimer() {
    clearInterval(int); 
    [milliseconds, seconds] = [0, 0]; 
    timerRunning = true; 
    timerSec.textContent = "00"; 
    timerMS.textContent = "00";
}

pipeSelection.addEventListener("change", updatePipeNumber);


function updatePipeNumber()  {
    // stopAnimation()
    shouldStop=false
    // displayArrows()
    reset()
    resetTimer()

    var selectedValue = pipeSelection.value;
    if(selectedValue == 1){
        tube_l1.setAttribute("opacity","1")
        tube_r1.setAttribute("opacity","1")
        tube_l2.setAttribute("opacity","0")
        tube_r2.setAttribute("opacity","0")
        waterFlow7()
        pipeSelection.disabled=true

    }if(selectedValue == 2){
        tube_l1.setAttribute("opacity","0")
        tube_r1.setAttribute("opacity","0")
        tube_l2.setAttribute("opacity","1")
        tube_r2.setAttribute("opacity","1")
        waterFLOW7()

        pipeSelection.disabled=true

    }if(selectedValue == 0){
        tube_l1.setAttribute("opacity","0")
        tube_r1.setAttribute("opacity","0")
        tube_l2.setAttribute("opacity","0")
        tube_r2.setAttribute("opacity","0")
        document.getElementById("steps").innerHTML = "Select the value of Pipe Number other than None!"
        
    }
    
    pipeSelectionText.textContent = selectedValue;
}

function reset(){
    w4.setAttribute("opacity","0")
    w5.setAttribute("opacity","0")
    w6.setAttribute("height","0")
    w7.setAttribute("height","0")
    w9.setAttribute("height","0")
    w8.setAttribute("opacity","0")
    
    W4.setAttribute("opacity","0")
    W5.setAttribute("opacity","0")
    W9.setAttribute("height","0")
    W8.setAttribute("opacity","0")
    
    arrowRect.setAttribute("y","577.7")
    arrowPol.setAttribute("points","143.5,573.3 151.6,579.3 143.5,585.3")
    waterTankBack.setAttribute("points","245.1,508.1 587.9,508.1 587.9,508.1 245.1,508.1")
    waterTankFront.setAttribute("opacity","0")
    waterTankLeft.setAttribute("points","245.2,506.9 187.2,577.5 187.2,577.5 244.8,506.9")
    waterTankBase.setAttribute("opacity","0")

    manometerText.textContent = "0 m Hg"
}

function purzeAction(){

    shouldStop=true
    
    w10.setAttribute("width","0")
    w11.setAttribute("height","0")

    if(pipeSelection.value==1){
        timer(10,"05")
    }
    if(pipeSelection.value==2){
        timer(12,"03")
    }

    fillTankFront()
    waterTankBackFlow(508.1)
    waterTankSideFlow(577.5,506.9)
    arrowMovement()
    arrowMovement2(573.3,579.3,585.3 )

    purzeButton.disabled= true
}


function arrowMovement(){
    var currentY = parseFloat(arrowRect.getAttribute("y"))
    if (currentY > 467.7) {
        currentY -= 1;
        arrowRect.setAttribute("y", currentY);
        setTimeout(arrowMovement, 21.5); 
    }
}

function arrowMovement2(y1,y2,y3){

    if (y1 > 463.3) {
        y1 -= 1;
        y2-=1;
        y3-=1;
        arrowPol.setAttribute("points", `143.5,${y1} 151.6,${y2} 143.5,${y3} `);
        setTimeout(() => arrowMovement2(y1,y2,y3), 21.5);
    }
}