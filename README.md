# Vaishnavi Krishnamurthy — Portfolio

Built with Next.js 14, Tailwind CSS, TypeScript. Deployed to GitHub Pages with a custom domain via GoDaddy.

---

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

---

## Deploy to GitHub Pages

### 1. Create the GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio` (or anything you like — the domain overrides the URL)
3. Set it to **Public**
4. Don't initialise with README (you'll push this code)

### 2. Push this code

```bash
cd vk-nextjs
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repo on GitHub
2. Settings → Pages
3. Source: **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` runs automatically on every push to `main`

### 4. Connect your GoDaddy domain

**In GoDaddy DNS settings**, add these records:

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 185.199.108.153          | 600  |
| A     | @    | 185.199.109.153          | 600  |
| A     | @    | 185.199.110.153          | 600  |
| A     | @    | 185.199.111.153          | 600  |
| CNAME | www  | YOUR_USERNAME.github.io  | 3600 |

**Then in GitHub:**

1. Settings → Pages → Custom domain
2. Enter your domain (e.g. `vaishnavikrishnamurthy.com`)
3. Tick "Enforce HTTPS" once DNS propagates (can take up to 48hrs)

> The `public/CNAME` file already contains your domain so GitHub Pages knows to serve it.
> **Update the domain in `public/CNAME`** if your actual GoDaddy domain is different.

---

## Update your domain in the CNAME file

Open `public/CNAME` and replace the contents with your exact domain:

```
youractualdomain.com
```

---

## Project structure

```
app/
  page.tsx               # Home
  experience/page.tsx    # Experience
  projects/
    page.tsx             # Projects list
    ola/page.tsx
    cerebrocare/page.tsx
    dermat-ai/page.tsx
    drones/page.tsx
    unretirement/page.tsx
    xpend/page.tsx
    storesmart/page.tsx
    aid-ally/page.tsx
  writing/page.tsx       # Writing / Substack
components/
  Header.tsx
  Footer.tsx
  PageWrap.tsx
  ProjectParts.tsx       # Shared project page components
public/
  CNAME                  # Custom domain
.github/workflows/
  deploy.yml             # Auto-deploy on push to main
```

---

## Adding a new project

1. Create `app/projects/your-project/page.tsx`
2. Use `ImgFull`, `Img2`, `Blk`, `Insight`, `Stats`, `Tags`, `ProjNav` from `@/components/ProjectParts`
3. Add it to the list in `app/projects/page.tsx`
4. Update `ProjNav` on the adjacent projects to include it
