console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    basket.push(item);
    return true;
}

console.log(`Adding apple {addItem('apple')}`);
console.log(`Adding egg {addItem('egg')}`);
console.log(`Adding pear {addItem('pear')}`);
console.log(`Adding chicken {addItem('chicken')}`);
console.log(`Adding milk {addItem('milk')}`);
console.log(basket);


function listItems() {
    for (let i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}

listItems();

function empty () {
    for (i = basket.length -1; i >= 0; i--){
        basket.pop();
    }
}
/*
empty();
console.log(basket);


function empty(){
    basket = [];
}

empty();
console.log(basket);

*/

const maxItems = 5

function ifFull(){
    if(basket.length < maxItems){
        return false;
    } else {
        return true;
    }
}
console.log(ifFull());


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
