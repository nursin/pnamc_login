
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

import { auth, db } from './firebase';
// redux shit
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/slices/user';
import ErrorPage from './Pages/ErrorPage';

import Dashboard from './Pages/Admin/Dashboard';
import AdminNav from './Pages/Admin/AdminNav';
import Transactions from './Pages/Admin/Transactions';
import Members from './Pages/Admin/Members';
import AdminEvents from './Pages/Admin/Events';
import AdminNews from './Pages/Admin/News';
import Donations from './Pages/Admin/Donations';
import RecAwards from './Pages/Admin/RecAwards';
import NewMembers from './Pages/Admin/NewMembers';
import Website from './Pages/Admin/Website';

function App() {
  // redux shit
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserAuth = () => {
      auth.onAuthStateChanged(async (user) => {
        if (user.uid === "pcFOR7WMq9gvRecGgYxet3HpVXs2") {
          dispatch(setUser(user))
        } else {
          auth.signOut()
          alert("You do not have access to this feature")
        }
      })
    }

    getUserAuth();

    // Confirm the link is a sign-in with email link.
    if (auth.isSignInWithEmailLink(window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      var email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email for confirmation');
      }
      // The client SDK will parse the code from the link for you.
      auth.signInWithEmailLink(email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {/* <UnderConstruction /> */}
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
          <Route path="admin-$*2334" element={<AdminNav />}>
            <Route path="admin-dashboard" element={<Dashboard />} />
            <Route path="admin-transactions" element={<Transactions />} />
            <Route path="admin-members" element={<Members />} />
            <Route path="admin-events" element={<AdminEvents />} />
            <Route path="admin-news" element={<AdminNews />} />
            <Route path="admin-donations" element={<Donations />} />
            <Route path="admin-recognition-awards" element={<RecAwards />} />
            <Route path="admin-new-members" element={<NewMembers />} />
            <Route path="admin-website" element={<Website />} />
          </Route>
          {/* Redirects */}
          {/* <Route path="/community-outreach-events" element={<Committees />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
