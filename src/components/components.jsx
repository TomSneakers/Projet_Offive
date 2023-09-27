// Définition du composant fonctionnel 'Table'
export function Table({ children, items = [], heading, subheading }) {
  // Rendu du composant 'Table'
  return (
    <section className="cart-table">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 className="table-heading text-center">{heading}</h3>
            <p className="table-subheading text-center">
              <span className="table-item-count">{items.length}</span>{" "}
              {subheading}
            </p>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="product-cell">Produit</th>
              <th className="price-cell">Prix</th>
              <th className="unit-price-cell">Prix Unitaire</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
          {/* Contenu du tableau fourni par les enfants */}
        </table>
      </div>
    </section>
  );
}
