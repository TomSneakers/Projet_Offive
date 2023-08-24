import React, {useEffect} from "react";
import { service} from "../../lib/queries";
import Card from "./Card.jsx";
import {Context} from "../../context/index.jsx";

// Styles pour la galerie d'images
const styles = {
    gallery: {
        height: "calc(100vh - 120px)",
        overflow: "scroll",
    },
};

// Composant de la galerie d'images
function Gallery() {
    const {category} = React.useContext(Context); // Obtient les filtres cochés depuis le contexte

    const [products, setProducts] = React.useState([]); // State pour stocker les produits avec filtres
    const [loading, setLoading] = React.useState(true); // State pour le chargement
    const [error, setError] = React.useState(false); // State pour les erreurs

    useEffect(() => {
        service.getAllProducts()
               .then((res) => {
                   setProducts(res);
                   setLoading(false);
               })
               .catch((err) => {
                   setError(true);
                   setLoading(false);
               });
    }, []);

    useEffect(() => {
        setLoading(true);
        service.getProducts(category)
            .then((res) => {
                setProducts(res);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
            });
    }, [category]);

    // Gestion des différents états de chargement et d'erreur
    if (loading) return <div>En cours de chargement...</div>;
    if (error) return <div>Une erreur est survenue...</div>;

    return (
        <div className="col-md-8 order-md-2 col-lg-9">
            <div className="container-fluid" style={styles.gallery}>
                <div className="row">
                    {products.map((product) => (
                        <Card key={product.id} product={product}/> // Affiche chaque produit sous forme de carte
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery; // Exporte le composant de la galerie d'images
