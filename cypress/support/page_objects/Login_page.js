import BasePage from "./BasePage";

class LoginPage extends BasePage {
    
    elements={
        usernameInput:()=>cy.get('[data-test="username"]'),
        passwordInput:()=>cy.get('[data-test="password"]'),
        loginBtn:()=>cy.get('[data-test="login-button"]'),
        errorMessage:()=>cy.get('[data-test="error"]')
    }

    visit(){
        this.navigate('/');
    }

    login(username, password){
        this.fillInput(this.elements.usernameInput, username);
        this.fillInput(this.elements.passwordInput, password);
        this.clickElement(this.elements.loginBtn);
    }

    validateErrorMessage(message){
        this.validateText(this.elements.errorMessage, message);
    }


}

export const loginPage = new LoginPage();