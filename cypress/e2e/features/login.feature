# language: pt
Funcionalidade: Login no SauceDemo

  Contexto:
    Dado que eu acesso a página de login

  @smoke
  Cenário: Login com sucesso
    Quando eu insiro o usuário "USUARIO_PADRAO" e a senha "SENHA" e clico no botão de login
    Então devo ser redirecionado para a página de inventário

  @regression
  Cenário: Login com usuário bloqueado
    Quando eu insiro o usuário "USUARIO_BLOQUEADO" e a senha "SENHA" e clico no botão de login
    Então devo ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."

  @regression
  Cenário: Login com senha inválida
    Quando eu insiro o usuário "USUARIO_PADRAO" e a senha "senha_errada" e clico no botão de login
    Então devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"
