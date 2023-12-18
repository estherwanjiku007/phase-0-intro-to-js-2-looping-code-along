function writeCards(theNames,message_String){
 let anArray=[]   
for (let i=0;i<theNames.length;i++){
let myMessage=`Thank you, ${theNames[i]}, for the wonderful ${message_String} gift!`;
anArray.push(myMessage);
}
return anArray;
}
console.log(writeCards(theNames,"suprise"))
function countDown() {
    let myNumber=10;
    while (myNumber>=0){
        console.log(myNumber--);
    }
}