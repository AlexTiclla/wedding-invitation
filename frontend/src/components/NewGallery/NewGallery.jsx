import FeatureWrapper from '../FeatureWrapper/FeatureWrapper';
import './NewGallery.css';

const NewGallery = () => {
  return (
    <FeatureWrapper featureKey="NEW_GALLERY">
      <section className="gallery-section w-full flex flex-col items-center justify-center px-4 py-6 mt-20">
        <div className="text-center">
          <h2 className="gallery-title text-xl font-semibold mb-3">Mira nuestras fotos 📸</h2>
          <p className="gallery-description text-gray-600 mb-4">
            Haz clic aquí para ver todas las fotos de nuestra boda
          </p>
          <a 
            href="https://photos.app.goo.gl/qwDUQrebGGdXboXR6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gallery-button inline-block px-6 py-2 bg-blue text-white rounded-lg hover:bg-opacity-90 transition-all"
          >
            Ver Álbum de Fotos 🤍
          </a>
        </div>
      </section>
    </FeatureWrapper>
  );
};

export default NewGallery; 