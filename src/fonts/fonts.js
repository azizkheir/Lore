import { createGlobalStyle } from "styled-components"

import Estilo_Regular from "./Estilo_Regular.woff"
import Estilo_RegularWoff2 from "./Estilo_Regular.woff2"

export default createGlobalStyle`
    @font-face {
        font-family: 'Estilo';
        src: local('Estilo'), local('Estilo'),
        url(${Estilo_RegularWoff2}) format('woff2'),
        url(${Estilo_Regular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`
