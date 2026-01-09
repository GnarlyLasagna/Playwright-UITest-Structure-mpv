//
// pages/formTwo.ts
import { Page } from '@playwright/test';

export type PreferencesData = {
	state: string;
	cheese: string;
	operatingSystem: string;
};

export class PreferencesPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async selectState(state: string) {
		await this.page.getByRole('radio', { name: state }).click();
	}

	async selectCheese(cheese: string) {
		await this.page.getByRole('radio', { name: cheese }).click();
	}

	async selectOperatingSystem(operatingSystem: string) {
		await this.page.getByRole('radio', { name: operatingSystem }).click();
	}

	async goNext() {
		await this.page.getByRole('button', { name: 'Next' }).click();
	}

	async completeSection(data: PreferencesData) {
		await this.selectState(data.state);
		await this.selectCheese(data.cheese);
		await this.selectOperatingSystem(data.operatingSystem);
		await this.goNext();
	}
}

