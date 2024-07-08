import React, { createContext, useContext, useState, useEffect } from 'react';


const LocationContext = createContext();

export const useLocations = () => {
    return useContext(LocationContext);
};

const LocationProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                const data = await response.json();
                setLocations(data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    return (
        <LocationContext.Provider value={{ locations, loading, error }}>
            {children}
        </LocationContext.Provider>
    );
};

export default LocationProvider;
