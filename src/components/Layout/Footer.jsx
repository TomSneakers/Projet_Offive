import { Link } from "react-router-dom";

function Footer() {
  // Définit la fonction 'Footer' qui représente le pied de page du site.
  return (
    // Rendu JSX du pied de page
    <nav className="navbar navbar-dark bg-dark fixed-bottom">
      {/* Barre de navigation avec arrière-plan sombre */}
      <div className="container-fluid">
        {/* Conteneur fluide pour le pied de page */}
        <footer className="text-white">
          {/* Élément de pied de page avec texte en blanc */}
          <small>
            &copy; Droits d'auteur {new Date().getFullYear()} - Tous droits
            réservés
          </small>
          <small className="ms-5">
            <Link to="/Politique-de-confidentialité">
              Politique de confidentialité
            </Link>
          </small>
          {/* Texte de droits d'auteur avec année actuelle */}
        </footer>
      </div>
    </nav>
  );
}

export default Footer; // Exporte le composant 'Footer'
