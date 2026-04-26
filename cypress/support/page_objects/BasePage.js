
export default class BasePage {
    
    navigate(path){
        cy.visit(path);
    }

    fillInput(element, value){
        element()
        .should('be.visible')
        .clear()
        .type(value);
    }

    clickElement(element){
        element()
        .should('be.visible')
        .click();
    }

    validateText(element, expectedText){
        element().should('contain.text', expectedText);
    }
    
}