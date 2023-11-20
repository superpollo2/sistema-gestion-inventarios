import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://buscbjudkwdjtfzvxdkj.supabase.co'; 
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1c2NianVka3dkanRmenZ4ZGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MTU1MzEsImV4cCI6MjAxNDI5MTUzMX0.2I67WPYjXIF_nlS3MdGnpjesEoaDi-mnlPx3oNObNP8';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

const useAddInventory = () => {
  const addInventory = async (materialId: string, userId: string, quantity: number, movementType: string) => {
    try {
      if (movementType !== 'ENTRADA' && movementType !== 'SALIDA') {
        throw new Error('Invalid movement type. Must be "ENTRADA" or "SALIDA".');
      }

      const { data, error } = await supabase
        .from('inventory_movement')
        .upsert([
          {
            materialId,
            userId,
            quantity,
            movementType,
          },
        ]);

      if (error) {
        throw new Error('Failed to add inventory');
      }

      return data;
    } catch (error) {
      console.error('Error adding inventory:', error);
      throw error;
    }
  };

  return {
    addInventory,
  };
};

export { useAddInventory };
