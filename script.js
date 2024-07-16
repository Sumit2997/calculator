const buttons=Array.from(document.querySelectorAll(`button`));
const input=document.querySelector(`.Input`);
const output=document.querySelector(`.Output`);
let exp="";
function answer(){
    let val=this.innerText;
    let ans=0;
    if(val==='AC'){
        exp='';
        input.innerText=``;
        output.innerText=``;
        return;
    }
    if(val==='='){
        ans=eval(exp);
    }
    else{
        exp+=val;
    }
    input.innerText=exp;
    output.innerText=ans;
    console.log(exp);
}
buttons.map((button)=>button.addEventListener("click",answer));