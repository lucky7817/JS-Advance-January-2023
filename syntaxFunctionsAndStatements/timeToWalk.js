function timeToWalk(numOfSteps, lengthFootprint, speed) {

    let distanceInMeters = numOfSteps * lengthFootprint;
    let speedMetersInSec = speed / 3.6;
    let delayForRest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedMetersInSec + delayForRest;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}

//timeToWalk(4000, 0.60, 5);
//00:32:48
timeToWalk(2564, 0.70, 5.5);
//00:22:35