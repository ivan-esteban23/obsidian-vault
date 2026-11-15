---
type: matrix
title: Dataview Dashboard
aliases: []
tags:
  - outdoor
  - outdoor/matrix
created: 2026-11-15
updated: 2026-11-15
verified_on: 2026-11-15
sources:
  - https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/
  - https://blacksmithgu.github.io/obsidian-dataview/queries/structure/
related:
  - '[[Outdoor/Research/Metadata and Query Guide|Metadata and Query Guide]]'
---

# Dataview Dashboard

Use these live views to browse the metadata. All queries are scoped to Outdoor folders and use standard DQL. They read the notes without modifying them. Static equivalents are provided in the three recommendation matrices.

## All brands

```dataview
TABLE country AS "Country", region AS "Region", specialties AS "Specialties", cost_category AS "Cost"
FROM "Outdoor/Brand Profiles"
SORT region ASC, file.name ASC
```

## Scandinavian profiles

```dataview
TABLE country AS "Country", specialties AS "Specialties"
FROM "Outdoor/Brand Profiles"
WHERE region = "Scandinavian"
SORT file.name ASC
```

## American profiles

```dataview
TABLE specialties AS "Specialties", cost_category AS "Cost"
FROM "Outdoor/Brand Profiles"
WHERE region = "American"
SORT file.name ASC
```

## European profiles

```dataview
TABLE country AS "Country", specialties AS "Specialties"
FROM "Outdoor/Brand Profiles"
WHERE region = "European"
SORT file.name ASC
```

## Wet-cold clothing and category candidates

```dataview
TABLE specialties AS "Specialties", rating_scope AS "Rating scope"
FROM "Outdoor/Brand Profiles"
WHERE contains(best_climates, [[Outdoor/Climates/Wet Cold]])
SORT file.name ASC
```

## Waterproof-shell specialty ratings

These numbers retain their whole-profile specialty scope; inspect the profile before comparing a specific shell.

```dataview
TABLE durability_rating AS "Durability", technical_performance_rating AS "Technical", sustainability_rating AS "Practices", rating_confidence AS "Confidence"
FROM "Outdoor/Brand Profiles"
WHERE contains(specialties, [[Outdoor/Gear Categories/Waterproof Shells]])
SORT technical_performance_rating DESC, file.name ASC
```

## Review dates

```dataview
TABLE type AS "Type", verified_on AS "Verified"
FROM "Outdoor"
WHERE type = "brand" OR type = "regional"
SORT verified_on ASC, file.name ASC
```

## Static navigation

[[Outdoor/Matrices/Brand Recommendation Matrix|Brand Recommendation Matrix]] · [[Outdoor/Matrices/Climate-to-Brand Matrix|Climate-to-Brand Matrix]] · [[Outdoor/Matrices/Season-to-Brand Matrix|Season-to-Brand Matrix]].

## Explore

[[Outdoor/Outdoor Brands MOC|Outdoor Brands MOC]] · [[Outdoor/Research/Metadata and Query Guide|Metadata and Query Guide]]

## Sources and review

Checked **15 November 2026**. [Dataview metadata documentation](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/) · [Dataview query structure](https://blacksmithgu.github.io/obsidian-dataview/queries/structure/).
