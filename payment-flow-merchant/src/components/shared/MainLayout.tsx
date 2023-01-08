import styled from 'styled-components';

const StyledMainLayout = styled.div.attrs({
    className: 'main-layout w-full h-full',
})`
    ${({ screen = false }: { screen?: boolean }) => screen && `min-height: 100vh; min-width: 100vw;`}
`;

export default StyledMainLayout;
