import { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
import Cards from '../components/cards/Cards';

function Home () {
  const urlJsonData = process.env.PUBLIC_URL + '/data/logements.json';
  const [logementList, setLogementList] = useState([]);
  useEffect(() => {
    fetch(urlJsonData).then(
      function (response) {
        return response.json();
      }).then(function (dataJson) { return setLogementList(dataJson); });
  }, []);

  return <>
  <Header/>
  <main className='main-home'>
  <Banner/>
  <div className='logement-list-cards'>
  {logementList.map((logement) => {
    return <Cards
                key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}
            />;
  })}
  </div>
  </main>
  <Footer/>
            </>;
}

export default Home;
