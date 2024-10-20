import supabase from './supabase';
import { v4 as uuidv4 } from 'uuid';

export async function insertOrder({ userData, storeData }) {
    const { data, error } = await supabase.from('orders').insert([
        {
            id: uuidv4(),
            fullName: userData.fullName,
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

export async function getOrders() {
    let query = supabase.from('orders').select('*');

    const { data, error } = await query;

    if (error) {
        console.error(error);
        throw new Error('Orders could not be a loaded');
    }

    return data;
}
