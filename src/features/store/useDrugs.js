import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getDrugs } from '../../services/apiDrugs';
import { useSearchParams } from 'react-router-dom';

export function useDrugs() {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();

    const filterValue = searchParams.get('category');
    const filter =
        !filterValue || filterValue === 'all'
            ? null
            : { field: 'category', value: filterValue };

    console.log(filter);

    const page = !searchParams.get('page')
        ? 1
        : Number(searchParams.get('page'));

    const {
        isLoading,
        data: { data: drugs, count } = {},
        error,
    } = useQuery({
        queryKey: ['drugs', filter, page],
        queryFn: () => getDrugs({ filter, page }),
    });

    const pageCount = Math.ceil(count / 15);

    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ['drugs', filter, page + 1],
            queryFn: () => getDrugs({ filter, page: page + 1 }),
        });

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ['drugs', filter, page - 1],
            queryFn: () => getDrugs({ filter, page: page - 1 }),
        });

    return { isLoading, error, drugs, count };
}
