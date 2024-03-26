import Cadastro from './Components/Cadastro';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>

    </BrowserRouter>

  );
}

export default AppRouter;
