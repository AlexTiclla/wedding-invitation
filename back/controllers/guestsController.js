import Guest from '../models/Guest.js';

const guestsController = {

   getGuests: async (req, res) => {
      try {
         const guests = await Guest.find();
         res.status(200).json(guests);
      } catch (error) {
         console.error(error);
         res.status(500).json({ success: false, error: 'Error al obtener los invitados' });
      }
   },

   postGuests: async (req, res) => {
      const { fullName, phone, assist, partner, partnersName, childrens, childrensQuantity, assistChurch, dietaryRestrictions, dietaryRestrictionsIndications, message } = req.body;
      const formatedName = fullName.toLowerCase().trim().replace(/\s+/g, ' ');
      try {
         const existingGuest = await Guest.findOne({ fullName: formatedName });
         if (existingGuest) {
            return res.status(400).json({ success: false, error: 'Ya existe un invitado con el mismo nombre completo' });
         }

         const newGuest = new Guest({ fullName: formatedName, phone, assist, partner, partnersName, childrens, childrensQuantity, assistChurch, dietaryRestrictions, dietaryRestrictionsIndications, message });
         await newGuest.save();
         res.json({ success: true });
      } catch (error) {
         console.error(error);
         res.status(500).json({ success: false, error: 'Error al almacenar el invitado' });
      }
   },

   updateGuest: async (req, res) => {
      const { id } = req.params;
      try {
         const updatedGuest = await Guest.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
         );
         
         if (!updatedGuest) {
            return res.status(404).json({ 
               success: false, 
               error: 'Invitado no encontrado' 
            });
         }

         res.status(200).json(updatedGuest);
      } catch (error) {
         console.error(error);
         res.status(500).json({ 
            success: false, 
            error: 'Error al actualizar el invitado' 
         });
      }
   },

   updateAttendance: async (req, res) => {
      const { id } = req.params;
      const { attended } = req.body;

      try {
         const guest = await Guest.findByIdAndUpdate(
            id,
            { attended },
            { new: true }
         );

         if (!guest) {
            return res.status(404).json({
               success: false,
               error: 'Invitado no encontrado'
            });
         }

         res.status(200).json({
            success: true,
            guest
         });
      } catch (error) {
         console.error(error);
         res.status(500).json({
            success: false,
            error: 'Error al actualizar la asistencia'
         });
      }
   },

   getAttendanceStats: async (req, res) => {
      try {
         const stats = await Guest.aggregate([
            {
               $group: {
                  _id: null,
                  total: { $sum: 1 },
                  confirmed: { 
                     $sum: { $cond: [{ $eq: ['$assist', true] }, 1, 0] }
                  },
                  attended: { 
                     $sum: { $cond: [{ $eq: ['$attended', true] }, 1, 0] }
                  }
               }
            }
         ]);

         res.status(200).json(stats[0] || {
            total: 0,
            confirmed: 0,
            attended: 0
         });
      } catch (error) {
         console.error(error);
         res.status(500).json({
            success: false,
            error: 'Error al obtener estadísticas'
         });
      }
   }
}

export default guestsController;