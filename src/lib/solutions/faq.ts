import type { Locale } from "@/lib/i18n/config";

type FaqItem = { question: string; answer: string };

const faqFr: Record<string, FaqItem[]> = {
  "network-infrastructure": [
    { question: "Intervenez-vous sur site au Maroc ?", answer: "Oui. Nos ingénieurs se déplacent pour l'audit, le déploiement et la maintenance." },
    { question: "Pouvez-vous reprendre un réseau existant ?", answer: "Oui. Nous auditons l'existant et proposons une évolution sans interruption majeure." },
    { question: "Quels délais pour un projet réseau ?", answer: "Selon l'ampleur : de quelques jours pour un site unique à plusieurs semaines pour un déploiement multi-sites." },
  ],
  cybersecurity: [
    { question: "Proposez-vous un audit de sécurité ?", answer: "Oui. L'audit est la première étape de notre démarche cybersécurité." },
    { question: "Accompagnez-vous la mise en conformité ?", answer: "Nous alignons les mesures sur vos obligations sectorielles et les bonnes pratiques." },
    { question: "Intervenez-vous en cas d'incident ?", answer: "Oui. Notre équipe peut vous assister pour contenir et analyser un incident." },
  ],
  "voip-ip-telephony": [
    { question: "Puis-je conserver mes numéros existants ?", answer: "Dans la plupart des cas, oui. Nous étudions la portabilité avec votre opérateur." },
    { question: "La solution est-elle compatible télétravail ?", answer: "Oui. Applications softphone et intégration messagerie unifiée." },
    { question: "Quel budget prévoir ?", answer: "Le devis dépend du nombre de postes, des fonctionnalités et de l'infrastructure réseau." },
  ],
  "web-development": [
    { question: "Créez-vous des sites multilingues ?", answer: "Oui. Nous développons des sites FR, EN et AR avec gestion RTL." },
    { question: "Le référencement est-il inclus ?", answer: "Les bonnes pratiques SEO techniques sont intégrées à chaque projet." },
    { question: "Assurez-vous la maintenance ?", answer: "Oui. Contrats de maintenance et mises à jour disponibles." },
  ],
  "cloud-solutions": [
    { question: "Quels clouds supportez-vous ?", answer: "AWS, Azure et solutions hybrides selon vos contraintes." },
    { question: "Accompagnez-vous la migration ?", answer: "Oui. Plan de migration, tests et bascule contrôlée." },
    { question: "La sécurité cloud est-elle couverte ?", answer: "Oui. Durcissement, IAM et sauvegardes font partie de nos prestations." },
  ],
  "it-support-maintenance": [
    { question: "Quels sont vos délais d'intervention ?", answer: "Selon le contrat : support prioritaire ou standard, avec engagement de réponse." },
    { question: "Proposez-vous de l'infogérance ?", answer: "Oui. Supervision, correctifs et support utilisateur." },
    { question: "Couvrez-vous plusieurs sites ?", answer: "Oui. Support centralisé pour organisations multi-sites." },
  ],
  "cctv-access-control": [
    { question: "Intégrez-vous vidéo et contrôle d'accès ?", answer: "Oui. Solutions unifiées pour la sécurité physique." },
    { question: "L'accès à distance est-il possible ?", answer: "Oui, avec sécurisation des flux et authentification." },
    { question: "Réalisez-vous l'installation sur site ?", answer: "Oui. Étude, fourniture, pose et configuration." },
  ],
};

const faqEn: Record<string, FaqItem[]> = {
  "network-infrastructure": [
    { question: "Do you work on-site in Morocco?", answer: "Yes. Our engineers travel for audit, deployment, and maintenance." },
    { question: "Can you take over an existing network?", answer: "Yes. We audit and propose evolution with minimal disruption." },
    { question: "What are typical project timelines?", answer: "From a few days for a single site to several weeks for multi-site deployments." },
  ],
  cybersecurity: [
    { question: "Do you offer security audits?", answer: "Yes. Audit is the first step of our cybersecurity approach." },
    { question: "Do you help with compliance?", answer: "We align measures with sector requirements and best practices." },
    { question: "Do you respond to incidents?", answer: "Yes. Our team can help contain and analyze security incidents." },
  ],
  "voip-ip-telephony": [
    { question: "Can I keep existing numbers?", answer: "In most cases, yes. We assess portability with your operator." },
    { question: "Is remote work supported?", answer: "Yes. Softphone apps and unified communications integration." },
    { question: "What budget should I plan?", answer: "Quotes depend on extensions, features, and network infrastructure." },
  ],
  "web-development": [
    { question: "Do you build multilingual sites?", answer: "Yes. FR, EN, and AR with RTL support." },
    { question: "Is SEO included?", answer: "Technical SEO best practices are built into every project." },
    { question: "Do you provide maintenance?", answer: "Yes. Maintenance contracts and updates are available." },
  ],
  "cloud-solutions": [
    { question: "Which clouds do you support?", answer: "AWS, Azure, and hybrid solutions." },
    { question: "Do you support migration?", answer: "Yes. Migration plan, testing, and controlled cutover." },
    { question: "Is cloud security covered?", answer: "Yes. Hardening, IAM, and backups are included." },
  ],
  "it-support-maintenance": [
    { question: "What are response times?", answer: "Depends on contract: priority or standard support with SLA." },
    { question: "Do you offer managed services?", answer: "Yes. Monitoring, patching, and user support." },
    { question: "Do you cover multiple sites?", answer: "Yes. Centralized support for multi-site organizations." },
  ],
  "cctv-access-control": [
    { question: "Do you integrate video and access control?", answer: "Yes. Unified physical security solutions." },
    { question: "Is remote access available?", answer: "Yes, with secured streams and authentication." },
    { question: "Do you install on-site?", answer: "Yes. Survey, supply, installation, and configuration." },
  ],
};

export function getServiceFaq(serviceId: string, locale: Locale): FaqItem[] {
  const map = locale === "fr" ? faqFr : faqEn;
  return map[serviceId] ?? faqEn[serviceId] ?? [];
}
