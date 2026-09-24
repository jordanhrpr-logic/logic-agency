#!/usr/bin/env python3
"""Generate branded 1200x630 OpenGraph images for evergreen guides.
Design language: Tiger Orange (#FF600A) accents on Dark (#2A2A2A) grid, white typography.
Uses system fonts (Poppins-alike fallback to DejaVu Sans Bold available on macOS/Linux).
"""

import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / 'public' / 'images'
OUT.mkdir(parents=True, exist_ok=True)

# Colors (match app/globals.css)
DK = (42, 42, 42)       # --dk
OW = (243, 243, 243)    # --ow
ORANGE = (255, 96, 10)  # --o
WHITE = (255, 255, 255)

# Font resolution — try Poppins, fall back to DejaVu / Arial Bold
FONT_CANDIDATES_BOLD = [
    '/System/Library/Fonts/Supplemental/Arial Bold.ttf',
    '/System/Library/Fonts/HelveticaNeue.ttc',
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    '/Library/Fonts/Arial Bold.ttf',
]
FONT_CANDIDATES_REG = [
    '/System/Library/Fonts/Supplemental/Arial.ttf',
    '/System/Library/Fonts/Helvetica.ttc',
    '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    '/Library/Fonts/Arial.ttf',
]

def load_font(candidates, size):
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()

def draw_grid(draw, w, h, step=28, color=(255,255,255,10)):
    for x in range(0, w, step):
        draw.line([(x, 0), (x, h)], fill=color, width=1)
    for y in range(0, h, step):
        draw.line([(0, y), (w, y)], fill=color, width=1)

def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines, current = [], ''
    for word in words:
        trial = f'{current} {word}'.strip()
        w = draw.textlength(trial, font=font)
        if w <= max_width or not current:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines

def draw_logo(draw, x, y):
    r = 18
    o = 20  # offset between the two overlapping circles
    draw.ellipse([x, y, x + r*2, y + r*2], outline=ORANGE, width=3)
    draw.ellipse([x + o, y, x + o + r*2, y + r*2], outline=ORANGE, width=3)

def generate(slug, kicker, title, subtitle):
    W, H = 1200, 630
    img = Image.new('RGB', (W, H), DK)
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    draw_grid(draw, W, H, step=28, color=(255, 255, 255, 10))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')

    draw = ImageDraw.Draw(img)

    # Left accent bar
    draw.rectangle([0, 0, 12, H], fill=ORANGE)

    # Logo
    draw_logo(draw, 70, 60)

    # Wordmark
    wordmark_font = load_font(FONT_CANDIDATES_BOLD, 22)
    draw.text((140, 66), 'LOGIC AGENCY', font=wordmark_font, fill=ORANGE)

    # Kicker
    kicker_font = load_font(FONT_CANDIDATES_BOLD, 18)
    draw.text((72, 180), kicker.upper(), font=kicker_font, fill=ORANGE)

    # Divider
    draw.line([(72, 220), (200, 220)], fill=ORANGE, width=2)

    # Title
    title_font = load_font(FONT_CANDIDATES_BOLD, 60)
    lines = wrap_text(draw, title, title_font, max_width=1050)
    y = 250
    for line in lines[:4]:
        draw.text((72, y), line, font=title_font, fill=WHITE)
        y += 72

    # Subtitle (bottom band)
    subtitle_font = load_font(FONT_CANDIDATES_REG, 22)
    subtitle_lines = wrap_text(draw, subtitle, subtitle_font, max_width=1050)
    y = H - 40 - (len(subtitle_lines[:2]) * 32)
    for line in subtitle_lines[:2]:
        draw.text((72, y), line, font=subtitle_font, fill=(220, 220, 220))
        y += 32

    # Footer URL
    footer_font = load_font(FONT_CANDIDATES_BOLD, 16)
    draw.text((72, H - 40), 'LOGICAGENCYINC.COM / GUIDES', font=footer_font, fill=ORANGE)

    out_path = OUT / f'og-{slug}.jpg'
    img.save(out_path, 'JPEG', quality=88, optimize=True)
    print(f'wrote {out_path.name}  ({out_path.stat().st_size // 1024}KB)')

GUIDES = [
    ('sustainable-packaging-cpg', 'Sustainable Packaging', 'What Works, What Costs More, What Retailers Require', 'PCR premiums, EPR liability, retailer scorecards, FTC Green Guides.'),
    ('distributor-onboarding-playbook', 'Distributor Onboarding', 'KeHE, UNFI, DPI, and What Buyers Expect', 'Category calendars, slotting, EDI, and the first-90-day operating rhythm.'),
    ('cpg-gross-margin-playbook', 'CPG Gross Margin', 'Where Margin Leaks and How to Fix It', 'Channel ranges, deduction disaggregation, freight recovery in 60–90 days.'),
    ('co-manufacturer-selection', 'Co-Manufacturer Selection', 'Find, Vet, and Scale With the Right Partner', 'MOQ realities, the 10-dimension scorecard, worked total-cost comparison.'),
    ('cpg-demand-forecasting', 'Demand Forecasting', 'From Spreadsheet Guessing to Operational Control', 'Safety-stock formulas, S&OP rhythm, MAPE by growth stage.'),
    ('cpg-broker-selection-playbook', 'CPG Broker Playbook', 'Select, Manage, and Fire a Broker', 'Commission ranges, the 8-dimension scorecard, clean-transition playbook.'),
    ('co-manufacturer-contracts-risk', 'Co-Manufacturer Contracts', 'What to Negotiate Before You Sign', 'IP, tooling, capacity, liability, force majeure, exit terms.'),
    ('regional-to-national-retail-expansion', 'Regional to National', 'The Operational Playbook for Retail Expansion', 'Sequencing, working capital math, distribution architecture, OTIF exposure.'),
    ('cpg-channel-economics', 'Channel Economics', 'Amazon vs. DTC vs. Retail', 'Worked contribution-margin comparison, Amazon fee stack, mix decisions.'),
    ('cpg-operations-kpis', 'CPG Operations KPIs', 'The 15 Metrics That Actually Matter', 'Formulas, target ranges by stage, and where each number lives.'),
]

for slug, kicker, title, subtitle in GUIDES:
    generate(slug, kicker, title, subtitle)

print(f'\nTotal: {len(GUIDES)} OG images written to {OUT}')
