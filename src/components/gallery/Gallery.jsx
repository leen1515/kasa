import { useState, useContext } from 'react';
import { getByIdPictures } from './getByIdPictures';
import GetDataContext from '../../utils/GetDataContext';
import IconesSvg from '../../utils/icones/IconesSvg';
/** @name components */
/** @namespace components */
/**
 * for to display accomodation's gallery
 * @param {string} {logementID} selected accommodation's id
 * @returns {node}tag for gallery
 */

function Gallery ({ logementID }) {
  const { data } = useContext(GetDataContext);
  const getPictures = getByIdPictures(data, logementID);
  console.log(getByIdPictures(data, logementID));
  const [actualIndex, setActualIndex] = useState(0);

  /**
   * two functions, `previousImg` and `nextImg`, which update the `actualIndex`
   * state variable to display the previous or next image in a picture gallery.
   */
  const previousImg = () => {
    /* The code `const firstImage = actualIndex === 0;` is checking if the current image being displayed
    is the first image in the gallery. It assigns `true` to the variable `firstImage` if the condition
    is met, and `false` otherwise. */
    const firstImage = actualIndex === 0;
    setActualIndex(firstImage ? getPictures.length - 1 : actualIndex - 1);
  };
  const nextImg = () => {
    /* The code `const lastImage = actualIndex === getPictures.length - 1;` is checking if the current
image being displayed is the last image in the gallery. It assigns `true` to the variable
`lastImage` if the condition is met, and `false` otherwise. */
    const lastImage = actualIndex === getPictures.length - 1;
    setActualIndex(lastImage ? 0 : actualIndex + 1);
  };
  return <div className="gallery"> {getPictures.length > 1 ? <div className="left" onClick={previousImg}><IconesSvg iconeS="left" /></div> : ''}
{/* display an image from the `getPictures` array based on the `actualIndex` state variable. The `src` attribute of
    the `img` tag is set to the URL of the image at the current index. */}
    <img src={getPictures[actualIndex]} alt="photo de logement" />
    {/* display only if selected accommodation have more than one image */}
    {getPictures.length > 1 ? <div className="right" onClick={nextImg}><IconesSvg iconeS= "right"/></div> : ''}
    <div className="number">{actualIndex + 1}/{getPictures.length}</div>
  </div>;
}

export default Gallery;
