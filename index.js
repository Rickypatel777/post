// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

 async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text()
    console.log(data)
    return data
}

async function main() {
  console.log("Loading Code");

  console.log("Working for home");

  console.log("ZZZZZZZZZZ");
//   let data = getData();
//   console.log(data);
let data = await getData()

  console.log("task 2");
}
main()

