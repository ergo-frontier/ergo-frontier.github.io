"""Generate the logo files, favicons and touch icon from the org avatar.

src/lib/assets/ergo-frontier-avatar.png is the ergo-frontier GitHub org
avatar (460x460 PNG), which is the official logo. Every file here is that
same image, only resized: no crops or other variants.
Run from the repo root:  python3 scripts/make-icons.py   (needs Pillow)
"""
from PIL import Image

logo = Image.open("src/lib/assets/ergo-frontier-avatar.png").convert("RGB")


def resized(size):
    return logo.resize((size, size), Image.LANCZOS)


# Hero logo: full size, as WebP (a fraction of the PNG's weight).
logo.save("static/logo.webp", quality=86, method=6)
# Header/footer logo: 128px for retina at 36-48px.
resized(128).save("static/logo-128.png", optimize=True)
resized(32).save("static/favicon-32.png", optimize=True)
resized(256).save("static/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
resized(180).save("static/apple-touch-icon.png", optimize=True)
print("icons written to static/")
