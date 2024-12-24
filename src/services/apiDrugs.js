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

    if (filter)
        query = query[filter.method || 'eq'](filter.field, filter.value);

    if (page) {
        const from = (page - 1) * 9;
        const to = from + 9 - 1;
        query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) {
        console.log(error);
        throw new Error('Drugs could not be a loaded');
    }
    return { data, count };
}

export async function getMainDrugs() {
    let { data: main_drugs, error } = await supabase
        .from('main_drugs')
        .select('*');

    if (error) {
        console.log(error);
        throw new Error('Main drugs could not be a loaded');
    }

    return main_drugs;
}
