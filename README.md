# Itaú boilerplate

## Setup

First, change the project name in `package.json`, temporally set as `itau-***`:
This is crucial for the build to work ⚠️, since it makes use of that attribute to generate the files and folder names.

Also, remember to rename the html files and it's references in package.json. As a placeholder, the entry html file is called `renameMe.html`.

Then, run

```bash
yarn
```

## Development

To run the page in development mode, run

```bash
yarn start
```

This will setup a live reloading server, listening to all your changes.
Remember: All of this will be outside Itaú main site, so global stuff usually available there, will not in this mode.

## Build (or showtime)

To complile and minify the page and place it right into the actual Itaú website, run:

```bash
yarn showtime
```

> ⚠️: This build step counts on this project being right next to the itaú site folder (called `itau`):

```
-your-development-folder
   |
    - itau                <--- Public website repo
   |
    - itau-something      <--- This project
```

## CSS

If need multiple css files, import them in `styles.css`, like:

```css
@import './path-to-your-own-file.css';
```

You can also import css files from your dependencies, like:

```css
@import 'owl.carousel/dist/assets/owl.theme.default.css';
```

Take a look at the .postcssrc to see the color variables available (itau pallet).
You can use them like { background-color: $orange; }

Don't add prefixed rules. This setup adds all vendor prefixes 🎉

You can also do rgb stuff like rgba($orange, 0.4).

If you want to style for Internet Explorer you can do it like:

```css
.ie9 form {
  // rules here will only apply to Internet Explorer 9
}
.ie8 div {
  // rules here will only apply to Internet Explorer 8
}
// etc
```

There's no need for HTML comments with conditional stylesheets anymore.
