// ============================================
//  Spiceworks Ad Remover v11
//  Removes ad content without touching layout
// ============================================

const AD_SELECTORS = [
  // Pogo ad slots (NOT [data-pogo="sidebar"] — that's legit UI)
  '[data-pogo="banner"]',
  '[data-pogo="leaderboard"]',
  '[data-pogo="rectangle"]',
  '[data-pogo="halfpage"]',
  '[data-pogo="ad"]',

  // Google ad elements
  '[data-adunit]',
  '[data-google-query-id]',
  '[id^="google_ads_iframe_"]',
  'iframe[src*="doubleclick.net"]',
  'iframe[src*="googlesyndication.com"]',
  'iframe[src*="googleadservices.com"]',
  'iframe[src*="moatads.com"]',

  // Spiceworks banner ad class
  '.banner-ad',

  // Generic
  '[class*="dfp-ad"]',
  '[class*="gpt-ad"]',
];

function hideEl(el) {
  try {
    el.style.setProperty('display', 'none', 'important');
    el.style.setProperty('width', '0', 'important');
    el.style.setProperty('height', '0', 'important');
    el.style.setProperty('overflow', 'hidden', 'important');
  } catch (e) {}
}

function sweepAds() {
  AD_SELECTORS.forEach(sel => {
    try { document.querySelectorAll(sel).forEach(hideEl); } catch (e) {}
  });
}

// MutationObserver to catch dynamically injected ads
const observer = new MutationObserver(() => sweepAds());

function startObserver() {
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

// Run at each ready state
sweepAds();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { sweepAds(); startObserver(); });
} else {
  sweepAds();
  startObserver();
}

window.addEventListener('load', () => {
  sweepAds();
  setTimeout(sweepAds, 2000);
  setTimeout(sweepAds, 5000);
  setTimeout(() => observer.disconnect(), 15000);
});
