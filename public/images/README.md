# Bilder / Bilder für die Website

Lege hier die echten Fotos vom Hof ab. Empfohlen: **WebP oder JPG**, Breite
ca. 1600–2000 px, komprimiert (< 300 KB pro Bild).

Vorgesehene Dateien (Namen aus `src/pages/index.astro` / `.astro`-Komponenten):

| Datei | Verwendung | Empfohlenes Motiv |
|---|---|---|
| `martins-reifhof-logo.png` | Logo Header (transparent) | Wortmarke mit Pferdekopf |
| `martins-reifhof-logo-light.png` | Logo Footer (hell, für dunklen Grund) | Wortmarke als Creme-Knockout |
| `martin-foto-2.png` | Sektion «Über uns» | Martin mit Pferd |
| `header-hintergrund.jpg` | Hero-/Header-Hintergrund | Pferde auf grüner Wiese unter blauem Himmel |
| `oeffnungszeiten.jpg` | Sektion Öffnungszeiten | Weide mit Ponys |
| `galerie-1.jpg` … `galerie-8.jpg` | Galerie | Reitstunden, Ausritt, Voltige, Lager, Ponyclub |

## Fotos einbinden

Im Code werden aktuell farbige Platzhalter (CSS-Verläufe) angezeigt, damit die
Seite auch ohne Bilder gut aussieht. Zum Einbinden das jeweilige Element mit
einem `background-image` versehen, z. B. in `src/styles/global.css`:

```css
.hero {
  background:
    linear-gradient(180deg, rgba(18, 29, 51, 0.72), rgba(18, 29, 51, 0.86)),
    url("/images/hero.jpg") center / cover no-repeat;
}
```

> **Hinweis Persönlichkeitsrechte:** Für Fotos, auf denen Kinder erkennbar sind,
> vor der Veröffentlichung das Einverständnis der Erziehungsberechtigten einholen.
