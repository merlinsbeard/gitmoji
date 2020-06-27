// @flow
import React, { useState } from 'react'
import Clipboard from 'clipboard'

import Gitmoji from './Gitmoji'

type Props = {
  gitmojis: Array<{
    code: string,
    description: string,
    emoji: string,
    name: string
  }>
}

const GitmojiList = (props: Props) => {
  const [keyword, setKeyword] = useState('')
  React.useEffect(() => {
    const clipboard = new Clipboard('.gitmoji-code, .gitmoji-emoji')

    clipboard.on('success', function(e) {
      window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard')

      const elementClasses = e.trigger.classList
      let notificationMessage = `<p>Hey! Gitmoji <span class="gitmoji-code">${e.text}</span> copied to the clipboard 😜</p>`

      if (elementClasses.contains('gitmoji-emoji')) {
        notificationMessage = `<p>Hey! Gitmoji emoji ${e.text} copied to the clipboard 😜</p>`
      }

      var notification = new window.NotificationFx({
        message: notificationMessage,
        layout: 'growl',
        effect: 'scale',
        type: 'notice'
      })

      notification.show()
    })

    return () => clipboard.destroy()
  }, [])

  const filteredGitmojis = () => {
    let currentGitmojis = props.gitmojis
    if (keyword) {
      return currentGitmojis.filter((emoji) => {
        return (
          emoji.description.toLowerCase().includes(keyword) ||
          emoji.code.toLowerCase().includes(keyword)
        )
      })
    }
    return currentGitmojis
  }

  function handleChange(e) {
    setKeyword(e.target.value)
  }

  return (
    <div>
      <form className="form container row center-xs">
        <div className="form-field col-xs-12">
          <input
            type="text"
            className="form-field-search"
            placeholder="Search..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </form>
      <div className="row center-xs" id="gitmoji-list">
        {filteredGitmojis().map((gitmoji, index) => (
          <Gitmoji
            code={gitmoji.code}
            description={gitmoji.description}
            emoji={gitmoji.emoji}
            key={index}
            name={gitmoji.name}
          />
        ))}
      </div>
    </div>
  )
}

export default GitmojiList
