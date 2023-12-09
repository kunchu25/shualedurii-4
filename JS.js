const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
const phoneRegex = /^\+{1}[0-9]{3,14}$/

f 
const validateEmail = (email) => emailRegex.test(email) ? true : false
const validatePassword = (password) => passwordRegex.test(password) ? true : false
const validatePhone = (phone) => phoneRegex.test(phone) ? true : false



  
const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()


  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const phone = document.querySelector('#phone')
  const errorEmail = document.querySelector('#errorEmail')
  const errorPassword = document.querySelector('#errorPassword')
  const errorPhone = document.querySelector('#errorPhone')
  const success = document.querySelector('#success')



    if(email && password && phone && errorEmail && errorPassword && errorPhone){

     
        if(!validateEmail(email.value)){
      success.textContent = ''
       errorEmail.textContent = 'Error Email is not Valid'
       errorEmail.style.color = 'red'
       return
    
    }else{
      errorEmail.textContent = ''
     }

    

      if(!validatePassword(password.value)){
          success.textContent = ''
         errorPassword.textContent = 'Error password is not Valid'
         errorPassword.style.color = 'red'
      return
      }else{
         errorPassword.textContent = ''
    }


       if(!validatePhone(phone.value)){
       success.textContent = ''
      errorPhone.textContent = 'Error phone is not Valid'
      errorPhone.style.color = 'red' 
      return
    }else{
      errorPhone.textContent = ''
    }
     
     success.textContent = 'Input values successfully'
     success.style.color = 'green'

     }   
 
}
)





const charactersList = document.getElementById('charactersList');

const searchBar = document.querySelector('input[name="searchBar"]');

   

searchBar.addEventListener('input', async () => {
  try {
    const res = await fetch('https://hp-api.onrender.com/api/characters');
    let hpCharacters = await res.json();
    const filteredCharacters = hpCharacters.filter(character =>
      character.name.toLowerCase().includes(searchBar.value.toLowerCase())
    );
    displayCharacters(filteredCharacters);
  } catch (err) {
    console.error(err);
  }
});

const loadCharacters = async () => {
  try {
    const res = await fetch('https://hp-api.onrender.com/api/characters');
    let hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const   
displayCharacters = (characters) => {
     const htmlString = characters
    .map((character) => {
      return `
        <li class="character">
          <h2>${character.name}</h2>
          <p>House: ${character.house}</p>
          <img src="${character.image}" alt="${character.name}">
        </li>
      `;
    })
    .join('');
  charactersList.innerHTML = htmlString;
};

loadCharacters();