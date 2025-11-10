import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderStyle = styled.header`
    font-family: Arial;
    color: white;
    background-color: mediumpurple;
    padding-bottom: 20px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        text-align: center;
    }
    div {
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        display: flex;
        flexdirection: row;
        justify-content: center;
        width: 80%;
        align-self: center;
    }
`

export const LinkColor = styled(Link)`
    font-size: 18px;
    color: white;
    padding: 10px 0 10px 0;
    text-decoration: none;
    width: 120px;
    text-align: center;
`