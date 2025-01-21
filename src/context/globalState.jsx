'use client';

import React, { createContext, useContext } from "react";
import text from "@/data/language.json";

export const GlobalStateContext = createContext(null);

export const GlobalStateProvider = ({ children }) => {
    const language = navigator.language.split('-')[0] || 'en';

    return (
        <GlobalStateContext.Provider value={{ language, text }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider");
    }
    return context;
};
