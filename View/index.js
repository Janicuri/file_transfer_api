document.getElementById("snake").addEventListener("mousedown", ()=>{
fetch("/Snake").then((response)=>{


}).catch((error)=>{
    console.log(error)
})
})

document.getElementById("ball_esc").addEventListener("mousedown",async ()=>{
let data = await fetch("/Ball_Esc")
})