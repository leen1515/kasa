import banner from '../assets/image-banner.png';

function Banner () {
  return <div className='container-banner'>
            <div className='banner-slogan'>
                <p>Chez vous, partout et ailleurs</p>
            </div>;
            <img className= 'banner-img' src = { banner }>
            </img>;
        </div>;
}

export default Banner;
