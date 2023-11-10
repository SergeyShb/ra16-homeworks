// Компонент Toolbar - создает и отображает кнопки

import React from "react";


function Toolbar( { filters, selected, onSelectFilter } ) {   // Props обязательно должны быть в фигурных скобках

    // filters, selected, onSelectFilter - это Props (данные) которые передаются из другого компонента
    // Где: 
    //     filters - это массив с названиями кнопок (фильтров)
    //     selected - это текст нажатой кнопки (т.е. значение выбранной категории)
    //     onSelectFilter - функция которая в дальнейшем будет передана в обработчик события onClick



    return (

        <div className="toolbar">
            
            {
            //  filters - это массив с названиями кнопок (фильтров).   После return, В методах массива после стрелочки => нельзя ставить фигурные скобки 
                filters.map((item) => 
                    <button
                    //  onClick - это обработчик события (пишется прямо в jsx)
                        onClick = {onSelectFilter}   // onSelectFilter - функция переданная в обработчик события onClick
                        key = {item}   // key - атрибут элемента массива, который помогает определить измененный элемент 
                        className = {item === selected ? "active" : ""}   // selected - это textContent (текст) нажатой кнопки
                    >
                        {/* item ниже - это текст кнопки (между тегами <button>  ) */}
                        {item}   
                    </button>    
                )
            }

        </div>

    )

}


export default Toolbar;