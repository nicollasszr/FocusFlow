import { Link } from "react-router-dom";
import '../Styles/Header.css'

function Header(){

    return(

        <header>
            <div>
                <h1>
                    Focus
                    <span>Flow</span>
                </h1>
            </div>
            <div></div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/timer"}>Timer</Link>
                        </li>
                        <li>
                            <Link to={"/settings"}>Configurações</Link>
                        </li>
                        <li>
                            <Link to={"/my-space"}>Meu Espaço</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )

}

export default Header;