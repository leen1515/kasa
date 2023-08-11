import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
function Error404 () {
  const messageError = "oups ! La page que vous demandez n'existe pas";
  const messageBack = "Retourner sur la page d'accueil";

  return (<>
  <Header/>
    <div className="container-error">
        <h1>404</h1>
        <h2>{messageError}</h2>
        <div className="linkBack">
            <Link to="/" className="error-link">{messageBack}
            </Link>
        </div>
    </div></>
  );
}

export default Error404;
