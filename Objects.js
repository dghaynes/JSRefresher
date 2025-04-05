class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(other){
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other){
        return new Vec(this.x - other.x, this.y - other.y);
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

//Vector math
console.log(new Vec(1,2).plus(new Vec(2,3)));

// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));

//compute length of the vector
console.log(new Vec(3, 4).length);


class Group {
    constructor(){
        this.group = [];
    }

    add(value){
        if(!this.group.includes(value)){
            this.group.push(value);
        }
    }

    delete(value){
        if(this.group.includes(value)){
            this.group = this.group.filter((item)=> item !== value);
        }
    }

    has(value){
        return this.group.includes(value);
    }

    //methods that have static written before their name are stored on the constructor.
    static from(iterable){
        const group = new Group();
        for(let item of iterable){
            group.add(item);
        }
        return group;
    }
}

console.log(Group.from([10, 20]));
// → Group {members: [10, 20]}
let group = new Group();
group.add(10);
group.add(20);
console.log(group.has(10));

class GroupIterator {
    constructor(group){
        this.group = group;
        this.index = 0;
    }

    next(){
        if(this.index === this.group.group.length){
            return {done: true};
        }
        const value = this.group.group[this.index];
        this.index++;
        return {value, done: false};
    }
}

//make the Group class iterable after the fact
Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])){
    console.log(value);
};


