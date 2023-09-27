import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Politique() {
  return (
    <div className="container politiques">
      <h1 className="mb-4">Politique de Confidentialité</h1>

      <p>
        Cette politique de confidentialité régit la manière dont vos
        informations personnelles sont collectées, utilisées et stockées lorsque
        vous utilisez notre service. Nous accordons une grande importance à la
        protection de vos données personnelles et nous nous engageons à les
        traiter de manière responsable et sécurisée.
      </p>

      <h2 className="mt-4">Collecte des informations</h2>
      <p>
        Lorsque vous utilisez notre service, nous pouvons collecter certaines
        informations personnelles, y compris mais sans s'y limiter :
      </p>
      <ul>
        <li>Votre nom</li>
        <li>Votre adresse e-mail</li>
        <li>Les informations de connexion Google</li>
        <li>Les informations liées à votre compte PayPal</li>
      </ul>

      <h2 className="mt-4">Utilisation des informations</h2>
      <p>
        Nous utilisons les informations collectées uniquement dans le but de
        vous fournir nos services, y compris mais sans s'y limiter :
      </p>
      <ul>
        <li>Authentification via Google Login et Google Sign-In</li>
        <li>
          Utilisation des API MongoDB pour stocker et récupérer des données
        </li>
        <li>Effectuer des transactions via l'API PayPal</li>
      </ul>

      <h2 className="mt-4">Protection des informations</h2>
      <p>
        Nous prenons des mesures de sécurité appropriées pour protéger vos
        informations personnelles contre tout accès non autorisé, altération,
        divulgation ou destruction. Vos données sont stockées de manière
        sécurisée sur nos serveurs.
      </p>

      <h2 className="mt-4">Partage des informations</h2>
      <p>
        Nous ne partageons pas vos informations personnelles avec des tiers,
        sauf si cela est nécessaire pour fournir nos services ou si la loi
        l'exige.
      </p>

      <h2 className="mt-4">Modifications de la politique de confidentialité</h2>
      <p>
        Nous nous réservons le droit de mettre à jour cette politique de
        confidentialité à tout moment. Les modifications seront publiées sur
        cette page, et la date de révision sera mise à jour en conséquence. Nous
        vous encourageons à consulter régulièrement cette page pour rester
        informé des modifications.
      </p>

      <h2 className="mt-4">Contactez-nous</h2>
      <p>
        Si vous avez des questions ou des préoccupations concernant notre
        politique de confidentialité, n'hésitez pas à nous contacter à l'adresse
        suivante : [adresse e-mail de contact].
      </p>
    </div>
  );
}

export default Politique;
