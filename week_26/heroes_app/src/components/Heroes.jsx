import '../assets/styles/Heroes.css';

function Heroes(props) {
    return (
        <div className="heroes">
            <h2 className="heroes_header">{props.name}</h2>
            <img className="heroes_image" src={props.url} alt="heroes name" />
            <p className="heroes_universe">
                <span>Вселенная: </span>
                {props.universe}
            </p>
            <p className="heroes_alter-ego">
                <span>Альтер эго: </span>
                {props.alterEgo}
            </p>
            <p className="heroes_occupation">
                <span>Род деятельности: </span>
                {props.occupation}
            </p>
            <p className="heroes_friends">
                <span>Друзья: </span>
                {props.friends}
            </p>
            <p className="heroes_superpowers">
                <span>Суперсилы: </span>
                {props.superpowers}
            </p>
            <p className="heroes_details">
                <span>Подробнее: </span>
                {props.details}
            </p>
        </div>
    );
}

export default Heroes;