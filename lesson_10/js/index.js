// [12,43,22]=>[13,44,23]


// function that returns

const plus_1 = (arr)=> {
    const returnedArr = [];
    for (let i=0; i<arr.length; i++) {
        let value = arr[i]+1; 
        returnedArr.push(value);
    }
    return returnedArr
}

//  function that changes mutable values

const plus_1_in_place = (arr)=> {
    for (let i=0; i<arr.length; i++) {
        arr[i] = arr[i]+1; 
    }
}

// function that changes the world

const plus_1_in_console = (arr)=> {
    const loggedArr = [];
    for (let i=0; i<arr.length; i++) {
        let value = arr[i]+1; 
        loggedArr.push(value);
    }
    console.log(loggedArr)
}

// function that filters


const onlyEvens = (arr)=> {
    const filteredArr = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2===0){
            filteredArr.push(arr[i]);
        }

    }
    return filteredArr
}
