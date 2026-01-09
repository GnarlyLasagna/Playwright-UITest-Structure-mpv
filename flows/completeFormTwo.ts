

// flows/completeFormTwo.ts
import { Page } from '@playwright/test';
import { PreferencesPage, PreferencesData } from '../pages/formTwo';

export async function completeFormTwo(page: Page, data: PreferencesData) {
	const preferences = new PreferencesPage(page);
	await preferences.completeSection(data);
}

