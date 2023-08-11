import { Link } from 'react-router-dom';

function Cards (props) {
  return <Link className= "card" to={`/logements/${props.id}`}><figure className="card__figure">
                <img className="figure__cover" src={props.cover} alt='logement-illustration' />
                <div className="figure__filter"></div>
                <figcaption className="figure__title"> {props.title} </figcaption>
            </figure>
        </Link>;
}

export default Cards;
