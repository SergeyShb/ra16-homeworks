import React from 'react';
import FilmCard from './FilmCard';


// FilmsView - компонент в который передается массив объектов, и который далее передает объект из массива компоненту FilmCard

function FilmsView(props) {

    console.log(props);

    const films = props.filmInfo;

    console.log(films);

    return (
        <div>
            {
                
                films.map(item => 
                    <div>
                        {/* FilmCard - компонент карточки фильма. В каждый такой компонент передаем объект из массива объектов films */}
                        < FilmCard filmCardInfo={item} />   
                    </div>
                )
              
            }
            
        </div>
    )
}

export default FilmsView;