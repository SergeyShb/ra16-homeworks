import React from 'react';
import ShopCard from './ShopCard';
import './CardsView.css';


function CardsView( {productsList} ) {   // productsList - это массов объектов


    console.log( productsList );

    let index = 0;   // нужен для того чтобы задать атрибут элемента массива key - который помогает определить измененный элемент


    return (
        
        <div className='cardsView'>
            {
                productsList.map(item => 
                    <div key = { index = index + 1 }>   
                        <ShopCard productInfo={item} />
                    </div>    
                )
            }    
        </div>
        // выводим компонент <ShopCard /> через метод массива map, столько раз, сколько объектов в массиве объектов productsList, и в качестве пропса передаём элемент массива (объект)
    )


}


export default CardsView;