---
title: System & Workflow Keybindings Reference
tags:
  - keybindings
  - niri
  - dms
  - clipboard
  - nautilus
  - workflow
  - sudo
  - plugins
  - imagegen
  - localsend
  - vlc
  - webapp
  - dns
  - network
  - tailscale
  - zsh
  - terminal
  - fzf
  - lazygit
created: 2026-10-26
updated: 2026-10-28
---

# ⌨️ System & Workflow Keybindings Reference

A complete bullet-point reference for your **Niri**, **DankMaterialShell / Dux Shell (DMS)**, **Nautilus Clipboard Attach**, and **Clipboard History** shortcuts — including everything built on this machine so far (Sudo Timer, Image Prompt Builder, LocalSend, VLC).

---

## 📎 Clipboard & Nautilus Attach Shortcuts

* **`Mod + B`** — Toggle the **🧲 Floating Clipboard & File Drag Shelf** right on top of **Alacritty** so you can grab any clipboard image, screenshot, or file (`~/Pictures`, `~/Obsidian Vault`, `~/Documents`) with your mouse and **drag-and-drop it directly into `agy` or `opencode`**.
* **`Mod + V`** — Toggle the visual **Clipboard History Manager** modal (browse, search, pin, and restore images & text).
* **`Ctrl + C` (inside Nautilus)** — Copies the selected file/image; when you switch focus to your terminal (`Alacritty`/`foot`), **Brave Origin**, or **Obsidian**, the **Nautilus Clipboard Bridge** automatically converts:
  * **Images** (`.jpg`, `.png`, `.webp`, `.svg`, `.bmp`, `.gif`) into real `image/png` / `image/jpeg` pixels (ready to paste with `Ctrl + V` / `Alt + V`) *and* saves the clean path in your clipboard history.
  * **Files & Folders** into their clean absolute path (`/home/ivanaguilera/...`).
* **`Ctrl + Shift + C` (inside Nautilus)** — Immediately run **📎 Copy to Attach Here** on the selected file(s) without waiting to switch windows.
* **`Alt + H` (inside Nautilus)** — Open the visual **Clipboard History** modal directly from Nautilus.
* **Right-Click Menu (inside Nautilus)**:
  * **📎 Copy Image/Path to Attach Here** — One-click smart copy for attaching in Antigravity CLI, OpenCode, or browsers.
  * **📋 Clipboard Attach Options ▸** — Copy raw image pixels (`PNG/JPEG`), clean file path (`/home/...`), AI reference (`@path`), file text contents, or save the active clipboard as a new file in the current folder.
  * **🕒 Clipboard History ▸** — Browse your 12 most recent clipboard items (🖼️ Images & 📝 Text), click any entry to restore it, or use **💾 Save History Item Here as File ▸** to save any historical item directly into the folder.

---

## 🚀 Application Launchers & DMS Panels

* **`Mod + T`** / **`Mod + Return`** — Open Terminal.
* **`Mod + Shift + Return`** — Open **AI Agent Floating Scratchpad** (`alacritty` running `agy`, falling back to `zsh`, in a centered floating overlay; each press is a new window, not a toggle).
* **`Mod + Alt + Return`** — Open **plain Scratchpad Terminal** (`alacritty` with your default shell, same centered floating overlay, no `agy`). Window class `scratchpad`; both share the floating window-rule `^(ai-)?scratchpad$`.
* **`Mod + Ctrl + Return`** — Open **foot Scratchpad** (`foot` with `--app-id=scratchpad`, same floating overlay, no AI CLI of any kind — no `agy`, `opencode` or `qoder`).
* **`Mod + Shift + A`** — **Multimodal Snip-to-Agent** (select screen region with slurp/grim, saves to `~/.cache/agent-snips/` and copies `@path` directly to clipboard ready to paste into `agy`/`qoder`).
* **`Mod + Shift + Space`** — **Local Voice Dictation to Prompt** (toggle recording mic audio and transcribes locally via `whisper-cpp` `ggml-base`, automatically typing into the active window and copying to clipboard).
* **`Mod + Space`** — Toggle **Application Launcher (Spotlight)**.
* **`Alt + Space`** — Toggle **Spotlight Bar**.
* **`Mod + D`** — Toggle **DankDash** (Overview, Multimedia, Wallpapers, Weather, Settings).
* **`Mod + M`** — Toggle **Multimedia Player** tab (with automatic album/video thumbnail & artist resolution).
* **`Mod + Y`** — Browse **Wallpapers** in DankDash.
* **`Mod + A`** — Toggle **Control Center**.
* **`Mod + Comma (,)`** — Open or focus **DMS Settings**.
* **`Mod + N`** — Toggle **Notepad**.
* **`Mod + Shift + N`** — Expand **Notepad**.
* **`Mod + Ctrl + N`** — Toggle **Notification Center**.
* **`Mod + Shift + D`** — Toggle **Do Not Disturb** (turns off/on notification popups with on-screen toast feedback).
* **`Mod + Shift + C`** — Toggle **Screen Color Picker**.
* **`Mod + Alt + N`** — Toggle **Night Mode**.
* **`Mod + Alt + I`** — Toggle **Idle Inhibit** (keep screen awake).
* **`Mod + Alt + D`** — Open the **DNS Switcher panel** (Google / Cloudflare / Quad9 / MagicDNS / ISP). Opens only: `openWith` is not a toggle, so a second press (or `Esc`) leaves it on screen — dismiss with `dms ipc call control-center toggle`.
* **`Mod + Shift + /`** — Toggle **Keyboard Shortcuts Overlay**.

