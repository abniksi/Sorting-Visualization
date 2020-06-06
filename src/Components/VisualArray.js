import React, { useState, useEffect } from 'react';
import '../Styles/VisualArray.css'
import createArray from '../HelperMethods/ArrayCreator'
import NavigationBar from './NavigationBar'

function VisualArray() {
    const [randomNumberArray, setRandomNumberArray] = useState([]);

    const setArray = () => {
        setRandomNumberArray(createArray())
    }

    useEffect(() => {
        setArray();
    }, []);

    return (
        <>
            <NavigationBar setRandomNumberArray={setRandomNumberArray} randomNumberArray={randomNumberArray}/>
            <div className = "randomNumberContainer">
                {randomNumberArray.map((value, index) => {
                    return <div style = {{height: `${value}px`}} key = {index} className = "randomNumber"></div>
                })}
            </div>
        </>
    );
}

export default VisualArray;