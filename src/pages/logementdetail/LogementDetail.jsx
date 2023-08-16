import Collapse from '../../components/collapse/Collapse';
import Gallery from '../../components/gallery/Gallery';
import Tags from '../../components/tag/Tags';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function LogementDetail ({ logementList }) {
  const { logementID } = useParams();
  const [logementSelected, setLogementSelected] = useState([]);
  useEffect(() => {
    const getLogement = async () => {
      setLogementSelected(logementList.find((logement) => logement.id === logementID));
    };
    getLogement();
  }, []);
  return <>
    <Header/>
    <main>
        <Gallery logementList = {logementList} logementID = {logementID}/>
        <Tags liste = {logementList} id = { logementID }/>
  <Collapse label = "description" detail = { logementSelected.description } />
      <Collapse label = "équipement" detail = { logementSelected.equipments } />
      <Footer/>
      </main>
    </>;
}

export default LogementDetail;
