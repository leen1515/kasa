import RouterLinks from './routesLinks/RouterLinks';
import { useEffect, useState } from 'react';

function App () {
  const urlJsonData = process.env.PUBLIC_URL + '/data/logements.json';
  const [logementList, setLogementList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(urlJsonData);
      const dataJson = await data.json();
      setLogementList(dataJson);
    };
    fetchData().catch(console.error);
  }, []);

  return <RouterLinks logementList = {logementList}/>;
}

export default App;
