import Collapse from '../../components/collapse/Collapse';
import Gallery from '../../components/gallery/Gallery';
import Tags from '../../components/tag/Tags';
import { useContext, useEffect, useState } from 'react';
import GetDataContext from '../../utils/GetDataContext';
import { useParams } from 'react-router';
import GetStars from '../../components/stars/GetStars';
import Error404 from '../error404/Error404';
import { useNavigate } from 'react-router-dom';

/** @name pages */
/**
 * Selected accomodation's page
 * @returns {node} tag for selected accomodation's page
 */
function LogementDetail () {
  const logementList = useContext(GetDataContext).data;
  const { logementID } = useParams();
  const [logementSelected, setLogementSelected] = useState(null);

  useEffect(() => {
    const selected = () => logementID && (logementList.find((logement) => logement.id === logementID));

    /* Checking if the `selected` variable is truthy. If it is, it means that an accomodation
   with ID selected exists in the `logementList`, accomodation's array. In that
   case, it sets the `logementSelected` state variable width the selected logement. */
    if (!selected) {
      useNavigate('/error', { replace: true });
    } else {
      setLogementSelected(selected);
    }
  }, [logementID, logementList]);

  return (
     <>
         {logementSelected
           ? (
    <main className = "main-logement">
        <Gallery logementID = { logementID }/>
        <div className="head-logement">
        <div className = "logement-container">
          <div className ="logement__title">{logementSelected?.title}</div>
          <div className="logement__location">{logementSelected?.location}</div>
        <Tags logementID = { logementID }/>
        </div>
        <div className="profil-container">
          <figure className="profil-detail">
          <figcaption className="profil__name">{logementSelected?.host.name}</figcaption>
          <img className = "profil__photo" src={logementSelected?.host.picture} alt="Photo de l'hôte"/>
          </figure>
        <GetStars logementID = { logementID }/>
        </div>
        </div>
        <div className="collapses-logement">
        <Collapse label = "Description" detail = { logementSelected?.description } />
        <Collapse label = "Equipement" detail = { logementSelected?.equipments } />
        </div>
      </main>)
           : (
      <Error404/>)
      }
    </>);
}
export default LogementDetail;
