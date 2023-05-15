import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import ProductList from './product/productList';
import User from './users/user';
import OldUser from './users/oldUser';
import AddUser from './users/addUser';
import Manager from './users/manager';


function App() {
  
  return (
    
    <div className="App">
      <User/>
      
     <Routes>
<Route path='product' element={<ProductList />} />
<Route path='manager' element={<Manager />} />
<Route path='oldUser' element={<OldUser />} />
<Route path='addUser' element={<AddUser />} />
<Route path='/oldUser/product' element={<ProductList />} />

</Routes>

    </div>
  );
}

export default App;
