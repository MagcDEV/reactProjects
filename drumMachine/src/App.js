import react, {useState, useEffect} from 'react'
import bankOne from './data'

const App = () => {

  const playSound = (e) => {
    if(e.type === "click") {
      const audio = document.querySelector(`audio[data-key="${e.path[0].dataset.key}"]`);
      const key = document.querySelector(`div[data-key="${e.path[0].dataset.key}"]`);
      //var texto = document.getElementById("display");
      let newText;
      switch (e.path[0].dataset.key) {
        case "81":
          newText = "Heater-1";
          break;
        case "87":
          newText = "Heater-2";
          break;
        case "69":
          newText = "Heater-3";
          break;
        case "65":
          newText = "Heater-4";
          break;
        case "83":
          newText = "clap";
          break;
        case "68":
          newText = "Open-hh";
          break;
        case "90":
          newText = "Kik-in-hat";
          break;
        case "88":
          newText = "Kick";
          break;
        case "67":
          newText = "Closed-hh";
          break;
      }
      document.getElementById("display").innerHTML = newText;
      //var text = document.createTextNode(newText);
      //texto.appendChild(text);
      if (!audio) return;

      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    } else {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      let newText;
      switch (e.path[0].dataset.key) {
        case "81":
          newText = "Heater-1";
          break;
        case "87":
          newText = "Heater-2";
          break;
        case "69":
          newText = "Heater-3";
          break;
        case "65":
          newText = "Heater-4";
          break;
        case "83":
          newText = "clap";
          break;
        case "68":
          newText = "Open-hh";
          break;
        case "90":
          newText = "Kik-in-hat";
          break;
        case "88":
          newText = "Kick";
          break;
        case "67":
          newText = "Closed-hh";
          break;
      }
      document.getElementById("display").innerHTML = newText;
      if (!audio) return;

      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
  }

  const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    const key = document.querySelector(`div[data-key="${e.path[0].dataset.key}"]`);
    key.classList.remove('playing');
  }

  useEffect(() => {
    const keys = document.querySelectorAll('.drum-pad');
    window.addEventListener('keydown', playSound);
    keys.forEach((key) => key.addEventListener('click', 
          playSound));
    keys.forEach((key) => key.addEventListener('transitionend', 
          removeTransition));
  }, [])

  return (
  <div id="drum-machine">
      {bankOne.map((tecla) => {
        const {keyCode, keyTrigger, id, url} = tecla;
        return (
          <div data-key={keyCode} key={keyCode} className='drum-pad' 
            id={keyTrigger}>
             {keyTrigger}
             <audio className='clip' id={keyTrigger} data-key={keyCode}
            src={url}></audio>
          </div>
        )
      })}
    <div id="display">
    </div>
  </div>
  )
}

export default App;
