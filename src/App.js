import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './main.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from './components/Layout';
import { Team } from './pages/Team';
import { Competition } from './pages/Competition';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<Competition/>}/>
      <Route path="/team" element={<Team />} />
    </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
