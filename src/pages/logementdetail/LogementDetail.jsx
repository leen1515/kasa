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

  return <>{ logementSelected &&
    <main className = "main-logement">
        <Gallery logementID = { logementID }/>
        <Tags logementID = { logementID }/>
        <figure>
          <figcaption>{logementSelected.host.name}</figcaption>
          <img src={logementSelected.host.picture} alt="Photo de l'hôte"/>
        </figure>

        <GetStars logementID = { logementID }/>
        <div className="collapses-logement">
        <Collapse label = "description" detail = { logementSelected.description } />
        <Collapse label = "équipement" detail = { logementSelected.equipments } />
        </div>
      </main>}
    </>;
}
export default LogementDetail;
