# Lauren Romero — Career Fair Dashboard

A static, mobile-friendly dashboard for Colorado School of Mines Fall 2026 Career Days.

## Deploy to Netlify

1. Push this entire folder to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and select the repo.
3. This is a static site: no build command is required and the publish directory is the repository root.
4. Deploy.

A `netlify.toml` file is included so Netlify can use the repository root automatically.

## Where to edit things

- `js/data.js` — **the main file you will edit most often.** It contains the Top 15, Day 1 Top 6, Tier 2 backup, links, role families, questions, and research notes.
- `index.html` — page structure and the Fair Strategy content.
- `assets/styles.css` — colors, typography, spacing, mobile layout.
- `js/app.js` — filtering, search, tabs, Research/Fair mode, and local Visited checkboxes. Usually leave this alone.
- `LINK_AUDIT.md` — the latest link verification notes.
- `scripts/check_links.py` — optional link checker you can rerun from your computer or GitHub Actions.

## Updating a company

Open `js/data.js`, find the company by name, and edit its fields. The important URL fields are:

- `careers` — stable company careers page. Prefer this for long-term use.
- `job` — Top 15 current job or supporting hiring-evidence page. These links can expire.
- `research` — Day 1 supporting research/evidence page. These can also expire.

The dashboard separates the data from the display code so future updates do not require redesigning the page.

## Link-checking workflow

The safest workflow is:

1. Run `python scripts/check_links.py`.
2. Any 200/300 result is normally fine.
3. A 403 does **not always mean a broken link**. Workday, Phenom, and other recruiting systems often block automated checkers. Open those manually in a browser.
4. For job-specific links, also confirm the job is still open; an old job page may redirect to a search page after it closes.
5. Prefer official company careers domains over aggregators.

Install the checker dependency if needed:

```bash
pip install requests
python scripts/check_links.py
```

## Future Google Sheet / Stage 2

The site is deliberately ready for a second-stage application tracker. Keep the research/dashboard data here, and later use a Google Sheet for changing workflow fields such as:

- Company
- Role
- Job URL
- Location
- Date found
- Date applied
- Resume version
- Cover-letter version
- Recruiter/contact
- Follow-up date
- Interview stage
- Next action
- Status
- Notes

If desired later, the site can read those status fields from a published Google Sheet or Google Apps Script endpoint while `data.js` continues to hold the richer company research.

## Local use

You can double-click `index.html` and use the dashboard without a server. The Visited checkboxes are stored in that browser's local storage and are not synced between devices. Once hosted on Netlify, the same limitation applies until a backend/Sheet integration is added.
