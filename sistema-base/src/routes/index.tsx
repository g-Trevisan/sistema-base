import { Navigate, Route, Routes } from "react-router-dom"; // importa os componentes necessários da biblioteca react-router-dom

export const AppRoutes = () => { // definindo o componente AppRoutes

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<p>Página inicial</p>} /> {/* define a rota para a página inicial da aplicação, que renderiza um elemento de parágrafo do HTML */}
            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />  {/* define uma rota padrão que redireciona para a página inicial caso a URL não corresponda a nenhuma rota definida */}
        </Routes>
    );
}
