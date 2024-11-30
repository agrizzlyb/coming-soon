import { FC } from "react";
import { GeistSans } from "geist/font/sans";
import mineBackground from "../assets/mine_background.svg"
import MiningUnit from "@/components/MiningUnit";
import Loader from "@/components/Loader";

const Home: FC = () => {
  const styles = {
    backgroundImage: `url(${mineBackground})`,
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
  };   
  return (
    <div style={styles} className="container">
      {/* Background Hills
      <div className="background-hills"></div>

      {/* Moving Dig Unit */}
      {/* <MiningUnit /> */}

      {/* Dust Clouds */}
      {/* <div className="dust">
        <span className="dust-cloud"></span>
        <span className="dust-cloud"></span>
        <span className="dust-cloud"></span>
      </div> */}

      {/* Coming Soon Content */}
      <h1 className="title">
        Coming Soon
      </h1>
      <br></br>
      <p className="subtitle">
        Digging deep to bring something amazing soon
      </p>
      <p style={{fontWeight:600}} className="subtitle">
        Stay tuned!
      </p>
      <p className="banner">
        Flitch.io
      </p>
      {/* Loader */}
      {/* <Loader /> */}
    </div>
  );
};

export default Home;
