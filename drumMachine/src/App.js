import react, {useState, useEffect} from 'react'
import bankOne from './data'

const App = () => {

  const playSound = (e) => {
    console.log(e)
    if(e.type === "click") {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;

      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    } else {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;

      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
  }

  useEffect(() => {
    const keys = document.querySelectorAll('.drum-pad');
    window.addEventListener('keydown', playSound);
    keys.forEach((key) => key.addEventListener('click', playSound));
  }, [])

  return (
  <div id="drum-machine">
    <div className="display">
      {bankOne.map((tecla) => {
        const {keyCode, keyTrigger, id, url} = tecla;
        return (
          <div data-key={keyCode} key={keyCode} className='drum-pad'>
             <kbd>{keyTrigger}</kbd><span className="sound">{id}</span>
             <audio className='clip' id={keyTrigger} data-key={keyCode}
            src={url}></audio>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default App;
