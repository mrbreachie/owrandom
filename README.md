# OW Hero Tools

Random hero selector, counter guide and meta tier list for Overwatch. Built with plain HTML, CSS, and JS — no build step needed.

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `ow-hero-tools`)
2. Upload all files in this folder to the repo root:
   - `index.html`
   - `style.css`
   - `app.js`
   - `data.js`
   - `.nojekyll`
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose branch `main` and folder `/ (root)`
6. Hit **Save**
7. Your site will be live at `https://YOUR-USERNAME.github.io/ow-hero-tools/`

> It can take 1–2 minutes for the first deploy to go live.

## Features

- **Roll** — random heroes for 1–6 players. Filter by role or roll a 1-2-2 team, toggle unique heroes and random perks, or limit rolls to S/A-tier picks. Press Space to roll.
- **Counters** — search and filter all 54 heroes. Pick one to see who they beat, who beats them, a tip, their perks, their tier and win rate, and Easy / Medium / Hard / Expert ratings for how hard they are to play and to counter.
- **Meta** — tier list by role, built from Counterwatch 5v5 win rates.
- Roster is current for Season 5 (mid-season 5.5), including D.Mon, Shion, Doctrine and Sombra's move to Support. Hudson joins in Season 6.

## Updating for a new season

All data lives in `data.js`:
- `HEROES` / `NEW_HEROES` — kits, counters, tips, perks
- `META` — season label, tiers, win rates, upcoming hero
- `RATINGS` — difficulty to play and to counter (editorial estimates)
