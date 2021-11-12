// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  const div = document.createElement('div');
  div.className = 'list-row';

  const li = document.createElement('li');
  li.innerText = inputText;

  div.appendChild(li);

  console.log(div, li);
};

// Events
document
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd());
