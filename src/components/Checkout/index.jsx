import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../../lib/redux/reducers/user";
import { useNavigate } from "react-router-dom";

const styles = {
  valid: {
    display: "none",
  },
  errors: {
    color: "crimson",
    display: "block",
  },
};

function Checkout() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { current } = useSelector((state) => state.user);

  // État local pour stocker les détails du client et les champs requis
  const [clientDetails, setClientDetails] = useState({
    givenName: current?.givenName,
    familyName: current?.familyName,
    email: current?.email,
  });
  const [required, setRequired] = useState({
    givenName: false,
    familyName: false,
    email: false,
  });

  // Gérer les changements dans les champs de saisie
  const handleOnChange = (e) =>
    setClientDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  // Gérer la soumission du formulaire
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(clientDetails));
    navigate("/payment");
  };

  // Mettre à jour les détails du client lorsqu'ils changent dans le store Redux
  useEffect(() => {
    setClientDetails({
      givenName: current?.givenName,
      familyName: current?.familyName,
      email: current?.email,
    });
  }, [current]);

  // Mettre à jour les champs requis lorsque les détails du client changent
  useEffect(() => {
    setRequired({
      givenName: !!clientDetails?.givenName?.length,
      familyName: !!clientDetails?.familyName?.length,
      email: !!clientDetails?.email?.length,
    });
  }, [clientDetails]);

  // Vérifier si tous les champs requis sont remplis
  const isValid = useMemo(() => {
    let errors = [];
    Object.entries(required).map(([key, value]) => {
      if (!value) {
        errors.push(key);
      }
    });
    return !errors.length;
  }, [required]);

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="py-5 text-center row justify-content-center">
          <div className="col-md-10">
            <h2>Détails du Client :</h2>
          </div>
        </div>
        <div className="row justify-content-center rounded shadow pt-5 pb-5 bg-white ">
          <div className="col-md-8 ">
            <form className="needs-validation" onSubmit={handleOnSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    className="form-control"
                    type="text"
                    name="givenName"
                    id="firstName"
                    placeholder="Veuillez entrer votre prénom"
                    value={clientDetails.givenName}
                    onChange={handleOnChange}
                  />
                  <small
                    style={
                      !!clientDetails.givenName ? styles.valid : styles.errors
                    }
                  >
                    Un prénom valide est requis.
                  </small>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Nom de famille</label>
                  <input
                    className="form-control"
                    type="text"
                    name="familyName"
                    id="lastName"
                    placeholder="Veuillez entrer votre nom de famille"
                    value={clientDetails.familyName}
                    onChange={handleOnChange}
                  />
                  <small
                    style={
                      !!clientDetails.familyName ? styles.valid : styles.errors
                    }
                  >
                    Un nom de famille valide est requis.
                  </small>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  Adresse e-mail
                  <span className="text-muted">(Facultatif)</span>
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="vous@exemple.com"
                  value={clientDetails.email}
                  onChange={handleOnChange}
                />
                <small
                  style={!!clientDetails.email ? styles.valid : styles.errors}
                >
                  Veuillez entrer une adresse e-mail valide pour les mises à
                  jour de commande.
                </small>
              </div>

              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
                disabled={!isValid}
              >
                Continuer vers le paiement
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
