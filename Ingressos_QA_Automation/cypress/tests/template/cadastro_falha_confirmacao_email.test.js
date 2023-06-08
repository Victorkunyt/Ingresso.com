import { cadastro } from '../lib/functions/cadastro'

describe('Test Confirmação do email OK', () => {
  it('Automação', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    var testData = {
      email: 'Victorhugo1508@outlook.com',
      confirmacao_email: '',
      fail_confirmed: true
    }

    var iterations = ['','vi  oro','vitoremail.com','8ryr473']

    for (let i = 0; i < iterations.length; ++i) {
      testData.confirmacao_email = iterations[i]
     cadastro(testData)

    }
  })
})


