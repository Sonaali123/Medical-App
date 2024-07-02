import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarContainer from './Navbar/NavbarContainer';
import Login from '../pages/Login';
import Signup from '../pages/Signup'; // Correct path to Signup
import BannerSection from '../components/Banner/BannerSection';
import GettingStarted from '../pages/GettingStarted';
import Services from '../components/services/Services';
import ChooseDoctor from '../pages/Choosedoc'; // Correct path to ChooseDoctor
import DoctorProfile from '../pages/DocProfile'; // Correct path to DoctorProfile
import Choosegen from '/Users/sunnyp/medapp2/src/pages/ChooseGenre.jsx';
import Video from '/Users/sunnyp/medapp2/src/pages/Videocall.jsx';
import Voice from '/Users/sunnyp/medapp2/src/pages/Voicecall.jsx';
import Chatbot from '/Users/sunnyp/medapp2/src/pages/Chatbot.jsx';

class AppContainer extends Component {
  state = {
    pos: 0,
    imglight: false,
    navClass: ''
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    const scrollup = window.scrollY;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: 'nav-sticky', imglight: false, pos: scrollup });
    } else {
      this.setState({ navClass: '', imglight: false, pos: scrollup });
    }
  };

  render() {
    const { navClass, imglight } = this.state;

    return (
      <div>
        {/* Importing Navbar */}
        <NavbarContainer navClass={navClass} imglight={imglight} />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/gen/:id" element={<ChooseDoctor />} />
          <Route path="/choosegen" element={<Choosegen />} />
          <Route path="/video" element={<Video />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>

        {/* Importing Banner section */}
        <BannerSection />
        {/* Importing Services section */}
        <Services />
      </div>
    );
  }
}

export default AppContainer;

