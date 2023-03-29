document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelector('.nav-links');
  const navBtnDOM = document.querySelector('.nav-btn');

  navBtnDOM.addEventListener('click', function() {
    links.classList.toggle('show-links');
  });
  const date = document.getElementById('date');
  const currentYear = new Date().getFullYear();
  date.textContent = currentYear;
});
  