---

## 🪟 Window & Column Management (Niri)

* **`Mod + Q`** — Close focused window.
* **`Mod + F`** — Maximize focused column.
* **`Mod + Shift + F`** — Fullscreen focused window.
* **`Mod + Ctrl + F`** — Expand column to available width.
* **`Mod + W`** — Toggle tabbed column display.
* **`Mod + Shift + T`** — Toggle floating/tiling mode for focused window.
* **`Mod + Shift + V`** — Switch focus between floating and tiling windows.
* **`Mod + Shift + W`** — Create a window rule for the focused window.
* **`Mod + O`** / **`Mod + Tab`** — Toggle Workspace Overview.
* **`Alt + Tab`** / **`Alt + Shift + Tab`** — Cycle next/previous window on current monitor.
* **`Alt + ` ` `** — Cycle windows of the same application (`app-id`).

---

## 🧭 Focus & Window Navigation

* **`Mod + H`** / **`Mod + Left`** — Focus column to the left.
* **`Mod + L`** / **`Mod + Right`** — Focus column to the right.
* **`Mod + J`** / **`Mod + Down`** — Focus window down in column.
* **`Mod + K`** / **`Mod + Up`** — Focus window up in column.
* **`Mod + Home`** / **`Mod + End`** — Focus first / last column on workspace.
* **`Mod + Shift + H / J / K / L`** (or **`Mod + Shift + Arrows`**) — Move focused column/window left, down, up, or right.
* **`Mod + Ctrl + Home`** / **`Mod + Ctrl + End`** — Move column to first / last position.
* **`Mod + [`** / **`Mod + ]`** — Consume or expel window left / right into a column.
* **`Mod + .`** — Expel focused window from column.

---

## 📐 Column & Window Sizing

* **`Mod + R`** — Cycle preset column widths.
* **`Mod + Shift + R`** — Cycle preset window heights.
* **`Mod + Ctrl + R`** — Reset window height.
* **`Mod + C`** — Center focused column.
* **`Mod + Ctrl + C`** — Center all visible columns.
* **`Mod + -`** / **`Mod + =`** — Decrease / increase column width by `10%`.
* **`Mod + Shift + -`** / **`Mod + Shift + =`** — Decrease / increase window height by `10%`.

---

## 🗂️ Workspaces & Monitors

* **`Mod + 1` … `Mod + 9`** — Switch directly to Workspace `1` through `9`.
* **`Mod + Shift + 1` … `Mod + Shift + 9`** — Move focused column to Workspace `1` through `9`.
* **`Mod + U`** / **`Mod + Page_Down`** — Focus workspace below.
* **`Mod + I`** / **`Mod + Page_Up`** — Focus workspace above.
* **`Mod + Ctrl + U / I`** (or **`Mod + Ctrl + Up / Down`**) — Move focused column to workspace below / above.
* **`Mod + Shift + U / I`** (or **`Mod + Shift + Page_Down / Page_Up`**) — Move entire workspace down / up.
* **`Mod + Alt + R`** — Rename current workspace.
* **`Mod + WheelScrollDown / Up`** — Scroll through workspaces.
* **`Mod + Shift + WheelScrollDown / Up`** — Scroll through columns horizontally.
* **`Mod + Ctrl + H / J / K / L`** — Focus monitor left / down / up / right.
* **`Mod + Shift + Ctrl + H / J / K / L`** — Move column to monitor left / down / up / right.

