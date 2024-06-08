
function capitalize(str){
    return str.slice(0,1).toUpperCase() + str.slice(1);
}

function reverseString(str){
    return str.split("").reverse().join("");
}

// the module pattern - IIFEs. wrap the factory function in () and invoke them
const calculator = (function(){
    const add = (a,b) => a+b;
    const subtract = (a,b) => a-b;
    const divide = (a,b) => a/b;
    const multiply = (a,b) => a*b;

    return {add, subtract, divide, multiply};
})();

function caesarCipher(str, shift){
    let ciphStr = '';

    for(let i=0; i < str.length;i++){
        let letterPosition = str[i].charCodeAt();

        // Check if the character is a letter
        if( (letterPosition >=65 && letterPosition <=90) || (letterPosition >=97 && letterPosition <=122) ){
            letterPosition += shift;

            // this is for letters, x,y and z, that are extreme that are replaced a-c
            if( (letterPosition > 90 && letterPosition <= 'z') || letterPosition > 122 ){
                letterPosition -= 26;
            }
        }
        ciphStr += String.fromCharCode(letterPosition);
    }

    return ciphStr;
}


function analyzeArray(arr){
    //let avg, mini, maxi, len;

    const avg = arr.reduce( (total, currentItem) => total + currentItem,0)/arr.length;
    let mini = arr[0], maxi = arr[0];
    for(let i of arr){
        if(i <= mini) mini = i;
        if(i >= maxi) maxi = i;
    }

    return {average: avg, min: mini, max: maxi, length: arr.length};
}

export {capitalize, reverseString ,calculator, caesarCipher, analyzeArray};

