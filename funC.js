
function capitalize(str){
    return str.slice(0,1).toUpperCase() + str.slice(1);
}

// the module pattern - IIFEs. wrap the factory function in () and invoke them
const calculator = (function(){
    const add = (a,b) => a+b;
    const subtract = (a,b) => a-b;
    const divide = (a,b) => a/b;
    const multiply = (a,b) => a*b;

    return {add, subtract, divide, multiply};
})();

export {capitalize, calculator};