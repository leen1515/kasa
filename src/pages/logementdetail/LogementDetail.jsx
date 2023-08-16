import Collapse from '../../components/collapse/Collapse';
import Gallery from '../../components/gallery/Gallery';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LogementDetail ({ logementList }) {
  const { logementID } = useParams();
  const [logementSelected, setLogementSelected] = useState([]);
  useEffect(() => {
    const getLogement = async () => {
      setLogementSelected(logementList.find((logement) => logement.id === logementID));
    };
    getLogement();
  }, []);
  return <><Collapse label = "description" detail = { logementSelected.description } />
      <Collapse label = "équipement" detail = { logementSelected.equipments } />
      <Gallery logementList = {logementList} logementID = {logementID}/>
    </>;
}

export default LogementDetail;
