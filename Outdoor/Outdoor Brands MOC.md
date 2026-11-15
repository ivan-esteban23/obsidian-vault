---
type: moc
title: Outdoor Brands MOC
aliases: []
tags:
  - outdoor
  - outdoor/moc
created: 2026-11-15
updated: 2026-11-15
verified_on: 2026-11-15
sources:
  - https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/
related: []
---

# Outdoor Brands MOC

A linked reference library for outdoor clothing and core trekking equipment, with Chilean conditions as its main application. Start with the route and missing function, then explore brands. The collection contains **24 requested brands plus one Canadian comparator**.

## Start here

- [[Outdoor/Regional Guides/Torres del Paine|Torres del Paine]] — wet, windy multi-day trekking.
- [[Outdoor/Regional Guides/Central Chile Mediterranean Climate|Central Chile Mediterranean Climate]] — hot approaches, water and elevation changes.
- [[Outdoor/Regional Guides/Chilean Andes|Chilean Andes]] — exposure and mountain transitions.
- [[Outdoor/Brand Profiles/Patagonia|Patagonia]] — the expanded brand profile; distinct from [[Outdoor/Regional Guides/Patagonia Region|Patagonia Region]].

[[Outdoor/Climate Systems MOC|Climate Systems MOC]] · [[Outdoor/Seasonal Systems MOC|Seasonal Systems MOC]] · [[Outdoor/Layering Systems MOC|Layering Systems MOC]].

## Scandinavian brands

- [[Outdoor/Brand Profiles/Fjällräven|Fjällräven]] — Sweden; trekking legwear, backpacks, shelters.
- [[Outdoor/Brand Profiles/Norrøna|Norrøna]] — Norway; waterproof shells, active insulation, trekking legwear.
- [[Outdoor/Brand Profiles/Haglöfs|Haglöfs]] — Sweden; waterproof shells, fleece midlayers, trekking legwear.
- [[Outdoor/Brand Profiles/Klättermusen|Klättermusen]] — Sweden; waterproof shells, backpacks, trekking legwear.
- [[Outdoor/Brand Profiles/Bergans|Bergans]] — Norway; waterproof shells, backpacks, trekking legwear.
- [[Outdoor/Brand Profiles/Lundhags|Lundhags]] — Sweden; hiking footwear, trekking legwear.
- [[Outdoor/Brand Profiles/Devold|Devold]] — Norway; base layers, headwear.
- [[Outdoor/Brand Profiles/Helly Hansen|Helly Hansen]] — Norway; waterproof shells, base layers, static insulation.

## American brands

American means the eight United States brands requested.

- [[Outdoor/Brand Profiles/Patagonia|Patagonia]] — United States; base layers, fleece midlayers, active insulation.
- [[Outdoor/Brand Profiles/Outdoor Research|Outdoor Research]] — United States; gloves, headwear, waterproof shells.
- [[Outdoor/Brand Profiles/Mountain Hardwear|Mountain Hardwear]] — United States; static insulation, shelters, sleep systems.
- [[Outdoor/Brand Profiles/Black Diamond|Black Diamond]] — United States; gloves, trekking poles, waterproof shells.
- [[Outdoor/Brand Profiles/The North Face|The North Face]] — United States; waterproof shells, static insulation, shelters.
- [[Outdoor/Brand Profiles/Marmot|Marmot]] — United States; waterproof shells, static insulation, sleep systems.
- [[Outdoor/Brand Profiles/Columbia|Columbia]] — United States; trekking legwear, waterproof shells, headwear.
- [[Outdoor/Brand Profiles/REI Co-op|REI Co-op]] — United States; backpacks, shelters, sleep systems.

## European brands

European here excludes Scandinavia; British and Alpine brands retain their distinct contexts.

- [[Outdoor/Brand Profiles/Mammut|Mammut]] — Switzerland; waterproof shells, hiking footwear, backpacks.
- [[Outdoor/Brand Profiles/Rab|Rab]] — United Kingdom; static insulation, active insulation, sleep systems.
- [[Outdoor/Brand Profiles/Ortovox|Ortovox]] — Germany; base layers, active insulation, static insulation.
- [[Outdoor/Brand Profiles/Vaude|Vaude]] — Germany; waterproof shells, backpacks, shelters.
- [[Outdoor/Brand Profiles/Mountain Equipment|Mountain Equipment]] — United Kingdom; static insulation, sleep systems, waterproof shells.
- [[Outdoor/Brand Profiles/La Sportiva|La Sportiva]] — Italy; hiking footwear.
- [[Outdoor/Brand Profiles/Scarpa|Scarpa]] — Italy; hiking footwear.
- [[Outdoor/Brand Profiles/Salewa|Salewa]] — Italy; hiking footwear, backpacks, trekking legwear.

## Canadian brands

Supplemental comparator required for the Norrøna comparison.

- [[Outdoor/Brand Profiles/Arc'teryx|Arc'teryx]] — Canada; waterproof shells, active insulation, static insulation.

## Comparisons

- [[Outdoor/Comparisons/Scandinavian vs American Brands|Scandinavian vs American Brands]]
- [[Outdoor/Comparisons/Scandinavian vs Alpine European Brands|Scandinavian vs Alpine European Brands]]
- [[Outdoor/Comparisons/Patagonia vs Fjällräven|Patagonia vs Fjällräven]]
- [[Outdoor/Comparisons/Norrøna vs Arc'teryx|Norrøna vs Arc'teryx]]
- [[Outdoor/Comparisons/Mammut vs Rab|Mammut vs Rab]]
- [[Outdoor/Comparisons/Ortovox vs Devold|Ortovox vs Devold]]

## Recommendation tools

- [[Outdoor/Matrices/Brand Recommendation Matrix|Brand Recommendation Matrix]]
- [[Outdoor/Matrices/Climate-to-Brand Matrix|Climate-to-Brand Matrix]]
- [[Outdoor/Matrices/Season-to-Brand Matrix|Season-to-Brand Matrix]]
- [[Outdoor/Matrices/Dataview Dashboard|Dataview Dashboard]]

## Higher-level insights

- [[Outdoor/Insights/Regional Design Philosophies|Regional Design Philosophies]]
- [[Outdoor/Insights/Climate and Product Development|Climate and Product Development]]
- [[Outdoor/Insights/All-Round Outdoor Systems|All-Round Outdoor Systems]]

## Evidence and maintenance

[[Outdoor/Research/Rating Methodology|Rating Methodology]] · [[Outdoor/Research/Sources and Review Log|Sources and Review Log]] · [[Outdoor/Research/Metadata and Query Guide|Metadata and Query Guide]].

Ratings are editorial and specialty-scoped. Prices, local stock and Chilean repair eligibility are not verified purchase offers. No new purchase is required to use the functional systems.

## Live brand index

```dataview
TABLE country AS "Country", region AS "Region", cost_category AS "Cost"
FROM "Outdoor/Brand Profiles"
SORT region ASC, file.name ASC
```

## Sources and review

Checked **15 November 2026**. [Dataview metadata documentation](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/).
