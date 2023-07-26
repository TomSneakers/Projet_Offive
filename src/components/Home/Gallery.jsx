import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from "../../lib/queries";
import Card from './Card.jsx';
import { Context } from '../../context/index.jsx';

const styles = {
  gallery: {
    height: 'calc(100vh - 120px)',
    overflow: 'scroll'
  }
};

function Gallery({ category }) {
  const { filtersChecked } = React.useContext(Context);
  let array = [];
  const { loading, error, data } = useQuery(GET_PRODUCTS, { variables: { category: category } });

  const productWithFilters = () => {
    if (!filtersChecked.length) { return data?.products; }
    filtersChecked.forEach((filter) => {
      array = [...array, ...data?.products?.filter(product => product.filter === filter.toLowerCase())]

    });
    return array;
  }
  if (loading) return <div>En cours de chargement...</div>;
  if (error) return <div>Une erreur est survenue...</div>;
  if (!data) return <div>Aucune donnée trouvée...</div>;

  const products = productWithFilters();
  return (
    <div className="col-md-8 order-md-2 col-lg-9">
      <div className="container-fluid" style={styles.gallery}>
        <div className="row">
          {products.map((product) => <Card product={product} />)}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
