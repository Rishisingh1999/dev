# What is this?

# MemoryFrame — Local Static Site

This workspace contains a simple static landing site and two pages for a demo MemoryFrame project:

There are two ways to go directly to a VS Code environment in your browser and start coding:

* Press the . key on any repository or pull request.
* Swap `.com` with `.dev` in the URL. For example, this repo https://github.com/github/dev becomes http://github.dev/github/dev

What I changed:
- Updated page color variables and backgrounds to a rich purple "Arcane" themed palette.
- Tweaked layout accents for better alignment and visual balance.

![github dev](https://user-images.githubusercontent.com/856858/130119109-4769f2d7-9027-4bc4-a38c-10f297499e8f.gif)

# Why?
Quick local preview

1. From the `r:\dev` folder, run a simple static server (Python 3):

```powershell
cd r:\dev
python -m http.server 8000
```

Then open `http://localhost:8000/Index.html` in your browser.

2. Alternatively use Node.js `serve` if installed:

```powershell
npm install -g serve
serve -s . -l 8000
```

Deployment options

- GitHub Pages: push the `dev` folder to a repo and enable Pages to serve from `gh-pages` or `main` branch.
- Any static host: Netlify, Vercel, Cloudflare Pages — just point to the `dev` folder or repo root.

Notes & next steps

- Images/favicons: Add `assets/` images and update the `<link rel="icon">` in headers if desired.
- Backend: The `create.html` and `memory.html` pages are demo-only (simulate uploads/password flow). For production, hook the forms to a proper backend (Supabase, Firebase, or your API) and secure file storage.
- Accessibility & SEO: Add meta descriptions and alt attributes for production.

If you'd like, I can:
- Add placeholder `assets/` (SVGs) and a favicon.
- Wire the create flow to a simple Supabase example (requires your keys).
- Prepare a deployable `index.html` ready for GitHub Pages including `CNAME` if you have a custom domain.
