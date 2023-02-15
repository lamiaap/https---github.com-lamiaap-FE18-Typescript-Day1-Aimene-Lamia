// let text : string = "Hello world!";
// console.log(text);



// let nums : Array<number> = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < nums.length; i++) {
//     let st = nums[i];
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${st} X ${j} = ${st * j}`);
      
//     (document.getElementById("result") as HTMLElement).innerHTML += `<p>${st} X ${j} = ${st * j}</p>`
//     }
//     (document.getElementById("result") as HTMLElement).innerHTML += `<hr>`

//   }




// Define an object with properties for first and last name
// const myName = {
//     fName: 'Aymen',
//     lName: 'Jouini'
//   };
  
//   document.write(`${myName.fName} ${myName.lName}`);
  
//   const nameArray = Array(10).fill(myName.fName);
//   nameArray.forEach((name) => {
//     document.write(`<br>${name}`);
//   });
  
//   setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//       console.log(myName.lName);
//     }
//   }, 5000);



let names : Array<string> = ['Aymen', 'Alex', 'Charlie', 'Peter', 'Steven'];

for (let i = 0; i < names.length; i++) {
    console.log(i);
    document.write(`${i}<br>`);
}

for (let name of names) {
    console.log(name);
    document.write(`${name}<br>`);
}

for (let [i, name] of names.entries()) {
    console.log(i, name);
    document.write(`${name} : ${i}<br>`);

}


 
