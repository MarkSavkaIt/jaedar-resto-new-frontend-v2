import React from 'react'
import { useState, useEffect } from 'react'

const RadioButtons = () => {

    const [activeRadio, setActiveRadio] = useState({
        'dine in': false,
        'to go': false,
        'delivery': false
    });

    useEffect(() => {
        setActiveRadio({
            'dine in': true,
            'to go': false,
            'delivery': false
        })
    }, []);

    const setActiveRadioState = (test) => {
        let temp = {
            'dine in': false,
            'to go': false,
            'delivery': false
        }
        temp[test] = true;
        setActiveRadio(temp);
    }

    const setActiveClass = (test) =>  {
        if(test)
            return 'radioBtn active'
        return 'radioBtn'
    }

    return(
        <div className="radio">
            <div className={ setActiveClass( activeRadio["dine in"] )}  onClick={() => {setActiveRadioState('dine in')}} >Dine in</div>
            <div className={ setActiveClass( activeRadio["to go"] )}    onClick={() => {setActiveRadioState('to go')}} >To Go</div>
            <div className={ setActiveClass( activeRadio["delivery"] )} onClick={() => {setActiveRadioState('delivery')}} >Delivery</div>
        </div>
    )
}
export default RadioButtons