---

## 🎵 Media, Volume & Brightness

* **`XF86AudioRaiseVolume`** / **`XF86AudioLowerVolume`** — Volume `+3%` / `-3%`.
* **`XF86AudioMute`** — Toggle audio mute.
* **`XF86AudioMicMute`** — Toggle microphone mute.
* **`XF86AudioPlay`** / **`XF86AudioPause`** — Play / Pause active media player.
* **`XF86AudioNext`** / **`XF86AudioPrev`** — Next / Previous media track.
* **`Ctrl + XF86AudioRaiseVolume / LowerVolume`** — Adjust active media player volume `+3%` / `-3%`.
* **`XF86MonBrightnessUp`** / **`XF86MonBrightnessDown`** — Screen brightness `+5%` / `-5%`.

---

## 📸 Screenshots, Display & System Security

* **`Print`** / **`XF86Launch1`** — Capture region screenshot.
* **`Ctrl + Print`** / **`Ctrl + XF86Launch1`** — Capture full-screen screenshot.
* **`Alt + Print`** / **`Alt + XF86Launch1`** — Capture active window screenshot.
* **`Mod + P`** — Cycle display profile.
* **`Ctrl + Alt + Delete`** / **`Ctrl + Alt + M`** — Open **Task Manager (Process List)**.
* **`Mod + Alt + L`** — Lock screen.
* **`Mod + X`** — Toggle **Power Menu**.
* **`Mod + Shift + P`** — Power off monitors (DPMS).
* **`Mod + Escape`** — Toggle keyboard shortcuts inhibit.
* **`Mod + Shift + E`** — Quit Niri session.

---

## 🐚 Terminal & Zsh Workflow Shortcuts (CLI, Git, Navigation & AI)

Configured across `~/.zshrc`, `~/.config/alacritty/alacritty.toml`, and `~/.config/foot/foot.ini` with **Starship** prompt and **Neovim** integration.

### Terminal Interactive Keybindings
* **`Ctrl + G`** — Open **Lazygit** (floating Git TUI) directly in-place inside any terminal buffer.
* **`Ctrl + R`** — Interactive **fzf** history search across 50,000 shared history entries.
* **`Ctrl + T`** — Interactive **fzf** file finder with real-time **bat** syntax-highlighted preview.
* **`Alt + C`** — Interactive **fzf** directory navigator with **eza** tree preview.
* **`Tab`** — Interactive fuzzy tab completion with **`fzf-tab`** (syntax-highlighted previews for files/directories, process details for `kill`, branch previews for git).
* **`Ctrl + Space`** or **`Right Arrow`** or **`Ctrl + E`** — Accept Fish-style autocomplete suggestion (`zsh-autosuggestions`).
* **`Up` / `Down` Arrow** — History substring search matching the prefix currently typed on the prompt (`zsh-history-substring-search`).
* **Automatic Pair Management** — Auto-closes quotes and brackets (`'`, `"`, `(`, `[`, `{`) and skips over closing pairs (`zsh-autopair`).

### Interactive Search & File Commands
* **`rgi [query]`** — **Interactive Ripgrep**: live full-text fuzzy search across your codebase with `bat` preview; press `Enter` to jump directly to the exact file and line in **Neovim**.
* **`fif <pattern>`** — Search inside files for `<pattern>` with instant `bat` preview.
* **`zp`** — **Neovim Project Jumper**: fuzzy-select any recent project (via `zoxide` frecency) with directory tree preview and open it immediately in **Neovim**.
* **`fe`** — Fuzzy file picker; opens the selected file directly in **Neovim**.
* **`fkill`** — Interactive process search and killer.
* **`y`** — **Yazi File Manager**: blazingly fast async Rust file manager with Wayland image previews; automatically `cd`s to the selected directory on quit.
* **`x <archive>`** / **`extract <archive>`** — Universal archive extractor (auto-detects and extracts `.tar.gz`, `.tar.bz2`, `.zip`, `.7z`, `.tar.zst`, `.rar`, etc.).
* **`z <path>`** / **`zi`** — Smart directory jumping via **Zoxide** (`zi` opens interactive fuzzy selection).
* **`direnv`** — Automatic per-directory environment loader (loads `.env` and virtualenvs on `cd`, unloads on exit).
* **`zsh-you-should-use`** — Automatically reminds you of your concise aliases when typing long raw commands.

