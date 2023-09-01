import { getByIdStars } from './getByIdStars';
import { useContext } from 'react';
import GetDataContext from '../../utils/GetDataContext';
import IconesSvg from '../../utils/icones/IconesSvg';
/** @name components */

/**
 * for to display accomodation's rating
 * @param {string} {logementID} selected accommodation's id}
 * @returns {node} tag for rating width
 */

function GetStars ({ logementID }) {
/* The `range` variable is an array that contains the numbers 1, 2, 3, 4, and 5. It is used in the
`map` function to iterate over each number and render a star component based on the rating of the
accommodation. */
  const range = [1, 2, 3, 4, 5];
  const logementList = useContext(GetDataContext).data;
  const getStars = getByIdStars(logementList, logementID);

  return <div className="stars-container">
    {range.map((rate) => {
      if (getStars >= rate) {
        return (
              <div
                  key={rate}
                  className="stars-actives"><IconesSvg iconeS = "star"/> </div>
        );
      } else {
        return (
                      <div
                          key={rate}
                          className="stars-inactives">
                          <IconesSvg iconeS="star" />
                      </div>
        );
      }
    }
    )
    }
    </div>;
}

export default GetStars;
