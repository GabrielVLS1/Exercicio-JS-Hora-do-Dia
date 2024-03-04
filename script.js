function carregar(){
  let msg = document.querySelector('#msg');
  let imagem = document.querySelector('#imagem');

  let data = new Date().getHours();
  msg.innerHTML = `Agora são ${data} horas`;
  
  if (data >= 0 && data < 12){
    imagem.src = 'manhaceu.png';
    document.body.style.background = '#c3a846';
    msg.innerHTML += ', bom dia.';

  } else if (data >= 12 && data < 18){
    imagem.src = 'tardeceu.png';
    document.body.style.background = '#a27144';
    msg.innerHTML += ', boa tarde.';

  } else {
    imagem.src = 'noiteceu.png';
    document.body.style.background = '#2f3c50';
    msg.innerHTML += ', boa noite.';
  }
}