function myEach(collection, callback){
    const isArray = Array.isArray(collection);
    const length = isArray ? collection.length : Object.keys(collection).length
    
    for (let i = 0; i < length; i++) {
        let currentElement;
        // If it's an array 
        if (isArray) {
            currentElement = collection[i];
        } else {
            // If it's an object 
            const key = Object.keys(collection)[i];
            currentElement = collection[key];
        }
        callback(currentElement)
    }
    return collection;
}

function myMap(collection, callback){
    const isArray = Array.isArray(collection);
    const length = isArray ? collection.length : Object.keys(collection).length
    
    let newArray = [];
    for (let i = 0; i < length; i++) {
        let currentElement;
        // If it's an array 
        if (isArray) {
            currentElement = collection[i];
        } else {
            // If it's an object 
            const key = Object.keys(collection)[i];
            currentElement = collection[key];
        }
        newArray.push(callback(currentElement));
    }
    return newArray;
}


//Write a helper function to convert object into an array of object values. 
// 
const objToArr = function(collection) {
  return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myReduce(collection, callBack, acc){
    let newCollection = objToArr(collection)
    if(!acc){
    acc = newCollection[0]
    newCollection = newCollection.slice(1)
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = callBack(acc, newCollection[i], newCollection);
    }
    return acc;
}


function myFind(collection, callback){
    const isArray = Array.isArray(collection);
    const length = isArray ? collection.length : Object.keys(collection).length
    
    for (let i = 0; i < length; i++) {
        let currentElement = isArray ? i : keys[i];
        if(callback(collection[currentElement], currentElement, collection))
        return collection[currentElement]
    }
    return undefined;
}

function myFilter(collection, callback){
    const isArray = Array.isArray(collection);
    const length = isArray ? collection.length : Object.keys(collection).length
    let newArray = [];
    
    for (let i = 0; i < length; i++) {
        let currentElement = isArray ? i : keys[i];
        if(callback(collection[currentElement], currentElement, collection)) {
            newArray.push(collection[currentElement])
        }
    }
    return newArray;
}

function mySize(collection, callback){
    const isArray = Array.isArray(collection);
    const length = isArray ? collection.length : Object.keys(collection).length
    
    return length;
}

function myFirst(array, optionalValue=false){
    return (optionalValue) ? array.slice(0, optionalValue) : array[0];
}

function myLast(array, optionalValue=false){
    return (optionalValue) ? array.slice(array.length - optionalValue, array.length) : array[array.length-1];
}