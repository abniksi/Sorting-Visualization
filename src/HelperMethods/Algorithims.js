const bubbleSort = (randomNumberArray) => {
    const bubbleSortArray = [...randomNumberArray];

    for(let i = 1; i < bubbleSortArray.length; i++){
        for(let j = 0; j < bubbleSortArray.length; j++){
            if(bubbleSortArray[i] < bubbleSortArray[j]){
                let x = bubbleSortArray[i];
                let y = bubbleSortArray[j];
                bubbleSortArray[i] = y;
                bubbleSortArray[j] = x;
            }
        }
    }

    return bubbleSortArray;
}

export default bubbleSort;