import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledFilter = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-0);
    height: 20rem;
    gap: 0.5rem;
`;
const StyledButton = styled.button`
    padding: 10px 0;
    width: 200px;
    background-color: var(--color-green-200);
    border-radius: 5px;
    transition: background-color 0.3s ease, border 0.3s ease;

    &:hover {
        background-color: var(--color-green-400);
    }

    ${(props) => props.$isActive && `background-color: var(--color-green-400);`}
`;

function Filter({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeOption, setActiveOption] = useState(
        searchParams.get(filterField) || options.at(0).value
    );

    function handleClick(value) {
        searchParams.set(filterField, value);
        if (searchParams.get('page')) searchParams.set('page', 1);
        setSearchParams(searchParams);
        setActiveOption(value);
    }

    return (
        <StyledFilter>
            {options.map((option) => (
                <StyledButton
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    $isActive={activeOption === option.value}
                >
                    {option.label}
                </StyledButton>
            ))}
        </StyledFilter>
    );
}

export default Filter;
