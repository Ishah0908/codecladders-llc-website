import os

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path = os.path.join(base, "public", "brand") + "/"

mark = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">\n'
    '  <rect width="120" height="120" rx="26" fill="#0B1222"/>\n'
    '  <!-- Ladder rails -->\n'
    '  <rect x="22" y="24" width="10" height="72" rx="5" fill="url(#g)"/>\n'
    '  <rect x="88" y="24" width="10" height="72" rx="5" fill="url(#g)"/>\n'
    '  <!-- Rungs -->\n'
    '  <rect x="32" y="28" width="56" height="9" rx="4.5" fill="url(#g)"/>\n'
    '  <rect x="32" y="55.5" width="56" height="9" rx="4.5" fill="url(#g)"/>\n'
    '  <rect x="32" y="83" width="56" height="9" rx="4.5" fill="url(#g)"/>\n'
    '  <!-- Code bracket overlay -->\n'
    '  <path d="M47 41 L34 60 L47 79" stroke="#0B1222" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>\n'
    '  <path d="M73 41 L86 60 L73 79" stroke="#0B1222" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>\n'
    '  <defs>\n'
    '    <linearGradient id="g" x1="22" y1="24" x2="98" y2="96" gradientUnits="userSpaceOnUse">\n'
    '      <stop offset="0%" stop-color="#F6E7B8"/>\n'
    '      <stop offset="100%" stop-color="#C8A14A"/>\n'
    '    </linearGradient>\n'
    '  </defs>\n'
    '</svg>\n'
)

horiz = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 96" fill="none">\n'
    '  <rect y="18" width="60" height="60" rx="13" fill="#0B1222"/>\n'
    '  <rect x="11" y="26" width="5" height="36" rx="2.5" fill="url(#gh)"/>\n'
    '  <rect x="44" y="26" width="5" height="36" rx="2.5" fill="url(#gh)"/>\n'
    '  <rect x="16" y="28" width="28" height="4.5" rx="2.25" fill="url(#gh)"/>\n'
    '  <rect x="16" y="42" width="28" height="4.5" rx="2.25" fill="url(#gh)"/>\n'
    '  <rect x="16" y="56" width="28" height="4.5" rx="2.25" fill="url(#gh)"/>\n'
    '  <text x="75" y="58" font-family="-apple-system,Helvetica Neue,Arial,sans-serif" font-size="34" font-weight="600" letter-spacing="-0.5" fill="#1d1d1f">CodeCladders</text>\n'
    '  <text x="76" y="76" font-family="-apple-system,Helvetica Neue,Arial,sans-serif" font-size="11" font-weight="500" letter-spacing="3" fill="#C8A14A">LLC</text>\n'
    '  <defs>\n'
    '    <linearGradient id="gh" x1="0" y1="18" x2="60" y2="78" gradientUnits="userSpaceOnUse">\n'
    '      <stop offset="0%" stop-color="#F6E7B8"/>\n'
    '      <stop offset="100%" stop-color="#C8A14A"/>\n'
    '    </linearGradient>\n'
    '  </defs>\n'
    '</svg>\n'
)

horiz_light = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 96" fill="none">\n'
    '  <rect y="18" width="60" height="60" rx="13" fill="#ffffff" fill-opacity="0.15"/>\n'
    '  <rect x="11" y="26" width="5" height="36" rx="2.5" fill="url(#gl)"/>\n'
    '  <rect x="44" y="26" width="5" height="36" rx="2.5" fill="url(#gl)"/>\n'
    '  <rect x="16" y="28" width="28" height="4.5" rx="2.25" fill="url(#gl)"/>\n'
    '  <rect x="16" y="42" width="28" height="4.5" rx="2.25" fill="url(#gl)"/>\n'
    '  <rect x="16" y="56" width="28" height="4.5" rx="2.25" fill="url(#gl)"/>\n'
    '  <text x="75" y="58" font-family="-apple-system,Helvetica Neue,Arial,sans-serif" font-size="34" font-weight="600" letter-spacing="-0.5" fill="#ffffff">CodeCladders</text>\n'
    '  <text x="76" y="76" font-family="-apple-system,Helvetica Neue,Arial,sans-serif" font-size="11" font-weight="500" letter-spacing="3" fill="#E5C978">LLC</text>\n'
    '  <defs>\n'
    '    <linearGradient id="gl" x1="0" y1="18" x2="60" y2="78" gradientUnits="userSpaceOnUse">\n'
    '      <stop offset="0%" stop-color="#F6E7B8"/>\n'
    '      <stop offset="100%" stop-color="#C8A14A"/>\n'
    '    </linearGradient>\n'
    '  </defs>\n'
    '</svg>\n'
)

with open(path + "logo-mark.svg", "w") as f:
    f.write(mark)
with open(path + "logo-horizontal.svg", "w") as f:
    f.write(horiz)
with open(path + "logo-horizontal-light.svg", "w") as f:
    f.write(horiz_light)
print("All 3 logos written successfully")
