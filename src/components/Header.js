import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom' 

import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

import classes from "./Header.module.scss"

const Header = () => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  }

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push('/page-cta'); 
  }

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to='/' className={classes.header__content__logo}>
          devhowey
        </Link>
        <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ''}`}>
          <ul>
            <li>
              <Link to="/page-one" onClick={menuToggleHandler}>About</Link>
            </li>
            <li>
              <Link to="/page-two" onClick={menuToggleHandler}>Projects</Link>
            </li>
            <li>
              <Link to="/page-three" onClick={menuToggleHandler}>Resume</Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>Get in touch</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler}/>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
