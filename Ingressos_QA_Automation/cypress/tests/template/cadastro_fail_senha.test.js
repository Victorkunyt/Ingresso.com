import { cadastro } from "../lib/functions/cadastro";

describe("Senha Fail", () => {
	it("Automação senha fail", () => {
		Cypress.on("uncaught:exception", (err, runnable) => {
			return false;
		});

		var testData = {
			testOK: false,
			senha_fail: true,
			senha: "",
		};

		var iterations = ["", "123.456", "aaaaaa", "1231231320", "    a123"];

		for (let i = 0; i < iterations.length; ++i) {
			testData.senha = iterations[i];
			cadastro(testData);
		}
	});
});