### Modern CLI Replacements
* **`ls`** / **`ll`** / **`la`** / **`lt`** — Powered by **`eza`** with icons, git status markers, and tree views.
* **`cat`** — Powered by **`bat`** with syntax highlighting, line numbers, and git modifications.
* **`git diff`** — Powered by **`git-delta`** with GitHub-style side-by-side color syntax highlighting.

### AI CLI & Agent Shortcuts
* **`agy`** — Antigravity CLI running with full auto-approve permissions (`--dangerously-skip-permissions`).
* **`qoder`** / **`qodercli`** — Qoder CLI running with auto-approve permissions.
* **`qoder-qwen`** — Qoder with `Qwen3.8-Flash` (xhigh reasoning effort).
* **`qoder-deepseek`** — Qoder with `DeepSeek-Flash` (high reasoning effort).
* **`gwt new|agy|cd|ls|rm`** — **Parallel Agent Git Worktrees** (create isolated worktree branch in `../worktrees/` and optionally launch `agy` immediately).
* **Long-Running Task Toast (>15s)** — Automatic desktop notification via `notify-send` when background builds, tests, or agent commands finish.
* **`boat`** — ASCII Boat Cloud Sandbox CLI runner with session state tracking.
* **`boat-ref`** — Exec into persistent cloud sandbox **The Reference Edit** (`bx_4qhc25xp`).
* **`boat-portrait`** — Exec into persistent cloud sandbox **Portrait Issue 02** (`bx_wbqyt3bf`).
* **`boat-ref-ssh`** / **`boat-portrait-ssh`** — Direct SSH access to the persistent cloud sandboxes.

---

## 🔒 Custom: Sudo Timer (600-minute passwordless sudo)

Built as a **Dux Shell daemon plugin** (`~/.config/dms/plugins/sudoTimer/`) + helper script `~/.local/bin/sudo-timer`.

* **`Mod + Shift + S`** — **Start / Refresh** the 600-minute passwordless-sudo window.
  * If sudo is still active → silently refreshes and extends the window.
  * If not → opens an **Alacritty window**: type your password **once**, it closes itself after 3 s.
  * Then a detached keepalive monitor runs `sudo -n -v` every **5 min** for **600 min**.
* **`Mod + Alt + S`** — **Stop** the timer immediately (`sudo -k`, disables passwordless within 5 s).
* Bullets:
  * The plugin daemon double-covers the keepalive: ticks every 5 min and survives even if the monitor dies; shows desktop toasts ("active — 9h 55m remaining", expiration/errors).
  * Control Center card appears under the plugin's status (start/stop are also possible from there).
  * State files: `~/.cache/sudo-timer/state.json`.
  * Optional one-time sudoers tweak for user-wide timestamps:
    `Defaults:ivanaguilera timestamp_type=global,timestamp_timeout=600` in `/etc/sudoers.d/sudo-timer`.
  * Status check from any terminal: `sudo-timer status` / verify passwordless with `sudo -n true`.

---

## 🖼️ Custom: Image Prompt Builder (framework analysis → ChatGPT prompt)

Built as a **Dux Shell widget plugin** (`~/.config/dms/plugins/imgPrompt/`) + helper script `~/.local/bin/img-prompt`, powered by **Codex CLI / ChatGPT vision** (`codex exec -i <image>`).

* **`Mod + Shift + B`** — **Attach reference image**: takes the **clipboard image** (pair it with the Nautilus bridge: `Ctrl + C` in Nautilus → this key) and stages it. Or from any terminal: `img-prompt stage ~/Pictures/foto.jpg`.
* **`Mod + Shift + G`** — **Build the prompt**: ChatGPT analyzes the reference with the embedded street-style **framework analysis** (shot type › body proportions › hairstyle › face/glasses › outfit with garment details › accessories › composition › background › lighting › palette › camera/film tokens) and produces the single-paragraph **ChatGPT image prompt** in the reference style — automatically **copied to your clipboard** when done (~1–3 min; toast on completion).
* Bullets:
  * Startup shortcut: the plugin's Control Center card / bar pill click does **attach + build** in one step (`img-prompt auto`).
  * Live status on the bar pill / CC card: *Ready → build prompt · ChatGPT analyzing… · Prompt ✓ · Error*.
  * Results: `~/.cache/img-prompt/analysis.txt` (framework analysis) and `~/.cache/img-prompt/prompt.txt` (final prompt).
  * Verified end-to-end on `~/Pictures/brasil-reference.jpg` (1358-char clipboard-ready prompt).

