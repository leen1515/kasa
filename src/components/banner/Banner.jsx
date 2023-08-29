/** @name components */
/**
 * display banner's components
 * @param {string} props.imgSrc and props.text : image's source in props and text's content
 * @returns {node} generates the tag for the banner
 */
function Banner (props) {
  return <div className='container-banner'>
            <div className='banner-slogan'>
                <p>{props.text}</p>
            </div>
            <img className= 'banner-img'
            /* setting the `src` attribute of the `<img>` tag to the value
            of `props.imgSrc`. */
            src = { props.imgSrc }>
            </img>
        </div>;
}

export default Banner;
