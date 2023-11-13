// import { powerFlag } from "../../../experiment/simulation/js/main";

var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t9=document.getElementById("t9");
var t10=document.getElementById("t10");
var t11=document.getElementById("t11");
var t12=document.getElementById("t12");
var t13=document.getElementById("t13");
var t14=document.getElementById("t14");

// import { powerFlag } from './main'

function calculate(){
    if(t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || t4.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value==""|| t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value==""  || t13.querySelector("input").value==""){
        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        document.querySelector("#check-button").disabled = false
        t7.querySelector("input").value=((2*9.81*0.022*(t3.querySelector("input").value))/(t6.querySelector("input").value)**2).toFixed(4);
        t14.querySelector("input").value=((2*9.81*0.016*(t10.querySelector("input").value))/(t13.querySelector("input").value)**2).toFixed(4);
    }}
function checkYourResult(){
    let flag=true;
    if(t2.querySelector("input").value >0.0003562
    && t2.querySelector("input").value<0.0004038  ){
        t2.querySelector("input").style.color = "black"
        flag= true
    }else{
        t2.querySelector("input").style.color = "red"
        flag= false
    }
    if(t3.querySelector("input").value!=0.068){
        t3.querySelector("input").style.color="red"
        flag=false
    }      
    if(t4.querySelector("input").value!=10.05){
        t4.querySelector("input").style.color="red"
        flag=false
    }      
    if(t5.querySelector("input").value >3.7917
    && t5.querySelector("input").value<3.8683  ){
        t5.querySelector("input").style.color = "black"
        flag= true
    }else{
        t5.querySelector("input").style.color = "red"
        flag= false
    }    
    if(t6.querySelector("input").value >0.9979
    && t6.querySelector("input").value<1.01808 ){
        t6.querySelector("input").style.color = "black"
        flag= true
    }else{
        t6.querySelector("input").style.color = "red"
        flag= false
    }
if(t7.querySelector("input").value >0.028611
&& t7.querySelector("input").value<0.029189 ){
    t7.querySelector("input").style.color = "black"
    flag= true
}else{
    t7.querySelector("input").style.color = "red"
    flag= false
}    
    if(t9.querySelector("input").value >0.000198
    && t9.querySelector("input").value<0.000202 ){
        t9.querySelector("input").style.color = "black"
        flag= true
    }else{
        t9.querySelector("input").style.color = "red"
        flag= false
    }        
    if(t10.querySelector("input").value!=0.0303){
        t10.querySelector("input").style.color="red"
        flag=false
    }        
    if(t11.querySelector("input").value!=12.3){
        t11.querySelector("input").style.color="red"
        flag=false
    }
    if(t12.querySelector("input").value >3.0987
    && t12.querySelector("input").value<3.1613 ){
        t12.querySelector("input").style.color = "black"
        flag= true
    }else{
        t12.querySelector("input").style.color = "red"
        flag= false
    }

    if(t13.querySelector("input").value >1.54143
    && t13.querySelector("input").value<1.57257 ){
        t13.querySelector("input").style.color = "black"
        flag= true
    }else{
        t13.querySelector("input").style.color = "red"
        flag= false
    }      
    

    if(t14.querySelector("input").value >0.00389
    && t14.querySelector("input").value<0.00404 ){
        t14.querySelector("input").style.color = "black"
        flag= true
    }else{
        t14.querySelector("input").style.color = "red"
        flag= false
    }     
    


    if(flag){
    
        for (let i = 0; i < 5; i++) {
            document.querySelector(".result-table").style.display = "none"
            confetti();
            }
            // powerFlag=true
            // powerFlag
            window.appData = window.appData || {};
            window.appData.powerFlag=true
        alert("Congratulations! You have successfully completed the experiment.");
    }else{
        document.querySelector(".result-table").style.display = "flex"
    }
}