---

## 🌐 Custom: DNS Switcher (Google / Cloudflare / Quad9 / MagicDNS / ISP)

Built as a **Dux Shell widget plugin** (`~/.config/dms/plugins/dnsSwitcher/`) + helper script `~/.local/bin/dns-switch`. **No password required** — it drives NetworkManager profile DNS and Tailscale's `--accept-dns` flag, both permitted for your user.

* **`Mod + Alt + D`** — Open the **DNS Switcher panel** (Control Center focused on the DNS card). Open-only, not a toggle — see *Application Launchers & DMS Panels* above.
* **Bar pill** — on the right of the primary DankBar, just before the Control Center cluster: server glyph + the **current provider short name** (*Google* / *Cloudflare* / *Quad9* / *MagicDNS* / *ISP*), tinted amber while the profiles and the resolver disagree. Clicking it opens a compact **popout** (IPv4/IPv6 line, the five provider rows, *Test speed*, *Cycle*) — **Refresh** and **Re-apply** only exist on the Control Center card, so use `Mod + Alt + D` for those.
* Providers, each with **IPv4 + IPv6** servers:
  * **Google** — `8.8.8.8` `8.8.4.4` / `2001:4860:4860::8888` `2001:4860:4860::8844`
  * **Cloudflare** — `1.1.1.1` `1.0.0.1` / `2606:4700:4700::1111` `2606:4700:4700::1001`
  * **Quad9** — `9.9.9.9` `149.112.112.112` / `2620:fe::fe` `2620:fe::9` (malice-filtering)
  * **Tailscale MagicDNS** — `100.100.100.100` / `fd7a:115c:a1e0::53` + the `tail7b672e.ts.net` search domain
  * **ISP / Router (DHCP)** — no overrides at all, MagicDNS off
* Bullets:
  * Panel actions: **Cycle**, **Test speed** (live latency probe of every server over IPv4 *and* IPv6), **Refresh**, and **Re-apply** whenever the profiles and the resolver disagree.
  * Mechanism: `nmcli connection modify` on every ethernet/Wi-Fi profile (`ipv4.dns`/`ipv6.dns` + `ignore-auto-dns yes` + `dns-priority 100`) then `nmcli device reapply`. For MagicDNS it clears the overrides and re-toggles `tailscale set --accept-dns` so Tailscale writes `/etc/resolv.conf` **last** — otherwise a late NetworkManager update silently clobbers MagicDNS.
  * glibc only honours the **first 3** nameservers, so with 2×IPv4 + 2×IPv6 the panel lists the 4th as ignored.
  * Joining a new Wi-Fi network leaves that profile without the override → the Control Center card turns amber (*Out of sync*); press **Re-apply**.
  * Terminal: `dns-switch status | current | providers | apply <provider> | cycle | test`
  * State: `~/.cache/dns-switch/state.json`.
  * **Pill id gotcha**: DankBar lists plugin widgets by the **bare** plugin id — `"dnsSwitcher"` in `~/.config/dms/settings.json` → `barConfigs[].rightWidgets`. Only **Control Center** tiles use the `plugin_` prefix, so `plugin_dnsSwitcher` in the bar renders nothing at all (no error, no warning). The bar gate is the *widget surface* (`type: "widget"` in `plugin.json`); the extra `ccWidgetIcon` requirement applies only to the Control Center tile list.
  * **Applying bar-config edits**: the `settings` IPC only accepts scalars — arrays/objects fail with *"Setting Objects and Arrays not supported"* (`SETTINGS_SET_FAILURE`; the reason is in `journalctl --user`, not the CLI). Edit `settings.json` by hand and `dms restart`. Verify with `dms ipc call widget toggle dnsSwitcher` (opens the popout headlessly); `widget status` is useless here — it answers `WIDGET_NO_POPOUT` for builtins like `clipboard` too.

---

## 📡 Custom: App Launchers

