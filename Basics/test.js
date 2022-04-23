// Count number of valleys

/*
UD DDUDUU DU - 2
/\      ___  __
  \    /   \/
   \/\/

UDDDUUDU -- 2
  /\    ___  __
    \  /   \/
     \/
*/
//DUDU
/*  __    __
      \/\/
*/

function calculateValleys(inputString){
    let prevSum;
    let count = 0;
    let sum =0
    let chars = inputString.split('');

    chars.forEach(element => {
        let num; 
        if(element==='U'){
            num = 1
        }else if(element === 'D'){
            num = -1
        }
        prevSum = sum;
        sum = sum+num;

        if(prevSum && prevSum<0 && sum===0) count++;

    });

    return count; 
}

console.log(calculateValleys('DUDU'));

 
