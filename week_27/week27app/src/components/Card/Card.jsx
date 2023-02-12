import './card.css';

function Card(props) {
    return (
        <div className={`card__container ${props.select}`}>
            <h4 className='header'>{props.header}</h4>
            <div className={`main ${props.color}`}>
                <span>руб</span> <span className='text_main'>{props.price}</span> <span>/мес</span></div>
            <div className='condition'>До {props.condition} Мбит/сек</div>
            <footer className='footer'>Объём включённого трафика не ограничен</footer>
        </div>
    );
}

export default Card;