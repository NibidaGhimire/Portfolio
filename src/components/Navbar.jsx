import React,{useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import { styles } from '../styles';
import {logo,menu,close,profile} from '../assets'
import { navLinks } from '../constants';
import { socials } from '../constants';




const SocialsCard = ({ name, image, profile_link}) => {
  return(
    
    <div 
    onClick={() => window.open(profile_link, "_blank")}
    >
      <img
        src={image}
        alt={name}
        className='w-6 h-6 object-contain'
      />
      </div>
  )
}

const Navbar = () => {
  const [active,setActive]=useState("");
  const [toggle,setToggle]=useState(false)
  const [profToggle,setProfToggle]=useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className='flex gap-3'>
          <Link to="/" 
            className='flex items-center gap-2' 
            onClick={()=>
              { setActive("");
                window.scrollTo(0,0)
              }
            }
            >
            <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
            <p className='text-white text-[18px] font-bold flex cursor-pointer'>
              Nibida &nbsp;<span className='sm:block hidden'>| Ghimire</span>
            </p>
          </Link>

        </div>


        <div>
            <img 
              src={profile} 
              alt="menu" 
              className='w-[32px] h-[32px] object-contain cursor-pointer' 
              onClick={()=>setProfToggle(!profToggle)}
            />
            <div className={`${!profToggle? "hidden" : "flex"} p-4 black-gradient absolute mx-0 my-2 min-w-[140px] z-10 rounded-xl` } >
                <div className='flex gap-5 cursor-pointer'>
                  {socials.map((social, index) => (
                    <SocialsCard key={index} {...social} />
                  ))}
                </div>
            </div>
          </div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>{
            return(
              <li 
                key={link.id} 
                className={`${
                  active===link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={()=>setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          })}

        </ul>



        <div className='sm:hidden flex-flex-1 justify-end items-center'>
          <img 
            src={toggle ?close :menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={()=>setToggle(!toggle)}
          />
          
          <div className={`${!toggle? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl` } >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>

             <div className='flex gap-5'>
              {socials.map((social, index) => (
                <SocialsCard key={index} {...social} />
              ))}
              </div>

              {navLinks.map((link)=>{
                return(
                  <li 
                    key={link.id} 
                    className={`${
                      active===link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={()=>{
                      setToggle(!toggle);
                      setActive(link.title);}}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>


        </div>
      </div>
    </nav>
  )
}

export default Navbar;