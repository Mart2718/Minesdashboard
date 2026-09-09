#!/usr/bin/env python3
"""Check all HTTP(S) URLs embedded in js/data.js.

Recruiting sites frequently return 403 to bots; those should be manually verified.
"""
from pathlib import Path
import re
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

DATA = Path(__file__).resolve().parents[1] / "js" / "data.js"
urls = sorted(set(re.findall(r'https?://[^"\\']+', DATA.read_text())))
headers = {"User-Agent": "Mozilla/5.0 (compatible; LaurenCareerDashboardLinkCheck/1.0)"}

def check(url):
    try:
        r = requests.get(url, timeout=15, allow_redirects=True, headers=headers)
        return url, r.status_code, r.url
    except Exception as e:
        return url, "ERR", f"{type(e).__name__}: {e}"

print(f"Checking {len(urls)} links...\n")
with ThreadPoolExecutor(max_workers=8) as ex:
    futures = [ex.submit(check, u) for u in urls]
    results = [f.result() for f in as_completed(futures)]
for url, status, final in sorted(results):
    flag = "OK" if isinstance(status, int) and status < 400 else ("MANUAL" if status in (401,403,429) else "CHECK")
    print(f"{flag:6} {str(status):4} {url}")
    if final != url:
        print(f"             -> {final}")
print("\nNote: 403/429 results are common on official recruiting platforms and require a manual browser check.")
