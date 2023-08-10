function Cards (props) {
  return <figure>
                <img src={props.cover} alt='logement-illustration' />
                <figcaption> {props.title} </figcaption>
            </figure>;
}

export default Cards;
