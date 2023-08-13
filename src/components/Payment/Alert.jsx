import loader from "../../loader.svg"; // Importe l'image du chargeur depuis le chemin spécifié

// Définition d'un objet Alert qui contient des composants fonctionnels pour afficher différents types d'alertes
const Alert = {
  // Composant pour afficher une alerte d'erreur
  Error: ({ status }) => {
    return (
      status && ( // Vérifie si le statut est vrai (non nul ou non faux)
        <div className="alert alert-danger" role="alert">
          La transaction n'a pas pu être complétée - veuillez réessayer &nbsp;
          <i className="fas fa-times"></i> {/* Icône de croix (erreur) */}
        </div>
      )
    );
  },

  // Composant pour afficher une alerte d'annulation
  Cancelled: ({ status }) => {
    return (
      status && (
        <div className="alert alert-warning" role="alert">
          Transaction annulée
        </div>
      )
    );
  },

  // Composant pour afficher une alerte de confirmation
  Confirmed: ({ status }) => {
    return (
      status && (
        <div className="alert alert-success" role="alert">
          Merci pour votre commande ❤️ - Vous serez redirigé dans quelques
          secondes...
          <img src={loader} className="App-logo ml-4" alt="loader" />{" "}
          {/* Affiche l'image du chargeur */}
        </div>
      )
    );
  },
};

export default Alert; // Exporte l'objet Alert contenant les composants d'alerte
