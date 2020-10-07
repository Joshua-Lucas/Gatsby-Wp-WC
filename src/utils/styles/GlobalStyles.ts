import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import Theme from "./Theme"

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    * {
        box-sizing: border-box;
        margin: 0;
    }

    * + * {
        margin-top: 1rem;
    }

    html,
    body {
        margin: 0;
        background-color: ${Theme.colors.primary};
        color: ${Theme.colors.secondary};
        font-family:  --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        line-height:1.4;
        

        /*remove margin for the main div that Gatsby mounts into */
        > div {
            margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            line-height: 1.1;

            + * {
                margin-top: 0.5rem;
            }

        }

        li {
            margin-top: 0.25rem;
        }
    }



`

export default GlobalStyle
