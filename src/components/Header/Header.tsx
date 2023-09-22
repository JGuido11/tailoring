import { useEffect, useState } from 'react'
import '../../styles/css/styles.css';
import IconGold from "../../Assets/Icons/Icon_gold.png"
import { HamburguerMenu } from './hamburguerMenu';
import { NavBar } from './navbar';

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", addFixedPositon);
    return () => {
      window.removeEventListener("scroll", addFixedPositon);
    };
  });

  function addFixedPositon() {
    const scrollTop = window.scrollY;
    scrollTop >= 600 ? setIsFixed(true) : setIsFixed(false);
  }

  return (
    <header
      className={
        isFixed ? `$"header__container" $"header__container fixed"` : "header__container"
      }
    >
      <div className="header__content">
        <HamburguerMenu />

        <img
          className={isFixed ? "header__container" : "dark"}
          src={isFixed ? IconGold : IconGold}
          alt="Renee Trajar logo"
        />

        <NavBar />
      </div>
    </header>
  );
}

