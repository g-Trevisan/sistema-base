import { createContext, useCallback, useMemo, useState, useContext } from "react";
import { ThemeProvider } from "@mui/material";

import { DarkTheme, LightTheme } from "../themes/index";
import { Box } from '@mui/system'

interface IThemeContextData {  //definindo a interface de contexto de tema global
    themeName: 'light' | 'dark'; // definindo o themeName com somente os valores possíveis para a seleçao
    toggleTheme: () => void; //funçao que irá trocar o tema
}

interface IAppThemeProviderProps {
    children: React.ReactNode // Define a interface para as propriedades do AppThemeProvider que deve incluir o children
}

const ThemeContext = createContext({} as IThemeContextData); //Cria um contexto vazio com o tipo IThemeContextData

export const useAppThemeContext = () => { //Hook personalizado que encapsula useContext(ThemeContext) para facilitar o acesso ao contexto de tema em outros componentes
    return useContext(ThemeContext); 
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light'); //cria um estado themeName e inicializa por padrao como light

    const toggleTheme = useCallback(() => { // definindo uma funçao toggleTheme que alterna themeName entre light e dark usando o usestate useThemeName
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
        }, []);

    const theme = useMemo(() => { // define o tema atual theme baseado no valor de themeName. utilizado o usememo para memorizar o temar, recalculando smoente quando ocorre alteraçao do themeName
        if (themeName == 'light') return LightTheme;
        return DarkTheme
    }, [themeName]);

    return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children} 
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}