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
var t15=document.getElementById("t15");
var t16=document.getElementById("t16");
var t17=document.getElementById("t17");
var t18=document.getElementById("t18");

// import { powerFlag } from './main'

function calculate(){
    if(t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || t4.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value==""|| t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value==""  || t13.querySelector("input").value==""){
        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        document.querySelector("#check-button").disabled = false
        t7.querySelector("input").value=((2*9.81*0.022*(t3.querySelector("input").value))/(t6.querySelector("input").value)**2).toFixed(4);
        t14.querySelector("input").value=((2*9.81*0.016*(t10.querySelector("input").value))/(t13.querySelector("input").value)**2).toFixed(3);
    }}
function checkYourResult(){
    let flag=true;
    if(t2.querySelector("input").value != 0.000380182){
        t2.querySelector("input").style.color = "red"
        flag=false;
    }
    if(t3.querySelector("input").value!=0.068){
        t3.querySelector("input").style.color="red"
        flag=false
    }      
    if(t4.querySelector("input").value!=10.05){
        t4.querySelector("input").style.color="red"
        flag=false
    }      
    if(t5.querySelector("input").value!=0.0000383085){
        t5.querySelector("input").style.color = "red"
        flag=false
    }  
    if(t6.querySelector("input").value!=1.008){
        t6.querySelector("input").style.color = "red"
        flag=false
    }
if(t7.querySelector("input").value != 0.0289){
    t7.querySelector("input").style.color = "red"
    flag= false
}

if(t15.querySelector("input").value != 14686){
    t15.querySelector("input").style.color = "red"
    flag= false
}

if(t16.querySelector("input").value != 'Turbulent'){
    t16.querySelector("input").style.color = "red"
    flag= false
}

    if(t9.querySelector("input").value != 0.000201088){
        t9.querySelector("input").style.color = "red"
        flag= false
    }     
    if(t10.querySelector("input").value!=0.303){
        t10.querySelector("input").style.color="red"
        flag=false
    }        
    if(t11.querySelector("input").value!=12.3){
        t11.querySelector("input").style.color="red"
        flag=false
    }
    if(t12.querySelector("input").value != 0.0000313008){
       t12.querySelector("input").style.color = "red"
        flag= false
    }

    if(t13.querySelector("input").value != 1.557){
        t13.querySelector("input").style.color = "red"
        flag= false
    }    
    

    if(t14.querySelector("input").value != 0.039){
        t14.querySelector("input").style.color = "red"
        flag= false
    }  
    
    if(t17.querySelector("input").value != 16496){
    t17.querySelector("input").style.color = "red"
    flag= false
}

if(t18.querySelector("input").value != 'Turbulent'){
    t18.querySelector("input").style.color = "red"
    flag= false
}


console.log(flag, 'flag')
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

function exportToExcel() {
    var wb = XLSX.utils.book_new();

    /* Observation Table */
    var observationTable = document.querySelector('.observationTable');
    var observationSheetData = [];
    var observationRows = observationTable.querySelectorAll('tr');
    observationRows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        observationSheetData.push(rowData);
    });
    var observationSheet = XLSX.utils.aoa_to_sheet(observationSheetData);
    XLSX.utils.book_append_sheet(wb, observationSheet, "Observation Table");

    

    /* Save workbook to file */
    XLSX.writeFile(wb, "table_data.xlsx");
}