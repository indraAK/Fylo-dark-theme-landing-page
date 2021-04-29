const form = document.getElementById('form');

function handleSubmit(event) {
   event.preventDefault();

   const emailInput = form.email;
   const emailValue = emailInput.value.trim();
   const formControl = emailInput.closest('.form-control');
   const errorEl = formControl.querySelector('.error');

   if (emailValue === '') {
      errorEl.style.display = 'block';
      errorEl.textContent = 'Email is required!';
      return;
   }

   if (!isValidEmail(emailValue)) {
      errorEl.style.display = 'block';
      errorEl.textContent = 'Please enter a valid email address';
      return;
   }

   if (isValidEmail(emailValue) && emailValue !== '') {
      errorEl.style.display = 'none';
      errorEl.textContent = '';
      window.location.reload();
   }
}

function isValidEmail(email) {
   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   return regex.test(String(email).toLowerCase());
}

form.addEventListener('submit', handleSubmit);