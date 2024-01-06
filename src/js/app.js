document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('collapse-btn');
  const content = document.getElementById('popup');

  btn.addEventListener('click', () => {
    content.classList.toggle('expanded');
  });
});
