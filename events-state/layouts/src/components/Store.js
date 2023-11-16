import React, { useState } from "react";   // импорт { useState } при использовании состояний
import IconSwitch from "./IconSwitch";
import CardsView from './CardsView';
import ListView from './ListView';




function Store( {productsList} ) {   // productsList - это массов объектов из App.js

    // используем состояния, для изменения вида отображения товаров 
    const [view, setView] = useState("cards");   // второе состояние items

    // Функция для обработчика событий (при нажатии на кнопку)
    function viewSwitch () {


        if (view === "cards") {   // если состояние view равно "cards"
            setView("items")   // то устанавливаем новое состояние "items"
        } else {   // иначе
            setView("cards")   // устанавливаем новое состояние "cards" 
        }

        console.log(view);
    }

    console.log(productsList);

    
    return (

        <div>
            {/* viewSwitch - это функция которая в дальнейшем будет передана в обработчик onClick компонента IconSwitch */}
            <IconSwitch onSwitch = {viewSwitch} />   
            
            {/* Используем тернарный оператор. Если состояние view равно "cards" то выводм компонент <CardsView /> иначе выводм компонент <ListView /> */}
            {view === "cards" ? <CardsView productsList={productsList}  /> : <ListView productsList={productsList}  />}

        </div>

    )


}


export default Store;