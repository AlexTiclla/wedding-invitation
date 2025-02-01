import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AttendanceStats.module.css';

const AttendanceStats = () => {
    const [stats, setStats] = useState({
        total: 0,
        confirmed: 0,
        attended: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/guests/stats`);
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Cargando estadísticas...</div>;
    }

    const attendanceRate = stats.confirmed > 0 
        ? ((stats.attended / stats.confirmed) * 100).toFixed(1) 
        : 0;

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Estadísticas de Asistencia</h3>
            <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                    <span className={styles.label}>Total Invitados</span>
                    <span className={styles.value}>{stats.total}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.label}>Confirmados</span>
                    <span className={`${styles.value} ${styles.confirmed}`}>
                        {stats.confirmed}
                    </span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.label}>Asistieron</span>
                    <span className={`${styles.value} ${styles.attended}`}>
                        {stats.attended}
                    </span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.label}>Tasa de Asistencia</span>
                    <span className={`${styles.value} ${styles.rate}`}>
                        {attendanceRate}%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AttendanceStats; 