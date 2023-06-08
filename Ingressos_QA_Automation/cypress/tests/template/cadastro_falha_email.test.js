import { cadastro } from '../lib/functions/cadastro'

describe('Test Emails Invalidos', () => {
  it('Automaçaõ', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    var testData = {
      testOK: false,
      fail_email: true,
      email: '',
    }

    
    var iterations = ['',
     'Victorhugo1508outlook.com',
     'vic.com',
     'vi  oi',
     'gmail.com']

    for (let i = 0; i < iterations.length; ++i) {
        testData.email = iterations[i]
        cadastro(testData)
    }
    
  })
})