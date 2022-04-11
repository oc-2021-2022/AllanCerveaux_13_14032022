import React from 'react'

export default function Field({ label, type, id, name, value, handleChange }) {
  return (
    <div className={type === 'checkbox' ? 'input-remember' : 'input-wrapper'}>
      {label ? <label htmlFor={id}>{label}</label> : <></>}
      <input className={classNameChooser(type)} type={type} id={id} name={name} value={value || ''} onChange={handleChange}/>
    </div>
  )
}


function classNameChooser(type) {
  if (type === 'submit') {
    return 'sign-in-button'
  }
}
