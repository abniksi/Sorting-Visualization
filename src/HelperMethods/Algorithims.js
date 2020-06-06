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

const quickSort = (quickSortArray) => {
    if(quickSortArray.length === 1){
        return quickSortArray;
    }

    const pivot = quickSortArray[quickSortArray.length - 1];
    const leftArray = [];
    const rightArray = [];
    for(let i = 0; i < quickSortArray.length - 1; i++){
        if(quickSortArray[i] < pivot){
            leftArray.push(quickSortArray[i]);
        }else{
            rightArray.push(quickSortArray[i]);
        }
    }

    if(leftArray.length > 0 && rightArray.length > 0){
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    }else if(leftArray.length > 0){
        return [...quickSort(leftArray), pivot]
    }else{
        return [pivot, ...quickSort(rightArray)]
    }
} 

export { bubbleSort, quickSort }; 