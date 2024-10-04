import supabase from './supabase';
import { v4 as uuidv4 } from 'uuid';

export async function insertOrder({ userData, storeData }) {
    const { data, error } = await supabase.from('orders').insert([
        {
            id: uuidv4(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            orderedDrugs: storeData,
            location: userData.location,
            phoneNumber: userData.phoneNumber,
        },
    ]);

    if (error) {
        console.error('Error inserting order data:', error);
    } else {
        console.log('Order data inserted succesfully', data);
    }
}
