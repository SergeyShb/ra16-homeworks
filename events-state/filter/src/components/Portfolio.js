import React, { useState } from "react";   // useState - нужно импортировать если используем хуки
import Toolbar from "./Toolbar";   // импортируем компонент Toolbar создает и отображает кнопки и в котором находмтчя обработчик событий onClick 
import ProjectList from "./ProjectList";   // импортируем компонент ProjectList который выводит катинки 
import './Portfolio.css'


function Portfolio ( {projectList} ) {   // projectList - это массив с объектами. Props котый передается из App.js   . Props обязательно должны быть в фигурных скобках


    let filterButtonList = ["All", "Websites", "Flayers", "Business Cards"];   // Массив с названиями кнопок (фильтров)
    
    let [filteredListProjects, setFilteredListProjects] = useState(projectList);
    // Конструкция выше - Это и есть использование ХУКОВ, где
    //     filteredListProjects - текущее значение состояния
    //     setFilteredListProjects - функция которая принимает новое значение
    //     useState - начальное значение состояния
    //     useState — хук, который позволяет сообщить React, что пара переменная и функция используются для хранения локального состояния и его изменения соответственно 

    let [selected, setSelected] = useState("All")   // начальное значение состояния selected установливаем All 



    // Функция для обработчика событий (при нажатии на кнопку)
    function filter(event) {

        let buttons = Array.from( document.querySelectorAll("button"));   // находим все кнопки button на странице
        console.log(buttons);


        let activeButton = buttons.findIndex(item => item.classList.contains("active")) ;   // находим индекс кнопки с классом "active"
        console.log(activeButton);

        buttons[activeButton].classList.remove("active");   // убираем у найденного элемента класс "active"


        event.target.classList.add("active");   // добавляем нажимаемой кнопке класс "active"

        let select = event.target.textContent;   // у нажатой кнопки считываем textContent (текст) и присваиваем переменной select
        console.log(select);



        if (select === "All") {   // если у нажатой кнопки textContent = All
            setFilteredListProjects(projectList);   // то в новое состояние setFilteredListProjects устанавливаем массив объектов projectList
            console.log("All");
        } else {
            setFilteredListProjects(projectList.filter(item => item.category === select));   //иначе, в новое состояние setFilteredListProjects устанавливаем отфильтрованный массив объектов по ключу category   
            console.log("filter");
        }


        setSelected(select);   // в новое состояние setSelected устанавливаем значение select
        
    };



    return (
        <div>

            <Toolbar   // импортируемый элемент Toolbar
                filters = {filterButtonList}   //массив с названиями кнопок (фильтров)
                selected = {selected}   // текст наживаемой кнопки textContent (т.е. значение выбранной категории)
                onSelectFilter = {filter}   // filter - это функция которая в дальнейшем будет передана в обработчик onClick компонента Toolbar
            />

            <ProjectList
                projects = {filteredListProjects}   // отсортированный массив объектов который в дальнейшем будет использован для вывода определенной категории изображений
            />

        </div>
    );


}


export default Portfolio;