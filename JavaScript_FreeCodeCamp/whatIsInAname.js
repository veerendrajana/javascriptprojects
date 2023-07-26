function whatIsInAName(collection, source) {
    // store the source keys in a variable;
    const sourcekeys = Object.keys(source);
    //console.log(sourcekeys);
    const sourcelength = sourcekeys.length;

    const result = collection.filter(function(item){
        for(let i = 0; i < sourcelength; i++){
            if(item[sourcekeys[i]] !== source[sourcekeys[i]]){
                return false;
            }
        }
        return true;
    });

    return result;
    
}
const firstresult = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
const secondresult = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
const thirdresullt = whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3});
//console.log(result);

console.log(firstresult);
console.log(secondresult);
console.log(thirdresullt);