import mobileBell from "../../assets/header/mobileBell.svg";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Button from "../../UI/Button/Button";
import { useEffect, useState } from "react";
import { fetchMe } from "../../redux/slices/profile";
import { handleButtonClick } from "./redirectButton";
import { setPickedCategory } from "../../redux/slices/reservation";

const MobileHeader = ({ onOpenButtonClick, isAuth }) => {
  const me = useSelector((state) => state.profileReducer.me.data);
  const navigate = useNavigate();
  const [isBurger, setIsBurger] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth && !me.firstname) {
      dispatch(fetchMe);
    }
  }, []);
  useEffect(() => {
    if (isAuth && me.firstname) {
      setName(me.firstname + " " + me.lastname);
    }
  }, [me]);

  return (
    <header className={styles.header}>
      <div className={`${styles["header__container"]}`}>
        <div className={styles["header__container__booking-btn"]}>
          <Button
            doing={(navigate, dispatch, setIsBurger) => {
              setIsBurger(false);
              dispatch(setPickedCategory(null));
              navigate("/booking");
            }}
            params={[navigate, dispatch, setIsBurger]}
          >
            БРОНИРОВАНИЕ
          </Button>
        </div>
        {/* <div className={styles["header__logo"]}>
          <Link to="/">
            <img src={logo} alt="logo" width={50} height={50} />
          </Link>
        </div> */}
        <div className={styles["header__container__right"]}>
          <Link
            to={"/indeveloping"}
            onClick={() => {
              setIsBurger(false);
            }}
          >
            <img src={mobileBell}></img>
          </Link>
          <BurgerMenu
            isBurger={isBurger}
            setIsBurger={setIsBurger}
            isAuth={isAuth}
            onOpenButtonClick={handleButtonClick}
            me={name}
          />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
