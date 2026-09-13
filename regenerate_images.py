import os
from PIL import Image

# Verzeichnis für die Bilder
output_dir = os.path.join("C:", os.sep, "Users", "joche", "Documents", "openCode", "martins-reithof", "public", "images")

# Liste der zu erstellenden Bilder
image_names = [
    "weide.jpg", "reitstunde.jpg", "ausritt.jpg",
    "voltige.jpg", "ponyclub.jpg", "reitlager.jpg", "ponys.jpg"
]

# Verschiedene Farben für die Platzhalter
colors = [
    (100, 149, 237), # CornflowerBlue
    (60, 179, 113),  # MediumSeaGreen
    (255, 165, 0),   # Orange
    (186, 85, 211),  # MediumOrchid
    (255, 99, 71),   # Tomato
    (106, 90, 205),  # SlateBlue
    (240, 230, 140)  # Khaki
]

print(f"Starte Bildgenerierung in: {output_dir}")

# Stelle sicher, dass das Verzeichnis existiert (sollte es bereits)
os.makedirs(output_dir, exist_ok=True)

for i, name in enumerate(image_names):
    file_path = os.path.join(output_dir, name)
    # Wähle eine Farbe basierend auf dem Index
    color = colors[i % len(colors)]
    
    try:
        # Erstelle ein neues RGB-Bild (Größe 800x600)
        img = Image.new('RGB', (800, 600), color=color)
        # Speichere es explizit als JPEG
        img.save(file_path, 'JPEG', quality=95)
        print(f"Erfolgreich erstellt: {file_path}")
    except Exception as e:
        print(f"Fehler beim Erstellen von {file_path}: {e}")

print("Bildgenerierung abgeschlossen.")
