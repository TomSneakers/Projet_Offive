// Définition du composant fonctionnel 'Table'
export function Table({ children, items = [], heading, subheading }) {
  // Rendu du composant 'Table'
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-2">
            <h3 className="display-5 mb-2 text-center">{heading}</h3>
            <p className="mb-5 text-center">
              <i className="text-info font-weight-bold">{items.length}</i>
              {subheading}
            </p>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table id="shoppingCart" className="table table-condensed">
          <thead>
            <tr>
              <th style={{ width: "60%" }}>Produit</th>
              <th style={{ width: "12%" }}>Prix</th>
              <th style={{ width: "12%" }}>Prix Unitaire</th>
              <th style={{ width: "10%" }}>Quantité</th>
              <th style={{ width: "16%" }}></th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
          {/* Contenu du tableau fourni par les enfants */}
        </table>
      </div>
    </section>
  );
}
