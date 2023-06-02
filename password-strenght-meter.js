const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('password-strength');

const updatePasswordStrength = () => {
  const password = passwordInput.value;
  const length = password.length;
  let strength = 0;

  if (length >= 6) {
    strength += 1;
  }

  if (/\d/.test(password)) {
    strength += 1;
  }

  if (/[a-z]/.test(password)) {
    strength += 1;
  }

  if (/[A-Z]/.test(password)) {
    strength += 1;
  }

  switch (strength) {
    case 0:
      passwordStrength.innerHTML = '';
      break;
    case 1:
      passwordStrength.innerHTML = '<div class="bar bar-weak"></div>';
      break;
    case 2:
      passwordStrength.innerHTML = '<div class="bar bar-medium"></div>';
      break;
    case 3:
    case 4:
      passwordStrength.innerHTML = '<div class="bar bar-strong"></div>';
      break;
  }
};

passwordInput.addEventListener('input', updatePasswordStrength);
