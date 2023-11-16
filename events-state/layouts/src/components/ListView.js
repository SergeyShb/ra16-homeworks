import React from 'react';
import ShopItem from './ShopItem';
import './ListView.css';


function ListView( {productsList} ) {   // productsList - это массов объектов


    console.log( productsList );

    let index = 0;   // нужен для того чтобы задать атрибут элемента массива key - который помогает определить измененный элемент


    return (

        <div className='listView'>
            {
                productsList.map(item => 
                    <div key = { index = index + 1 }>
                        <ShopItem productInfo={item} />
                    </div>    
                )
            }    
        </div>
        // выводим компонент <ShopItem /> через метод массива map, столько раз, сколько объектов в массиве объектов productsList, и в качестве пропса передаём элемент массива (объект)
    )


}


export default ListView;