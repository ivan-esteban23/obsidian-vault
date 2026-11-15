---
title: Codex Skills - Installed Report
date: 2026-11-10
tags:
  - codex
  - ai/skills
  - reference
---

# 🧰 Codex Skills — Installed Report

> [!abstract] At a glance
> **16 skills** installed across three collections: **6 for Obsidian and content**, **5 for everyday work**, and **5 from Matt Pocock for engineering and learning**.
>
> Skills are instructions and resources for **Codex**. They are not Obsidian plugins; Codex can use the Obsidian skills when working with vault files.

## 💎 Obsidian and content workflows

Source: [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)

- **`obsidian-markdown`** — Create and edit notes with Obsidian features such as wikilinks, properties, embeds, and callouts.
- **`obsidian-bases`** — Create and edit Bases with views, filters, formulas, and summaries.
- **`json-canvas`** — Build and edit Obsidian Canvas diagrams with nodes, groups, and connections.
- **`obsidian-cli`** — Work with vaults through the Obsidian CLI, when available and configured.
- **`defuddle`** — Extract clean Markdown from web pages using the Defuddle CLI.
- **`knap`** — Generate Markdown from templates and JSON or CSV data using the Knap CLI.

> [!example] Try it
> “Use `obsidian-markdown` to turn my rough notes into a linked Obsidian note with callouts.”

## ✍️ Research, productivity, and development

Source: [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills)

- **`meeting-notes-and-actions`** — Turn meeting transcripts or rough notes into summaries, decisions, risks, and action items.
- **`content-research-writer`** — Research, outline, draft, and refine articles with sources.
- **`webapp-testing`** — Test local web applications with Playwright and inspect screenshots or browser logs.
- **`gh-fix-ci`** — Investigate failing GitHub Actions checks on pull requests and help plan fixes.
- **`spreadsheet-formula-helper`** — Create and explain Excel or Google Sheets formulas, including edge cases.

> [!example] Try it
> “Use `meeting-notes-and-actions` to turn this transcript into a note in my Obsidian vault.”

## 🛠️ Engineering and learning

Source: [mattpocock/skills](https://github.com/mattpocock/skills)

- **`diagnosing-bugs`** — Investigate difficult bugs using a reproducible feedback loop and targeted hypotheses.
- **`tdd`** — Develop features or fixes using behavior-focused, test-first cycles.
- **`codebase-design`** — Examine module interfaces, responsibilities, and testability.
- **`handoff`** — Prepare a concise handoff document for another session or agent.
- **`teach`** — Build a structured learning workspace with lessons, references, and progress records.

> [!example] Try it
> “Use `teach` to help me learn Python, starting with a short beginner lesson.”

## 🚀 How to use them

- Describe the task naturally, or mention the skill by name when you want to use a particular workflow.
- Skills live in `C:\Users\cyber\.codex\skills`; each skill has a `SKILL.md` file with its instructions.
- The installed copies are local. Check the original repositories for updates.
- Python and pip are installed. Some skills may need additional tools: **Playwright** for browser testing, **GitHub CLI authentication** for GitHub CI work, and the respective **Obsidian**, **Defuddle**, or **Knap** CLI for CLI-specific workflows.

> [!tip] A useful combination
> Use `content-research-writer` to research a topic, then `obsidian-markdown` to shape the result into a vault note. For meetings, combine `meeting-notes-and-actions` with `obsidian-markdown`.
