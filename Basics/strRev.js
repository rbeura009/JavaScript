function strReverse(str){
    let reverseStr="";
    for (let i =str.length-1;i>=0;i--){
      reverseStr=reverseStr+str[i];
    }
    return reverseStr;
}

const newString=console.log(strReverse("hii"))