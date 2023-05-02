function shuffle(array) {
    let currentIndex = array.length;
    let randInt;

    while(currentIndex != 0) {
        randInt = Math.floor(Math.random() * currentIndex);
        --currentIndex;

        [array[currentIndex], array[randInt]] = [array[randInt], array[currentIndex]];
    }
    
    return array;
}

export default shuffle;