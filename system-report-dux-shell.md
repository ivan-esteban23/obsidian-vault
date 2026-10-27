# System Report — Dux Shell, Plugins & Keybindings

> Arch Linux AI-agentic box · audit `2026-10-27` · built with OpenCode + Codex (ChatGPT Plus)

## Components

### Desktop Stack
- **Compositor:** niri `26.04-1` — config `~/.config/niri/config.kdl` (validated)
- **Shell:** Dux Shell `dms-shell` / `dux-shell`, run via `dms run --session`
- **Login:** greetd + DMS Greeter (`greetd-dms-greeter-bin` 2.0.0) on tty1, `display-manager.service` enabled
- **Terminal:** Alacritty (installer default) + `foot`
- **Portals:** xdg-desktop-portal-gtk, xwayland-satellite, accountsservice, matugen

### Dux Shell Plugins (`~/.config/dms/plugins/`)
- **sudoTimer** *(daemon)* — passwordless sudo for 600 min. Ticks `sudo-timer` every 5 min; toasts on state changes. Files: `plugin.json`, `SudoTimerKeepalive.qml`
- **imgPrompt** *(widget)* — attach a reference image → framework analysis → ChatGPT image prompt to clipboard. Files: `plugin.json`, `ImgPromptWidget.qml`
- **webappManager** *(widget)* — install any website as a Brave Origin WebApp (URL panel, auto-favicon, Spotlight launchers) + remove section. Files: `plugin.json`, `WebAppManagerWidget.qml`; script `~/.local/bin/webapp`
- **clipboardHistoryPlus** — clipboard history browsing/saving (pre-existing)
- **mediaThumbnailEnhancer** — hi-res album art + metadata for web players (pre-existing)
- **nautilusClipboardAttach** — Nautilus copy → clipboard shelf bridge (pre-existing)

### Helper Scripts (`~/.local/bin/`)
- **`sudo-timer`** — `start` opens Alacritty for one password entry, writes state, spawns detached keepalive monitor (`sudo -n -v` every 5 min for 600 min); `stop` (`Mod+Alt+S`) kills it within 5 s; `status`, `tick`, `expire`. State: `~/.cache/sudo-timer/state.json`
- **`img-prompt`** — `stage [file]` attaches a reference (path or clipboard, PNG/JPEG validated); `auto` attach+build; `run` calls `codex exec -i <image> -s read-only` (ChatGPT vision) with the embedded street-style framework analysis sample, then builds the instruction-style pastable prompt. Outputs:
  - `~/.cache/img-prompt/analysis.txt` — framework analysis
  - `~/.cache/img-prompt/prompt.txt` — final ChatGPT image prompt (auto-copied to clipboard)
  - `~/.cache/img-prompt/state.json` — phase state polled by the widget
- **`clip-attach-helper`** — clipboard image staging used by clipboardHistoryPlus
- **`toggle-drag-shelf`** — drag & drop clipboard shelf
- **`webapp`** — `install <url> [name] | list | remove`; WebApp launchers → `~/.local/share/applications`, favicons → `~/.local/share/icons/hicolor/128x128/apps/`, index `~/.cache/webapps/apps.json`

### Media / Drivers
- MPV hardware acceleration: `~/.config/mpv/mpv.conf` — `vaapi-copy` pinned to Intel render node `/dev/dri/by-path/pci-0000:00:02.0-render`; codecs h264/mpeg2/vc1, software fallback — verified `Using hardware decoding (vaapi-copy)`
- GPU: Intel HD 4000 (i915) drives displays; NVIDIA GF117 on nouveau left untouched

### Packages installed today
- Optional Dux deps: `power-profiles-daemon` (balanced/performance/power-saver), `cups-pk-helper`, `kimageformats`, `cava`
- `rtkit` — realtime scheduling for PipeWire
- `libnotify` + `wl-clipboard` (used by scripts/toasts)

## Keybindings (niri — `~/.config/niri/config.kdl` + `dms/binds.kdl`)

### Mine (added in user config)
- `Mod+Shift+S` — Sudo Timer: start/refresh (600 min passwordless sudo)
- `Mod+Alt+S` — Sudo Timer: stop
- `Mod+S` — LocalSend
- `Mod+Shift+M` — VLC (`Shift+V` was taken by the floating/tiling focus switcher)
- `Mod+Shift+B` — Image Prompt: attach reference from clipboard
- `Mod+Shift+G` — Image Prompt: build ChatGPT prompt
- `Mod+G` — WebApp Manager panel (Control Center → WebApps)

### DMS-managed (`~/.config/niri/dms/binds.kdl`)
- `Mod+O` / `Mod+Tab` — overview
- `Mod+T` / `Mod+Return` — terminal (Alacritty)
- `Mod+Space` — Spotlight launcher
- `Mod+V` — clipboard manager · `Mod+B` — drag & drop clipboard shelf
- `Mod+A` — control center · `Mod+D` — dash · `Mod+M` — media
- `Mod+X` — power menu · `Mod+,` — settings · `Mod+Y` — wallpapers
- `Mod+N` — notepad · `Mod+Shift+C` — color picker · `Mod+Alt+N` — night mode
- `Mod+Alt+I` — idle inhibit · `Mod+Shift+/` — keyboard shortcuts overlay
- `Mod+1..9` — workspaces · `Mod+H/L/J/K`/arrows — focus/window controls
- `Mod+Q` — close window · `Mod+F`/`Mod+Shift+F` — fullscreen
- `Alt+Tab`, `Alt+`` ` `` — recent-window switching (overridden block)

> All combos verified conflict-free; check with the overlay: `Mod+Shift+/`

## Autonomy & Auth (reference)
- OpenCode config `~/.config/opencode/opencode.json` — allow-all permissions
- Codex `~/.codex/config.toml` — `approval_policy = "never"`, `sandbox_mode = "danger-full-access"`; ChatGPT Plus OAuth
- `gh` CLI — authed as `ivan-esteban23` (repo, workflow, gist, read:org)
- Passwordless pacman: `/etc/sudoers.d/pacman-nopasswd`
- Optional one-time tweak for full passwordless sudo: `Defaults:ivanaguilera timestamp_type=global,timestamp_timeout=600` in `/etc/sudoers.d/sudo-timer`

## Verified on-machine
- sudoTimer end-to-end pending your first password entry (`Mod+Shift+S`)
- imgPrompt ran a full framework analysis + prompt build on `~/Pictures/brasil-reference.jpg` (1358-char prompt, clipboard-ready)
- webappManager verified end-to-end: installed and removed web apps (`https://duckduckgo.com`), favicon download, `.desktop` generation and cleanup all confirmed
- `niri validate` — valid after every edit
- plugin scan: all 6 plugins `[loaded]`
