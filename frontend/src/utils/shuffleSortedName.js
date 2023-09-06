function shuffleSortedName(array) {
    array.sort((a, b) => {
        if(b.topics[0].charAt[0] == "\'" || b.topics[0].charAt[0] == "\"") {a.topics[0].charAt[0] < b.topics[0].charAt[1]}
        else {a.topics[0].charAt[0] < b.topics[0].charAt[0]}
    })
    console.log("Shuffled list by topic names:")
    console.log(array)
    return array;
}

export default shuffleSortedName;