import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import GetDataContext from './utils/GetDataContext';
import Home from './pages/home/Home';
import Error404 from './pages/error404/Error404';
import About from './pages/about/About';
import LogementDetail from './pages/logementdetail/LogementDetail';
function App () {
  const urlJsonData = process.env.PUBLIC_URL + '/data/logements.json';
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
  console.log(isDataLoading, logementList);

  return <GetDataContext.Provider value = {{ data: logementList } }>
<Routes>
  <Route path="/" element= {<Home/>}/>
  <Route path="/*" element={<Error404 />} />
  <Route path="/about" element={<About />} />
  <Route path="/logements/:logementID" element={<LogementDetail/>}/>
</Routes>
    </GetDataContext.Provider>;
}

export default App;
