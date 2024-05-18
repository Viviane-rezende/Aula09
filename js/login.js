/*document.getElementById("formogin").addEventListener('button',
function(event){

    alert('Hello World')
})

    function ola(){
        alert('Hello World')
    }*/

    function ola(){

        let email= document.getElementById("email_form").value
        let senha= document.getElementById("senha_form").value

        console.log(email,senha)

    if(email == "" || senha == ""){
        alert('Login recusado');
    }else{
        alert('Login Aprovado');
    }

    }
    