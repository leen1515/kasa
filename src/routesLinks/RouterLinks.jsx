import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Error404 from '../components/Error404';

function RouterLinks () {
  return (
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
  );
}

export default RouterLinks;
