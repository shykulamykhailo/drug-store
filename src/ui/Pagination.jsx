import { useSearchParams } from 'react-router-dom';

function Pagination({ count }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get('page')
        ? 1
        : Number(searchParams.get('page'));

    const pageCount = Math.ceil(count / 10);

    const nextPage = () => {
        const next = currentPage === pageCount ? currentPage : currentPage + 1;

        searchParams.set('page', next);
        setSearchParams(searchParams);
    };

    const prevPage = () => {
        const prev = currentPage === pageCount ? currentPage : currentPage - 1;

        searchParams.set('page', prev);
        setSearchParams(searchParams);
    };

    if (pageCount <= 1) return null;

    return (
        <div>
            <div>
                Showing <span>{(currentPage - 1) * 10 + 1}</span> to{' '}
                <span>
                    {currentPage === pageCount ? count : currentPage * 10}
                </span>
                of <span>{count}</span> results
            </div>
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </button>
            </div>
            <div>
                <button onClick={nextPage} disabled={currentPage === pageCount}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;
