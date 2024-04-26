import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = ({ onOpenButtonClick, isAuth }) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isWideScreen ? (
        <DesktopHeader onOpenButtonClick={onOpenButtonClick} isAuth={isAuth} />
      ) : (
        <MobileHeader onOpenButtonClick={onOpenButtonClick} isAuth={isAuth} />
      )}
    </>
  );
};

export default Header;
