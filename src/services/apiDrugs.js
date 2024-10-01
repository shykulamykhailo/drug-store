import supabase from './supabase';

export async function getDrugs() {
    const { data, error } = await supabase.from('drugs').select('*');
    if (error) {
        console.log(error);
        throw new Error('Drugs could not be a loaded');
    }

    return data;
}
