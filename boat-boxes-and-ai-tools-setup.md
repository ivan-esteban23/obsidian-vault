---
title: "Boat Sandboxes & AI Agent Ecosystem Setup"
date: "2026-10-27"
tags:
  - boat
  - sandboxes
  - opencode
  - qoder
  - agy
  - glm
  - arch-linux
status: completed
---

# Boat Sandboxes & AI Agent Ecosystem Setup

Complete reference and operational documentation for the cloud sandboxes (Boat), coding agents (OpenCode, Qoder, AGY), and custom model providers configured on this Arch Linux system.

---

## 1. Boat Cloud Sandboxes (`boat.dev`)

The system is authenticated with **Boat CLI** (`boat` at `~/.ascii/bin/boat` -> `~/.local/bin/boat`).

### Configured Sandboxes

| Project | Sandbox ID | Subdomain | Hardware Specs | Shortcuts / Aliases |
| :--- | :--- | :--- | :--- | :--- |
| **The Reference Edit** | `bx_4qhc25xp` | `box-node-959a352dcd18ce3a` | 4 vCPU, 8 GB RAM | `ref`, `boat-ref`, `boat-ref-ssh` |
| **Portrait Issue 02** | `bx_wbqyt3bf` | `box-node-85bf2a71651db7f8` | 4 vCPU, 8 GB RAM | `portrait`, `boat-portrait`, `boat-portrait-ssh` |

### Dedicated Manager CLI: `boat-box`

A custom utility is installed at `~/.local/bin/boat-box` for quick control:

```bash
# Check status of both sandboxes
boat-box status

# Start / Resume a sandbox (if suspended)
boat-box start ref
boat-box start portrait

# Execute command inside sandbox (Instant HTTP API, no SSH required)
boat-box exec ref "npm run build"
boat-box exec portrait "git status"

# Open interactive SSH
boat-box ssh ref

# Forward TCP port (e.g. preview dev server on localhost)
boat-box forward ref 3000

# Stop sandbox to pause billing
boat-box stop ref
boat-box stop portrait
```

### Shell Aliases

Configured in `~/.bashrc`, `~/.profile`, and `~/.zshrc`:
- `boat-ref` -> `boat exec bx_4qhc25xp`
- `boat-portrait` -> `boat exec bx_wbqyt3bf`
- `boat-ref-ssh` -> `boat ssh bx_4qhc25xp`
- `boat-portrait-ssh` -> `boat ssh bx_wbqyt3bf`

---

## 2. Agent Integrations with Boat Sandboxes

### In AGY (Antigravity CLI)
- Global rule added to `~/AGENTS.md`.
- AGY automatically recognizes `bx_4qhc25xp` and `bx_wbqyt3bf` and executes tasks inside the sandboxes when asked.

### In OpenCode
- **Native Skill:** `~/.config/opencode/skills/boat/SKILL.md`
- OpenCode automatically invokes `boat` commands to inspect, resume, execute, or forward ports.
- **Remote Agent Dispatch:** You can prompt agents directly inside the sandbox:
  ```bash
  boat prompt bx_4qhc25xp --provider opencode "Refactor API routes"
  ```

### In Qoder
- Qoder CLI can run remote tasks directly via `boat-box exec <ref|portrait> "<cmd>"`.

---

## 3. Qoder CLI Setup & Model Presets

Qoder CLI is installed at `~/.qoder/bin/qodercli/qodercli-1.1.80` with symlinks at `~/.local/bin/qoder` and `~/.local/bin/qodercli`.

### Verified Model Presets

| Preset Name | Model Flag | Reasoning Effort | Command Pattern |
| :--- | :--- | :--- | :--- |
| **Qwen 3.8 Flash Extra High** | `-m Qwen3.8-Flash` | `--reasoning-effort xhigh` | `qodercli -m Qwen3.8-Flash --reasoning-effort xhigh --dangerously-skip-permissions -p "<prompt>"` |
| **DeepSeek Flash High** | `-m DeepSeek-Flash` | `--reasoning-effort high` | `qodercli -m DeepSeek-Flash --reasoning-effort high --dangerously-skip-permissions -p "<prompt>"` |
| **Auto / Standard** | `-m auto` | default | `qodercli -m auto --dangerously-skip-permissions -p "<prompt>"` |

### OpenCode Integration
- **Skill:** `~/.config/opencode/skills/qoder/SKILL.md`
- **Subagent:** `@qoder` configured in `~/.config/opencode/opencode.json`.
- **Usage in OpenCode:**
  - *"Use Qoder with Qwen 3.8 Flash Extra High to review my PR diff."*
  - *"Use Qoder with DeepSeek Flash High to refactor this function."*

---

## 4. Experiential Labs: GLM-5.3 Uncensored (1M Tokens)

Configured as a native OpenAI-compatible custom provider in OpenCode:

### Provider Details
- **Base URL:** `https://api.experientiallabs.ai/v1`
- **Provider ID:** `experientiallabs`
- **Configuration File:** `~/.config/opencode/opencode.json`
- **Environment Variables:** `EXPERIENTIALLABS_API_KEY` & `EXPLABS_API_KEY` (saved in shell RCs and `~/.config/environment.d/95-experientiallabs.conf`).

### Available Models

| Model ID | Display Name | Context Window | Max Output |
| :--- | :--- | :--- | :--- |
| `experientiallabs/glm-5.3-uncensored` | **GLM 5.3 Uncensored 1M** | 1,048,576 tokens (1M) | 131,072 tokens |
| `experientiallabs/glm-5.3-flash-uncensored` | **GLM 5.3 Flash Uncensored 1M** | 1,048,576 tokens (1M) | 131,072 tokens |

### Usage Commands
```bash
# Interactive OpenCode session with 1M context
opencode -m experientiallabs/glm-5.3-uncensored

# Fast one-shot execution
opencode run -m experientiallabs/glm-5.3-flash-uncensored "Your prompt here"
```

---

## 5. Security & Reproducibility (`niri-setup`)

All configurations, wrapper scripts, skills, and installer logic are synchronized with the user's public repository:
- **GitHub Repository:** [ivan-esteban23/niri-setup](https://github.com/ivan-esteban23/niri-setup)
- **Secret Sanitization:** Automated placeholders (`__BOAT_TOKEN__`, `__EXPERIENTIALLABS_API_KEY__`, `__TAVILY_API_KEY__`) ensure zero credentials leak into git.
