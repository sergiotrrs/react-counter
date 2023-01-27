
import React from 'react'

export const ButtonGen = ({children, onClick, className}) => {
  return (
    <>
    <button className={className} onClick={onClick}>{children}</button>
    </>
  )
}
