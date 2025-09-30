import ThemeSelect from "./Components/ThemeSelect";
import './Styles/SettingsPage.css'
import { FaGithub } from "react-icons/fa";


function SettingsPage(){

    return(

        <main>
                <h2>Tema</h2>
                <ThemeSelect />
            <hr/>
                <h2>Pomodoro</h2>
                <p>Pausas</p>
            <hr/>
                <h2>Projeto</h2>
                <h3><a href="https://github.com/nicollasszr/FocusFlow" target="blank"><FaGithub size={30}/> - GitHub</a></h3>
        </main>

    )

}

export default SettingsPage;