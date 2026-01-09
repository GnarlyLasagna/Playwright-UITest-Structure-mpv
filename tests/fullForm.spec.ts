// tests/submit-form.spec.ts
import { test, expect } from '@playwright/test';

import { completeFormOne } from '../flows/completeFormOne';
import { completeFormTwo } from '../flows/completeFormTwo';
import { completeFormThree } from '../flows/completeFormThree';

import { thirdPersonalInfoData } from './data/personalInfo';
import { thirdPreferences } from './data/preferences';
import { thirdInterests } from './data/interests';

test('user completes the entire form successfully', async ({ page }) => {
	await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSc9MvFjv0c4lx8Fxb2RhVz1rCLT7AzWR1H9nTvb9Wt766Q8Jw/viewform?usp=dialog')
	await completeFormOne(page, thirdPersonalInfoData);
	await completeFormTwo(page, thirdPreferences);
	await completeFormThree(page, thirdInterests);

	await expect(page.getByText('Thanks for submitting your contact info!')).toBeVisible();
});

