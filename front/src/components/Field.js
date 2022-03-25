import React from 'react'

export default function Field({label, type, id, name, value, handleChange}) {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : ''}
      <input type={type} id={id} name={name} defaultValue={value ?? ''} onChange={handleChange}/>
    </div>
  )
}
