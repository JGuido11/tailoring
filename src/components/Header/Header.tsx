import { useEffect, useState } from 'react'
import { HamburguerMenu } from './hamburguerMenu';
import { NavBar } from './navbar';
import '../../styles/css/styles.css';
import logoGold from "../../Assets/Logos/Logo_gold.png";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", addFixedPosition);
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
          className={isFixed ? "header__content__dark" : ""}
          src={isFixed ? logoGold : logoGold}
          alt="Renee Trajar logo"
        />

        <NavBar />
      </div>
    </header>
  );
}
function addFixedPosition(this: Window, ev: Event) {
  throw new Error('Function not implemented.');
}

