import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Special Elite', monospace;
        /* background-color: hsla(54 60% 93% / 1); */
        color: hsla(222 55% 19% / 1);
        line-height: 1.5;
    }

    mark {
        background: linear-gradient(
            -100deg,
            hsla(48, 92%, 75%, 0.3),
            hsla(48, 92%, 75%, 0.7) 95%,
            hsla(48, 92%, 75%, 0.1)
        );
    }
`;

export default GlobalStyles;
