# Contributing to react-world-map

Thanks for your valuable desire to participate in this project!

## Table of Contents

1. [Setup and development](#setup-and-development)
1. [How to build code and view demo](#how-to-build-code-and-view-demo)
1. [Opening a PR](#opening-a-pr)
1. [How to update version](#how-to-update-version)

## Setup and development

1. Fork the repo and clone locally
1. `npm install` to get dev dependencies installed

Then:
- Edit `src/index.tsx` to make changes to the project

And / Or:
- Edit `docs/index.jsx` to make changes to the demo

## How to build code and view demo
1. Build the code `npm run build`
1. Build the demo `npm run build-demo`
1. View the demo by opening `docs/index.html` in your browser
1. Test manually: click around on the map, check the console for errors, etc.

## Opening a PR

- [ ] Use [descriptive, imperative-tense commit messages](https://chris.beams.io/posts/git-commit/) and PR titles
- [ ] Use [git rebase](https://medium.com/@slamflipstrom/a-beginners-guide-to-squashing-commits-with-git-rebase-8185cf6e62ec) to organize your git history, if you have multiple "wip" commits
- [ ] Run `npm run lint` (or `npm run lint-fix` to autofix some errors) and `npm run tsc` to check your types and formatting
- [ ] Demo is tested and still works (see above)
- [ ] Readme and other relevant documentation is updated
- [ ] Update version (see below)

## How to update version
1. Determine the type of version update using [semantic versioning](https://semver.org)
1. Run `npm version <major/minor/patch>`
1. Add entry to CHANGELOG.md, and use `git add CHANGELOG.md && git commit --amend` (type `:wq` then hit "enter" key to escape vim) to include it in the npm version commit
