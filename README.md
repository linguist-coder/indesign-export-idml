# InDesign Export IDML

An ExtendScript for Adobe InDesign that exports every open document to IDML, next to the original file.

- Video: https://youtu.be/y6Q8pyd6IjA
- Written guide: https://www.linguist-coder.com/2026/01/scaling-multilingual-dtp-by-automating.html

## Install

1. Download `exportIDML.jsx` from the [latest release](https://github.com/linguist-coder/indesign-export-idml/releases/latest).
2. In InDesign, open the Scripts panel (Window > Utilities > Scripts).
3. Right-click the User folder and choose Reveal in Explorer (Reveal in Finder on macOS).
4. Copy the file into that folder. It appears in the Scripts panel under User.

## Use

1. Open the documents you want to export. For a book, select its documents in the Book panel and open them. The script does not read the `.indb` file.
2. Double-click `exportIDML.jsx` in the Scripts panel.
3. The script asks `Export all open documents as IDML files?`
   - Cancel: it shows `Process cancelled.` and writes nothing.
   - OK: it exports each open document and shows how many succeeded and failed.
4. If no documents are open, it shows `No documents to process`.

## What happens to each document

- `chapter1.indd` is exported to `chapter1.idml` in the same folder.
- An existing IDML file with that name is overwritten without another prompt.
- All open documents are exported, including documents that are not part of a book.
- The export includes unsaved changes. The script does not save the `.indd` file, so the IDML and the `.indd` can differ. Save first if you want them to match.
- A new document that has never been saved is skipped, with a message, and counted as failed.
- A template (`.indt`) opened as the original fails with `Cannot save to the file ... because it is already open.` and is counted as failed. The template file is not changed.

## Tested with

Adobe InDesign 2026 (21.6) on Windows. Not tested on macOS.

## Custom scripts

Need a script for your own InDesign or Illustrator task? See [Work with me](https://www.linguist-coder.com/work-with-me.html).

## License

MIT. See [LICENSE](LICENSE).
