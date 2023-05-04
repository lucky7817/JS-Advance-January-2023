function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let inputElement = document.querySelector('#searchField');
   let rowsElement = document.querySelectorAll('tbody tr');

   function onClick() {

      for (let row of rowsElement) {
         row.classList.remove('select');
         if (inputElement.value !== '' && row.innerHTML.includes(inputElement.value)) {
            row.className = 'select';
         }
      }
      inputElement.value = '';
   }
}