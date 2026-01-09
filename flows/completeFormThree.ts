

// flows/completeFormThree.ts
import { Page } from '@playwright/test';
import { InterestsPage, InterestsData } from '../pages/formThree';

export async function completeFormThree(page: Page, data: InterestsData) {
	const interests = new InterestsPage(page);
	await interests.completeAndSubmit(data);
}

