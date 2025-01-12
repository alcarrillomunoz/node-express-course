const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit-button'); 
const nameInput = document.querySelector('.name-input');
const passwordInput = document.querySelector('.password-input');
const loginMessage = document.querySelector('.login-message'); 
const authButton = document.querySelector('.auth-button')
const authMessage = document.querySelector('.auth-message');
const successMessage = document.querySelector('.success');

loginMessage.hidden = true; 
successMessage.hidden = true; 

form.addEventListener('submit', async (e) => {
  e.preventDefault(); 
  const name = nameInput.value;
  const password = passwordInput.value; 
  console.log('submit', name, password); 

  if (!name || !password) {
    loginMessage.hidden = false;
  } 
  if (name && password) {
    loginMessage.hidden = true; 
    successMessage.hidden = false; 
  }
  nameInput.value = '';
  passwordInput.value = ''; 

  const { data } = await axios.post('/api/v1/logon', { name, password });  
  localStorage.setItem('token', data.token); 
})

authButton.addEventListener('click', async (e) => {
  const token = localStorage.getItem('token');
  successMessage.hidden = true; 

  if (token === null) {
    authMessage.innerHTML = 'Unauthorized'; 
  }
  else {
    try {
      const { data } = await axios.get('/api/v1/hello', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          authMessage.innerHTML = `<h5>${data.msg}</h5>`
        } catch (error) {
          localStorage.removeItem('token');
          authMessage.innerHTML = 'Unauthorized';
        }
    }
})