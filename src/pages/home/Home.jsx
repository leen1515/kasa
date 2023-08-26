import Banner from '../../components/banner/Banner';
import Cards from '../../components/cards/Cards';
import { useContext } from 'react';
import GetDataContext from '../../utils/GetDataContext';
import banner from '../../assets/image-banner.png';

function Home () {
  const { data } = useContext(GetDataContext);
  const logementList = data;

  return <main className='main-home'>
  <Banner imgSrc ={banner}/>
  <div className='logement-list-cards'>
  {logementList.map((logement) => (<Cards
                key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}/>)
  ) }
  </div>
  </main>;
}

export default Home;
