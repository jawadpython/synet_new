# SYNET Business Solutions — Implementation Reference

> **Version:** 1.0 · **Last updated:** 2026-06-08

## Pages

| Page | FR URL | EN/AR URL | Internal route |
|------|--------|-----------|----------------|
| Hub | `/fr/solutions-entreprise` | `/en/business-solutions` | `/[locale]/solutions` |
| Service | `/fr/solutions-entreprise/{slug}` | `/en/business-solutions/{slug}` | `/[locale]/solutions/[slug]` |
| Quote | `/fr/demande-devis?service={slug}` | `/en/request-quote?service={slug}` | `/[locale]/solutions/quote` |

## Services (7)

1. Network Infrastructure
2. Cybersecurity
3. VoIP & IP Telephony
4. Web Development
5. Cloud Solutions
6. IT Support & Maintenance
7. CCTV & Access Control

## Service page sections

- Hero + primary quote CTA
- About (description)
- Benefits (4 cards)
- Process (5-step timeline)
- Technologies (partner badges)
- CTA band (quote + contact)

## Components

`src/components/solutions/` — ServiceCard, ServiceCatalog, ServiceBenefits, ServiceProcess, ServiceTechnologies, ServiceCtaBand, QuoteRequestForm

## Data

`src/lib/solutions/services/{fr,en,ar}.ts` — full per-locale content
