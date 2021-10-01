// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


// Essa função é responsável pelo avaliação de eventos e visualização de páginas
function coletaDados(categoria, acao, rotulo){

    // Aqui está sendo enviado as informações da página ou exibição
    // ao Google Analytics
    ga('send', {
        hitType: 'pageview',
        page: location.pathname
      });


    // Aqui está sendo enviado as informações do evento ao Google Analytics
    // Passando os atributos para o evento
    ga('send', {
        hitType: 'event',
        eventCategory: categoria,
        eventAction: acao,
        eventLabel: rotulo
      });
}


// Essa função é responsável pelo avaliação de eventos dos campos do formulário
function coletaDadosForm(){

   // Criando array com cada campo presente no formulário
   let acoes = ['nome', 'email', 'telefone', 'aceito'];

   // percorrendo array e chamando o método de eventos para cada campo
   acoes.forEach(function(acao){
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: acao,
        eventLabel: 'preencheu'
      });
   })    
}