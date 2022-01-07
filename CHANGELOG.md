# Changelog

## 2.4.0 - 2022-01-07

- Accept react 17 as peer dependency (as well as 16), thanks @VWRoli !

## 2.3.0 - 2021-02-04

- Add support for multiple selection in uncontrolled map.

## 2.2.0 - 2020-01-19

- Use controlled component if selected OR onSelect props are given
- 2.1.0 was stupid, that should have been a branch and not smack dab on main branch -_-

## 2.1.0 - 2020-01-19

- Check specifically for 'undefined' value in `props.selected`
- Add console warning for passing only 1 out of 2 props for controlled component

## 2.0.0 - 2020-09-28

BREAKING VERSION CHANGE from 1.0.13!

- Upgrade react, react-dom versions to 16 (set as peer dependencies)
- Add `selected` and `onSelect` optional props

And things you probably care less about (dev process):

- Upgrade webpack, babel
- Add typescript (internal only)
- Update demo

## 1.0.13 - 2016-06-24

Wow that was a while ago. The component emitted browser events instead of actually using React. Super weird choice I made back then :joy:
