import React, { useState } from 'react'

export default function Slider({ title, min, max, defaultVal }) {
  // const [value, setValue] = useState(() => new Date().getFullYear().toString())
  const [value, setValue] = useState(defaultVal)
  // const {state,dispatch} = useContext(MyContext);


  return (
    <div class="w-100">
      <h5 className="text-light font-weight-bold mb-2">{title}</h5>
      <p className='m-0'>{value}</p>
      <input
        className="w-100"
        type="range"
        min={min}
        max={max}
        value={value}
        step="1"
        onChange={(e) => setValue((e.target.value))}
      />

    </div>
  )
}
{/* <input type="range" list="tickmarks" className="w-100" />

<datalist id="tickmarks">
  {range.map((val, i) => {
    return <option key={i} value={i + 201} />
  })}
</datalist> */}