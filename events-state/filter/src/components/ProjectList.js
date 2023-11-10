//Компонент ProjectList отображает изображения самих проектов

import React from "react";

function ProjectList ( { projects } ) {   // это Props (данные) которые передаются из другого компонента. Props обязательно должны быть в фигурных скобках
                                         // projects - это отсортированный массив объектов  

    let index = 0;   // нужен для того чтобы задать атрибут элемента массива key - который помогает определить измененный элемент


    return (
        <div>
            {
                projects.map(item =>    //item - объект из массива.   После return, В методах массива после стрелочки => нельзя ставить фигурные скобки 

                    <div key = { index = index + 1 }>   
                        <img src = { item.img } />
                    </div>
                    
                )
            }


        </div>
        

    )

}


export default ProjectList;