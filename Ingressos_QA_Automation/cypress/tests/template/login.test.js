
import { login, validarLogin } from '../lib/functions/login'

describe('Ingresso login', () => {
  it('Realizar Login', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    var testData = {
      testOK: true,
      cpf_email: '',
      senha: '',
    }

    login(testData)
    validarLogin(testData);
  })

})

