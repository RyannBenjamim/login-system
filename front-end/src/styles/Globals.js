import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 100%;
        height: 100vh;
        background-color: #2b273a;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default Global;
