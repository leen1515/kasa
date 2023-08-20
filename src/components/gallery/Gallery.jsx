import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getByIdPictures } from './getByIdPictures';
import GetDataContext from '../../utils/GetDataContext';

function Gallery ({ logementID }) {
  const { data } = useContext(GetDataContext);
  const getPictures = getByIdPictures(data, logementID);

  const [actualIndex, setActualIndex] = useState(0);

  const previousImg = () => {
    const firstImage = actualIndex === 0;
    setActualIndex(firstImage ? getPictures.length - 1 : actualIndex - 1);
  };
  const nextImg = () => {
    const lastImage = actualIndex === getPictures.length - 1;
    setActualIndex(lastImage ? 0 : actualIndex + 1);
  };
  return <div className="gallery"> {getPictures.length > 1 ? <div className="left"onClick={previousImg}><FontAwesomeIcon icon={faChevronLeft} /></div> : ''}
    <img src={getPictures[actualIndex]} alt="photo de logement"/>
    {getPictures.length > 1 ? <div className="right" onClick={nextImg}><FontAwesomeIcon icon={faChevronRight} /></div> : ''}
    <div className="number">{actualIndex + 1}/{getPictures.length}</div>
</div>;
}

export default Gallery;
