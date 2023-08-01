// Importing hooks
import React, { createContext, useContext, useReducer} from "react";

// Creating context that will hold the data being passed around AKA user info
export const StateContext = createContext();

// Higher order component
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);