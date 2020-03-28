import { createGlobalStyle } from "styled-components"
import Estilo_Regular from "./Estilo_Regular.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: 'Estilo';
        src: local('Estilo'),
        url(${Estilo_Regular}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`
