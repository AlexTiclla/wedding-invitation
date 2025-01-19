import { useState, useEffect, useRef } from 'react';
import { Plus, X } from '@phosphor-icons/react';
import styles from './GuestManagement.module.css';
import { useGuests } from '../../hooks/useGuests';

const GuestManagement = () => {
    const { addGuest } = useGuests();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        church: '',
        wedding: '',
        partnersName: []
    });
    const [errors, setErrors] = useState({});
    
    const headerRef = useRef(null);

    const scrollToHeader = () => {
        if (headerRef.current) {
            const yOffset = 20;
            const y = headerRef.current.getBoundingClientRect().top + window.pageYOffset - yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

    const handleFormInteraction = () => {
        scrollToHeader();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addGuest(formData);
            setFormData({
                fullName: '',
                phone: '',
                church: '',
                wedding: '',
                partnersName: []
            });
            setErrors({});
            alert('Invitado agregado exitosamente');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer} ref={headerRef}>
                <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Registro de Invitado</h2>
                </div>
                
                <form onSubmit={handleSubmit} 
                      className={styles.form}
                      onClick={handleFormInteraction}
                      onFocus={handleFormInteraction}>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName" className={styles.label}>
                                <span className={styles.requiredLabel}>Nombre Completo</span>
                                <span className={styles.requiredAsterisk}>*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                value={formData.fullName}
                                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                                placeholder="Ej: José Feliciano"
                                required
                            />
                            {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>
                                <span className={styles.requiredLabel}>Teléfono</span>
                                <span className={styles.requiredAsterisk}>*</span>
                            </label>
                            <div className={styles.phoneInputWrapper}>
                                <span className={styles.phonePrefix}>+591</span>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                    className={`${styles.phoneInput} ${errors.phone ? styles.inputError : ''}`}
                                    placeholder="70707070"
                                    required
                                />
                            </div>
                            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span className={styles.requiredLabel}>Asistencia a Iglesia</span>
                                <span className={styles.requiredAsterisk}>*</span>
                            </label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="church"
                                        value="yes"
                                        checked={formData.church === 'yes'}
                                        onChange={(e) => setFormData(prev => ({ ...prev, church: e.target.value }))}
                                        className={styles.radioInput}
                                        required
                                    />
                                    Sí
                                </label>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="church"
                                        value="no"
                                        checked={formData.church === 'no'}
                                        onChange={(e) => setFormData(prev => ({ ...prev, church: e.target.value }))}
                                        className={styles.radioInput}
                                    />
                                    No
                                </label>
                            </div>
                            {errors.church && <span className={styles.errorText}>{errors.church}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span className={styles.requiredLabel}>Asistencia a Boda</span>
                                <span className={styles.requiredAsterisk}>*</span>
                            </label>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="wedding"
                                        value="yes"
                                        checked={formData.wedding === 'yes'}
                                        onChange={(e) => setFormData(prev => ({ ...prev, wedding: e.target.value }))}
                                        className={styles.radioInput}
                                        required
                                    />
                                    Sí
                                </label>
                                <label className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="wedding"
                                        value="no"
                                        checked={formData.wedding === 'no'}
                                        onChange={(e) => setFormData(prev => ({ ...prev, wedding: e.target.value }))}
                                        className={styles.radioInput}
                                    />
                                    No
                                </label>
                            </div>
                            {errors.wedding && <span className={styles.errorText}>{errors.wedding}</span>}
                        </div>

                        <div className={`${styles.formGroup} col-span-1 sm:col-span-2`}>
                            <div className={styles.partnersHeader}>
                                <label className={styles.label}>
                                    Acompañantes ({formData.partnersName.length}/3)
                                </label>
                                {formData.partnersName.length < 3 && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setFormData(prev => ({
                                                ...prev,
                                                partnersName: [...prev.partnersName, '']
                                            }));
                                        }}
                                        className={styles.addPartnerButton}
                                    >
                                        <Plus size={20} />
                                        Agregar acompañante
                                    </button>
                                )}
                            </div>
                            {formData.partnersName.map((partner, index) => (
                                <div key={index} className={styles.partnerInputWrapper}>
                                    <input
                                        type="text"
                                        value={partner}
                                        onChange={(e) => {
                                            const newPartnersName = [...formData.partnersName];
                                            newPartnersName[index] = e.target.value;
                                            setFormData(prev => ({
                                                ...prev,
                                                partnersName: newPartnersName
                                            }));
                                        }}
                                        placeholder="Nombre del acompañante"
                                        className={styles.input}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setFormData(prev => ({
                                                ...prev,
                                                partnersName: prev.partnersName.filter((_, i) => i !== index)
                                            }));
                                        }}
                                        className={styles.removePartnerButton}
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.submitButtonContainer}>
                        <button type="submit" className={styles.submitButton}>
                            Agregar Invitado
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GuestManagement; 