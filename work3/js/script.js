//work1
let num = 1;
let total = 0;
for(i = 0; i < 10; i++){
    total = total + num;
    num = num +1;
}
console.log(total);
if(num >= 20){
   console.log("20以上");
}else if(num < 20){
    console.log("20未満");
}