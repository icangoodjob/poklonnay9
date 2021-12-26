
function socialHidden(){
    const btn = document.querySelector('.share');
    const blockHidden = document.querySelector('.social');
    
    function showBlock() {
    
      blockHidden.classList.add('b-show');
    
    }
    btn.addEventListener('click', showBlock);
}

export default socialHidden;