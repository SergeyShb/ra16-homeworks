import React from 'react';
import Item from './Item';
import shortid from 'shortid';


function Items(props) {
   
    let {info} = props;   //let для того чтобы можно было добавить key через shortid.generate()

    console.log(info);


    info = info.map((item) => ( { ...item ,key: shortid.generate() } ) );   // key: shortid.generate() - генерируем ключ элкмкнта (карточки товара)
    
    // можно внутри стрелочной функции 
    //function  (item) {
    //   item.key = shortid.generate()
    //   return item}

    console.log(info);



    return (
        <div className="item-list"> 
            {
                // Key передаем сразу в компонент
                info.map(element => <Item  cardInfo={element}    key={element.key}   />)   
            }
            
        </div>
    )

    //Можно сделать так
    // return (
    //     <div class="item-list"> 
    //         {
    //             // Key передаем сразу в компонент
    //             info.map(

    //                 function(element) {
    //                     return (
    //                         <Item  cardInfo={element} key={element.key} />
    //                     )
                        
    //                 }
                    
                    
    //             )   
    //         }
            
    //     </div>
    // )



    

}


export default Items;