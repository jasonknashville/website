# Tool roadmap

This is the working source of truth for which calculator and resource concepts belong on the unified website.

## Public hub

The public hub should stay intentionally short. The primary tools are:

1. Ideal Home Clarity Check
2. Move-Up Mortgage Calculator
3. Move Now or Wait
4. Home Affordability Calculator
5. 30-Year vs. 15-Year Mortgage Calculator
6. Commute Cost Calculator

The Ideal Home Clarity Check is the featured quiz. It is more concrete, human, and useful for directing someone to the right next planning tool.

## Useful but secondary

- Mortgage Payoff Calculator
- Down Payment / Cash-to-Close Planner
- Cost to Sell / Net Proceeds Calculator
- Future Equity Growth Calculator
- Advanced Sell vs. Rent Analyzer
- Decision Clarity Check

The Decision Clarity Check may remain available as a broader readiness/next-step quiz, but it should not compete with the Ideal Home quiz on the main tool hub. A later home could be a guide or consultation page for visitors who are unsure whether they are buying, selling, or doing both.

The Advanced Sell vs. Rent Analyzer is used occasionally and should be retained. It can be offered as an advanced or agent-assisted tool without receiving a primary hub card.

## Private, unlisted, or client-only

- Nashville New-Build Analyzer: retain and improve as a client/investor tool. Explore ZIP-level data automation. A later, more complete public version may be appropriate for social sharing.
- Emergency Contact Numbers: retain as an unfeatured seasonal homeowner resource.
- JJ Buy or Rent: client-specific; do not publish as a general tool.
- Smith reports and hubs: client-specific; keep outside the public site and search index.
- Other named client/property comparison pages: keep outside the public site unless explicitly approved.

## Bookmarked for improvement

- Today vs. Past Housing Cost: retain the concept. Replace the static 2025 assumptions with current data supplied by Jason or an automated, dated source before publishing it prominently.

## Consolidation decisions

- Move Now or Wait uses `CostofWaitingcalculatorV2` as the functional starting point, with corrected scenario language, current automated mortgage-rate defaults, selling-cost and reserve assumptions for owners, and a shorter interface.
- Affordability will become one tool. Combine the approachable payment-first framing of `Price-By-Monthly-Payment` with the useful income/debt logic in `What-Can-I-Afford-Calc`.
- The sell/keep/rent family will not produce multiple public tools. The Move-Up calculator handles the common decision; the Advanced Sell vs. Rent Analyzer remains available for deeper analysis.

## Measurement

Track privacy-safe events only; do not send calculator values, quiz answers, names, email addresses, or phone numbers to analytics.

Standard events:

- `tool_view`
- `tool_start`
- `tool_calculate`
- `tool_complete`
- `tool_share`
- `tool_email_results`
- `tool_contact_click`

Parameters should be limited to the tool identifier, mode, and action label.
