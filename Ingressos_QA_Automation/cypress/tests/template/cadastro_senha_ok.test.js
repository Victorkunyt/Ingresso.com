import { cadastro } from '../lib/functions/cadastro'

describe('Senha OK', () => {
  it('Automação Senha OK', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    var testData = {
      testOK: true,
      senha: 'Vitek010'
    }

    cadastro(testData)
  })
})