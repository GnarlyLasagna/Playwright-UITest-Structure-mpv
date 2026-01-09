

// flows/completeFormOne.ts
import { Page } from '@playwright/test';
import { PersonalInfoPage } from '../pages/formOne';
import { PersonalInfoData } from '../pages/formOne';

export async function completeFormOne(page: Page, data: PersonalInfoData) {
	const formOne = new PersonalInfoPage(page);
	await formOne.completeSection(data);
}

