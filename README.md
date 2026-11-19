# Mohamed Fathy El Dershaby: e-portfolio

Plain HTML, CSS and JavaScript. No build step: open `index.html` in a browser.

## Where to edit
- **All content** (projects, events, skills, certificates, email/links/CV): `js/data.js`.
  Text in `[[double brackets]]` is a placeholder and shows highlighted in yellow until you replace it.
  An empty link (`""`) shows as a greyed-out "soon" pill.
- **Colors and layout**: `css/style.css` (palette variables at the top).
- **Page text** (Home, Goals, About): the matching `.html` file.
- **Rafeeq startup page** (`rafeeq.html`): all its text is in `RAFEEQ` at the end of `js/data.js` (French: `RAFEEQ` at the end of `js/data-fr.js`). Brand images: `assets/img/rafeeq/` (optimised copies of `assets/Rafeeq/`).

## Files to add
- `assets/photo.jpg`, then set `photo: "assets/photo.jpg"` in `js/data.js`
- `assets/cv/CV_EN.pdf` and `assets/cv/CV_FR.pdf`, then set `cvEN` / `cvFR`
- Certificate PDFs/images in `assets/certificates/`, project screenshots in `assets/projects/`
  (set `image:` on a project to show a screenshot in its card)

## French version (EN / FR button)
- The EN / FR button is in the top menu. The site opens in French automatically for visitors whose browser is in French.
- To send a link that always opens in French: `index.html?lang=fr` (or `?lang=en` for English).
- French text for projects, events, skills and certificates: `js/data-fr.js` (same order as `js/data.js`).
  **When you change a text in `data.js`, change the same item in `data-fr.js`.**
- French text for the fixed page text and the menu: `js/i18n.js`.

## Pages
1 index · 2 goals · 3 personal-projects · rafeeq (my startup) · 4 university-year-1 · 5 university-year-2 · 6 events · 7 skills · 8 certificates · 9 about
