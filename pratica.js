function carregar(){
  let msg = document.querySelector('#msg');
  let imagem = document.querySelector('#imagem');

  let data = new Date().getHours();
  msg.innerText = `Agora são ${data},`;
  
  if(data == 0 && data < 12){
    msg.innerText += ' bom dia!';
    imagem.src += './images/manhaceu.png';
    document.body.style.backgroungColor = 'light-blue';
  
  }else if(data < 18){
    msg.innerText += ' boa tarde!';
    imagem.src += './images/tardeceu.png';
    document.body.style.backgroundColor = 'orangered';
    
  }else{
    msg.innerText += ' boa noite!';
    imagem.src += './images/noiteceu.png';
    document.body.style.backgroundColor = 'gray';
  }
}