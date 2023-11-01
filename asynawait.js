"use strict";
/* 

ASYNC AWAIT

*/

//Async functions always returns a promise. Even if we return a
//normal value, it wraps the value inside a promise and return it.

async function getData() {
  return "Hello"; //this will be wrapped inside a promise
}

// getData().then((res) => console.log(res)); //consuming the promise

//handling promise the old way before asyn await
const pr1 = new Promise((resolve, reject) => {
  resolve("promise resolved successfully");
});

function handlePr() {
  pr1.then(function (res) {
    console.log(res);
  });
  console.log("hello"); //this will be logged first
}

// handlePr();

// handling promise using async await, await can only be used
// inside an async function
const promise1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("promise 1 resolved successfully");
  }, 5000);
});

async function handlePromise1() {
  console.log("Heeeyyyyy");
  const res = await promise1;
  //in case of using await to consume the promise, rest
  //of the code exectuion inside function will be paused
  //until the promise is resolved.
  console.log(res);
  console.log("Hello");
}

// handlePromise1();

/*Example of how fetch function works*/
const API_URL1 = "https://api.github.com/users/ujjwalb09";

async function handlePromise2() {
  //fetch is a promise that will return a response Obj(readible stream)
  const responseObject1 = await fetch(API_URL1);
  //we will convert response body(readible stream) to json
  //we will use .json() which is a promise which will return a result
  //in form of json value
  const jsonValue1 = await responseObject1.json();
  console.log(jsonValue1);
}

// handlePromise2();

/*

error handling while using async await in two ways
1. wrapping the await part of the code in try block and using
   catch block with it
2. Catching the error in tradational way by using catch
   with the function call

*/

// error handling using try catch
const API_URL2 = "https://api.github.c/users/ujjwalb9";

async function handlePromise3() {
  try {
    const responseObject2 = await fetch(API_URL2);
    const jsonValue2 = await responseObject2.json();
    console.log(jsonValue2);
  } catch (err) {
    console.log(err);
  }
}

// handlePromise3();

//error handling using tradational way
const API_URL3 = "https://api.github.c/users/ujjwalb9";

async function handlePromise4() {
  const responseObject3 = await fetch(API_URL2);
  const jsonValue3 = await responseObject3.json();
  console.log(jsonValue3);
}

// handlePromise4().catch(function (err) {
//   console.log(err);
// });
