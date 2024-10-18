import supabase from './supabase';

export async function getDrugs({ page, filter }) {
    let query = supabase
        .from('drugs')
        .select(
            'id, name, category, price, quantity, date, drugImage, description',
            {
                count: 'exact',
            }
        );

    console.log(filter);

    if (filter)
        query = query[filter.method || 'eq'](filter.field, filter.value);

    if (page) {
        const from = (page - 1) * 15;
        const to = from + 15 - 1;
        query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) {
        console.log(error);
        throw new Error('Drugs could not be a loaded');
    }
    return { data, count };
}
