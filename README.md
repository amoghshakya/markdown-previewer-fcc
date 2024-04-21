# Markdown Previewer - FCC

> *This is one of the 5 projects required for the completion of the course [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries).*

**Objective**: Build an app that is functionally similar to [this](https://markdown-previewer.freecodecamp.rocks/).

**Instructions:**\
You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I can see a `textarea` element with a corresponding `id="editor"`.

User Story #2: I can see an element with a corresponding `id="preview"`.

User Story #3: When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the `textarea`.

User Story #4: When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

User Story #5: When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

User Story #6: When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.

Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as `br` (line break) elements.

---
## What?

As explained above, it is one of the projects required for the completion of the Front End Development Libraries on [freeCodeCamp.org](https://www.freecodecamp.org/). You can view this app on [Netlify](https://fcc-mdpreview.netlify.app/) or run it locally.

Clone this repo and run

```bash
npm install
# or
pnpm install
# or
bun install
```

Then, to run the development server

```bash
npm run dev
# or
pnpm dev
# or
bun dev
```

Or, run the build

```bash
npm run build
# or
pnpm build
# or
bun build
```
