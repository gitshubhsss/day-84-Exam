const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise one is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise was conszumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("this is promise 2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("promise 2 was consumed");
});

const PromiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "shubham", password: 200 });
  }, 3000);
});

PromiseThree.then((user) => {
  console.log(user); //{ username: 'shubham', password: 200 }
});

const PromiseFour = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    setTimeout(() => {
      resolve({ username: "shubham", password: 200 });
    }, 4000);
  } else {
    reject("something wents wrong");
  }
});

PromiseFour.then((user) => {
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  });

const PromiseFive = new Promise((resolve, reject) => {
  let error = true;

  if (error) {
   setTimeout(() => {
    resolve({username:"promise 6 is in the house"})
   }, 6000);
  }
  else{
    reject("something went wrong in promise 5");
  }
});

//now instead of writing then and catch we can use async and await 

//create a aync funtion 

async function consumePromiseFive(){
   try {
    let result= await PromiseFive;
   console.log(result);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive();