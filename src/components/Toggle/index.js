import React, { useEffect } from 'react'

const Toggle = () => {
  const handleChange = () => {
    const getTheme = localStorage.getItem('Theme')

    if (getTheme === 'light') {
      localStorage.setItem('Theme', 'dark')
      document.body.classList.add('dark')
    } else {
      console.log(getTheme)
      localStorage.setItem('Theme', 'light')
      document.body.classList.remove('dark')
    }
  }

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme')
    if (getTheme === 'dark') {
      return document.body.classList.add('dark')
    } else {
      return localStorage.setItem('Theme', 'light')
    }
  })

  return (
    <div className="toggle">
      <button onClick={handleChange} className="toggle-button">
        💡
      </button>
    </div>
  )
}

export default Toggle
