let ringPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Just Married...');
        } else {
            reject('Sorry you are not for me');
        }

    }, 3000);
});

ringPromise.then((result) => {
    console.log(result);
});

ringPromise.catch((reason) => {
    console.log(reason);
});