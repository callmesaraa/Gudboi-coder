import { useState } from 'react';
import classes from './Dropdown.module.css'; 
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowAppear, setArrowAppear] = useState(false); 

  const toggleDropdown = () => {
    setIsOpen(true);
    setArrowAppear(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setArrowAppear(false);
  };

  const pathname = usePathname(); 

  return (
    <div className={`flex relative ${pathname === '/Solution' ? 'underline decoration-orange-500' : ''}`} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
      <li className="ml-12">
          <Link className="text-customBlue font-sans font-bold hover:underline hover:decoration-orange-500" href='/Solution'>Giải pháp</Link>
      </li>
      <i className='bg-white flex h-5 w-5'>{arrowAppear ? <img className='mt-1.5 ml-1 w-3 h-3' src="arrow.svg"/> : <div className='h-5 w-5'></div>}</i>
      {isOpen && (
        <ul className={classes.dropdownMenu} onMouseEnter={toggleDropdown}>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default Dropdown;
