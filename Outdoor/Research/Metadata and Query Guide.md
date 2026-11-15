---
type: research
title: Metadata and Query Guide
aliases: []
tags:
  - outdoor
  - outdoor/research
created: 2026-11-15
updated: 2026-11-15
verified_on: 2026-11-15
sources:
  - https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/
  - https://blacksmithgu.github.io/obsidian-dataview/queries/structure/
related:
  - '[[Outdoor/Matrices/Dataview Dashboard|Dataview Dashboard]]'
---

# Metadata and Query Guide

This guide is the collection’s metadata contract. Stable field names keep the notes queryable without additional plugins or JavaScript. The installed Dataview plugin reads frontmatter fields directly.

## Common properties

`type`, `title`, `aliases`, `tags`, `created`, `updated`, `verified_on`, `sources` and `related` appear on every note. Types are `moc`, `brand`, `climate`, `season`, `activity`, `gear`, `layering`, `comparison`, `regional`, `system`, `insight`, `research` or `matrix`. Dates use ISO format; sources are external URL lists.

## Brand properties

`country` identifies the brand base used in this library; `origin_country` preserves founding geography where it differs, notably Salewa. `region` is Scandinavian, American, European or Canadian. The Canadian group is the supplemental Arc’teryx comparator. Ownership and manufacturing are not inferred from these fields.

`specialties`, `best_climates`, `best_seasons`, `best_activities` and `comparisons` contain quoted wikilinks. `key_technologies` is a text list; `typical_fit`, `rating_scope`, `rating_confidence` and `cost_category` are text. The three rating fields are integer numbers from 1 through 10.

## Relationship properties

Climate, season, activity, equipment and system notes use relevant lists such as `recommended_brands`, `gear_categories`, `climates`, `seasons`, `activities` and `layering_systems`. The last field can point to either an explanatory layering note or a practical field-system note, according to context.

## Query patterns

A current-page filter compares link objects rather than displayed labels. For example, a climate note uses `contains(best_climates, this.file.link)`. Each executable block sits on a page where its required context exists. Do not paste a current-page climate query into a dashboard and expect it to match the dashboard’s name.

The dashboard uses explicit climate/category links for fixed filters. Queries use folder-scoped `FROM` clauses, `TABLE`, `WHERE` and `SORT`; no DataviewJS execution setting is required. The example below is a live type-and-range check, not a ranking.

```dataview
TABLE durability_rating AS "Durability", technical_performance_rating AS "Performance", sustainability_rating AS "Practices"
FROM "Outdoor/Brand Profiles"
WHERE durability_rating < 1 OR durability_rating > 10 OR technical_performance_rating < 1 OR technical_performance_rating > 10 OR sustainability_rating < 1 OR sustainability_rating > 10
SORT file.name ASC
```

The expected result is **no rows** when all brand ratings are in range. A blank result is intentional here.

## Folder structure and navigation

```text
Outdoor/
├── Outdoor Brands MOC.md
├── Climate Systems MOC.md
├── Seasonal Systems MOC.md
├── Layering Systems MOC.md
├── Brand Profiles/
├── Climates/
├── Seasons/
├── Activities/
├── Gear Categories/
├── Layering Systems/
├── Comparisons/
├── Regional Guides/
├── Field Systems/
├── Insights/
├── Research/
└── Matrices/
```

Each note covers one topic and links to its parent MOC plus relevant neighbors. Explicit wikilinks, including frontmatter relationships, support the graph independently of query rendering. Static tables remain readable without Dataview. On GitHub, Obsidian wikilinks may appear as text rather than navigable links; the files and tables remain available in the repository tree.

## Explore

[[Outdoor/Outdoor Brands MOC|Outdoor Brands MOC]] · [[Outdoor/Matrices/Dataview Dashboard|Dataview Dashboard]]

## Sources and review

Checked **15 November 2026**. [Dataview metadata documentation](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/) · [Dataview query structure](https://blacksmithgu.github.io/obsidian-dataview/queries/structure/).
