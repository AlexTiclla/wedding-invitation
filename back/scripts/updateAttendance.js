import 'dotenv/config.js';
import '../config/database.js';
import Guest from '../models/Guest.js';

const updateAttendance = async () => {
    try {
        console.log('🚀 Iniciando actualización del campo attended...');
        
        const result = await Guest.updateMany(
            {}, // todos los documentos
            { $set: { attended: false } }, // establecer attended en false
            { upsert: false }
        );

        console.log('✅ Actualización completada');
        console.log(`📊 Documentos modificados: ${result.modifiedCount}`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error durante la actualización:', error);
        process.exit(1);
    }
};

updateAttendance(); 