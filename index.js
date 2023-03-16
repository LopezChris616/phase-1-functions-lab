function distanceFromHqInBlocks(street) {
    return street >= 42 ? street - 42 : 42 - street;
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return start > destination ? (start - destination) * 264 : (destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);

    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02; 
    } else if (distanceTravelled <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}