'use client'

import React, {createContext} from 'react';
import text from '@/data/language.json';

export const GlobalStateContext = createContext(undefined);

export const GlobalStateProvider = ({ children }) => {
    const language = navigator.language.split('-')[0] || 'en';

    return (
        <GlobalStateContext.Provider value={{
            language, text,
        }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
