import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import {
  handleLogin,
  handleLogout,
  handleErrors,
} from "../../lib/redux/reducers/user";
import { useDispatch, useSelector } from "react-redux";

const styles = {
  img: {
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    border: "2px solid #bdc3c7",
  },
  dropdown: {
    background: "transparent",
    borderColor: "transparent",
  },
};

// Composant GoogleBtn
const GoogleBtn = () => {
  // ID client Google
  const CLIENT_ID =
    "583235865601-bju681ptvf4j3cuuhsgmdvao4hvsb7hc.apps.googleusercontent.com";

  // Récupération du dispatcheur Redux
  const dispatch = useDispatch();

  // Sélection des données utilisateur depuis le state Redux
  const { current, error } = useSelector((state) => state.user);

  // Gestionnaire de succès de connexion
  const handleLoginSuccess = (response) => {
    dispatch(handleLogin(response.profileObj));
    console.log(response);
  };

  // Gestionnaire de succès de déconnexion
  const handleLogoutSuccess = () => {
    dispatch(handleLogout());
  };

  // Gestionnaire d'échec de connexion
  const handleLoginFailure = (response) => {
    dispatch(handleErrors({ ...response.error, ...response.details }));
  };

  // Gestionnaire d'échec de déconnexion
  const handleLogoutFailure = (response) => {
    dispatch(handleErrors({ ...response.error, ...response.details }));
  };

  // Initialisation du client d'authentification Google
  const initializeAuthClient = () => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ client_id: CLIENT_ID });
    });
  };

  // Utilisation de useEffect pour initialiser le client d'authentification au chargement
  useEffect(() => {
    initializeAuthClient();
  }, []);

  // Rendu JSX du composant GoogleBtn
  return (
    <>
      {current ? (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-toggle="dropdown" // Ajoutez cette ligne pour activer le menu déroulant
            aria-expanded="false"
          >
            <img
              width="32"
              height="32"
              src={current?.imageUrl}
              style={styles.img}
              alt="profile"
            />
          </button>
          <div // Utilisez une div à la place d'une ul pour le menu déroulant
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleLogoutSuccess}
              onFailure={handleLogoutFailure}
            />
          </div>
        </div>
      ) : (
        <>
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
            isSignedIn={true}
          />
        </>
      )}
    </>
  );
};

export default GoogleBtn; // Exporte le composant GoogleBtn
