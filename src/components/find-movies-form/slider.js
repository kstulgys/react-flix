import React, { useState } from 'react'

export default function Slider({ title, min, max, currentValue, onChange }) {

  function handleChange(e) {
    const newValue = e.target.value
    onChange(newValue)
  }

  return (
    <div class="w-100">
      <h5 className="text-light font-weight-bold mb-2">{title} <span className='ml-2'>{currentValue}</span></h5>
      <input
        className="w-100"
        type="range"
        min={min}
        max={max}
        value={currentValue}
        step="1"
        onChange={handleChange}
      />
    </div>
  )
}
