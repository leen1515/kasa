import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/collapse/Collapse';
function LogementDetail (props) {
  const { roomID } = useParams();
  const [locationSelected, setLocationSelected] = useState();
  useEffect(() => {
    setLocationSelected(props.logementList.find((location) => (location.id === roomID)));
  }, []);

  return <>
        <Collapse label = "description" detail = {locationSelected.description} />
       </>;
}

export default LogementDetail;
