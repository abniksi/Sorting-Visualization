import React from 'react';
import '../Styles/NavigationBar.css'
import createArray from '../HelperMethods/ArrayCreator'
let Algorithims = require('../HelperMethods/Algorithims')

function NavigationBar(props) {
    function getNewArray(){
        props.setRandomNumberArray(createArray());
    }

    function doBubbleSort(){
        props.setRandomNumberArray(Algorithims.bubbleSort(props.randomNumberArray))
    }

    function doQuickSort(){
        props.setRandomNumberArray(Algorithims.quickSort(props.randomNumberArray))
    }

    return (
        <>
            <div className = "navBar">
                <div className = 'innerNavBar'>
                    <button onClick={getNewArray}>Generate New Array</button>
                    <button>Merge Sort</button>
                    <button onClick={doQuickSort}>Quick Sort</button>
                    <button>Heap Sort</button>
                    <button onClick={doBubbleSort}>Bubble Sort</button>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;