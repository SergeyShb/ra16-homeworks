import React from 'react';
import './FilmCard.css'
import Stars from './Stars';



// FilmCard - компонент который выводит карточку фильма

function FilmCard(props) {

    console.log(props);

    const film = props.filmCardInfo;

    console.log(film);


    return (
        <div>


            <div className="movie__info">
                <div className="movie__poster">

                </div>
                <div className="movie__description">
                    <h2 className="movie__title"> {film.filmName} </h2>
                    {/* Stars - компонет котый принимает props count, и выводи столько компонентов star сколько указано в count (но только от 1 до 5) */}
                    <Stars count={5} />
                </div>
            </div>  


        </div>
    )

}


export default FilmCard;