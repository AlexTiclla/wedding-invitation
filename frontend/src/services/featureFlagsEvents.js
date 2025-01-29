const FEATURE_FLAGS_UPDATE = 'FEATURE_FLAGS_UPDATE';

export const featureFlagsEvents = {
    subscribe: (callback) => {
        window.addEventListener(FEATURE_FLAGS_UPDATE, callback);
        return () => window.removeEventListener(FEATURE_FLAGS_UPDATE, callback);
    },
    
    emit: () => {
        window.dispatchEvent(new Event(FEATURE_FLAGS_UPDATE));
    }
}; 