import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { getByIdPictures } from '../../components/gallery/getByIdPictures';

function Gallery ({ logementList, logementID }) {
  console.log(getByIdPictures(logementList, logementID));

  const [actualIndex, setActualIndex] = useState(0);
  const previousImg = () => {
    const firstImage = actualIndex === 0;
    setActualIndex(firstImage ? getByIdPictures(logementList, logementID).length - 1 : actualIndex - 1);
  };
  const nextImg = () => {
    const lastImage = actualIndex === getByIdPictures(logementList, logementID).length - 1;
    setActualIndex(lastImage ? 0 : actualIndex + 1);
  };
  return <div className="gallery"> {getByIdPictures(logementList, logementID).length > 1 ? <div className="left"onClick={nextImg}><FontAwesomeIcon icon={faChevronLeft} /></div> : ''}
    <img src={getByIdPictures(logementList, logementID)[actualIndex]} alt="photo de logement"/>
    {getByIdPictures(logementList, logementID).length > 1 ? <div className="right" onClick={previousImg}><FontAwesomeIcon icon={faChevronRight} /></div> : ''}
    <div className="number">{actualIndex + 1}/{getByIdPictures(logementList, logementID).length}</div>
</div>;
}

export default Gallery;
