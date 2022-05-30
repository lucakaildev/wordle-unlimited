const La= [];
  

const newArray = [];

for (let i = 0; i < La.length; i++) {
    newArray.push(La[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")); 
}

// console.log(newArray);
console.dir(newArray, {'maxArrayLength': null});


