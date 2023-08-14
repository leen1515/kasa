import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/collapse/Collapse';
function LogementDetail ({ logementList }) {
  const { roomID } = useParams();
  const [locationIDSelected, setLocationIDSelected] = useState([]);
  useEffect(() => {
    const getPropsLocation = async () => {
      setLocationIDSelected(await logementList.find((location) => { return location?.id === roomID; }));
    }; getPropsLocation();
  }, [roomID]);

  const { title, location, equipments, description, rating } = locationIDSelected;

  return <>
        {'le logement   ' + roomID + description}
        <Collapse label = "description" detail = {title + location + equipments + description + rating} />
       </>;
}

export default LogementDetail;
