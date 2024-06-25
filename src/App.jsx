import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import FilterFood from './components/FilterFood';
// import FetchingApiofProducts from './components/FetchingApiofProducts';
// import RegistrationForm from './components/RegistrationForm';
// import ChangeBackgroundRandomColor from './components/ChangeBackgroundRandomColor';
// import CounterApp from './components/CounterApp';


const App = () => {

  return (
    // <div>
    //   {/* <h1 className='text-center text-5xl font-bold text-blue-500'>Project with Console Coder</h1> */}
    //   {/* <CounterApp /> */}
    //   {/* <ChangeBackgroundRandomColor /> */}
    //   {/* <RegistrationForm /> */}
    //   {/* <FetchingApiofProducts /> */}
    //   {/* <FilterFood /> */}


    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
