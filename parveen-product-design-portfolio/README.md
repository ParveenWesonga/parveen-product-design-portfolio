# Parveen Wesonga — Product Design Portfolio

A responsive React + Vite portfolio starter with a modern, minimal visual direction.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this project folder.
3. Open the folder in VS Code.
4. In the VS Code terminal, run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

Vite creates a production-ready `dist` folder.

## Deploy to Netlify (free subdomain)

### Option A: manual deploy
1. Run `npm install` and `npm run build` on your computer.
2. Sign in at https://app.netlify.com/
3. Add a new site using Netlify Drop / manual deploy.
4. Upload the generated `dist` folder (not the whole project folder).
5. Netlify will provide a free `*.netlify.app` address. You can change the site name in the site settings if your preferred name is available.

### Option B: GitHub-connected deploy (recommended for future updates)
1. Create a new GitHub repository and upload the project files.
2. In Netlify, choose **Add new site → Import an existing project** and connect the repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy. Later pushes to the connected branch can trigger new deploys.

## Before publishing
- Replace `your.email@example.com` in `src/main.jsx` with your actual preferred email.
- Add your real portfolio screenshots or Figma prototype links.
- Verify every statement about your process, role, research and outcomes.
- Keep concept projects clearly labelled as concepts; do not imply that they were launched or validated if they were not.
- Add your LinkedIn and portfolio/contact links if you want them public.
- If you use a real photo, use one you have permission to publish.

## Project structure

- `src/main.jsx` — page content and reusable React components
- `src/styles.css` — visual system and responsive styles
- `index.html` — page title and metadata
