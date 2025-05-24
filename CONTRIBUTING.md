# Contributing to Collective Compass

First off, thank you for considering contributing to Collective Compass! It's people like you that make this project such a great tool for everyone.

## Code of Conduct

This project and everyone participating in it is governed by the [Collective Compass Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact@collectivecompass.org](mailto:contact@collectivecompass.org).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report:**

* Check the [issues](https://github.com/collective-compass/collective-compass/issues) to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.
* Use the [issue template](https://github.com/collective-compass/collective-compass/blob/main/.github/ISSUE_TEMPLATE/bug_report.md) to create the report.

**How Do I Submit A Good Bug Report?**

* Use a clear and descriptive title.
* Describe the exact steps to reproduce the problem.
* Provide specific examples to demonstrate the steps.
* Describe the behavior you observed after following the steps.
* Explain which behavior you expected to see instead and why.
* Include screenshots if possible.
* Include your environment details (OS, browser, etc.).

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

**Before Submitting An Enhancement Suggestion:**

* Check if the enhancement has already been suggested in the [issues](https://github.com/collective-compass/collective-compass/issues).
* Use the [feature request template](https://github.com/collective-compass/collective-compass/blob/main/.github/ISSUE_TEMPLATE/feature_request.md).

**How Do I Submit A Good Enhancement Suggestion?**

* Use a clear and descriptive title.
* Provide a step-by-step description of the suggested enhancement.
* Provide specific examples to demonstrate the steps.
* Describe the current behavior and explain which behavior you expected to see instead and why.
* Explain why this enhancement would be useful to most users.
* List some other applications where this enhancement exists, if applicable.

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues](https://github.com/collective-compass/collective-compass/labels/good%20first%20issue) - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues](https://github.com/collective-compass/collective-compass/labels/help%20wanted) - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the [JavaScript](#javascript-styleguide) and [CSS](#css-styleguide) styleguides
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐎 `:racehorse:` when improving performance
    * 🚱 `:non-potable_water:` when plugging memory leaks
    * 📝 `:memo:` when writing docs
    * 🐛 `:bug:` when fixing a bug
    * 🔥 `:fire:` when removing code or files
    * 💚 `:green_heart:` when fixing the CI build
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies
    * 👕 `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript code is linted with [ESLint](https://eslint.org/) and formatted with [Prettier](https://prettier.io/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Use functional components with hooks over class components
* Use async/await over Promise chains
* Use template literals over string concatenation
* Use destructuring where appropriate

### CSS Styleguide

* Use Tailwind CSS utility classes
* Follow the component-based styling approach
* Use CSS variables for theming
* Ensure responsive design for all components

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues that are bugs
* `documentation` - Issues or PRs related to documentation
* `duplicate` - Issues that are duplicates of other issues
* `enhancement` - Issues that are feature requests
* `good first issue` - Issues that are good for newcomers
* `help wanted` - Issues that need assistance
* `invalid` - Issues that are invalid or non-reproducible
* `question` - Issues that are questions
* `wontfix` - Issues that won't be fixed

## Thank You!

Your contributions to open source, large or small, make projects like this possible. Thank you for taking the time to contribute.