* **`Mod + S`** — Open **LocalSend** (was free — sudo timer uses the `Shift`/`Alt` variants of `S`).
* **`Mod + Shift + M`** — Open **VLC** (*`Shift+V` was taken by the floating/tiling focus switcher*).
* **`Mod + Alt + W`** — Open **WeChat** (微信), installed as an AppImage and searchable in the application launcher.
* **`Mod + Alt + T`** — Open **rqbit-desktop** (Rust BitTorrent client).

---

## 🧩 Plugin & Script Index (everything built on this machine)

### Dux Shell plugins (`~/.config/dms/plugins/`)
* **`sudoTimer`** *(daemon)* — passwordless sudo for 600 min; ticks the keepalive every 5 min, toasts state changes. → `plugin.json`, `SudoTimerKeepalive.qml`
* **`imgPrompt`** *(widget)* — clipboard/path reference → framework analysis → ChatGPT image prompt. → `plugin.json`, `ImgPromptWidget.qml`
* **`webappManager`** *(widget)* — install any website as a **Brave Origin WebApp** (URL + optional custom name → app window in Spotlight/app menu) and remove existing ones from the same panel. → `plugin.json`, `WebAppManagerWidget.qml`
* **`clipboardHistoryPlus`** *(widget)* — visual clipboard history modal with pin/restore/save. → `ClipboardHistoryWidget.qml`
* **`mediaThumbnailEnhancer`** *(daemon)* — hi-res album/video thumbnails + clean metadata for Bandcamp/YouTube/Spotify/SoundCloud. → `MediaThumbnailDaemon.qml`
* **`nautilusClipboardAttach`** *(widget)* — the Nautilus ↔ terminal/browser clipboard bridge described above. → `NautilusClipboardAttach*.qml`
* **`dnsSwitcher`** *(widget)* — switch DNS between **Google / Cloudflare / Quad9 / Tailscale MagicDNS / ISP** with IPv4 + IPv6, latency probe and drift re-apply — rootless; bar pill + `Mod + Alt + D`. → `plugin.json`, `DnsSwitcherWidget.qml`

### Helper scripts (`~/.local/bin/`)
* **`sudo-timer`** — `start | tick | status | stop | expire` (state: `~/.cache/sudo-timer/state.json`)
* **`img-prompt`** — `stage [file] | auto | run | status` (outputs in `~/.cache/img-prompt/`)
* **`webapp`** — `install <url> [name] | list | remove <name|slug|url>` (launchers in `~/.local/share/applications`, favicons auto-fetched to `~/.local/share/icons/hicolor/128x128/apps/`, index `~/.cache/webapps/apps.json`)
* **`clip-attach-helper`** — clipboard image/text staging used by the Nautilus bridge and history plugin
* **`toggle-drag-shelf`** — toggles the floating drag-and-drop clipboard shelf (`Mod + B`)
* **`toggle-dnd`** — toggles Do Not Disturb in DMS notifications with an on-screen toast popup (`Mod + Shift + D`)
* **`agent-snip`** — captures screen region with slurp/grim and copies `@path` for AI agents (`Mod + Shift + A`)
* **`voice-dictate`** — toggles local Whisper voice prompt dictation and automatic typing (`Mod + Shift + Space`)
* **`obsidian-vault`** — `status | sync | init-git | backup | bundle | restore | new` (vault management, backup & git sync CLI)
* **`dns-switch`** — `status | current | providers | apply google|cloudflare|quad9|magicdns|isp | cycle | test` (rootless DNS switcher behind the `dnsSwitcher` plugin, `Mod + Alt + D`)

## 🌐 WebApps (site → Brave app window)

* **`Mod + G`** — Open the **WebApp Manager panel** directly (Control Center focused on the WebApps card).
* No other keybinding needed for install/remove — everything lives in that one panel.
* Quick flow: copy any URL → click the **WebApps** card (or now: `Mod + G` → type the URL) → installs instantly.
* Installed launchers work from **Spotlight (`Mod + Space`)** and your app menu as *"Name (WebApp)"* — they open in a dedicated **Brave `--app` window** (no tabs/toolbar), with the site's favicon as icon.
* Remove anytime via the plugin panel (Remove button per entry) or terminal: `webapp remove <name>`

> Only enabled, registered plugins show up — list them with `dms ipc call plugins list` (all six `[loaded]`).
