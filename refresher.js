function findItemByKeyValue(items, key, value){

    return items.find(item => item[key] === value);
}

console.log(findItemByKeyValue([{name:'champ'}, {}, {name:'Derek'}], 'name', 'champ'));

function removeItemByKeyValue(items, key, value){

    return items.filter(item => item[key] !== value);

    items.removeItem();

}

or




console.log(removeItemByKeyValue([{name:'champ'}, {}, {name:'Derek'}], 'name', 'champ'));
