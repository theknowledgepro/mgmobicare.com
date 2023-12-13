'use client';
import React, { createContext, useContext, useState } from 'react';
const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [toast, setToast] = useState(null);
	return <Context.Provider value={{ toast, setToast }}>{children}</Context.Provider>;
};

export const AppContext = () => {
	return useContext(Context);
};

export default ContextProvider;
