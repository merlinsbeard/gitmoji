import React, { useState, useEffect } from 'react'

const ThemeSelector = () => {
  const [theme, setTheme] = useState('light')
  const [themeSelection] = useState([
    {
      name: 'light',
      label: 'Light'
    },
    {
      name: 'dark',
      label: 'Dark'
    }
    // {
    //   name: 'solarized-dark',
    //   label: 'Solarized Dark'
    // }
  ])

  const handleChange = (e) => {
    console.log(e.target.value)
    setTheme(e.target.value)
  }

  // Run only once
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme') || 'light'
    setTheme(getTheme)
  }, [])

  // Check for changes in theme state
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('Theme', theme)
  }, [theme])

  const handleToggleTwo = (e) => {
    setTheme(() => themeSelection.filter((t) => t.name !== theme)[0].name)
  }

  const twoSun = () => {
    if (theme === 'dark') {
      return '🌞'
    }
    return '🌙'
  }

  const darkLightTheme = (
    <div className="toggle">
      <button onClick={(e) => handleToggleTwo(e)} className="toggle-button">
        {twoSun()}
      </button>
    </div>
  )

  const multipleTheme = themeSelection.map(({ name, label }, index) => (
    <label key={index}>
      <input
        key={index}
        onChange={(e) => handleChange(e)}
        type="radio"
        value={name}
        name="theme"
        checked={theme === name}
      />
      {label}
    </label>
  ))

  // Show sun and moon if theres only 2 themes to pick
  let toggleButton
  if (themeSelection.length > 2) {
    toggleButton = multipleTheme
  } else {
    toggleButton = darkLightTheme
  }

  return <div className="toggle">{toggleButton}</div>
}

export default ThemeSelector
