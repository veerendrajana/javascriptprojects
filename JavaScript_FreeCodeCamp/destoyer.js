console.log(destroyer([1,2,3,1,2,3],2,3));

function destroyer(arr){
    const length = arguments.length;
    const array = arguments[0];
    const argArray = [];
    //console.log(array);

    for(let i = 1; i < length; i++){
        argArray.push(arguments[i]);
    }

    const result = array.filter(function(item){
        return !(argArray.includes(item));
    });
    
    return result;
}