import React from 'react';


class ShopItemFunc extends React.Component {
    // constructor(props) {   //конструктор приведён лишь для полноты картины    в текущем виде он не является обязательны
    //     super(props);
    // }

    render() {
        const {item} = this.props;   //Входные данные присваиваем константе item

        return (
            //className название класса в компоненте
            <div className='main-content'>   
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className='description'>{item.descriptionFull}</div>
                <div className='highlight-window mobile'>
                    <div className='highlight-overlay'></div>
                </div>
                <div className='divider'></div>
                <div className='purchase-info'>
                    <div className='price'>{item.currency + item.price.toFixed(2)}</div>
                    {/* здесь toFixed(2) для того чтобы оставить 2 числа после запятой */}
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );

    };

};



export default ShopItemFunc;