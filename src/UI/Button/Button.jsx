import { useSelector } from "react-redux"
import s from "./Button.module.scss"
import { Link } from "react-router-dom"

const Button = ({children, doing, params, isGroupVr}) => {
  let disabled = false
  const endTime = useSelector(state=>state.reservationReducer.endTime)
  if(isGroupVr){
    if(!endTime){
      disabled = true
    }
  }
  return (
    <button className={s.button} onClick={()=>{
      if(doing){
        doing(...params)
      }
    }} disabled={disabled}>{children}</button>
  )
}

export default Button