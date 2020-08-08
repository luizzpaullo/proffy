//Criar função para o Botão + Novo Horario e duplicar campos no formulario


//Procura o Botao +Novo Horario atraves da ID = add-time
document.querySelector("#add-time")
//Adiciona um ouvidor de eventos para capturar o clique do botao e passa como paramentro uma chamada da ação
.addEventListener('click',cloneField)

//Criar  uma Ação
function cloneField(){
    //duplicar os campos . que campos ?
   const newFieldContainer =  document.querySelector('.schedule-item').cloneNode(true)

   //ao copiar os campos limpar
   const fields = newFieldContainer.querySelectorAll('input')

   //para cada campo, limpar de forma dinamica, fazendo iterações
   fields.forEach(function(field) {
       //pega o field do momento e limpa ele
       field.value = ""
   });


    //coloca na pagina, mas antes devo informar onde
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}