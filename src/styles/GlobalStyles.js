import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');

    html {
        background-color: #1f2937;
        color: white;
    }

    a {
  color: inherit;

}


`;

export default GlobalStyles;
