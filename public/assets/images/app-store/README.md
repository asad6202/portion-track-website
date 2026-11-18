# Portion Track — App Store Screenshot Pack

## Sizes
- iPhone 6.1" (App Store Connect current): `1179 × 2556` → `iphone-61/`
- iPhone 6.3" (App Store Connect current): `1206 × 2622` → `iphone-63/`
- iPhone legacy 5.5": `1242 × 2688` → `iphone/` (not accepted for 6.1"/6.3" slots)
- iPad: `2064 × 2752` → `ipad/`

## Locales
| Locale | iPhone | iPad | Copy config |
|--------|--------|------|-------------|
| English (default) | `iphone/` | `ipad/` | `scripts/app-store-shots/frames.json` |
| Spanish | `iphone/es/` | `ipad/es/` | `scripts/app-store-shots/frames.es.json` |

## Frame series (order — newest enhancements first)
| # | English headline | Spanish headline |
|---|------------------|------------------|
| 01 | New: GLP-1 Support | Nuevo: apoyo GLP-1 |
| 02 | Steps that fit your day | Pasos que encajan en tu día |
| 03 | Track portions, not calories | Rastrea porciones, no calorías |
| 04 | Snap a meal. Done. | Fotografía tu comida. Listo. |
| 05 | Tap. Track. Done. | Toca. Registra. Listo. |
| 06 | No rules, just balance | Sin reglas, solo balance |
| 07 | Habits you can see | Hábitos que puedes ver |
| 08 | See your progress | Mira tu progreso |
| 09 | Snap a meal. Done. (camera) | Fotografía tu comida. Listo. (cámara) |

Frame 01 uses GLP-1 goal/targets UI (`source/ui-glp1-goal-targets.png`). Amy’s finished EN marketing shot (`source/ui-glp1-support.png`, 1179×2556) can replace `iphone-61/01-glp1-support.png` for Play/App Store when preferred.  
Frame 02 uses Exercise + Steps UI from `source/ui-steps.png` / `source/ui-steps-es.png`.

## Google Play
Use `iphone-61/` (and `iphone-61/es/`) phone screenshots in the order above.  
Feature graphic / header: `headers/header-en-3840x1646.png` (resize to 1024×500 for Play feature graphic if needed).

## Regenerate
```bash
cd scripts/app-store-shots
node render.mjs              # EN+ES at iphone-61, iphone-63, ipad
node render.mjs --locale=en  # English only
node render.mjs --locale=es  # Spanish only
node render.mjs --legacy     # also write legacy 1242×2688 iphone/
```

Edit copy in the matching `frames*.json`, then re-run.
