function lockedProfile() {

    let mainEl = document.getElementById('main');

    let lockUnlockRadioBtn = document.querySelectorAll('input[type=radio]');
    let inputUsername = document.getElementsByName('user1Username');
    //console.log(inputUsername);
    let inputEmail = document.getElementsByName('user1Email');
    let inputAge = document.getElementsByName('user1Age');
    //let buttonShowMore = document.getElementsByTagName('button');
    //console.log(buttonShowMore);
    


    let divClassProfile = document.querySelector('.profile');
    let divClaasUsername = document.querySelector('.user1Username');
    divClaasUsername.style.display = 'none';

    

    
    //console.log(buttonShowMore[p]);




    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let dataArr = Object.values(data);

            for (let i = 1; i < dataArr.length; i++) {
                
                let divClassProfileClone = divClassProfile.cloneNode(true);
                mainEl.appendChild(divClassProfileClone);
            }

            let allProfils = document.querySelectorAll('.profile');
            
            //console.log(buttonShowMore);
            

            for (let j = 0; j < allProfils.length; j++) {
                

                for (let p = 0 + j; p < dataArr.length; p++) {
                    
                    inputUsername[j].value = dataArr[p].username;
                    inputEmail[j].value = dataArr[p].email;
                    inputAge[j].value = dataArr[p].age;
                    
                    break;
                }
            }


            let buttonShowMore = document.querySelectorAll('button');
            for (const btn of buttonShowMore) {
                btn.addEventListener('click', showInfo);
                
            }

            

            

            
            // buttonShowMore.addEventListener('click', (e) => {

            //     divClaasUsername.style.display = 'block';

            // });
            //console.log(allProfils);

            // for (let i = 0; i < 1; i++) {
            //     inputUsername[0].value = dataArr[i].username;
            //     inputEmail[0].value = dataArr[i].email;
            //     inputAge[0].value = dataArr[i].age;

            //     for (let i = 1; i < dataArr.length; i++) {
            //         let divClassProfileClone = divClassProfile.cloneNode(true);
            //         mainEl.appendChild(divClassProfileClone);


            //         debugger
            //         //lockUnlockRadioBtn[0].value = 'unlock'
            //         //console.log(dataArr[i]); 
            //         inputUsername[0].value = dataArr[i].username;
            //         inputEmail[0].value = dataArr[i].email;
            //         inputAge[0].value = dataArr[i].age;

            //     }
            // }




        });

        // for (let a = 0; a < allProfils.length; a++) {
            
        // }
        
        

        function showInfo() {
            divClaasUsername.style.display = 'block';
        }

    // let divProfile = createrEl('div', '', ['class', 'profile']);
    // let imgEl = createrEl('img', '', ['src', '.\iconProfile2.png', 'class', 'userIcon']);
    // let lableLock = createrEl('label', 'Lock');
    // let inputLockRadio = createrEl('input', )


    // function createrEl(typeEl, content, attributes = []) {

    //     let element = document.createElement(typeEl);

    //     if(content) {
    //         element.textContent = content;
    //     }
    //     if(attributes.length > 0) {
    //         for (let i = 0; i < attributes.length.length; i += 2) {
    //             element.setAttribute(attributes[i], attributes[i + 1]);     
    //         }
    //     }
    //     return element;
    // }
}