import '../styles/navbar.css';
import Logo from "../icons/TeshLogo.png";
import ProfileFace from '../icons/profile.png';
import ProfileDrop from '../icons/profile_dropdown.png';
import { BellOutlined } from "@ant-design/icons";


const Navbar = () => {


  return (
    <nav>
    <div className="logo">
    <img src={Logo} />
    </div>
       
       <div className="rightnav">
       <div className="bell">
          <BellOutlined style={{fontSize:"36px", marginRight:"20px"}}/>
          <span class="badge">1</span>
        </div>
        <div className="profile_face">
            <img src={ProfileFace} className="profile_face" alt="Icon"/>
            <img src={ProfileDrop} className="profile_drop" alt="Icon"/>
          </div>

       </div>
       
    </nav>
  );
};

export default Navbar;
