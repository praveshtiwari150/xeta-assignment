import React from 'react'

export default function Button({className, onClick,label}) {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  )
}

