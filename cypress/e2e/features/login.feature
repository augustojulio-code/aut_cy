# language: pt
Funcionalidade: Login no SauceDemo

  Contexto: 
    Dado que eu acesso a página de login

  Cenário: Login com sucesso
    Quando eu insiro o usuário "standard_user" e a senha "secret_sauce" e clico no botão de login
    Então devo ser redirecionado para a página de inventário