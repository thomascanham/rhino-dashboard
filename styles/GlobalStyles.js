import { createGlobalStyle } from 'styled-components';

const GlobalStyling = createGlobalStyle`
    html {
        --blue: #01A0FB;
        --grey: rgba(0, 0, 0, 0.03);
        --gray: var(--grey);

        --bs: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }

    *, html, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.75;
        color: #2b2b2b;
    }

    
    h1, h2, h3, h4, h5 {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    }

    h1 {
    margin-top: 0;
    font-size: 3.052rem;
    }

    h2 {font-size: 2.441rem;}

    h3 {font-size: 1.953rem;}

    h4 {font-size: 1.563rem;}

    h5 {font-size: 1.25rem;}

    small, .text_small {font-size: 0.8rem;}

    button {
        outline: none;
        border: none;
        cursor: pointer;
        background: transparent;
        font-family: 'Montserrat', sans-serif;
    }

    .container {
        width: 98%;
        max-width: 1250px;
        margin: 0 auto;
    }

    section {
        padding: 60px 0;
    }
`;

export default GlobalStyling;
