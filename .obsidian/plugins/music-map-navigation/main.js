const { Plugin } = require("obsidian");
module.exports = class MusicMapNavigation extends Plugin {
  onload() {
    this.addCommand({ id: "open-music-map", name: "Open Music Genre Map", hotkeys: [{ modifiers: ["Mod", "Shift"], key: "M" }], callback: () => this.openCanvas("Music/Music Genre Map.canvas") });
    this.addCommand({ id: "open-death-metal-explorer", name: "Open Death Metal Explorer", hotkeys: [{ modifiers: ["Mod", "Shift"], key: "E" }], callback: () => this.openCanvas("Music/Death Metal 2026/Death Metal Explorer.canvas") });
  }
  async openCanvas(path) {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (file) await this.app.workspace.getLeaf(false).openFile(file);
  }
};
