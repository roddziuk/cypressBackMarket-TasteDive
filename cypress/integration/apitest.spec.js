context ('HTTP requests', () => {
    it('GET request' ,() => {
      cy.fixture('testApiData').as('research').then(research =>{
        research.forEach(research=>{  
      cy.tasteDiveSearch(research.q, research.info, research.limit, research.type)
        .then(response => {
        cy.log(JSON.stringify(response))
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('Similar')
        expect(response.body.Similar).to.have.property('Results')
        expect(response.body.Similar.Results).to.have.lengthOf(research.limit)
        expect(response.body.Similar.Info[0].Name).to.eql(research.q)
        expect(response.body.Similar.Info[0].Type).to.eql(research.type)
    })
})
})
})
})
it('GET request for Lolita movie',()=>{44
  cy.tasteDiveSearch('Lolita', 5, '379448-YanaOstr-A687JDTZ', 'movie').then(response =>{
      cy.log(JSON.stringify(response))
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('Similar')
      expect(response.body.Similar).to.have.property('Results')
      expect(response.body.Similar.Results[0].Type).to.eql('movie')
    })
  })