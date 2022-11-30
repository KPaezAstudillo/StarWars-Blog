import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
    const [contextData, setContextData] = useState([]);
    const value = {contextData, setContextData};

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>

    )
}