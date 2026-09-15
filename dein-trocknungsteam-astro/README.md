# dein-trocknungsteam.de — Astro-Projekt

## Lokal starten
npm install
npm run dev

## Neue Stadt hinzufügen
Neue Datei unter src/content/cities/ anlegen (Kopie einer bestehenden Stadt-Datei
als Vorlage), Frontmatter ausfüllen, dazu passende Seite unter src/pages/ anlegen
(kopiert eine bestehende Stadt-Seite und ändert nur "city.duesseldorf" auf den
neuen Slug).

## Neuen Blogartikel hinzufügen
Neue Datei unter src/content/blog/ anlegen. Erscheint automatisch auf /blog/.

## Deploy
Dieses Projekt ist für IONOS Deploy Now vorbereitet: GitHub-Repository anlegen,
diesen Ordner als Inhalt pushen (oder über "Add file → Upload files" auf GitHub.com
hochladen), danach in IONOS Deploy Now das Repository verbinden — Astro wird
automatisch erkannt.
