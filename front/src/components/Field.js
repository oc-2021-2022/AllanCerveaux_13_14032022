import React from 'react'

export default function Field({
  id,
  type,
  name, 
  label,
  value,
  required = false,
  handleChange
}) {
  return (
    <div className={type === 'checkbox' ? 'input-remember' : 'input-wrapper'}>
      {label ? <label htmlFor={id}>{label}</label> : <></>}
      <input className={classNameChooser(type)} type={type} id={id} name={name} value={value || ''} onChange={handleChange} required={ required }/>
    </div>
  )
}


function classNameChooser(type) {
  if (type === 'submit') {
    return 'sign-in-button'
  }
}
