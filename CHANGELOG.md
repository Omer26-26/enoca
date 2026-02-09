# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-02-09

### Added
- **Components:** Created `Button`, `Input`, `Card`, `Modal`, `Accordion` components from scratch.
- **Sections:** Implemented `Hero`, `Features`, `Pricing`, `FAQ`, `Contact` sections.
- **Theming:** Added Light/Dark mode support with persistent local storage preference.
- **Documentation:** Added `README.md`, `deployment_guide.md`, `evaluation_report.md`, and `docs/adr-*` records.
- **CI/CD:** Added GitHub Actions workflow for linting and building.
- **Performance:** Implemented Lazy Loading for sections and WebP image optimization.

### Changed
- **Header:** Updated logo text to "enoca" and added smooth scroll to Contact section.
- **Styling:** Refined color contrast ratios in `_variables.scss` for better accessibility.
- **Hero:** Updated primary button text to "Kayıt Ol" and added high fetch priority to the hero image.

### Fixed
- **Accessibility:** Added `.sr-only` class and accessible names for loading buttons.
- **Layout:** Fixed "Popüler" badge clipping issue in Pricing cards.
- **Bugs:** Fixed SCSS keyframe syntax error in `Button.module.scss`.
