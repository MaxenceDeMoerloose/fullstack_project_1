import {createGlobalStyle} from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";


export const Setup = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
`