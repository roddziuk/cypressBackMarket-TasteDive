
Cypress.Commands.add('tasteDiveSearch', (q, info, limit, type) => {
    cy.request({
        url: 'https://tastedive.com/api/similar',
        qs: {
            q: q,
            limit: limit,
            type: type,
            info: info,
            k: '379448-YanaOstr-A687JDTZ'
        }
    }) 
})