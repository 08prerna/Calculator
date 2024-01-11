let currentValue = document.getElementById("output-value")
let previousValue = document.getElementById("history-value")
let buttons=document.querySelectorAll("button")

let result=""
let arr=Array.from(buttons)
arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target.innerHTML)
        if(e.target.innerHTML=="="){
            previousValue.innerHTML=result
            result="="+eval(result)
            currentValue.innerHTML=result;
        }
        else if(e.target.innerHTML=="AC"){
            result=""
            currentValue.innerHTML=result
            previousValue.innerHTML=result
        }
        else if(e.target.innerHTML=="DEL"){
            result=result.slice(0,-1);
            currentValue.innerHTML=result;
        }
        else{
            result+=e.target.innerHTML
            currentValue.innerHTML=result

        }
    })
})
