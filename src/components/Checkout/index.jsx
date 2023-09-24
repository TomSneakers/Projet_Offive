import React, {useEffect, useMemo, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateUserProfile} from "../../lib/redux/reducers/user";
import {useNavigate} from "react-router-dom";
import {useCart} from "../Cart/cartContext.jsx";
import {AddOrder} from "../../lib/queries.js";

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
    const {cart} = useCart();
    let navigate = useNavigate();
    const {current} = useSelector((state) => state.user);

    // État local pour stocker les détails du client et les champs requis
    const [clientDetails, setClientDetails] = useState({
        firstName: current?.givenName,
        lastName: current?.familyName,
        email: current?.email,
        phone: ""
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
        const order = {
            date: new Date(),
            items: cart,
            ownerId: current?.googleId,
            total: cart.reduce((acc, item) => acc + item.price, 0),
            clientDetails: clientDetails
        };

        AddOrder(order).then(() => navigate("/payment"))
                       .catch((err) => console.log(err));
    };

    // Mettre à jour les détails du client lorsqu'ils changent dans le store Redux
    useEffect(() => {
        setClientDetails({
            firstName: current?.givenName,
            lastName: current?.familyName,
            email: current?.email,
        });
    }, [current]);

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
                                        name="firstName"
                                        id="firstName"
                                        placeholder="Veuillez entrer votre prénom"
                                        value={clientDetails.firstName}
                                        onChange={handleOnChange}
                                    />
                                    <small
                                        style={
                                            !!clientDetails.firstName ? styles.valid : styles.errors
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
                                        name="lastName"
                                        id="lastName"
                                        placeholder="Veuillez entrer votre nom de famille"
                                        value={clientDetails.lastName}
                                        onChange={handleOnChange}
                                    />
                                    <small
                                        style={
                                            !!clientDetails.lastName ? styles.valid : styles.errors
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

                            <div className="mb-3">
                                <label htmlFor="phone">
                                    Numéro de télephone
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="06 12 34 56 78"
                                    value={clientDetails.phone}
                                    onChange={handleOnChange}
                                />
                                <small
                                    style={!!clientDetails.phone !== "" ? styles.valid : styles.errors}
                                >
                                    Veuillez entrer un numéro de téléphone valide.
                                </small>
                            </div>

                            <button
                                className="btn btn-primary btn-lg btn-block"
                                type="submit"
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
