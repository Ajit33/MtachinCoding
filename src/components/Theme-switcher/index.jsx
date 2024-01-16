import UseLocalStorage from "./UseLocalStorage"

import './style.css';
const ThemeSwitcher=()=>{
    const[theme,setTheme]=UseLocalStorage('theme','dark');
    function handelToggeleTheme(){
        setTheme(theme==='light'?'dark' :'light')
    }
    return (
       
        <div className="themeSwitcher" data-theme={theme}>
            <div className="container">
                <p>Hello World</p>
                <button onClick={handelToggeleTheme} className="btn">Change Theme</button>
            </div>
        </div>
    )
}
export default ThemeSwitcher;