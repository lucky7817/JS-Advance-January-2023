let alwaysResolvingPromise = Promise.resolve('YES');
let alwaysRejectingPromise = Promise.reject('NO')

alwaysResolvingPromise
    .then(res => console.log(res));

alwaysRejectingPromise
.catch((reason) => console.log(reason));

let multiplePromises = Promise.all([
    alwaysResolvingPromise, Promise.resolve("YES2")
]);

multiplePromises.then(res => {
    console.log(res);
})


