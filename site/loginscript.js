function abrirLogin(){
    const modal = document.getElementById('janela-login')
    modal.classList.add('abrir')

modal.addEventListener('click',(e) => {
    if(e.target.id == 'fechar' || e.target.id == 'janela-login'){
        modal.classList.remove('abrir')
    }
})
}