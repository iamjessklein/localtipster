# LocalTipster

Homepage for localtipster.com: a poster stapled to a wall, with tear-off tabs.

Plain HTML, CSS and a little JavaScript. No build step. Open `index.html` in a browser.

## Evolving it

- The two live tabs (**Projects**, **Shop**) are the `.tab` links in `index.html`. Their targets (`#projects`, `#shop`) are empty placeholders for now.
- To add a tab, swap a torn `.stub` slot for a `.tab` link. To tear one off, do the reverse.
- Stub shape is controlled by `data-h`, `data-lift` and `data-shape` on each `.stub`.
- Colors and fonts are CSS variables at the top of `styles.css`.
