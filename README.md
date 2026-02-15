# West Web International — landing demo (EN/PL/UA)

Static business-card website with:
- Soft-blue strict theme (no photos/cities)
- Working navigation buttons (smooth scroll)
- Language switch (EN/PL/UA) with persistence (localStorage)
- Portfolio “Details” modal
- FAQ accordion
- Working forms (demo: toast + console log)

## Run locally (recommended)

### Python (simplest)
Open terminal in this folder and run:
```bash
python -m http.server 5173
```
Open:
- http://localhost:5173

### Node (alternative)
```bash
npx serve .
```

## Make forms really send email
This demo does not send emails. Replace the submit handler in `app.js` with a `fetch()` request to your backend
(or connect Formspree / Make / Zapier).

## Deploy with GitHub + Vercel (no build)

1) Push this folder to a GitHub repo (repository root contains `index.html`).
2) In Vercel: **New Project → Import Git Repository**
3) Preset: **Other**
4) Build Command: **None**
5) Output Directory: **.** (root)
6) Deploy.

### After you connect a domain
- Update `sitemap.xml` and replace `https://westwebinternational.com/` with your real domain.

### Formspree
Set your endpoint in `app.js`:
```js
const FORM_ENDPOINT = "https://formspree.io/f/XXXXXXXX";
```

