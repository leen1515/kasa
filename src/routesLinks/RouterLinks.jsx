import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../components/about/About';
import Error404 from '../components/error404/Error404';
import LogementDetail from '../pages/logementdetail/LogementDetail';
function RouterLinks (props) {
  return (
          <Routes>
          <Route path="/" element= {<Home logementList = {props.logementList}/>}/>
          <Route path="about" element={<About />} />
          <Route path="logements/:roomID" element={<LogementDetail logementList = {props.logementList}/>}/>
          <Route path="/*" element={<Error404 />} />
        </Routes>
  );
}

export default RouterLinks;
