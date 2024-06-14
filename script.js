
let base , alt , pResultado
base = document.getElementById('base')
alt= document.getElementById('altura')
 pResultado = document.getElementById('resultado')

function calculartriangul(){
    let resultado
    let n1 = parseFloat(base.value);
    let n2 = parseFloat(alt.value);

     if (isNaN(n1) || isNaN(n2)) {
        exibirDados('Valores inválidos!');
        return;
    }
    resultado = (n1 * n2)/2
   
     exibirDados(resultado)
  }



function exibirDados (resultado){
    limparCampos()
    pResultado.textContent = resultado
   
}
function limparCampos(){
    base.value = ''
    alt.value =''
    base.focus()

}
