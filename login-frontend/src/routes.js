import Cadastro from './Paginas/Cadastro';
import Index from './Paginas/Index';
import Login from './Paginas/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='*' element={<Index></Index>}></Route>
          <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>

    </BrowserRouter>

  );
}

export default AppRouter;
