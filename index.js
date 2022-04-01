const dinoCharac = document.querySelector('.dino')
const backCactus = document.querySelector('.space')
let jumping = false;
let position = 0;
let endGame = false;

function handleKeyPress(event) {
  if(event.keyCode === 13){
    if(!jumping){
      jumpCactus()
    }
  }
}

function jumpCactus(){

  jumping = true;

  let up = setInterval(() => {
    if(position >= 150){
      clearInterval(up)

      let down = setInterval(() => {
        if(position <= 0){
          clearInterval(down)
          jumping = false;
        } else {
          position -= 25
          dinoCharac.style.bottom = position + 'px'
        }
      }, 50)
    } else {
      position += 25
      dinoCharac.style.bottom =  position + 'px';
    }
  }, 50)
}

function createCactus(){
  const cactus = document.createElement('div');
  cactus.classList.add('cactus');
  backCactus.appendChild(cactus);

  let time = Math.random() * 6000;
  

  let cactusPosition = 1000;
  cactus.style.left = cactusPosition + 'px';

  let left = setInterval(() => {
    
    if(cactusPosition < -60){
      clearInterval(left)
      backCactus.removeChild(cactus)
    }

    else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
      clearInterval(left);
      endGame = true;
      document.body.innerHTML = '<h2 class="gameOver">Fim de Jogo</h2>'
    }
    
    else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px'
    }
  }, 50)

  setTimeout(createCactus, time);
}

createCactus()

document.addEventListener('keypress', handleKeyPress)