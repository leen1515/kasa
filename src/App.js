import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import GetDataContext from './utils/GetDataContext';
import Home from './pages/home/Home';
import Error404 from './pages/error404/Error404';
import About from './pages/about/toAbout';
import LogementDetail from './pages/logementdetail/LogementDetail';

/** @memberof root */
/**
 * fetch datas for their treatments through pages and components
 * @returns {} route and accomodations's array for useContext
 */
function App () {
  const urlJsonData = process.env.PUBLIC_URL + '/data/logements.json';
  const [logementList, setLogementList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  /* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
  used to fetch data from the `urlJsonData` endpoint and update the state variables `logementList`,
  `error`, and `isDataLoading` accordingly. */
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
  return !isDataLoading && <GetDataContext.Provider value = {{ data: logementList } }>

<Routes>
  <Route path="/" element= {<Home/>}/>
  <Route path="/*" element={<Error404/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/logements/:logementID" element={<LogementDetail/>}/>
</Routes>
    </GetDataContext.Provider>;
}

export default App;
