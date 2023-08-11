import { Link } from 'react-router-dom';

function Cards (props) {
  return <Link to={`/logements/${props.id}`}><figure>
                <img src={props.cover} alt='logement-illustration' />
                <figcaption> {props.title} </figcaption>
            </figure>
        </Link>;
}

export default Cards;
