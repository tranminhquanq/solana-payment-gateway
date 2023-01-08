import styled from 'styled-components';

export const StyledMainContainer = styled.div.attrs({
    className: 'main-container h-full grid grid-cols-3',
})``;

export const StyledMainLeftContent = styled.div.attrs({
    className: 'main-left-content h-screen bg-[#2a2a2a] col-span-2 flex flex-col justify-center text-white',
})``;

export const StyledMainLeftContentTop = styled.div.attrs({
    className: 'main-left-content-top position-absolute top-0 left-0 right-0',
})``;

export const StyledFullScreenButton = styled.button.attrs({
    className: `
    inline-flex	
    fullscreen-button
    w-20 h-20
    p-4
    justify-center 
    items-center
    cursor-pointer
    bg-inherit	
  `,
})``;

export const StyledMainLeftContentMiddle = styled.div.attrs({
    className: 'main-left-content-middle flex flex-col justify-center items-center',
})`
    flex: 1 1;
`;

export const StyledMainLeftContentMiddleContainer = styled.div.attrs({
    className: 'main-left-content-middle-container',
})``;

export const StyledMainLeftContentBottom = styled.div.attrs({
    className: 'main-left-content-bottom flex justify-center items-center my-4 font-medium',
})`
    gap: 10px;
    line-height: 3rem;
`;

export const StyledMainRightContent = styled.div.attrs({
    className: 'main-right-content h-screen bg-[#222] col-auto flex flex-col text-white',
})``;

export const StyleNumPadText = styled.p.attrs({
    className: 'num-pad-text text-center mb-4',
})``;

export const StyledNumpadValue = styled.p.attrs({
    className: 'numpad-value text-center font-bold',
})`
    font-size: 3rem;
    line-height: 64px;
    margin-bottom: 64px;
`;

export const StyledMainRightContentTop = styled.div.attrs({
    className: `
    main-right-content-top 
    my-12 mx-8`,
})`
    flex: 1 1;
`;

export const StyledMainRightContentBottom = styled.a.attrs({
    className: `
    main-right-content-bottom
    h-12 p-4 m-4
    inline-flex
    items-center
    text-center
    font-medium
    `,
})`
    gap: 0.5rem;
`;

export const StyledSummaryContainer = styled.div.attrs({
    className: `summary-container`,
})``;

export const StyledSummaryTitle = styled.p.attrs({
    className: `
    summary-container
    pb-3 mb-3
    leading-6	`,
})`
    box-shadow: inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.25);
`;

export const StyledSummaryTotal = styled.div.attrs({
    className: `
    flex
    justify-between
    items-end
    pb-3 mb-3
    leading-6
  `,
})`
    box-shadow: inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.25);
`;

export const StyledSummaryTotalLabel = styled.p.attrs({})`
    font-size: 14px;
`;

export const StyledSummaryTotalAmountContainer = styled.div.attrs({
    className: `
    text-right`,
})``;

export const StyledSummaryTotalAmountLabel = styled.p.attrs({
    className: `
    leading-8	
  `,
})`
    font-size: 14px;
`;

export const StyledSummaryTotalValue = styled.div.attrs({
    className: `
    leading-8	
    font-bold
  `,
})`
    font-size: 2rem;
`;

export const StyledGenerateQRCodeContainer = styled.div.attrs({
    className: `mt-12 flex flex-col justify-center items-center`,
})``;
