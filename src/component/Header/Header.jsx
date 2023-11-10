import './Header.css'
import { Headertags } from '../../Data/Headertags'
import { BsSearch } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { CgTwitter } from "react-icons/cg";
import Logo from "../../assets/logo-no-background.png"

const Header = () => {
  return (
    <div className='header'>
      <div className="tags">
       {Headertags.map((tag, index) => (
        <div key={index}>{tag}</div>
        ))}
      </div>

      <div className="logo">
        <img src={Logo} alt="" />
        <span>All free anime for you</span>
        <div className="search">
          <CgTwitter className='icons'/>
          <BiLogoFacebookSquare className='icons'/>
          <input type="text" placeholder='search' />
          <BsSearch/>
        </div>
      </div>

      <div className="headtag">
        <button>Home</button>
        <button>Anime List</button>
        <button>Anime Movies</button>
        <button>Fall 2023 Anime</button>
        <button>Anime Calender</button>
        <button>Popular</button>
        <span className='login/sign'>Login | Sign up</span>
      </div>
    </div>
  )
}

export default Header