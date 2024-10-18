import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledFilter = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
`;
const StyledButton = styled.button`
    padding: 10px 0;
    width: 200px;
    background-color: var(--color-green-300);
    border: 1px solid var(--color-green-900);
    border-radius: 3px;
    margin-bottom: 3px;
    transition: background-color 0.3s ease, border 0.3s ease;

    &:hover {
        background-color: var(--color-green-400);
    }

    ${({ isActive }) =>
        isActive &&
        `
        border: 2px solid var(--color-green-700); 
        background-color: var(--color-green-400); 
    `}

    &:focus {
        outline: none;
    }
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
                    isActive={activeOption === option.value}
                >
                    {option.label}
                </StyledButton>
            ))}
        </StyledFilter>
    );
}

export default Filter;
