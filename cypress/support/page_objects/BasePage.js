
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

    fillSelect(element, value){
        element()
        .should('be.visible')
        .select(value);
    }

    fillForm(fields) {
        Object.entries(fields).forEach(([element, value]) => {
            this.fillInput(this.elements[element], value);
        });
    }

    fillSelects(fields) {
        Object.entries(fields).forEach(([element, value]) => {
            this.fillSelect(this.elements[element], value);
        });
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