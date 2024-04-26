import { useDispatch, useSelector } from "react-redux";
import styles from "./BookingModal.module.scss";
import {
  fetchBooking,
  setShowBookingModal,
} from "../../../redux/slices/reservation";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import closeIcon from "../../../assets/close-x.svg";
import successImg from "../../../assets/booking/successBooking.svg";
import { useEffect } from "react";

function BookingModal() {
  const { reservationTime, startDate } = useSelector(
    (state) => state.reservationReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      dispatch(fetchBooking());
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <div
        className={styles["modal-cover"]}
        onClick={() => {
          dispatch(setShowBookingModal(false));
        }}
      ></div>
      <div className={styles["modal"]}>
        <div
          className={styles["close"]}
          onClick={() => {
            dispatch(setShowBookingModal(false));
          }}
        >
          <img src={closeIcon} alt="close" />
        </div>

        <div className={styles["img"]}>
          <img src={successImg} alt="success" />
        </div>
        <div className={styles["text"]}>
          <h1>Устройство забронировано!</h1> Мы вас ждём{" "}
          <b>
            {" "}
            {new Date(startDate).getDate()}.
            {new Date(startDate).getMonth() + 1 < 10
              ? "0" + (new Date(startDate).getMonth() + 1)
              : new Date(startDate).getMonth() + 1}{" "}
            в {reservationTime.slice(0, 5)}
          </b>{" "}
          ({reservationTime}) Все ваши брони можно посмотреть в{" "}
          <Link to="/profile">личном кабинете</Link>
        </div>
        <Button
          doing={(dispatch, setShowBookingModal) => {
            dispatch(setShowBookingModal(false));
          }}
          params={[dispatch, setShowBookingModal]}
        >
          ПРЕКРАСНО
        </Button>
      </div>
    </>
  );
}

export default BookingModal;
