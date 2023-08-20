import Banner from '../../components/banner/Banner';
import Cards from '../../components/cards/Cards';
import { useContext } from 'react';
import GetDataContext from '../../utils/GetDataContext';

function Home () {
  const { data } = useContext(GetDataContext);
  const logementList = data;
  console.log(logementList);

  return <>
  <main className='main-home'>
  <Banner/>
  <div className='logement-list-cards'>
  {logementList.map((logement) => (<Cards
                key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}/>)
  ) }
  </div>
  </main>
            </>;
}

export default Home;
