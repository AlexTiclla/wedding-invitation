import { useEffect } from 'react';
import Header from '../layout/Header';
import GuestStats from './GuestStats';
import GuestTables from './GuestTables';
import AttendanceStats from './AttendanceStats';

const Dashboard = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, []);

    return (
        <div>
            <Header 
                title="Dashboard" 
                subtitle="Gestión de invitados y estadísticas"
            />
            <div className="px-6">
                <div className="max-w-7xl mx-auto">
                    <AttendanceStats />
                    <GuestStats />
                    <GuestTables />
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 