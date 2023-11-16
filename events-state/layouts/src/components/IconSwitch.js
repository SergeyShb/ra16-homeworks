import React from "react";



function IconSwitch( {onSwitch} ) {   //  onSwitch - это функция для обработчика onClick

    return (

        <div>
            <button onClick = {onSwitch}>IconSwitch </button>
        </div>
        // onSwitch - функция переданная в обработчик события onClick
    )

}

export default IconSwitch;