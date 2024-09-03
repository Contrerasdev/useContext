import React, { useState, useContext } from "react";

// === Creando los contextos === //
const userContext = React.createContext();
const userToggleContext = React.createContext();
const detallesContext = React.createContext();
// === Creando Hook de contextos === //
export function useUserContext(){
    return useContext(userContext);
}
// ==== Function ===
export function useUserToggleContext(){
    return useContext(userToggleContext);
}
// ==== Contexto de Detalles ===
export function useProducDetalles(){
    return useContext(detallesContext);
}

export function UserProvider(props) {
    const [user, setUser] = useState();

    const handleLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                name: 'Walter Contreras',
                email: "w_contreras@outlook.com"
            });
        }
    }
    const [detalles, setDetalles] = useState({
        "itemnum" : "003",
        "description" : "Camara Nikon",
        "modelo" : "D610",
        "price" : "250"
    });

    return(
        <userContext.Provider value={user}>
            <userToggleContext.Provider value ={handleLogin}>
                <detallesContext.Provider value={detalles}>
                {props.children}
                </detallesContext.Provider>
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}