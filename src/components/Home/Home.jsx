import React from "react";
import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo/BlockTwo";
import BlockThree from "./BlockThree";
import BlockFour from "./BlockFour";
import BlockFive from "./BlockFive";
import BlockSix from "./BlockSix";
import BlockSeven from "./BlockSeven";
import BlockEight from "./BlockEight";
import Navbar from '../../components/Header/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <BlockFive />
      <BlockSix />
      <BlockSeven />
      <BlockEight />
      <Footer />
    </div>
  );
};

export default Home;
