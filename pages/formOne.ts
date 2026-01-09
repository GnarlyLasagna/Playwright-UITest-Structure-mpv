
// pages/formOne.ts
import { Page, Locator, expect } from '@playwright/test';

export type PersonalInfoData = {
	name: string;
	email: string;
	address: string;
	phone?: string;
	optionIndex: number;
	date: string;
	rating: string;
	comments?: string;
};

export class PersonalInfoPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async validateEmptyFields() {
		await expect(
			this.page.getByRole('textbox', { name: 'Name Required question' })
		).toBeEmpty();
	}

	async fillForm(data: PersonalInfoData) {
		await this.page.getByRole('textbox', { name: 'Name Required question' }).fill(data.name);
		await this.page.getByRole('textbox', { name: 'Email Required question' }).fill(data.email);
		await this.page.getByRole('textbox', { name: 'Address Required question' }).fill(data.address);

		if (data.phone) {
			await this.page.getByRole('textbox', { name: 'Phone number' }).fill(data.phone);
		}

		await this.page.locator('.e2CuFe').click();
		await this.page.getByText('Option').nth(data.optionIndex).click();

		await this.page.getByRole('textbox', { name: 'Date' }).fill(data.date);
		await this.page.getByRole('radio', { name: data.rating }).click();

		if (data.comments) {
			await this.page.getByRole('textbox', { name: 'Comments' }).fill(data.comments);
		}
	}

	async goNext() {
		await this.page.getByRole('button', { name: 'Next' }).click();
	}

	async completeSection(data: PersonalInfoData) {
		await this.validateEmptyFields();
		await this.fillForm(data);
		await this.goNext();
	}
}

