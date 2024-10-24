# Changelog
Uses custom format of
[Total-Updates].[Changes].[Commits-Since-Previous-Release]
(last one mostly for development versions)

# v1.0.11 - 10/24/2024
## Changed
- Renamed `elements.js` file to `strings.js` file
  - This is because it will mainly be for things like `paragraphs` and `footers`, things that have to do with strings
- Simplified `createParagraph` function to use the new `createString` function
## Added
- `library` folder for things only related to library info. like `global.js` for global files
- `global.js` for global constant variables
- `createString` function to simplify creating different types of string elements
## Fixed
- `v1.0.0` Changelog

# v1.0.0 - 10/24/2024
## Added
- `CreateParagraph` Function
- Simple Hello world paragraph
- Changelog