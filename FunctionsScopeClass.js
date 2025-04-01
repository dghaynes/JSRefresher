/*Topics
* Variable Scope
* Declaring Functions vs Function expressions
* Arrow Functions
* Reset Params
* */


//Example of rest params
const myFunc = (...args)=>{
    console.log(args);
};

myFunc('cat', 'dog', 'pig');

//IIFE  (Immediately invoked functions)
(function(){
    console.log('IIFE');
})();


//object itemized receipt
const logReceipt = (...args) => {

    args.forEach((item)=>{
        console.log(item.descr + ' ' + item.price);
    });

    //acc = accumulator
    let total = args.reduce((acc, item)=>{
        return acc + item.price;
    }, 0);

    console.log('Total: ' + total);
}

logReceipt(
    {descr: 'Hamburger', price: 3.99},
    {descr: 'Fries', price: 1.99},
    {descr: 'Soda', price: 0.99}
);


/*Methods
* Setting this, bind, call AND Apply*/

const teacher = {
    says: 'blah blah',
    talk(punct){
        console.log(`${this.says}${punct}`);
    }
};

const student = {
    says: 'wut'
};

//call executes functions with specified arguements
teacher.talk.call(student, '?');

//apply executes function with specified arguements as array
teacher.talk.apply(student, ['!']);

//bind returns a new function with specified arguements
const studentTalk = teacher.talk.bind(student);

studentTalk('WTF!');


//Classes we want to create multiple similar objects
class Hero{

    constructor(name, ability) {
        this.name =name;
        this.ability = ability;
    }

    useAbility(){
        console.log(`${this.name} used ${this.ability}`);
    }

}

//create instances of class
const hero1 = new Hero('Superman', 'fly');

hero1.useAbility();



