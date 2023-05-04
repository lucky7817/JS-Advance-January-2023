function notify(message) {

  let divNotification = document.getElementById('notification');
  divNotification.innerText = message;
  divNotification.style.display = 'block';

  // setTimeout(function () {
  //   divNotification.style.display = 'none';
  // }, 3000); 
  divNotification.addEventListener('click', (event) => {
    event.target.style.display = 'none';

  });

}