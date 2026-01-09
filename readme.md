# Playwright UI Testing Framework (Proof of Concept)

## Overview

This project is a **proof of concept UI testing framework** built with **Playwright** to demonstrate a scalable approach to testing a **linear, form-driven internal web application**.

The primary goal of this project is to show how UI tests can remain **maintainable, reusable, and resilient** even when an application:

- Enforces strict step-by-step progression  
- Changes frequently  
- Cannot deep-link into intermediate pages  

This repository is designed as a **portfolio artifact** to demonstrate my ability to analyze an application’s constraints and architect a testing solution tailored to real-world business needs.

---

## Problem Statement

The target web application follows a **linear workflow**, where each page depends on the successful completion of the previous step.

Because of this:

- Pages in the middle of the workflow **cannot be tested in isolation**
- Tests must always replay earlier steps
- UI changes can quickly cause test duplication and maintenance overhead

A naive test implementation would lead to:

- Repeated code across many tests
- Fragile selectors scattered throughout the test suite
- High maintenance cost as the UI evolves

---

## Solution Approach

This framework is structured around three core concepts:

### 1. Page Object Model (POM)

- Each page in the application is represented by a **single page class**
- All selectors and page-specific logic live in one file
- UI changes require updates in **only one location**

### 2. Flow-Based Testing

- **Flows** represent meaningful sequences of user actions (e.g. completing Form 1 → Form 2 → Form 3)
- Flows call one or more page objects
- Tests can reuse flows to reach any point in the application

### 3. Composable, Data-Driven Tests

- Tests orchestrate flows and pass data objects
- Multiple scenarios can be tested without duplicating navigation logic
- New tests can focus on *behavior*, not setup

This design allows tests targeting later stages of the application to remain readable and maintainable, even though earlier steps must be completed every time.

---

## Project Structure

.
├── pages/ # Page Object Models (one per application page)
├── flows/ # Reusable user workflows (multi-page sequences)
├── data/ # Test data for different scenarios
├── tests/ # Test definitions
└── playwright.config.ts


### Why This Matters

If a single page’s UI changes:

- Only its corresponding page file needs to be updated
- All flows and tests that depend on it continue to work

This structure supports **frequent UI changes** with minimal disruption.

---

## Example Use Case

A test validating behavior on the *final step* of the workflow:

1. Calls a flow that completes all prerequisite pages
2. Supplies different test data scenarios
3. Verifies expected outcomes

Even though the test is end-to-end, it remains:

- Short
- Intentional
- Easy to reason about

---

## Running the Tests

### Run all tests

```bash
npx playwright test
Run tests using the Playwright UI mode
bash
Copy code
npx playwright test --ui
Generate selectors using Playwright Codegen
bash
Copy code
npx playwright codegen <url>
```

## Why This Project Exists
This project was built intentionally as:

A learning exercise

A proof of concept

A demonstration of system-level thinking

Rather than focusing on test quantity, the emphasis is on:

Architecture

Maintainability

Realistic constraints found in internal business applications

## It reflects how I would approach implementing UI testing for a production system where:

Change is constant

Tests must evolve alongside the application

Long-term maintainability matters


## Future Improvements that could be made
Potential enhancements include:

CI integration (GitHub Actions)

Visual regression testing

Test tagging and selective execution

Improved reporting

Parallelized environment support
