function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let averageSalary = 0;
      let totalSalary = 0;
      let cuttentAvrSalary = 0;
      let bestRestaurant = '';
      let output = {};

      for (const line of input) {

         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersNameSalary = restaurantInfo[0].split(', ');

         for (let worker of workersNameSalary) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }

         }

      }
      let entries = Object.entries(output);

      for (const entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (const [name, salary] of values) {
            totalSalary += salary;
         }
         averageSalary = totalSalary / values.length;

         if (averageSalary > cuttentAvrSalary) {
            cuttentAvrSalary = averageSalary;
            bestRestaurant = key;
            totalSalary = 0;
         }

      }
      let result = Object.entries(output[bestRestaurant]).sort((a, b) => b[1] - a[1]);
      let print = '';
      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${cuttentAvrSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`
      document.querySelector('#workers p').textContent = print;

   }
}

//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]