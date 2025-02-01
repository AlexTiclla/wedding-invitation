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
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Header 
                title="Dashboard" 
                subtitle="Gestión de invitados y estadísticas"
            />
            <div className="px-4 sm:px-6 lg:px-8 py-6 w-full">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <AttendanceStats />
                        <GuestStats />
                    </div>

                    {/* Tables Section */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="p-4 sm:p-6">
                            <GuestTables />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 