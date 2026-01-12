let count=0
let countt=document.getElementById("count")
function increment(){
    count++
document.getElementById("count").innerText=count
}

function decrement(){
    count--
document.getElementById("count").innerText=count
}

function refresh(){
    count=0
document.getElementById("count").innerText=count
}
countt.classList.add("bump")
setTimeout(()=>
countt.classList.remove("bump"),200)

