describe('Functional UI testing for the apps core features', () => {
const song1 = 'Winter Winds';
const song2 = 'Rainy Mood';
const song3 = 'Autumn Leaves';

  beforeEach(() => {
    
    cy.visit('/'); 
});

  it('should be searched tracks through the search field', () => {
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input').type(song1);
    cy.get('.MuiTypography-root.MuiTypography-body1').should('contain.text', song1);

  })

  it('should add a track when the "+" button is clicked', () => {
    cy.get(':nth-child(3) > .MuiButton-root').click();
    cy.get('.MuiTypography-root.MuiTypography-body1').should('contain', song1);

  })

  it('should allow users to select and add multiple tracks', () => {
    cy.get(':nth-child(2) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    cy.get(':nth-child(5) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    cy.contains('Add 2 track').click();
    cy.contains(song2).should('be.visible');
    cy.contains(song3).should('be.visible');

  })
})