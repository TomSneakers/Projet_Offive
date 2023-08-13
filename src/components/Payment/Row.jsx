const Row = ({ name, price }) => {
  // La fonction 'Row' est définie comme un composant fonctionnel qui prend deux propriétés 'name' et 'price' en entrée.

  return (
    // Rendu JSX du composant 'Row'
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        {/* Nom du produit */}
        <h6 className="my-0">{name}</h6>

        {/* Description brève */}
        <small className="text-muted">Brève description</small>
      </div>

      {/* Prix du produit */}
      <span className="text-muted">${price.toFixed(2)}</span>
    </li>
  );
};

export default Row; // Exportation du composant 'Row'
