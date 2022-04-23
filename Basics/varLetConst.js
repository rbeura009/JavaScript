var johnWeight =92;
var johnHeight = 1.95;
var johnBMI = johnWeight/(johnHeight*johnHeight);

var markWeight = 78;
var markHeight = 1.69;
var markBMI = markWeight/(markHeight*markHeight);

let markHigherBMI = markBMI>johnBMI;

let diffBMI= johnBMI-markBMI;
console.log(diffBMI);

if(markHigherBMI){

    console.log(`mark BMI ${markBMI} is more`);
}
else
{
    console.log(`john BMI ${johnBMI} is more`)
}