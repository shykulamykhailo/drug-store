import { useQuery } from '@tanstack/react-query';
import { getMainDrugs } from '../../services/apiDrugs';

export function useMainDrugs() {
    const {
        isLoading,
        data: mainDrugs,
        fetchStatus,
    } = useQuery({
        queryKey: ['main_drugs'],
        queryFn: getMainDrugs,
    });

    return { isLoading, mainDrugs, fetchStatus };
}
