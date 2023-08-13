function Row({ date, id }) {
  // Définit la fonction 'Row' prenant les propriétés 'date' et 'id' en entrée.

  // Convertir l'horodatage Unix en objet Date
  const timestamp = parseInt(date); // Convertit la date en horodatage Unix (en millisecondes)
  const formattedDate = new Date(timestamp); // Crée un objet Date à partir de l'horodatage

  // Vérifier si la date est valide
  const isDateValid = !isNaN(formattedDate); // Vérifie si l'objet Date est valide (non NaN)

  // Formater la date et l'heure au format local si elles sont valides, sinon afficher la date d'origine
  const formattedDateTimeString = isDateValid
    ? formattedDate.toLocaleString() // Formate la date et l'heure au format local
    : date; // Utilise la date d'origine si la conversion a échoué

  return (
    // Rendu JSX du composant 'Row'
    <tr>
      {/* Colonne 'Produit' */}
      <td data-th="Produit">
        <h4>Commande n° {id}</h4>
        <p className="font-weight-light">Date : {formattedDateTimeString}</p>
      </td>

      {/* Colonne d'actions */}
      <td className="actions" data-th="">
        <div className="text-right">
          {/* Bouton d'actualisation */}
          <button className="btn btn-outline-secondary btn-sm mb-2">
            <i className="fas fa-sync"></i> Actualiser
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Row; // Exporte le composant 'Row'
