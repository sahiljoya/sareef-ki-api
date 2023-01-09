import Express from "express";
import rxjs from "rxjs";

const app = Express()
app.use(Express.json())
// Promises
const x = new Promise((resolve) => {
  setInterval(() => {
      // ✅ when resolve is called, the promise will become
      // fullfilled and it's value won't ever change
      resolve(Math.random() * 10)
  }, 3000);
});

// Observables
const observable$ = rxjs.Observable.create((observer) => {
// ✅ you can pass multiple values by using `next` method
observer.next("A");//users
observer.next("B");//product
observer.next("C");//orders
setInterval(() => {
  observer.complete();//xyz

}, 5000);
})

// ✅ base will be receiving values untils it's completed
observable$
  .subscribe(
    v => console.log(v),
    err => console.log(err),
    done => console.log("completed")
  );
app.listen(process.env.PORT||  3004, (req, res) => {
    console.log("server port:3003");
})