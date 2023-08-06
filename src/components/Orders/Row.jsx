function Row({ date, id }) {
  // Convertir l'horodatage Unix en objet Date
  const timestamp = parseInt(date);
  const formattedDate = new Date(timestamp);

  // Vérifier si la date est valide
  const isDateValid = !isNaN(formattedDate);

  // Formater la date et l'heure au format local si elles sont valides, sinon afficher la date d'origine
  const formattedDateTimeString = isDateValid
    ? formattedDate.toLocaleString()
    : date;

  return (
    <tr>
      <td data-th="Produit">
        <h4>Commande n° {id}</h4>
        <p className="font-weight-light">Date : {formattedDateTimeString}</p>
      </td>

      <td className="actions" data-th="">
        <div className="text-right">
          <button className="btn btn-outline-secondary btn-sm mb-2">
            <i className="fas fa-sync"></i> Actualiser
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Row;
