function outer(){
    let num = 10; 
    return function(){
        console.log(num);
    }
}

outer()();