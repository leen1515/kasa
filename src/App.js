import RouterLinks from './routesLinks/RouterLinks';
import { useEffect, useState } from 'react';

function App () {
  const urlJsonData = process.env.PUBLIC_URL + '/data/logements.json';
  const [logementList, setLogementList] = useState([]);
  useEffect(() => {
    fetch(urlJsonData).then(
      function (response) {
        return response.json();
      }).then(function (dataJson) { return setLogementList(dataJson); });
  }, []);

  return <RouterLinks logementList = {logementList}/>;
}

export default App;
