import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Cards from '../../components/cards/Cards';

function Home (props) {
  return <>
  <Header/>
  <main className='main-home'>
  <Banner/>
  <div className='logement-list-cards'>
  {props.logementList.map((logement) => {
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
