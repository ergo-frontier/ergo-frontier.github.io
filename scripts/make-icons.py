"""Generate the logo, favicons and touch icon from the org avatar.

src/lib/assets/ergo-frontier-avatar.png is the ergo-frontier GitHub org
avatar (460x460 PNG, ~350 KB). The site only ships the derived files.
Run from the repo root:  python3 scripts/make-icons.py   (needs Pillow)
"""
from PIL import Image, ImageDraw

PARCHMENT = (238, 212, 161)  # the logo's own background colour

logo = Image.open("src/lib/assets/ergo-frontier-avatar.png").convert("RGB")

# Hero logo: same size, as WebP (a fraction of the PNG's weight).
logo.save("static/logo.webp", quality=86, method=6)

# Favicons: crop to the bison + sun (the wordmark is unreadable at 16-32px),
# centred on a parchment square with rounded corners.
crop = logo.crop((92, 62, 346, 272))
w, h = crop.size
side = max(w, h) + 16
mark = Image.new("RGB", (side, side), PARCHMENT)
mark.paste(crop, ((side - w) // 2, (side - h) // 2 + 4))


def rounded(img, size, radius_ratio=0.18):
    img = img.resize((size, size), Image.LANCZOS).convert("RGBA")
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, size - 1, size - 1), radius=int(size * radius_ratio), fill=255
    )
    img.putalpha(mask)
    return img


# Small header/footer logo: the mark, 128px for retina at 36-48px.
rounded(mark, 128).save("static/logo-128.png", optimize=True)
rounded(mark, 32).save("static/favicon-32.png", optimize=True)
rounded(mark, 256).save("static/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
# iOS applies its own mask, so the touch icon stays square.
mark.resize((180, 180), Image.LANCZOS).save("static/apple-touch-icon.png", optimize=True)
print("icons written to static/")
