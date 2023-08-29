import { Link } from 'react-router-dom';
/** @name pages */
/**
 * error404's page with back's link
 * @returns {node} tag for error's page
 */
function Error404 () {
  const messageError = "oups ! La page que vous demandez n'existe pas";
  const messageBack = "Retourner sur la page d'accueil";

  return (
    <div className="container-error">
        <h1>404</h1>
        <h2>{messageError}</h2>
        <div className="linkBack">
            <Link to="/" className="error-link">{messageBack}
            </Link>
        </div>
    </div>
  );
}

export default Error404;
