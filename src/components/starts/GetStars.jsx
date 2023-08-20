import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getByIdStars } from './getByIdStars';
import { useContext } from 'react';
import GetDataContext from '../../utils/GetDataContext';

function GetStars ({ logementID }) {
  const range = [1, 2, 3, 4, 5];
  const logementList = useContext(GetDataContext).data;
  const getStars = getByIdStars(logementList, logementID);

  return <div className="stars-container">
    {range.map((rate) => {
      if (getStars >= rate) {
        return (
            <div
                key={rate}
                className="stars-actives"><FontAwesomeIcon icon={faStar} /> </div>
        );
      } else {
        return (
                    <div
                        key={rate}
                        className="stars-inactives">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
        );
      }
    }
    )
        }
    </div>;
}

export default GetStars;
