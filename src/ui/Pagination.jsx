import { useSearchParams } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';

const StyledPagination = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
    margin-top: 30px;
`;

function Pagination({ count }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get('page')
        ? 1
        : Number(searchParams.get('page'));

    const pageCount = Math.ceil(count / 15);

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
        <StyledPagination>
            <div>
                Showing <span>{(currentPage - 1) * 15 + 1}</span> to{' '}
                <span>
                    {currentPage === pageCount ? count : currentPage * 15}
                </span>
                of <span>{count}</span> results
            </div>
            <div>
                <Button
                    size="small"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
            </div>
            <div>
                <Button
                    size="small"
                    onClick={nextPage}
                    disabled={currentPage === pageCount}
                >
                    Next
                </Button>
            </div>
        </StyledPagination>
    );
}

export default Pagination;
