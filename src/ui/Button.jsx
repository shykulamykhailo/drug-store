import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({ bgColor }) => bgColor || 'var(--color-green-300)'};
    color: ${({ color }) => color || 'var(--color--grey-900)'};
    border: none;
    padding: ${({ size }) =>
        size === 'large'
            ? '12px 24px'
            : size === 'small'
            ? '6px 12px'
            : '10px 20px'};
    font-size: ${({ size }) =>
        size === 'large' ? '18px' : size === 'small' ? '12px' : '16px'};

    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ hoverColor }) =>
            hoverColor || 'var(--color-green-400)'};
    }

    &:active {
        background-color: ${({ activeColor }) =>
            activeColor || 'var(--color-green-500)'};
    }

    &:disabled {
        background-color: var(--color-grey-300);
        cursor: not-allowed;
    }
`;

function Button({
    children,
    onClick,
    size,
    bgColor,
    color,
    hoverColor,
    activeColor,
    disabled,
}) {
    return (
        <StyledButton
            onClick={onClick}
            size={size}
            bgColor={bgColor}
            color={color}
            hoverColor={hoverColor}
            activeColor={activeColor}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
