import React from 'react';
import '../Styles/NavigationBar.css'
import createArray from '../HelperMethods/ArrayCreator'
import bubbleSort from '../HelperMethods/Algorithims'

function NavigationBar(props) {
    function getNewArray(){
        props.setRandomNumberArray(createArray());
    }

    function doBubbleSort(){
        props.setRandomNumberArray(bubbleSort(props.randomNumberArray))
    }

    return (
        <>
            <div className = "navBar">
                <div className = 'innerNavBar'>
                    <button onClick={getNewArray}>Generate New Array</button>
                    <button>Merge Sort</button>
                    <button>Quick Sort</button>
                    <button>Heap Sort</button>
                    <button onClick={doBubbleSort}>Bubble Sort</button>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;