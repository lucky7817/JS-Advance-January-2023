function search() {
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let inputElement = document.getElementById('searchText').value;
   let resultElement = document.querySelector('#result');
   let counter = 0;

   for (const x of townsElement) {

      if (x.textContent.includes(inputElement)) {
         counter++;
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
      } else {
         x.style.fontWeight = 'normal';
         x.style.textDecoration = 'none';
      }
   }

   resultElement.textContent = `${counter} matches found`;
}
