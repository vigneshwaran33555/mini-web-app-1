
function convert(){
const a=Number(document.getElementById("input").value)
const f =(a*1.8)+32
const r=document.getElementById("result")
r.innerHTML =f.toFixed(2)+"f"
}