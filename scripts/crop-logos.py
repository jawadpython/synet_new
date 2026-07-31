"""Crop SYNET brand marks from all_logospng.png with safe padding (no cut text)."""

from PIL import Image
import os

SHEET = "all_logospng.png"
OUT_DIR = "public/images/brand"
os.makedirs(OUT_DIR, exist_ok=True)

im = Image.open(SHEET).convert("RGB")


def padded(box, pad_x=30, pad_top=24, pad_bottom=40):
    content = im.crop(box)
    canvas = Image.new(
        "RGB",
        (content.size[0] + pad_x * 2, content.size[1] + pad_top + pad_bottom),
        (255, 255, 255),
    )
    canvas.paste(content, (pad_x, pad_top))
    return canvas


# Compact header: icon | SYNET + full tagline (detected ~y149–246)
compact = padded((990, 145, 1685, 255), pad_x=30, pad_top=24, pad_bottom=40)
compact.save(f"{OUT_DIR}/logo-horizontal-compact.png")
compact.save("public/images/logo-header.png")
compact.save("public/images/logo-header-v2.png")
compact.save("public/images/logo.png")
print("header", compact.size)

# Icon
icon = padded((1048, 635, 1262, 848), pad_x=8, pad_top=8, pad_bottom=8)
icon.save(f"{OUT_DIR}/logo-icon.png")
icon.save("public/images/logo-icon.png")
icon.resize((192, 192), Image.Resampling.LANCZOS).save("src/app/icon.png")
print("icon", icon.size)
