

document.getElementById("addy").addEventListener("click",()=>{
    let value1=document.getElementById("inp1").value;
    value1=Number(value1)
    let value2=document.getElementById("inp2").value;
    value2=Number(value2)
    let result=document.getElementById("abox")
    result.innerHTML=Number(value1+value2);
    console.log(result.innerHTML)
    
})


document.getElementById("mully").addEventListener("click",()=>{
    let value1=document.getElementById("inp1").value;
    value1=Number(value1)
    let value2=document.getElementById("inp2").value;
    value2=Number(value2)
    let result=document.getElementById("abox")
    result.innerHTML=Number(value1*value2);
    console.log(result.innerHTML)
})

document.getElementById("divy").addEventListener("click",()=>{
    let value1=document.getElementById("inp1").value;
    value1=Number(value1)
    let value2=document.getElementById("inp2").value;
    value2=Number(value2)
    let result=document.getElementById("abox")
    result.innerHTML=Number(value1/value2);
 
    
   

})

document.getElementById("suby").addEventListener("click",()=>{
    let value1=document.getElementById("inp1").value;
    value1=Number(value1)
    let value2=document.getElementById("inp2").value;
    value2=Number(value2)
    let result=document.getElementById("abox")
    value1>value2?result.innerHTML=Number(value1-value2):result.innerHTML=Number(value2-value1)
    
    
})

document.getElementById("clry").addEventListener("click",()=>{
    document.getElementById("inp1").value="";
    document.getElementById("inp2").value=""
})

