import OccupancyFormPage from '../pageObjects/occupancyFormPage.js'

describe('Funtional occupancy test', () => {
  const occupancyFormPage = new OccupancyFormPage();

  it('User should get proper occupancy results', () => {
    cy.visit('/')
    cy.fixture('../fixtures/occupancy.json').then((data) => {
      for (var index in data) {
        console.log(data[index].economyOccupancy)
        occupancyFormPage.fillPremiumRooms(data[index].premiumRooms);
        occupancyFormPage.fillEconomyRooms(data[index].economyRooms);
        occupancyFormPage.clickCalculateBtn();
        occupancyFormPage.assertEconomyRoomsOccupation(data[index].economyOccupancy)
        occupancyFormPage.assertPremiumRoomsOccupation(data[index].premiumOccupancy)
        occupancyFormPage.assertEconomyRoomsRevenue(data[index].economyRevenue)
        occupancyFormPage.assertPremiumRoomsRevenue(data[index].premiumRevenue)
      }
    })
  })
})