/*function gethistory(){
   return document.getElementById("history-value").innerText;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
   return document.getElementById("output-value").innerText;
}
function printoutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
    document.getElementById("output-value").innerText=getformattednum(num);
}
}
function getformattednum(num){
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;

}
function reverseformatnum(num){
    return Number(num.replace(/, /g,''));
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        alert("this is clicked"+this.id);

    });
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
       var output=reverseformatnum(getoutput());
       if(output!=NaN){//if output is a number
output=output+this.id;

printoutput(output);
       }


    });
}*/
let string="";
let buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=')
        {
            string =eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'C'){
            document.querySelector('input').value='';
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
    
});


