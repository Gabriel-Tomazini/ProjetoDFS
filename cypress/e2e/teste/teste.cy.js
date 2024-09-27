describe('Fluxo de Cadastro', () => {
  it('Deve acessar a página de cadastro', () => {
    // Acessa a página de cadastro
    cy.visit('http://127.0.0.1:5500/HTML/Cadastro.html');
  });

  it('Deve preencher o formulário de cadastro e enviar', () => {
    cy.visit('http://127.0.0.1:5500/HTML/Cadastro.html');
    // Preenche o campo de nome de usuário
    cy.get('input[id="usuario"]').type('teste');

    // Preenche o campo de e-mail
    cy.get('input[id="email"]').type('test@test.com');

    // Preenche o campo de confirmação de e-mail
    cy.get('input[id="confirmEmail"]').type('test@test.com');

    // Preenche o campo de senha
    cy.get('input[id="senha"]').type('123');

    // Preenche o campo de confirmação de senha
    cy.get('input[id="confirmSenha"]').type('123');

    // Clica no botão de cadastro
    cy.get('button[id="cadastrar"]').click();

    // Verifique o comportamento após o cadastro
    // Aqui você pode verificar se o cadastro foi bem-sucedido, como um redirecionamento
    // ou a exibição de uma mensagem de sucesso.
    // Exemplo: Verificar se a URL foi redirecionada para uma página de login
    cy.url().should('include', '/Login.html');
  });
});


describe('Fluxo de Login', () => {
  it('Deve acessar a página de login', () => {
    // Acessa a página de login
    cy.visit('http://127.0.0.1:5500/HTML/Login.html');
  });

  it('Deve preencher e-mail e senha, fazer login e verificar a URL', () => {
    cy.visit('http://127.0.0.1:5500/HTML/Login.html');
    // Preenche o campo de e-mail
    cy.get('input[id="email"]').type('test@test.com');
    
    // Preenche o campo de senha
    cy.get('input[id="senha"]').type('123');
    
    // Clica no botão de login (com id="entrar")
    cy.get('button[id="entrar"]').click();
    
    cy.url().should('include', '/index.html');

  });
});
