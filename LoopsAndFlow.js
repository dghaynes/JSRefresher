/*Loops and flow
*
* */

const makeCoffee = (isHot) => {

    if(isHot){
        return 'Coffee is hot';
    }else{
        return 'Coffee is cold';
    }

};

makeCoffee(true);

//truthy and falsy
//falsy conditions are empty strings, null, undefined, NaN, document.all 0

let someCondition = true;

if(someCondition){
    console.log('truthy');
}else{
    console.log('falsy');
}


//TERNARY OPERATOR (condition ? true : false)
//Often used as a shortcut for an if statement
const makeCoffee2 = (isHot) => {
    return isHot ? 'Coffee is hot' : 'Coffee is cold';
}

makeCoffee2(false);

//SWITCH STATEMENTS  preferred over lots of if elseif() conditions
const makeCoffee3= (isHot) => {
    switch (isHot){
        case true:
            return 'Coffee is hot';
        case false:
            return 'Coffee is cold';
        default:
            return 'Coffee is cold';
    }
}

console.log(makeCoffee3(true));


//Loops - FOR LOOPS
//for loop is used to iterate over a collection of data
const myArray = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//with CONTINUE
for(let i = 0; i < myArray.length; i++){
    if (myArray[i] !== 5) {

        console.log(myArray[i])
        continue;
    }
}

//WHILE AND DO WHILE LOOPS
let i = 0;
while(i < myArray.length){
    console.log(myArray[i]);
    i++;
}

//DO...WHiLE LOOP
let j = 0;
do{
    console.log(myArray[j]);
    j++;
}while(j < myArray.length);

//Example create a deck of cards
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const deck = [];
for(let i = 0; i < suits.length; i++){
    for(let j = 0; j < values.length; j++){
        deck.push({suit: suits[i], value: values[j]});
    }
}

console.log(deck);

//ARRAY HELPER METHODS
const logEverything = function () {
    const argArray = Array.from(arguments);
    //converts arguments to array
    argArray.forEach((arg)=>{
        console.log(arg);
    });
};

logEverything('cat', 7, 'Ralph');

//ARRAY FOREACH
const myArray2 = [1,2,3,4,5,6,7,8,9,10];
myArray2.forEach((num)=>{
    console.log(num);
});

//ARRAY FILTER
const filteredArray = myArray2.filter((num)=>{
    return num > 5;
});

console.log(filteredArray);

//ARRAY FIND
const found = myArray2.find((num)=>{
    return num > 5;
});

//ARRAY MAP
const mappedArray = myArray2.map((num)=>{
    return num * 2;
});

console.log(mappedArray);

//ARRAY JOIN
const joinedArray = myArray2.join(' ');

console.log(joinedArray);

//ARRAY REDUCE
const reducedArray = myArray2.reduce((acc, num)=>{
    return acc + num;
}, 0);

console.log(reducedArray);

//CARDS WORTH 10
const cardsWorthTen = (deck) => {

    const cards = deck.filter((card)=>{
        return ['10', 'Jack', 'Queen', 'King'].includes(card.value);
    });

    return cards;
}

console.log(cardsWorthTen(deck));

//TRY CATCH
try{
    console.log('try');
    throw new Error('error');
}catch (e){
    console.log('catch');
}finally {
    console.log('finally');
}