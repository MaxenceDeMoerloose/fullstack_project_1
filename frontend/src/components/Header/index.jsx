import * as S from "./styles";

function Header(colorLink) {
    return (
        <S.HeaderStyle>
            <h2>Header of the page</h2>
            <div>
                <S.LinkColor to="/home">home</S.LinkColor>
                <S.LinkColor to="/reservation">reservation</S.LinkColor>
                <S.LinkColor to="/freelances">freelances</S.LinkColor>
                <S.LinkColor to="/fetch">fetch</S.LinkColor>
                <S.LinkColor to="/fetch-sheet">fetch sheet</S.LinkColor>
                <S.LinkColor to="/about">about</S.LinkColor>
                <S.LinkColor to="/calendar">calendar</S.LinkColor>
            </div>
        </S.HeaderStyle>
    )
}

export default Header;