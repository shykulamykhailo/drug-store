import { useQuery } from '@tanstack/react-query';
import { getDrugs } from '../../services/apiDrugs';

export function useDrugs() {
    const {
        isLoading,
        data: drugs,
        error,
    } = useQuery({
        queryKey: ['drugs'],
        queryFn: getDrugs,
    });
    return { isLoading, error, drugs };
}
