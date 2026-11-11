export type KnowledgeArticle = {
  path: "/kennis/douane-administratie-uitbesteden" | "/kennis/logistieke-administratie-achterstand";
  category: string;
  title: string;
  description: string;
  readTime: string;
  sections: { title: string; paragraphs: string[]; checklist?: string[] }[];
  takeaway: string;
};

export const ARTICLES: KnowledgeArticle[] = [
  {
    path: "/kennis/douane-administratie-uitbesteden",
    category: "Douane & capaciteit",
    title: "Douane-administratie uitbesteden zonder van systeem te veranderen",
    description: "Welke douanewerkzaamheden kun je overdragen? Een praktische aanpak voor documenten, data-entry en broker-communicatie binnen je bestaande platform.",
    readTime: "4 minuten",
    sections: [
      {
        title: "Het knelpunt zit niet altijd in de aangifte",
        paragraphs: ["Een ervaren declarant heeft weinig aan extra capaciteit als facturen ontbreken, productgegevens verspreid staan en dezelfde informatie steeds opnieuw moet worden opgevraagd. Kijk daarom eerst naar het werk rondom de aangifte: documenten verzamelen, gegevens controleren en vragen opvolgen.", "Door die voorbereiding apart te organiseren, kan je specialist zich richten op de inhoudelijke beoordeling. Dat is geen garantie op snellere vrijgave, maar wel een manier om onnodig zoek- en herstelwerk te beperken."],
      },
      {
        title: "Welke werkzaamheden zijn overdraagbaar?",
        paragraphs: ["Begin met terugkerende taken waarvan het resultaat duidelijk te controleren is. Spreek af wat een compleet dossier bevat en wanneer een inhoudelijke vraag naar de declarant of broker moet."],
        checklist: ["Facturen, paklijsten en transportdocumenten verzamelen en aan het juiste dossier koppelen.", "Productgegevens ordenen en ontbrekende informatie bij de juiste contactpersoon opvragen.", "Data-entry uitvoeren volgens afgesproken instructies en controles.", "Vragen van de broker bijhouden, uitzetten en opvolgen.", "Dossierstatussen bijwerken, zodat het team ziet wat nog ontbreekt."],
      },
      {
        title: "Werken in je eigen platform: eerst de afspraken, dan de toegang",
        paragraphs: ["Uitbesteden hoeft geen softwaremigratie te betekenen. MVR werkt waar mogelijk op het platform van de klant. Of dat kan, hangt af van de beschikbare rechten, beveiliging en de werkzaamheden.", "Gebruik een persoonlijk account met alleen de benodigde rechten; deel geen wachtwoord van een medewerker. Leg vast wie gegevens invoert, wie inhoudelijk controleert en wie bevoegd is om een aangifte in te dienen. Aangiftewerkzaamheden worden alleen uitgevoerd als toegang, bevoegdheden en opdracht dat toelaten."],
      },
      {
        title: "Start met één afgebakende werkstroom",
        paragraphs: ["Kies bijvoorbeeld één type importdossier of de documentopvolging voor één klant. Noteer de huidige tijdsbesteding, de ontbrekende stukken en het aantal correctierondes. Daarmee krijg je een vertrekpunt voor de samenwerking.", "Beoordeel daarna samen of dossiers completer worden aangeleverd, minder vragen blijven liggen en je team daadwerkelijk tijd terugkrijgt. Breid pas uit wanneer de overdracht goed werkt."],
      },
    ],
    takeaway: "Bespreek welke taken blijven liggen, welk platform je gebruikt en wie de controles uitvoert. Dan kunnen we bepalen wat verantwoord overdraagbaar is.",
  },
  {
    path: "/kennis/logistieke-administratie-achterstand",
    category: "Logistiek & data-entry",
    title: "Achterstand in logistieke administratie? Begin met deze vijf stappen",
    description: "Grip op openstaande dossiers, ontbrekende documenten en data-entry. Vijf praktische stappen voor logistieke teams die extra administratieve capaciteit zoeken.",
    readTime: "4 minuten",
    sections: [
      {
        title: "1. Maak de achterstand zichtbaar",
        paragraphs: ["Een volle inbox is geen werklijst. Maak één overzicht van openstaande dossiers met de zendingreferentie, de ontbrekende informatie, de eigenaar en de eerstvolgende actie. Houd klantgegevens binnen de goedgekeurde bedrijfsomgeving.", "Maak onderscheid tussen werk dat direct uitgevoerd kan worden en dossiers die wachten op een klant, leverancier of broker. Anders besteed je elke dag opnieuw tijd aan dossiers waar je nog niets mee kunt."],
      },
      {
        title: "2. Sorteer op gevolgen, niet alleen op ouderdom",
        paragraphs: ["Een oud dossier is niet automatisch het meest urgent. Geef voorrang aan werk met een naderende deadline of een concrete blokkade voor transport, afhandeling of facturatie. Laat inhoudelijke douanevragen beoordelen door de verantwoordelijke specialist."],
        checklist: ["Wat is de eerstvolgende deadline?", "Welk proces staat stil door deze ontbrekende informatie?", "Wie kan de blokkade oplossen?", "Welke actie kan vandaag daadwerkelijk worden afgerond?"],
      },
      {
        title: "3. Werk met een vaste dossiercheck",
        paragraphs: ["Bepaal per werkstroom welke documenten en velden nodig zijn. Denk aan factuur, paklijst, transportreferentie en relevante productgegevens. Welke gegevens verplicht zijn, hangt af van de zending, de procedure en het systeem.", "Controleer niet alleen of er iets is ingevuld, maar ook of gegevens tussen documenten overeenkomen. Markeer verschillen en leg vast wie ze moet beoordelen; vul onbekende gegevens niet op gevoel aan."],
      },
      {
        title: "4. Draag een duidelijk werkpakket over",
        paragraphs: ["‘Help even met de administratie’ is te breed. ‘Verzamel de ontbrekende paklijsten voor deze dossiers en werk de status bij’ is wel uitvoerbaar. Spreek het resultaat, de toegang, de contactpersonen en de controlemomenten af.", "MVR kan ondersteunen met documentopvolging, data-entry, dossieropbouw en gerelateerde logistieke administratie. Werk op het platform van de klant is waar mogelijk het uitgangspunt; inhoudelijke beslissingen en bevoegdheden worden vooraf afgestemd."],
      },
      {
        title: "5. Voorkom dat de stapel opnieuw groeit",
        paragraphs: ["Reserveer naast het wegwerken van de achterstand ook aandacht voor nieuw binnenkomend werk. Kijk regelmatig hoeveel dossiers erbij komen, hoeveel worden afgerond en welke oorzaken terugkeren.", "Als dezelfde documenten steeds ontbreken, zit de oplossing mogelijk in een betere aanleverafspraak. Extra handen helpen met de uitvoering; een duidelijke werkwijze maakt die ondersteuning duurzaam."],
      },
    ],
    takeaway: "Vertel hoeveel dossiers openstaan, welke taken blijven liggen en wanneer ondersteuning nodig is. Zo bespreken we een afgebakend werkpakket in plaats van alleen extra uren.",
  },
];