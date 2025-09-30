import { useState, useEffect } from "react";

function ThemeSelect(){

    //+===Estado===+

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('siteTheme') || 'light';
    });
    
    //+===Efeito===+

    //Aplica a classe selecionada no body
    useEffect(() => {
        const classToApply = theme === 'light' ? '' : theme;

        document.body.className = classToApply;
        
        localStorage.setItem('siteTheme', theme);
        
    }, [theme]);
    
    //Quando um novo valor for selecionado ele troca a variável theme
    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setTheme(event.target.value);
    }

    return(
        <select value={theme} onChange={handleChange}>
            <option value="light">Padrão</option>
            <option value="dark">Escuro</option>
            <option value="blue">Azul</option>
            <option value="terracotta">Vermelho</option>
            <option value="forest">Verde</option>
            <option value="beige">Bege</option>
        </select>
    )
}

export default ThemeSelect;