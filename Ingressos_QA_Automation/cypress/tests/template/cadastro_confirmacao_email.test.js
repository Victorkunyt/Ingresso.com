import { cadastro } from '../lib/functions/cadastro'

describe('Confirmação email', () => {
  it('Test Confirmação do email OK', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    var testData = {
      email: 'Victorhugo1508@outlook.com',
      confirmacao_email: 'Victorhugo1508@outlook.com',
    }


  cadastro(testData)

  })
})
