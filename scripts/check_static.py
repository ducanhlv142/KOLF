#!/usr/bin/env python3
"""Validate local href/src paths in the KOLF static prototype."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = sorted(ROOT.rglob("*.html"))
EXCLUDED = {".git", "node_modules", ".next", "dist"}

class Collector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
        self.ids = set()
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            self.ids.add(a["id"])
        for key in ("href", "src"):
            if a.get(key):
                self.refs.append((key, a[key]))

def parse(fp):
    p = Collector()
    p.feed(fp.read_text(encoding="utf-8"))
    return p

def main():
    parsed = {}
    for file in HTML_FILES:
        if any(part in EXCLUDED for part in file.parts):
            continue
        parsed[file.resolve()] = parse(file)
    errors = []
    for fp, doc in parsed.items():
        for attribute, ref in doc.refs:
            url = urlsplit(ref)
            if url.scheme or url.netloc or ref.startswith("//"):
                continue
            path = unquote(url.path)
            target = (fp.parent / path).resolve() if path else fp
            if path and (not target.exists() or not target.is_file()):
                errors.append(f"{fp.relative_to(ROOT)}: missing local {attribute}={ref!r}")
                continue
            if target.suffix == ".html" and url.fragment:
                target_doc = parsed.get(target)
                if target_doc and unquote(url.fragment) not in target_doc.ids:
                    errors.append(f"{fp.relative_to(ROOT)}: missing fragment #{url.fragment} in {target.relative_to(ROOT)}")
    if errors:
        print("\n".join(errors))
        raise SystemExit(1)
    print(f"OK: {len(parsed)} HTML files checked; local links/assets exist.")

if __name__ == "__main__":
    main()
