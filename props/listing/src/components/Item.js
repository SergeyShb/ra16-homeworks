import React from "react";
import '../main.css';


function Item(props) {

    const {cardInfo} = props;
    console.log(cardInfo);

  
    
    //проверка существует ли картинка для разметки

    let url_570xN;   // содаем переменную которой будем присваивать картинку из объекта

    if (cardInfo['MainImage']) {   // если ключ MainImage существует в объекте cardInfo

        if ('url_570xN' in cardInfo.MainImage) {   // если ключ url_570xN существует в объекте cardInfo.MainImage

            url_570xN = cardInfo.MainImage.url_570xN;   // то присваиваем переменной url_570xN изображение 

            console.log(cardInfo.MainImage.url_570xN);
        }

    } else {
        return null;   // иначе возвращаем null и компонент не выводится
    };

    

    //Вывод первых 50-ти символов

    let title50;   // содаем переменную для заголовка в котором будет содержаться только 50 символов


    //проверка существует заголовок 

    if (cardInfo['title']) {   // если в объектк есть ключ title


        let title = cardInfo.title;   // содаем переменную title которой присваиваем полный заголовок из объекта cardInfo.title
        
        let limitTitleSymbol = 50;   // переменная limitTitleSymbol - количество выводимых символов
        
    
    
        if (title.length > 50) {   // если длинна заголовка больше 50-ти символов
            title50 = title.slice(0, limitTitleSymbol) + '...';   // то оставляем только 50 символов и прибавляем ... (три точки)
        } else {
            title50 = title;   // иначе оставляем как есть
        }

    
    } else {
        return null;   // иначе возвращаем null и компонент не выводится
    };



    // проверка количества товара

    let quantityClassName;   // содаем переменную которой будем присваивать название класса в зависимости от количества

    if (cardInfo.quantity > 20) {   // если количество больше 20
        quantityClassName = 'item-quantity level-high';
    } else if(cardInfo.quantity < 21 && cardInfo.quantity > 10) {   // если количество меньше 21 и больше 10
        quantityClassName = 'item-quantity level-medium';
    } else if(cardInfo.quantity < 11) {   // если количество меньше 10
        quantityClassName = 'item-quantity level-low';
    };



    //проверка валюты

    let price;   // содаем переменную которой будем присваивать цену и валюту

    if (cardInfo.currency_code == "USD") {   // если волюта USD 
        price = "$" + cardInfo.price;   // то price = $(валюта) + цена  
    } else if(cardInfo.currency_code == "EUR") {   // если волюта EUR    
        price = "€" + cardInfo.price;   // то price = €(валюта) + цена  
    } else {   //иначе
        price = cardInfo.price + cardInfo.currency_code;   // price = цена + валюта 
    };

    



    return (

        <div className="item">
            <div className="item-image">
                <a href={ cardInfo.url }>
                    <img src={ url_570xN }></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{ title50 }</p>
                <p className="item-price">{ price }</p>
                <p className={ quantityClassName }> { cardInfo.quantity + " left" } </p>
            </div>
        </div>
        
    )

};



export default Item;