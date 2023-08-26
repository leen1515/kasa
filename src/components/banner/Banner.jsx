function Banner (props) {
  return <div className='container-banner'>
            <div className='banner-slogan'>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <img className= 'banner-img' src = { props.imgSrc }>
            </img>
        </div>;
}

export default Banner;
