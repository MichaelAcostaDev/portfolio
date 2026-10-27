# Michael Acosta — Portfolio

HTML5 + CSS3 + TypeScript only. One `style.css`, one `app.ts` (compiled to `app.js`). No frameworks, backend or database.

## Build and run
```bash
npm install        # installs TypeScript only
npm run build      # tsc -> app.js (strict mode)
npm run typecheck  # tsc --noEmit
npm run serve      # python3 -m http.server 8080 -> http://localhost:8080
```
`app.js` is committed so the site also works without a build step.

## Things to edit
- `CONTACT_EMAIL` in `app.ts` is now set to the verified professional email for the `mailto:` button.
- CV: the section is a placeholder with no download. Add a real PDF link only when the file exists.
- Fonts: Aspekta/Inter Tight are used only if installed locally; otherwise system sans-serif and monospace stacks apply (no network requests).
- `og:image` is not set: it needs an absolute URL once the site is deployed.

## Evidence ledger
| Item | Status | Basis |
|---|---|---|
| Name, GitHub bio ("full stack Developer"), LinkedIn URL | Stated | GitHub profile page; LinkedIn URL listed there |
| LinkedIn content (education, certificates, languages) | **Unverified** | linkedin.com blocks automated access; nothing from it is published |
| Interest Calculator: calculate(), formulas, canvas chart, Intl formatting, ES/EN by browser language, Tailwind | Verified | `src/main.ts` read in full structure; screenshots |
| Diabetes Insight: StandardScaler + linear SVC, validate_inputs(), /predict, joblib persistence, form from CSV headers | Verified | `predictor.py`, `app.py`, README |
| DevWebCamp: custom Router (GET/POST), route table, admin CRUD, /api routes, registration routes | Verified | `Router.php`, `public/index.php` |
| DevWebCamp: PayPal, Gulp/Sass, Chart.js, Leaflet, deployment | README only | not tested |
| Twistora: build/verify scripts, Three.js, Vitest, Cloudflare Worker, Docker | Verified | `package.json`, README |
| Twistora: Kociemba solver integration, module internals | README only / not inspected | `src/` files not read |
| Twistora demo link | Not tested | listed in the repo's About field; not reachable from the build environment |
| UpTask MVC, App Salon, 2048, Space Invaders | README only | not featured |
| Demo credentials found in READMEs | **Not published** | |

## Verification run
- `tsc` strict, exit 0.
- Chromium (Playwright) at 390, 820 and 1440 px: no horizontal overflow, no console or page errors, all images load, 4 projects / 4 tabs / 41 technology chips / 6 steps render.
- ES switch updates `lang`, title and all rendered content; choice persists after reload; first visit with `es-DO` starts in Spanish; arrow-key tab navigation and technology selection work.
- Not measured: Lighthouse, screen-reader testing, real-device testing.
