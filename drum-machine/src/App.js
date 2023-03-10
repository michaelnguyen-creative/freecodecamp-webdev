import React, { useEffect, useState } from 'react'

const pads = [
  {
    key: 'Q',
    charCode: 81,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    key: 'W',
    charCode: 87,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    key: 'E',
    charCode: 69,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    key: 'A',
    charCode: 65,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    key: 'S',
    charCode: 83,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    key: 'D',
    charCode: 68,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    key: 'Z',
    charCode: 90,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    key: 'X',
    charCode: 88,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    key: 'C',
    charCode: 67,
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
]

const App = () => {
  const [nowPlaying, setNowPlaying] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (keys.includes(e.key.toUpperCase())) {
        const clip = document.getElementById(e.key.toUpperCase())
        setNowPlaying(clip.id)
        clip.play()
        setTimeout(() => setNowPlaying(''), 1000)
      }
    })
  })

  const keys = pads.map(({ key }) => key)

  const handleClick = (e) => {
    const clip = e.target.children[0]
    setNowPlaying(clip.id)
    clip.play()
    setTimeout(() => setNowPlaying(''), 1000)
  }

  return (
    <div id="drum-machine">
      <div>
        {pads.map((pad) => (
          <button
            key={pad.charCode}
            className="drum-pad"
            id={pad.audio.slice(44).replace('.mp3', '')}
            onClick={handleClick}
          >
            <audio
              src={pad.audio}
              className="clip"
              id={pad.key}
              onKeyDown={() => console.log('pressed')}
            ></audio>
            {pad.key}
          </button>
        ))}
      </div>
      <div id="display">{nowPlaying}</div>
    </div>
  )
}

export default App
