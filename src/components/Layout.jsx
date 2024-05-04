import { Outlet } from "react-router-dom"
// import Header from "./Header/Header"
// import { Footer } from "./Footer/Footer"
// import useModal from "../hooks/useModal"
// import Modal from './../UI/Modal/Modal';
// import ModalContent from "./Login/LoginModal/ModalContent";
// import { useAuth } from "../hooks/auth/useAuth";
// import { useEffect } from 'react';
// import { useSelector } from "react-redux";


const Layout = () => {

  // const [isShowingModal, toggleModal, setIsShowing] = useModal();
  //const { isAuth } = useAuth()
  // const isAuth = !!useSelector(state => state.authReducer.accessToken.token)
  // useEffect(() => { isAuth && setIsShowing(false) }, [isAuth])
  // useEffect(() => {
  // 	if (isAuth) {
  // 		setIsShowing(false)
  // 	}
  // }, [isAuth])
  return (
    <>
      {/* <Modal onCloseButtonClick={toggleModal} show={isShowingModal}>
        <ModalContent onCloseButtonClick={toggleModal} />
      </Modal> */}
      {/* <Header isAuth={isAuth} onOpenButtonClick={toggleModal} /> */}
      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  )
}

export { Layout }

//1
