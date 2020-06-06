const createArray = () => {
    const initalArray = [];

    for(let i = 0; i < 300; i++){
        let randomNumber = Math.floor(Math.random() * 1000);
        initalArray.push(randomNumber);
    }

    return initalArray;
}

export default createArray;