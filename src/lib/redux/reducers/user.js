// Définition du réducteur (reducer) 'user' avec une valeur par défaut pour l'état initial
export default function user(state = { current: null, error: null }, { type, payload }) {
    switch (type) {
        case "LOGIN": // Cas où l'action est "LOGIN"
            return payload; // Retourne les données utilisateur contenues dans l'action payload

        case "LOGOUT": // Cas où l'action est "LOGOUT"
            return { current: null, error: null }; // Réinitialise les données utilisateur et les erreurs

        case "ERROR_AUTH": // Cas où l'action est "ERROR_AUTH"
            return payload; // Retourne les erreurs d'authentification contenues dans l'action payload
        case "UPDATE_USER_PROFILE": // Cas où l'action est "UPDATE_USER_PROFILE"
            return {
                ...state, // Conserve les données utilisateur existantes
                current: {
                    ...state.current, // Conserve les données utilisateur actuelles
                    ...payload.details // Met à jour les détails du profil utilisateur
                }
            };

        default:
            return state // Retourne l'état inchangé si l'action n'est pas reconnue
    }
}

// Définition des créateurs d'actions (action creators)

// Créateur d'action pour gérer la connexion de l'utilisateur
export function handleLogin(user) {
    return {
        type: "LOGIN", // Type d'action correspondant à la connexion
        payload: { current: user, error: null } // Données associées à l'action (ici, les données utilisateur et aucune erreur)
    }
}

// Créateur d'action pour gérer la déconnexion de l'utilisateur
export function handleLogout() {
    return {
        type: "LOGOUT" // Type d'action correspondant à la déconnexion
    }
}

// Créateur d'action pour gérer les erreurs d'authentification
export function handleErrors(err) {
    return {
        type: "ERROR_AUTH", // Type d'action correspondant aux erreurs d'authentification
        payload: { current: null, error: null } // Données associées à l'action (ici, aucune donnée utilisateur et aucune erreur)
    }
}

// Créateur d'action pour mettre à jour le profil utilisateur
export function updateUserProfile(details) {
    return {
        type: "UPDATE_USER_PROFILE", // Type d'action correspondant à la mise à jour du profil utilisateur
        payload: { details } // Données associées à l'action (ici, les détails du profil à mettre à jour)
    }
}
