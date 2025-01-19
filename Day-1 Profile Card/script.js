const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add active class to the clicked button and corresponding panel
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});
