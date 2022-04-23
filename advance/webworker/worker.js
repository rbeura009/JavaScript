let result;

function longFunction(){
    let sum = 0;let i;
    for(i=1; i<=5000000000;i++){
        sum = sum+i;
    }
   result =  `sum of ${i} numbers is ${sum}`
}

postMessage(result);

