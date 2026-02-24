# Spice Works Cloud Helpdesk Ad Remover
Removes ads from spiceworks cloud ticket desk

# Spiceworks Ad Remover
# ng 2026

Chrome extension to remove ads and banners from Spiceworks and related sites.

## Install (unpacked, no store needed)

1. Open Chrome → `chrome://extensions`
2. Enable **Developer mode** (toggle, top right)
3. Click **Load unpacked**
4. Select this folder
5. Done — visit any Spiceworks site

## Refining selectors (when you find ads it missed)

1. Open DevTools (F12) → Inspector tab
2. Right-click the ad element → **Inspect**
3. Note the `id` or `class` of the element
4. Test in console: `document.querySelectorAll('.whatever-class')`
5. Add matching selector to **both** `hide-ads.css` AND the `AD_SELECTORS` array in `content.js`
6. Go back to `chrome://extensions` → click the **refresh icon** on the extension

## Files

- `manifest.json` — extension config, covered domains
- `hide-ads.css` — CSS-layer hiding (fires before JS, prevents flicker)
- `content.js` — JS removal + MutationObserver for dynamic ads

## Adding more Spiceworks subdomains

Edit the `matches` array in `manifest.json` and the `host_permissions` list.
Currently covers: `*.spiceworks.com`, `on.spiceworks.com`, `community.spiceworks.com`

