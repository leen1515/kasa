import { Link } from 'react-router-dom';
/** @name components */

/**
 * for to display accomodation's card in home's page
 * @param {string} props accommodation's id, accommodation's image and accomodation's title in props
 * @returns {node}generates the tag for the accommodation's card
 */
function Cards (props) {
  return <Link className= "card" to={`/logements/${props.id}`}><figure className="card__figure">
                <img className="figure__cover" src={props.cover} alt='logement-illustration' />
                <div className="figure__filter"></div>
                <figcaption className="figure__title"> {props.title} </figcaption>
            </figure>
        </Link>;
}

export default Cards;
