import { baseUrl, checkUrl } from "../_cypress";
import { cadastroPageObject } from "../pageObjects/cadastroPage";

export function cadastro(testData) {
	let po = cadastroPageObject();

	cy.visit(baseUrl() + "minha-conta/cadastro");

	switch (
		testData.nome == true &&
		testData.fail_nome == true &&
		testData.fail_cpf == true &&
		testData.fail_email == true &&
		testData.fail_confirmed == true
	) {
		case true:
			cy.xpath("/html/body/div[2]/div/form/div/div[1]/div[1]/div[1]/div/input")
				.type(testData.nome)
				.tab();
			break;

		case true:
			cy.xpath("/html/body/div[2]/div/form/div/div[1]/div[1]/div[2]/span")
				.invoke("text")
				.should(
					"eq",
					"O nome precisa ter entre 3 e 60 caracteres e não possuir caracteres especiais"
				);
			break;

		case true:
			cy.xpath("/html/body/div[2]/div/form/div/div[1]/div[2]/div[2]/span")
				.invoke("text")
				.should("eq", "É obrigatório preencher o CPF.");
			break;

		case true:
			cy.xpath(
				'//*[@id="__next"]/div/form/div/div[2]/div[1]/div[2]/span/text()'
			)
				.invoke("text")
				.should(
					"eq",
					"Informe um endereço de e-mail válido. Ele será utilizado mais tarde para validar seus dados"
				);
			break;

		case true:
			cy.xpath("/html/body/div[2]/div/form/div/div[2]/div[2]/div[2]/span")
				.invoke("text")
				.should("eq", "Este campo deve ser igual ao de e-mail");
			break;

		default:
			cy.xpath("/html/body/div[2]/div/form/div/div[1]/div[1]/div[1]/div/input")
				.click()
				.tab();
			break;
	}

	if (testData.cpf) {
		cy.xpath("/html/body/div[2]/div/form/div/div[1]/div[2]/div[1]/div/input")
			.type(testData.cpf)
			.tab();
	} else if (testData.email) {
		cy.xpath('//*[@id="__next"]/div/form/div/div[2]/div[1]/div[1]/div/input')
			.type(testData.email)
			.tab();
	} else if (testData.confirmacao_email) {
		cy.xpath('//*[@id="__next"]/div/form/div/div[2]/div[2]/div[1]/div/input')
			.type(testData.confirmacao_email)
			.tab();
	} else {
		cy.xpath("/html/body/div[2]/div/form/div/div[1]/div[2]/div[1]/div/input")
			.click()
			.tab();
	}

	if (testData.senha) {
		cy.xpath('//*[@id="__next"]/div/form/div/div[3]/div/div[1]/div/input')
			.type(testData.senha)
			.tab();
	} else {
		cy.xpath('//*[@id="__next"]/div/form/div/div[3]/div/div[1]/div/input')
			.click()
			.tab();
	}

	if (testData.senha_fail == true) {
		if (testData.senha == "") {
			cy.xpath('//*[@id="__next"]/div/form/div/div[3]/div/div[2]/span')
				.invoke("text")
				.should("eq", "A senha é obrigatória");
		} else {
			cy.xpath('//*[@id="__next"]/div/form/div/div[3]/div/div[2]/span')
				.invoke("text")
				.should("eq", "A senha não atende aos critérios necessários.");
		}
	}
}
