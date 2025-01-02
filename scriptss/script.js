let contfreq = document.querySelectorAll('.containerselect')
let txtselect = document.querySelectorAll('.pselect')
let pfreq = document.querySelectorAll('#pfreq')



contfreq.forEach((cont, numero) => {
    cont.addEventListener('mouseover', () => {
        txtselect[numero].style.color = '#00B289'
    })

    cont.addEventListener('mouseout', () => {
        txtselect[numero].style.color = '#4C525A'
    })

    cont.addEventListener('click', () => {
        pfreq[numero].classList.toggle('pfreqativo')

    })


})



//numero = ao qual o mouse está passando



function mudar() {
    
    document.getElementById('fora').classList.toggle('ativo')
    document.getElementById('dentro').classList.toggle('ativo')


    
 
    

    

  
    
    

}
