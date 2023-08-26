import Collapse from '../../components/collapse/Collapse';
import Gallery from '../../components/gallery/Gallery';
import Tags from '../../components/tag/Tags';
import { useContext, useEffect, useState } from 'react';
import GetDataContext from '../../utils/GetDataContext';
import { useParams } from 'react-router';
import GetStars from '../../components/stars/GetStars';

function LogementDetail () {
  const logementList = useContext(GetDataContext).data;
  const { logementID } = useParams();
  const [logementSelected, setLogementSelected] = useState(null);
  useEffect(() => {
    const selected = logementList.find((logement) => logement.id === logementID);

    if (selected) {
      setLogementSelected(selected);
    } else {
      console.log('Logement non trouvé.');
    }
  }, [logementID, logementList]);

  return (
     <>
         {logementSelected && (
    <main className = "main-logement">
        <Gallery logementID = { logementID }/>
        <div className="head-logement">
        <div className = "logement-container">
          <div className ="logement__title">{logementSelected.title}</div>
          <div className="logement__location">{logementSelected.location}</div>
        <Tags logementID = { logementID }/>
        </div>
        <div className="profil-container">
          <figure className="profil-detail">
          <figcaption className="profil__name">{logementSelected.host.name}</figcaption>
          <img className = "profil__photo" src={logementSelected.host.picture} alt="Photo de l'hôte"/>
          </figure>
        <GetStars logementID = { logementID }/>
        </div>
        </div>
        <div className="collapses-logement">
        <Collapse label = "description" detail = { logementSelected.description } />
        <Collapse label = "équipement" detail = { logementSelected.equipments } />
        </div>
      </main>)}
    </>);
}
export default LogementDetail;
