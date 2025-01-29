import axios from 'axios';
import { featureFlagsEvents } from './featureFlagsEvents';

// Crear instancia de axios con configuración base
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Feature Flags Service
export const featureFlagsService = {
    // Obtener todos los feature flags
    getAllFeatures: async () => {
        try {
            const response = await api.get('/api/features');
            return response.data;
        } catch (error) {
            console.error('Error fetching all features:', error);
            throw error;
        }
    },

    // Obtener un feature flag específico
    getFeature: async (featureKey) => {
        try {
            const response = await api.get('/api/feature-flags');
            return response.data[featureKey];
        } catch (error) {
            console.error(`Error fetching feature ${featureKey}:`, error);
            throw error;
        }
    },

    // Actualizar feature flags
    updateFeatures: async (features) => {
        try {
            const response = await api.post('/api/features', features);
            // Emitir evento de actualización
            featureFlagsEvents.emit();
            return response.data.features;
        } catch (error) {
            console.error('Error updating features:', error);
            throw error;
        }
    }
};

// Actualizar el hook para usar el servicio centralizado 