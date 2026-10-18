# Karen Akram — Junior Data Analyst Portfolio

A complete, responsive, multi-page portfolio website for **Karen Akram Khalil Tadrous**.
Pure HTML/CSS/JS — no build step, no dependencies, no backend required.

## Pages

| File | Content |
|---|---|
| `index.html` | Homepage: hero, highlights, services preview, USP, featured projects |
| `about.html` | About Me + languages + CV download |
| `services.html` | The three services in full detail |
| `experience.html` | Work / internship / volunteer timeline |
| `education.html` | Degree + editable graduation-project fields |
| `certificates.html` | Certificate gallery with empty states |
| `skills.html` | Grouped skill tags |
| `projects.html` | Projects overview + future-project template |
| `projects/amazon-electronics.html` | Amazon team project detail page |
| `projects/nexa-retail.html` | Nexa Retail dashboard detail page |
| `projects/house-prices.html` | House Prices ML project (sections being finalized) |
| `contact.html` | Contact info + validated contact form |

## How to update content

Everything is plain HTML — edit any `.html` file in a text editor:

- **Photo** — replace `assets/img/profile.jpg` (keep the same filename, ~4:5 ratio works best).
- **CV** — replace `assets/cv/Karen_Akram_CV.pdf`.
- **Certificates** — in `certificates.html`, replace each `<div class="cert-empty">…</div>` with
  `<img class="cert-thumb" src="assets/img/YOUR-CERT.jpg" alt="…">` and fill the credential URL field.
- **Placeholder blocks** — every field written as **[LIKE THIS]** is an editable placeholder.
  Replace the whole `<div class="placeholder-block">…</div>` with your real content (plain text, lists, or images).
- **Project thumbnails** — project overview cards in `projects.html` and `index.html` reference images in `assets/img/projects/`.
- **Add a new project** — copy `projects/house-prices.html`, rename it, update the content, then duplicate a
  project card in `projects.html` (and optionally `index.html`).

## Connect the contact form (important)

The form on `contact.html` is fully validated in the browser but **not connected to a delivery service yet**
(it will politely explain this instead of pretending to send).

To activate it in ~5 minutes with the free [Formspree](https://formspree.io) tier:

1. Create a form at formspree.io and copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
2. Open `assets/js/main.js` and replace `YOUR_FORM_ID` in the `FORM_ENDPOINT` variable at the top.
3. Redeploy. The form will now send real messages to `karenakram92@gmail.com`.

(Any form backend works the same way — Netlify Forms, Web3Forms, Getform — just point `FORM_ENDPOINT` at it.)

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (free options)

- **Netlify / Vercel** — drag-and-drop the folder onto the dashboard, or connect a Git repo.
- **GitHub Pages** — push to a repo, then Settings → Pages → deploy from `main` branch.

## Missing details to provide (checklist)

- [ ] Phone number (currently not displayed, per preference)
- [ ] Graduation project title, description, and materials
- [ ] Certificate images / PDFs and credential URLs
- [ ] Amazon project: dataset source link, objectives, key findings, model names & metrics, recommendations, your contribution, GitHub/Kaggle links
- [ ] Nexa Retail: dataset source link, objectives, written key findings and recommendations, repo link
- [ ] House Prices: all result sections (models, metrics, best model, conclusions, notebook link)
- [ ] Formspree endpoint (see above)
