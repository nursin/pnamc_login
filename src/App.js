
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './Pages/About';
import Events from './Pages/Events';
import Home from './Pages/Home';
import UnderConstruction from './components/UnderConstruction';
import Membership from './Pages/Membership';
import BoardOfDirectors from './Pages/BoardOfDirectors';
import PresidentsMessage from './Pages/PresidentsMessage';
import Bylaws from './Pages/Bylaws';
import News from './Pages/News';
import History from './Pages/History';
import MissionVision from './Pages/MissionVision';
import Donate from './Pages/Donate';
import Committees from './Pages/Committees';
import RecognitionsAwards from './Pages/RecognitionsAwards';

import { auth } from './firebase';
// redux shit
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/slices/user';

function App() {
  // redux shit
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserAuth = () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          dispatch(setUser(user))
        }
      })
    }

    getUserAuth();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <UnderConstruction />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/presidents-message" element={<PresidentsMessage />} />
          <Route path="/bylaws" element={<Bylaws />} />
          <Route path="/news" element={<News />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/recognitions-awards" element={<RecognitionsAwards />} />
          <Route path="/events" element={<Events />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
