---
title: Keybindings
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

# Keybindings

`Mod` is the Super key. `·` separates alternative keys for the same action; `…` is a range.

Bindings come from `~/.config/niri/config.kdl` and `~/.config/niri/dms/binds.kdl`. How the tools behind them work — including the known gotchas — is in [Implementation notes](#implementation-notes).

## Launch

| Keys | Action | Notes |
| :--- | :--- | :--- |
| `Mod + T` · `Mod + Return` | Terminal | Alacritty |
| `Mod + Shift + Return` | AI scratchpad | Floating; `agy`, falling back to `zsh`; each press opens a new window |
| `Mod + Alt + Return` | Scratchpad | Floating; Alacritty with your shell, no agent |
| `Mod + Ctrl + Return` | Scratchpad | Floating; `foot` with your shell, no AI CLI at all |
| `Mod + Space` | Spotlight | DMS launcher popup |
| `Alt + Space` | Spotlight bar | Launcher input in the top bar |
| `Mod + Shift + A` | Snip to agent | Select a region · saves to `~/.cache/agent-snips/` · copies `@path` |
| `Mod + Shift + Space` | Voice dictation | Local whisper.cpp `ggml-base` · types into the focused window and copies the text |
| `Mod + S` | LocalSend | AirDrop-style transfers between devices on the same network |
| `Mod + Shift + M` | VLC | Full player — separate from the `Mod + M` multimedia panel |
| `Mod + Alt + W` | WeChat | AppImage, also in the app launcher |
| `Mod + Alt + T` | rqbit | `rqbit-desktop`, its own GUI |

## Panels & toggles

| Keys | Action |
| :--- | :--- |
| `Mod + D` | DankDash — overview, multimedia, wallpapers, weather, settings |
| `Mod + A` | Control Center |
| `Mod + Ctrl + N` | Notification Center |
| `Mod + ,` | DMS Settings |
| `Mod + N` · `Mod + Shift + N` | Notepad · expand Notepad |
| `Mod + M` | Multimedia player |
| `Mod + Y` | Wallpapers |
| `Mod + Shift + /` | Keyboard shortcuts overlay |
| `Mod + G` | WebApp manager |
| `Mod + Alt + D` | DNS switcher — opens only; see [DNS switcher](#dns-switcher) |
| `Mod + Shift + D` | Do Not Disturb, with an on-screen toast |
| `Mod + Shift + C` | Screen color picker |
| `Mod + Alt + N` | Night mode |
| `Mod + Alt + I` | Idle inhibit (keep the screen awake) |

## Windows

| Keys | Action |
| :--- | :--- |
| `Mod + Q` | Close the focused window |
| `Mod + F` | Maximize the column |
| `Mod + Shift + F` | Fullscreen the window |
| `Mod + Ctrl + F` | Expand the column to the available width |
| `Mod + W` | Toggle tabbed columns |
| `Mod + Shift + T` | Toggle floating mode |
| `Mod + Shift + V` | Switch focus between floating and tiling windows |
| `Mod + Shift + W` | Create a window rule for the focused window |
| `Mod + O` · `Mod + Tab` | Workspace overview |
| `Alt + Tab` · `Alt + Shift + Tab` | Cycle windows on the display |
| `` Alt + ` `` · `` Alt + Shift + ` `` | Cycle windows of the same application — next · previous |

## Navigation

| Keys | Action |
| :--- | :--- |
| `Mod + H` · `Mod + ←` | Focus left |
| `Mod + L` · `Mod + →` | Focus right |
| `Mod + J` · `Mod + ↓` | Focus down |
| `Mod + K` · `Mod + ↑` | Focus up |
| `Mod + Home` · `Mod + End` | First · last column |
| `Mod + Shift + H J K L` · `Mod + Shift + Arrows` | Move the focused column or window |
| `Mod + Ctrl + Home` · `Mod + Ctrl + End` | Move the column to first · last position |
| `Mod + [` · `Mod + ]` | Consume · expel a window into the column |
| `Mod + .` | Expel the focused window from its column |

## Size

| Keys | Action |
| :--- | :--- |
| `Mod + R` | Cycle preset column widths |
| `Mod + Shift + R` | Cycle preset window heights |
| `Mod + Ctrl + R` | Reset window height |
| `Mod + C` | Center the focused column |
| `Mod + Ctrl + C` | Center all visible columns |
| `Mod + -` · `Mod + =` | Column width −10 % · +10 % |
| `Mod + Shift + -` · `Mod + Shift + =` | Window height −10 % · +10 % |

## Workspaces & displays

| Keys | Action |
| :--- | :--- |
| `Mod + 1…9` | Go to workspace |
| `Mod + Shift + 1…9` | Move the focused column to workspace |
| `Mod + U` · `Mod + Page Down` | Workspace below |
| `Mod + I` · `Mod + Page Up` | Workspace above |
| `Mod + Ctrl + U` · `Mod + Ctrl + ↓` | Move the column to the workspace below |
| `Mod + Ctrl + I` · `Mod + Ctrl + ↑` | Move the column to the workspace above |
| `Mod + Shift + U` · `Mod + Shift + Page Down` | Move the workspace down |
| `Mod + Shift + I` · `Mod + Shift + Page Up` | Move the workspace up |
| `Mod + Alt + R` | Rename the current workspace |
| `Mod + scroll ↕` | Focus workspace below · above |
| `Mod + scroll ↔` | Focus column right · left |
| `Mod + Ctrl + scroll ↕` | Move the column to workspace below · above |
| `Mod + Ctrl + scroll ↔` | Move the column right · left |
| `Mod + Shift + scroll ↕` | Focus column right · left — alias of `Mod + scroll ↔` |
| `Mod + Ctrl + Shift + scroll ↕` | Move the column right · left — alias of `Mod + Ctrl + scroll ↔` |
| `Mod + Ctrl + H J K L` · `Mod + Ctrl + ←` · `Mod + Ctrl + →` | Focus display — `H J K L` is left, down, up, right; arrows cover left · right only |
| `Mod + Shift + Ctrl + H J K L` · `Mod + Shift + Ctrl + Arrows` | Move the column to that display |

## Media & system

| Keys | Action |
| :--- | :--- |
| `XF86AudioRaiseVolume` · `XF86AudioLowerVolume` | Volume +3 % · −3 % |
| `XF86AudioMute` | Mute |
| `XF86AudioMicMute` | Microphone mute |
| `XF86AudioPlay` · `XF86AudioPause` | Play · pause |
| `XF86AudioNext` · `XF86AudioPrev` | Next · previous track |
| `Ctrl + XF86AudioRaiseVolume` · `Ctrl + XF86AudioLowerVolume` | Player volume +3 % · −3 % |
| `XF86MonBrightnessUp` · `XF86MonBrightnessDown` | Brightness +5 % · −5 % |
| `XF86TouchpadToggle` | Toggle the touchpad |
| `Print` · `XF86Launch1` | Region screenshot |
| `Ctrl + Print` · `Ctrl + XF86Launch1` | Full-screen screenshot |
| `Alt + Print` · `Alt + XF86Launch1` | Window screenshot |
| `Mod + P` | Cycle display profile |
| `Ctrl + Alt + Delete` · `Ctrl + Alt + M` | Task manager |
| `Mod + Alt + L` | Lock the screen |
| `Mod + X` | Power menu |
| `Mod + Shift + P` | Power off the monitors (DPMS) |
| `Mod + Escape` | Toggle keyboard-shortcut inhibit |
| `Mod + Shift + E` | Quit the Niri session |

## Clipboard

| Keys | Action |
| :--- | :--- |
| `Mod + B` | Floating drag shelf over Alacritty — images, screenshots and files from `~/Pictures`, `~/Obsidian Vault` and `~/Documents`, dragged straight into `agy` or `opencode` |
| `Mod + V` | Clipboard history — browse, search, pin and restore images and text |
| `Ctrl + C` (Nautilus) | Copy; the bridge makes it paste-ready everywhere (below) |
| `Ctrl + Shift + C` (Nautilus) | Copy to Attach Here immediately |
| `Alt + H` (Nautilus) | Clipboard history |

The Nautilus bridge converts a plain `Ctrl + C` on the fly:

- **Images** (`.jpg` `.png` `.webp` `.svg` `.bmp` `.gif`) become real `image/png` or `image/jpeg` pixels, ready for `Ctrl + V` / `Alt + V` in Alacritty, foot, Brave Origin or Obsidian — and the clean path is added to history.
- **Files and folders** become their absolute path.

Right-click in Nautilus: **Copy Image/Path to Attach Here**, **Clipboard Attach Options** (raw pixels, clean path, `@path` reference, file text, or save the clipboard as a file) and **Clipboard History** (the 12 most recent items, restorable or savable into the current folder).

## Tools

### Sudo timer

| Keys | Action |
| :--- | :--- |
| `Mod + Shift + S` | Start or refresh the 600-minute passwordless window |
| `Mod + Alt + S` | Stop it immediately |

If sudo is already active the window is extended silently; otherwise an Alacritty window asks for the password once and closes itself after 3 seconds. See [Sudo timer internals](#sudo-timer-internals).

### DNS switcher

`Mod + Alt + D` opens the panel in the Control Center. The bar pill — server glyph plus the current provider — opens a compact popout instead, and turns amber while the profiles and the resolver disagree. **Refresh** and **Re-apply** live only on the Control Center card.

Nothing here runs as root: the plugin in `~/.config/dms/plugins/dnsSwitcher/` and the `dns-switch` helper only touch NetworkManager profiles and `tailscale set --accept-dns`, both allowed for your user.

| Provider | IPv4 | IPv6 |
| :--- | :--- | :--- |
| Google | `8.8.8.8` `8.8.4.4` | `2001:4860:4860::8888` `2001:4860:4860::8844` |
| Cloudflare | `1.1.1.1` `1.0.0.1` | `2606:4700:4700::1111` `2606:4700:4700::1001` |
| Quad9 | `9.9.9.9` `149.112.112.112` | `2620:fe::fe` `2620:fe::9` |
| Tailscale MagicDNS | `100.100.100.100` | `fd7a:115c:a1e0::53` |
| ISP / router (DHCP) | no overrides | — |

Quad9 filters malware domains; MagicDNS also adds the `tail7b672e.ts.net` search domain, and **ISP / router** turns MagicDNS off. Panel actions: **Cycle**, **Test speed** (live latency probe of every server over IPv4 *and* IPv6) and **Re-apply**. Mechanism, CLI and gotchas: [DNS switcher internals](#dns-switcher-internals).

### Image prompts

| Keys | Action |
| :--- | :--- |
| `Mod + Shift + B` | Stage a reference image — the clipboard image, or `img-prompt stage <file>` |
| `Mod + Shift + G` | Build the ChatGPT image prompt from the reference |

The analysis runs through Codex CLI / ChatGPT vision (`codex exec -i <image>`) and covers shot type, proportions, hair, face and glasses, outfit, accessories, composition, background, lighting, palette and film tokens; the finished prompt is copied to the clipboard in about 1–3 minutes. Details: [Image prompt internals](#image-prompt-internals).

### Web apps

Websites become dedicated Brave app windows — no tabs, no toolbar, the site's favicon as the icon — launched from Spotlight or the app menu as *Name (WebApp)*. `Mod + G` opens the panel; the URL is the only input. Removing is a button in the same panel, or `webapp remove <name>`.

## Terminal & shell

Configured in `~/.zshrc`, `~/.config/alacritty/alacritty.toml` and `~/.config/foot/foot.ini`, with Starship and Neovim. These work inside any terminal, not in Niri.

### Keys

| Keys | Action |
| :--- | :--- |
| `Ctrl + G` | Lazygit, floating, in place |
| `Ctrl + R` | fzf history search across 50,000 shared entries |
| `Ctrl + T` | fzf file finder with bat previews |
| `Alt + C` | fzf directory navigator with eza tree previews |
| `Tab` | fzf-tab completion — files, directories, processes, git branches |
| `Ctrl + Space` · `→` · `Ctrl + E` | Accept the autosuggestion |
| `↑` · `↓` | History substring search from what is already typed |

Quotes and brackets close themselves (`'` `"` `(` `[` `{`); typing a closing character steps over the one already there.

### Commands

| Command | Does |
| :--- | :--- |
| `rgi <query>` | Interactive ripgrep; `Enter` opens the hit in Neovim |
| `fif <pattern>` | Search inside files, with bat preview |
| `zp` | Neovim project jumper, ranked by zoxide frecency |
| `fe` | Fuzzy file picker into Neovim |
| `fkill` | Interactive process killer |
| `y` | Yazi file manager with Wayland image previews; `cd`s to the directory you quit in |
| `x <archive>` · `extract <archive>` | Extract any archive — `.tar.gz`, `.tar.bz2`, `.tar.zst`, `.zip`, `.7z`, `.rar` and more |
| `z <path>` · `zi` | Zoxide directory jumping |

`direnv` loads `.env` files and virtualenvs on `cd` and unloads them on exit; `zsh-you-should-use` reminds you of your aliases when you type a long raw command.

### Replacements

| Instead of | You get |
| :--- | :--- |
| `ls` · `ll` · `la` · `lt` | eza with icons, git status and tree views |
| `cat` | bat with syntax highlighting and line numbers |
| `git diff` | git-delta side-by-side diffs |

### Agents

| Command | Runs |
| :--- | :--- |
| `agy` | Antigravity CLI, auto-approving |
| `qoder` · `qodercli` | Qoder CLI, auto-approving |
| `qoder-qwen` | Qoder with Qwen3.8-Flash (xhigh reasoning) |
| `qoder-deepseek` | Qoder with DeepSeek-Flash (high reasoning) |
| `gwt new · agy · cd · ls · rm` | Parallel agent worktrees in `../worktrees/`; optionally launches `agy` |
| `boat` | Boat cloud sandbox CLI, with session state tracking |
| `boat-ref` · `boat-portrait` | The Reference Edit · Portrait Issue 02 |
| `boat-ref-ssh` · `boat-portrait-ssh` | SSH into those sandboxes |

Background builds, tests and agent commands longer than 15 seconds send a `notify-send` notification when they finish.

## Reference

### Plugins

Eight local Dux Shell plugins in `~/.config/dms/plugins/`; list what is loaded with `dms ipc call plugins list`.

| Plugin | Type | Purpose | Files |
| :--- | :--- | :--- | :--- |
| `sudoTimer` | daemon | Keeps the 600-minute passwordless sudo window alive | `plugin.json`, `SudoTimerKeepalive.qml` |
| `imgPrompt` | widget | Reference image → framework analysis → ChatGPT prompt | `plugin.json`, `ImgPromptWidget.qml` |
| `webappManager` | widget | Install and remove sites as Brave app windows | `plugin.json`, `WebAppManagerWidget.qml` |
| `clipboardHistoryPlus` | widget | Clipboard history modal | `ClipboardHistoryWidget.qml` |
| `mediaThumbnailEnhancer` | daemon | Hi-res album and video thumbnails, clean metadata | `MediaThumbnailDaemon.qml` |
| `nautilusClipboardAttach` | widget | Nautilus ↔ terminal and browser clipboard bridge | `NautilusClipboardAttach*.qml` |
| `dnsSwitcher` | widget | DNS provider switch with latency probe and drift re-apply | `plugin.json`, `DnsSwitcherWidget.qml` |
| `samsungBattery` | widget | Battery and charging monitor for the Galaxy A55 and Watch 7 | `SamsungBatteryWidget.qml` |

### Scripts

In `~/.local/bin/`.

| Script | Usage |
| :--- | :--- |
| `sudo-timer` | `start · tick · status · stop · expire` |
| `img-prompt` | `stage [file] · auto · run · status` |
| `webapp` | `install <url> [name] · list · remove <name>` — launchers in `~/.local/share/applications`, favicons in `~/.local/share/icons/hicolor/128x128/apps/`, index `~/.cache/webapps/apps.json` |
| `dns-switch` | `status · current · providers · apply <provider> · cycle · test` |
| `clip-attach-helper` | Clipboard image and text staging for the Nautilus bridge and the history plugin |
| `toggle-drag-shelf` | The drag shelf — `Mod + B` |
| `toggle-dnd` | Do Not Disturb — `Mod + Shift + D` |
| `agent-snip` | Region snapshot as `@path` — `Mod + Shift + A` |
| `voice-dictate` | Whisper dictation — `Mod + Shift + Space` |
| `obsidian-vault` | `status · sync · init-git · backup · bundle · restore · new` — vault management, backup and git sync |

## Implementation notes

### DNS switcher internals

> [!note] How a switch works
> `nmcli connection modify` on every ethernet and Wi-Fi profile sets `ipv4.dns`, `ipv6.dns`, `ignore-auto-dns yes` and `dns-priority 100`, followed by `nmcli device reapply`. MagicDNS clears those overrides and re-toggles `tailscale set --accept-dns`, so Tailscale writes `/etc/resolv.conf` last — otherwise a late NetworkManager update silently clobbers it.
>
> glibc honours only the first **3** nameservers, so the fourth is listed as ignored. A newly joined Wi-Fi network has no override yet, so the card turns amber (*Out of sync*) until **Re-apply**.
>
> Terminal: `dns-switch status · current · providers · apply <provider> · cycle · test`. State: `~/.cache/dns-switch/state.json`.

> [!warning] Bar pill id and settings edits
> DankBar resolves plugin widgets by the **bare** plugin id: `"dnsSwitcher"` in `barConfigs[].rightWidgets`. The `plugin_` prefix belongs to Control Center tiles only — `plugin_dnsSwitcher` in the bar renders nothing, with no error and no warning. The bar gate is the widget surface (`type: "widget"` in `plugin.json`); `ccWidgetIcon` only matters for the Control Center tile.
>
> The `settings` IPC accepts scalars only, so array edits fail with `SETTINGS_SET_FAILURE` and the reason appears in `journalctl --user`, not in the CLI. Edit `~/.config/dms/settings.json` directly and `dms restart`. To verify, `dms ipc call widget toggle dnsSwitcher` opens the popout headlessly — `widget status` answers `WIDGET_NO_POPOUT` even for built-ins.

### Sudo timer internals

> [!note] Keepalive and state
> A detached monitor runs `sudo -n -v` every 5 minutes for 600 minutes, and the daemon plugin ticks independently, so the window survives a dead monitor and reports every state change as a toast. The Control Center card starts and stops it too; **stop** clears the timestamp within 5 seconds.
>
> State: `~/.cache/sudo-timer/state.json`. Check with `sudo-timer status`, or verify passwordless with `sudo -n true`. Passwordless sudo is per-TTY by default; `Defaults:ivanaguilera timestamp_type=global,timestamp_timeout=600` in `/etc/sudoers.d/sudo-timer` makes it user-wide.

### Scratchpad window rule

> [!note] One rule for all three
> All three scratchpads share one rule in `config.kdl`: `match app-id=r#"^(ai-)?scratchpad$"#` → `open-floating`, 70 % width × 80 % height. The plain variants use `--app-id=scratchpad` and the AI variant `ai-scratchpad`, so both float through the same rule.
>
> None of them toggles, and `Esc` does not close them: every press adds a window (several `agy` sessions can stack). Close with the window's button or `niri msg action close-window --id <ID>`.

### Image prompt internals

> [!note] Pipeline and outputs
> The plugin's Control Center card and bar pill run *attach + build* in one step (`img-prompt auto`). The pill reports *Ready → analyzing → Prompt ✓ → Error*.
>
> Outputs: `~/.cache/img-prompt/analysis.txt` and `~/.cache/img-prompt/prompt.txt`. Verified end-to-end on `~/Pictures/brasil-reference.jpg` — a 1358-character clipboard-ready prompt.
