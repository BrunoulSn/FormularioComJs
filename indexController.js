
function CadastroUsuario(){
  let nome = document.getElementById("NomeUsuario");
  let email = document.getElementById("EmailUsuario");
  let senha = document.getElementById("SenhaUsuario");
  let senhaCriptografada = CryptoJS.AES.encrypt(senha.value, 'chaveSecreta').toString();

    let cadastro = {
        nome: nome.value,
        email: email.value,
        senha: senhaCriptografada.value,
      };      
// Converter o objeto para uma string JSON e armazenar no LocalStorage
localStorage.setItem('cadastro', JSON.stringify(cadastro));

// Recuperar os dados do LocalStorage e converter de volta para um objeto JSON
let cadastroRecuperado = JSON.parse(localStorage.getItem('cadastro'));

/*// Descriptografar a senha
let senhaDescriptografada = CryptoJS.AES.decrypt(cadastroRecuperado.senha, 'chaveSecreta').toString(CryptoJS.enc.Utf8);

// Substituir a senha criptografada pela senha descriptografada
cadastroRecuperado.senha = senhaDescriptografada;
*/
console.log(cadastroRecuperado);
    }