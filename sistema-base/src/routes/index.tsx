import { Button } from '@mui/material'; // importando o Button do materialui
import { Navigate, Route, Routes } from "react-router-dom"; // importa os componentes necessários da biblioteca react-router-dom
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => { // definindo o componente AppRoutes

    const { toggleTheme } = useAppThemeContext();

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>te</Button>} /> {/* define a rota para a página inicial da aplicação, que renderiza um elemento de parágrafo do HTML */}
            <Route path="*" element={<Navigate to="/pagina-inicia"/>} />  {/* define uma rota padrão que redireciona para a página inicial caso a URL não corresponda a nenhuma rota definida */}
        </Routes>
    );
}
