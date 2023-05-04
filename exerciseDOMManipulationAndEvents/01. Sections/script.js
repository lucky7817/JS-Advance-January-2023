function create(words) {

   let divElement = document.getElementById('content');
   for (const word of words) {

      let newDiv = document.createElement('div');
      let paragraphInDiv = document.createElement('p');
      let text = document.createTextNode(word)
      paragraphInDiv.appendChild(text);
      paragraphInDiv.style.display = 'none';
      newDiv.appendChild(paragraphInDiv);
      newDiv.addEventListener('click', function(event) {
         event.target.children[0].style.display = 'block';
      });
      divElement.appendChild(newDiv);
   }
}