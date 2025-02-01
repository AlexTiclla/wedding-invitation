import { createContext, useContext, useState, useEffect } from 'react';
import { getGuests } from '../services/api';
import axios from 'axios';

const GuestsContext = createContext();

export const GuestsProvider = ({ children }) => {
    const [guests, setGuests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchGuests = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/guests`);
            setGuests(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching guests:', error);
            setError('Error al cargar los invitados');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGuests();
    }, []);

    return (
        <GuestsContext.Provider value={{ 
            guests, 
            setGuests, 
            loading, 
            error, 
            fetchGuests 
        }}>
            {children}
        </GuestsContext.Provider>
    );
};

export const useGuestsContext = () => {
    const context = useContext(GuestsContext);
    if (!context) {
        throw new Error('useGuestsContext must be used within a GuestsProvider');
    }
    return context;
}; 