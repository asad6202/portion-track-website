/**
 * Regression: /app smart-link path + UA detection.
 * Run: node scripts/verify-app-smart-link.mjs
 */
import assert from "node:assert/strict";

function isAppSmartLinkPath(pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return normalized.toLowerCase() === "/app";
}

function detectStoreFromUserAgent(userAgent) {
  const ua = userAgent || "";
  if (/iPhone|iPod|iPad/i.test(ua)) return "ios";
  if (/Macintosh/i.test(ua) && /Mobile/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

let passed = 0;
function check(label, fn) {
  try {
    fn();
    console.log(`PASS  ${label}`);
    passed += 1;
  } catch (error) {
    console.error(`FAIL  ${label}`);
    console.error(error);
    process.exitCode = 1;
  }
}

check("path /app", () => assert.equal(isAppSmartLinkPath("/app"), true));
check("path /app/", () => assert.equal(isAppSmartLinkPath("/app/"), true));
check("path /App", () => assert.equal(isAppSmartLinkPath("/App"), true));
check("path /APP/", () => assert.equal(isAppSmartLinkPath("/APP/"), true));
check("path /apps rejected", () => assert.equal(isAppSmartLinkPath("/apps"), false));

check("iPhone Safari → ios", () =>
  assert.equal(
    detectStoreFromUserAgent(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1"
    ),
    "ios"
  )
);
check("Instagram iOS → ios", () =>
  assert.equal(
    detectStoreFromUserAgent(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Instagram 302.0.0"
    ),
    "ios"
  )
);
check("Android Chrome → android", () =>
  assert.equal(
    detectStoreFromUserAgent(
      "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36"
    ),
    "android"
  )
);
check("TikTok Android → android", () =>
  assert.equal(
    detectStoreFromUserAgent(
      "Mozilla/5.0 (Linux; Android 13; ... ) AppleWebKit/537.36 musical_ly TikTok"
    ),
    "android"
  )
);
check("Desktop → other", () =>
  assert.equal(
    detectStoreFromUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
    ),
    "other"
  )
);

console.log(`\n${passed} checks passed`);
if (process.exitCode) process.exit(1);
