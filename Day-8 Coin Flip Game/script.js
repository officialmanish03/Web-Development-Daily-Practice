const flipBtn = document.getElementById('flip-btn');
const resultDiv = document.getElementById('result');
const coinDiv = document.querySelector('.coin');
const headsDiv = document.querySelector('.heads');
const tailsDiv = document.querySelector('.tails');

flipBtn.addEventListener('click', () => {
    const randomNum = Math.random();
    const result = randomNum < 0.5 ? 'Heads' : 'Tails';

  
    setTimeout(() => {
        headsDiv.style.display = result === 'Heads' ? 'block' : 'none';
        tailsDiv.style.display = result === 'Tails' ? 'block' : 'none';
        resultDiv.textContent = `You got ${result}!`;
    }, 2000);
});
