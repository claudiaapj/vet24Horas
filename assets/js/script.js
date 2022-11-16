let count = 1;

document.getElementById("radio1").checked = true;

const erro = document.getElementById("erro");

setInterval(function(){
    mudaimg();
}, 2000)
  
function mudaimg(){
    count++;
    if(count >3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}



function validaForm(frm) {
    /*
    o parâmetro frm desta função significa: this.form,
    pois a chamada da função - validaForm(this) foi
    definida na tag form.
    */
        //Verifica se o campo nome foi preenchido e
        //contém no mínimo três caracteres.
        if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
            //É mostrado um alerta, caso o campo esteja vazio.
           // alert("Por favor, indique o seu nome.");
           if(erro.classList = "none"){
           erro.classList.remove("none")
            erro.innerHTML = "Preecha o nome!"
           }else{
            erro.classList.add("none")
           }


            //Foi definido um focus no campo.
            frm.nome.focus();
            //o form não é enviado.
            return false;
        }
        //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
        if(frm.email.value.indexOf("@") == -1 ||
          frm.email.valueOf.indexOf(".") == -1 ||
          frm.email.value == "" ||
          frm.email.value == null) {
            if(erro.classList = "none"){
                erro.classList.remove("none")
                 erro.innerHTML = "Preecha o e-mail corretamente!"
                }else{
                 erro.classList.add("none")
                }
            frm.email.focus();
            return false;
        }
       
    }
