# Obsidian Vault

Private backup of my Obsidian notes, magazine collections, artwork, Canvas maps, and settings.

## Open or restore

Clone the repository with an account that has access:

```powershell
git clone https://github.com/ivan-esteban23/obsidian-vault.git
```

In Obsidian, choose **Open folder as vault** and select the cloned `obsidian-vault` folder. Keep the folder structure intact so internal links, Canvas files, and artwork resolve correctly.

The `.obsidian` folder includes plugins and CSS snippets. Enable community plugins if you want to use them, and check **Settings > Appearance > CSS snippets** for the magazine styles. The Goth, Indie, and Alternative magazines follow Obsidian's selected light, dark, or system theme. Embedded music players need an internet connection.

## Save a manual backup

From a terminal in this vault, review and commit the current changes:

```powershell
git status --short
git add --all
git diff --cached --stat
git diff --cached
git commit -m "Back up vault changes"
git push origin main
```

Review staged files before committing. Workspace layouts, caches, trash, temporary files, and common credential files are excluded by `.gitignore`; credentials embedded inside notes or configuration must also stay out of commits.

To retrieve updates on a clean working tree:

```powershell
git pull --ff-only
```

If Git reports local changes or diverging history, preserve your work and resolve the differences before continuing. Avoid force-pushing shared history. Backups run manually; automatic synchronization is not configured.
