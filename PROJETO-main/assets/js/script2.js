function aparecer(){
    const menu = document.getElementById("lat")
    menu.classList.toggle("aparecer")
  }


//ModalFoda//
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

//Abre modal 

openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', (event) =>{
  if(event.target === modal){
    modal.style.display = 'none';
  }
});