import Banner from '../../components/banner/Banner';
import Cards from '../../components/cards/Cards';
import { useContext } from 'react';
import GetDataContext from '../../utils/GetDataContext';
import banner from '../../assets/image-banner.png';
/** @namespace pages */
/** @name pages */
/**
 * Home's page with return's link
 * @returns {node} tag for main's page
 */
function Home () {
  const { data } = useContext(GetDataContext);
  const logementList = data;
  return <main className='main-home'>
  <Banner imgSrc ={banner} text = "Chez vous, partout et ailleurs"/>
  <div className='logement-list-cards'>
  {logementList.map((logement) => (<Cards
                key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}/>)
  ) }
  </div>
  </main>;
}

export default Home;
