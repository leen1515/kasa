import RouterLinks from './routesLinks/RouterLinks';
import { useEffect, useState } from 'react';

function App () {
  const urlJsonData = process.env.PUBLIC_URL + 'data/logements.json';
  // const [logementList, setLogementList] = useState([]);
  const [logementList, setLogementList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchLogements () {
      try {
        const response = await fetch(urlJsonData);
        const logementList = await response.json();
        setLogementList(logementList);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchLogements();
  }, []);

  if (error) {
    return <span>Erreur sur la page</span>;
  }
  console.log(isDataLoading);
  return <RouterLinks logementList = {logementList}/>;
}

export default App;
