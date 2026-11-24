# NEMA Website — Standalone Edition

A self-contained, static edition of the National Emergency Management Agency
(NEMA) website. Every page runs from plain HTML, CSS and JavaScript with no build
step and no server-side dependency.

## Run Locally

From this folder:

```powershell
python -m http.server 8471 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8471/>.

Opening `index.html` directly with `file://` works for text and images, but the
interactive map cannot load map tiles from a `file://` origin. Use the local
server above for the full experience.

## Structure

| Path | Contents |
| --- | --- |
| `index.html` | Home page with alerts ticker, impact figures and quick actions |
| `alerts.html` | Live alert list, severity filters and alert detail cards |
| `media.html` | Media releases, Press and Publications Unit contact block |
| `news.html` | Latest news (2024–2026) plus the link to the archive |
| `archive.html` | News archive (2012–2023) |
| `prepare.html` | Preparedness guidance and checklists |
| `report.html` | Emergency reporting form |
| `about.html` | About NEMA, leadership and mandate |
| `departments.html` | Ten departments, five DG's Office units and six zonal directorates |
| `locations.html` | Interactive map of all 24 offices, office tables and directions |
| `pages.html` | Index of imported source pages |
| `pages/` | Imported source pages (newsletters, reports, galleries, contact, privacy) |
| `news/` | Individual news article pages |
| `assets/css/` | Design system, expansion styles and the Civic Editorial refresh (`refresh.css`) |
| `assets/js/` | Navigation, search, map and site behaviour |
| `assets/img/` | Photography, logos and placeholder artwork |

## Navigation Model

The header's **DG's Office/Departments** menu opens with a **DG's Office**
disclosure that expands to the five units, followed by the ten departments.

- **Departments (10):** Planning, Research and Forecasting; Disaster Risk
  Reduction; Search and Rescue; Relief and Rehabilitation; Finance and Accounts;
  Human Resources Management; Information and Communication Technology; Special
  Duties; General Services; Training.
- **Units in the DG's Office (5):** Internal Audit; Legal Services; Press and
  Publications; Procurement; Protocol.
- **Zonal Directorates (6):** North Central, North East, North West, South East,
  South South and South West.

All 23 zonal and operations offices plus Headquarters Abuja are pinned on the
locations map — 24 offices in total.

## Map

The map uses Leaflet with two tile layers:

- **Street:** OpenStreetMap contributors.
- **Satellite:** Esri World Imagery.

A Google Maps JavaScript API path is available in `assets/js/nema-map.js` but is
not enabled because no API key is bundled. Add a key in the configuration block
to test that path.

Pin colours: green for zonal directorates, amber for operations offices, blue for
NEMA Headquarters.

## Photography and Credits

Portrait provenance and source links are recorded in
`assets/img/people/CREDITS.md`. Photographs are used for identification and
public information. Where a verified portrait is not available, the site shows a
neutral "Profile Pending" placeholder rather than an unverified image.

## Content Notes

- Newsroom content is split into **Media**, **Latest News** (2024–2026) and the
  **News Archive** (2012–2023).
- Headings and sub-headings use Title Case.
- The Nigerian flag green `#008751` is the primary brand colour.
- The privacy notice at `pages/privacy-policy.html` explains how form data and
  local preferences are handled.

## Accessibility

The site includes skip links, visible focus styles, ARIA labels on menus and
forms, keyboard-operable dropdowns, reduced-motion support and responsive
layouts from 390px upward.

## Last Updated

16 November 2026.
