import styled from 'styled-components';

export const StyledNumpadButtonContainer = styled.div.attrs({
    className: 'numpad-buttons grid grid-cols-3',
})``;

export const StyledNumpadButton = styled.button.attrs({
    className: `
    numpad-button
    w-20 h-20
    flex justify-center
    items-center m-3
    rounded-full
    cursor-pointer
    font-bold bg-[#464b53]
    text-[#eef5f6]
    hover:bg-[#585e69]`,
})`
    transition: background-color 0.1s ease-in-out;
    font-size: 2rem;
    line-height: 2rem;
`;
