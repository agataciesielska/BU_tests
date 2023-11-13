class occupancyFormPage {

    elements = {
        premiumRoomsInput: () => cy.get('input[data-test-id="premiumRoomsInput"]'),
        economyRoomsInput: () => cy.get('input[data-test-id="economyRoomsInput"]'),
        calculateBtn: () => cy.get('button[data-test-id="calculateButton"]'),
        premiumOccupancyData: () => cy.get('div[data-test-id="premiumOccupancy"]'),
        economyOccupancyData: () => cy.get('div[data-test-id="economyOccupancy"]'),
        premiumRevenue: () => cy.get('div[data-test-id="premiumRevenue"]'),
        economyRevenue: () => cy.get('div[data-test-id="economyRevenue"]')
    }

    fillPremiumRooms(premiumRooms) {
        this.elements.premiumRoomsInput().clear();
        this.elements.premiumRoomsInput().type(premiumRooms)
    }

    fillEconomyRooms(economyRooms) {
        this.elements.economyRoomsInput().clear();
        this.elements.economyRoomsInput().type(economyRooms)
    }

    clickCalculateBtn() {
        this.elements.calculateBtn().click();
    }

    assertEconomyRoomsOccupation(expectedResult) {
        this.elements.economyOccupancyData().should('have.text', expectedResult)
    }

    assertPremiumRoomsOccupation(expectedResult) {
        this.elements.premiumOccupancyData().should('have.text', expectedResult)
    }

    assertEconomyRoomsRevenue(expectedResult) {
        this.elements.economyRevenue().should('have.text', expectedResult)
    }

    assertPremiumRoomsRevenue(expectedResult) {
        this.elements.premiumRevenue().should('have.text', expectedResult)
    }

}

export default occupancyFormPage;