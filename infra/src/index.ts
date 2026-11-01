const emailInput = document.querySelector<HTMLInputElement>(
  'input[type="email"]',
);
const loginButton = document.querySelector<HTMLButtonElement>(
  '.card button:last-of-type',
);

function isValidEmail(email: string): boolean {
  return email.includes('@');
}

if (emailInput && loginButton) {
  loginButton.addEventListener('click', () => {
    const email = emailInput.value;
    if (isValidEmail(email)) {
      alert('Добро пожаловать!');
    } else {
      alert('Проверьте email');
    }
  });
}
