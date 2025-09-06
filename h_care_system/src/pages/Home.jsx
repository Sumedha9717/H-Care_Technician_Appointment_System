import React from 'react'
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import OurTeam from '../components/OurTeam';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <OurTeam/>
        <Banner/>
    </div>
  );
}

export default Home;