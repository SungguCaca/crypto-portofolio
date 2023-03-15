import { FaInstagram, FaTwitter, FaDiscord, FaTiktok, FaTelegram, FaYoutube, FaFacebook } from 'react-icons/fa';
import '../styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
        {/* <div className='social-text'>PLAY3 Copyright 2022</div> */}
        <p>PLAY3 Copyright 2022</p>
      <div className="social-icons">
        <a href="#"><FaFacebook className="icon" /></a>
        <a href="#"><FaYoutube className="icon" /></a>
        <a href="#"><FaInstagram className="icon" /></a>
        <a href="#"><FaTwitter className="icon" /></a>
        <a href="#"><FaTiktok className="icon" /></a>
        <a href="#"><FaTelegram className="icon" /></a>
        <a href="#"><FaDiscord className="icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;
