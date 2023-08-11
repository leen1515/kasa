import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function LogementDetail (props) {
  const { roomID } = useParams();
  const [locationSelected, setLocationSelected] = useState();

  useEffect(() => {
    setLocationSelected(props.logementList.find((location) => (location.id === roomID)));
  }, []);

  return <>
        {'le logement   ' + roomID + locationSelected}
       </>;
}

export default LogementDetail;
