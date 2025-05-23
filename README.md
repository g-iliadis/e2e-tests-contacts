# Playwright E2E Test Suite

## Features

- **Page Object Model** with clean separation of concerns
- Centralized API and UI test logic
- Faker-powered data generation
- Tests split into API and UI layers
- Reusable locator and component structure

---

## Project Structure

```bash
├── tests/
│   ├── api/
│   │   ├── body/
│   │   ├── constants/
│   │   └── specs/
│   ├── specs/
│   │   └── ui/
│   ├── pageObjects/
│   │   ├── Login/
│   │   │ 
│   │   ├── Contacts/
│   │   │   
├── playwright.config.ts
├── .gitignore
└── README.md
```

---

## Setup & Installation

```bash
# 1. Clone the repo
git clone https://github.com/g-iliadis/e2e-tests-contacts.git

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install
```

---

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run with UI (Visual Debugging)
```bash
npx playwright test --ui
```

### Run a specific test file
```bash
npx playwright test tests/specs/ui/login.spec.js
```
---

## Reporting

After test run, view HTML report:
```bash
npx playwright show-report
```

---