





[{id:"1234"},{id:"ds34"}] -> ["1234","ds34"]



const arr_1 = [[1],[2],[3],[4],[5],[6],[7]];

const newArray = arr_1.map(arr => {
    const returnArray = arr.slice();    //  const cloneSheeps = sheeps.slice();                                    
    returnArray.push(1)
    return returnArray
}
)


[1,2,-4,-11,-200]->-4


//[[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1]];

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => {
   console.log("accumulator", accumulator)
   console.log("currentValue", currentValue)
   return accumulator + currentValue
  }
);

console.log(sumWithInitial);
// expected output: 10
[5,7]->35
["sfs","sffs","svvff"] -> sfssffssvvff