import NavBar from "../NavBar.tsx/NavBar";
import * as Styled from "./Header.styled";

const Header = () => {
    return (
        <Styled.HeaderElement>
            <Styled.Logo>
                <img src="/swimmie.png" alt="logo" />
                <h1>SWIMMIE</h1>
            </Styled.Logo>
            <NavBar />
        </Styled.HeaderElement>
    );
};

export default Header;
