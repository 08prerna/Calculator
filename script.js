var number = document.getElementsByClassName('number');
for(let i=0;i<number.length;i++){
    number[i].addEventListener('click',function () {
        var output=numberFormatting(getOutput());
        console.log(output);
        if(output!=NaN){
            output=output+this.id;
            console.log(output);
            printOut(output);
        }
    });
}

function getOutput() {
    return document.getElementById('output-value').innerText;
}

function numberFormatting(num) {
    return Number(num.replace(/,/g, ''));
}

function printOut(num) {
    
}

















