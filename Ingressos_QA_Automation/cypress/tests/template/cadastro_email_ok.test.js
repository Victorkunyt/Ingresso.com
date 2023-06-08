
import { cadastro } from '../lib/functions/cadastro'

describe('cadastro OK', () => {
  it('Test Email OK ', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    var testData = {
      testOK: true,
      nome: 'Victor',
      cpf: '90511603053',
      email: 'Victorhugo1508@outlook.com'
    }

    
    var iterations = ['Victorhugo1508@outlook.com']

    for (let i = 0; i < iterations.length; ++i) {
        testData.email = iterations[i]

    }
    cadastro(testData)
  })
})
