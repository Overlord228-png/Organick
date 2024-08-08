import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Projects from './pages/Projects';
import News from './pages/News';
import Pages from './pages/Pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/pages' element={<Pages />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/news' element={<News />}/>
      </Route>
    </Routes>
  );
}

export default App;
