import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

function Footer() {
    const theme = useContext(ThemeContext);
    console.log(theme);
    return (
        <div>Le Footer est ici</div>
    )
}

export default Footer;