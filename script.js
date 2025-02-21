const num = document.getElementById("num");
const tof = document.getElementById("tof");
const toc = document.getElementById("toc");
const result = document.getElementById("result");

let temp;

function convert(){
    if (tof.checked){
        temp = Number(num.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toc.checked){
        temp = Number(num.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }else{
        result.textContent = "Select Unit"
    }
}