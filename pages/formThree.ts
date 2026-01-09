// pages/formThree.ts
import { Page } from '@playwright/test';

export type InterestsData = {
	regions: string[];
	headphones: string[];
	games: string[];
};

export class InterestsPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async checkOptions(options: string[]) {
		for (const option of options) {
			await this.page.getByRole('checkbox', { name: option }).click();
		}
	}

	async submit() {
		await this.page.getByRole('button', { name: 'Submit' }).click();
	}

	async completeAndSubmit(data: InterestsData) {
		await this.checkOptions(data.regions);
		await this.checkOptions(data.headphones);
		await this.checkOptions(data.games);
		await this.submit();
	}
}

