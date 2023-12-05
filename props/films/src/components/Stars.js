import React from 'react';
import Star from './Star';
import './Stars.css'

//   компонент Stars выводит заданное количество элементов (компонентов) Star

function Stars(props) {

    console.log(props)

    let starsItems = [];   // создаем пустой массив, чобы далее в него пушить заданое пропсом количествокомпонентов S tar 

    for (let i = 0; i < props.count; i++) {   // props.count - количество итераций (звездочек которые надо вывести)
        
        starsItems.push(<Star />);   // добавляем в массив starsItems элемент <Star />
        
    }

    console.log(<Star />);

    console.log(starsItems);


    if (props.count < 1 || props.count > 5) {   // если заданное количество звездочек меньше 1 или больше 5
        return null;   // то возвращаем null, то есть не выводим ничего
    }



    return (
        <ul className='stars' >
            {

                starsItems.map(item =>
                    
                    <div>
                        {item}
                    </div>    
                    
                )

            }
        </ul>
    )
}


export default Stars;