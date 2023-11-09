import './Header.css'
import { Headertags } from '../../Data/Headertags'
import { BsSearch } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { CgTwitter } from "react-icons/cg";

const Header = () => {
  return (
    <div className='header'>
      <div className="tags">
       {Headertags.map((tag, index) => (
        <div key={index}>{tag}</div>
        ))}
      </div>

      <div className="logo">
        <CgTwitter/>
        <BiLogoFacebookSquare/>
        <input type="text" placeholder='search' />
        <BsSearch/>
      </div>

      <div className="headtag">
        <span>Home</span>
        <span>Anime List</span>
        <span>Anime Movies</span>
        <span>Fall 2023 Anime</span>
        <span>Anime Calender</span>
        <span>Popular</span>
        <span className='login/sign'>Login | Sign up</span>
      </div>
    </div>
  )
}

export default Header