const modals = [document.getElementById('myModal1'), document.getElementById('myModal2'), document.getElementById('myModal3')];
const buttons = [document.getElementById('myBtn1'), document.getElementById('myBtn2'), document.getElementById('myBtn3')];
const spans = document.getElementsByClassName('close');

window.onclick = event => {
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
};

buttons.forEach((button, index) => {
  button.onclick = () => {
    modals[index].style.display = 'block';
  };
});

for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = () => {
    modals[i].style.display = 'none';
  };
}
