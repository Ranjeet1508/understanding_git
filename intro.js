var x = 4;
var y = "";
for(var i = 1; i<=x*x; i++){
    if(i%x==0){
        y += i + "\n";
    }
    else{
        y += i + " "
    }
}
console.log(y);