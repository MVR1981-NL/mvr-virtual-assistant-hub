import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/privacy-verklaring.css?raw";

export const Route = createFileRoute("/privacy-verklaring")({
  head: () => ({ meta: [{ title: "Privacy Verklaring MVR Virtual Assistant" }] }),
  staticData: { importedDocument: { html: { "lang": "nl" }, body: { "className": "jw-is-no-slideshow jw-header-is-image jw-is-frontend jw-is-no-sidebar jw-is-no-mobile jw-menu-is-desktop", "data-jouwweb-page": "33713620", "data-jouwweb-segment-id": "33713620", "data-jouwweb-segment-type": "page", "data-template-name": "general|clean|blanco", "data-template-threshold": "960", "id": "top" } } },
  component: Index,
});

function Index() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookiesDone, setCookiesDone] = useState(false);
  useEffect(() => {
    const cl = document.body.classList;
    cl.toggle("jw-menu-is-desktop", !isMobile);
    cl.toggle("jw-menu-is-mobile", isMobile);
    cl.toggle("jw-menu-is-collapsed", isMobile && !menuOpen);
    cl.toggle("jw-menu-is-open", isMobile && menuOpen);
    if (!isMobile && menuOpen) setMenuOpen(false);
  }, [isMobile, menuOpen]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [menuOpen]);
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"cc-revoke cc-bottom cc-animate"} style={{ display: "none" }}>Cookie Policy</div>
      {!cookiesDone && <div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" className={"cc-window cc-banner cc-type-opt-in cc-theme-jw cc-bottom "}>
        <span id="cookieconsent:desc" className={"cc-message"}>Deze website maakt gebruik van cookies om uw ervaring te verbeteren en op maat gemaakte advertenties weer te geven. Door op ‘Accepteren’ te klikken, gaat u akkoord met het gebruik van alle cookies.</span>
        <div className={"cc-compliance cc-highlight"}>
          <a aria-label="deny cookies" className={"cc-btn cc-deny"} role="button" tabIndex={0} onClick={() => setCookiesDone(true)}>Afwijzen</a>
          <a aria-label="allow cookies" className={"cc-btn cc-allow"} role="button" tabIndex={0} onClick={() => setCookiesDone(true)}>Accepteren</a>
        </div>
      </div>}
      <a className={"jw-skip-link"} href="#main-content">
                  Ga direct naar de hoofdinhoud        </a>
      <div className={"jw-background"} />
      <div className={"jw-body"}>
        <header className={"block-header js-topbar-content-container js-fixed-header-container"}>
          <div className={"block-header__inner"}>
            <div className={"jw-mobile-menu jw-mobile-is-logo js-mobile-menu"}>
              <button type="button" className={"jw-mobile-menu__button jw-mobile-search-button"} aria-label="Zoek binnen website">
                <span className={"jw-icon-search"} />
              </button>
              <div className={"jw-mobile-header jw-mobile-header--image"}>
                <a className={"jw-mobile-header-content"} href="/">
                  <img className={"jw-mobile-logo jw-mobile-logo--landscape"} src="/site-assets/9b5fac01c344298e.webp" srcSet="/site-assets/9b5fac01c344298e.webp 1x, /site-assets/7678788219ad1506.webp 2x" alt="MVRvirtual assistant" title="MVRvirtual assistant" />
                </a>
              </div>
              <button type="button" className={"jw-mobile-menu__button jw-mobile-toggle"} aria-label="Open / sluit menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
                <span className={menuOpen ? "jw-icon-burger jw-icon-burger--cross" : "jw-icon-burger"} />
              </button>
            </div>
            <nav className={"menu jw-menu-clone jw-menu-collapse"}>
              <ul id="jw-menu" className={"jw-menu jw-menu-horizontal jw-menu-spacing--mobile-bar"}>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/">
                    <span className={""}>
                  Home        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/diensten">
                    <span className={""}>
                  Diensten        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/tarieven">
                    <span className={""}>
                  Tarieven        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/over-mij">
                    <span className={""}>
                  Over Mij        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/contact">
                    <span className={""}>
                  Contact        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/faq">
                    <span className={""}>
                  FAQ        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/actueel">
                    <span className={""}>
                  Actueel        </span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className={"jw-mobile-menu-search jw-mobile-menu-search--hidden"}>
              <form method="get" className={"jw-mobile-menu-search__box"}><input type="text" name="q" defaultValue="" placeholder="Zoeken..." className={"jw-mobile-menu-search__input"} aria-label="Zoeken" /><button type="submit" className={"jw-btn jw-btn--style-flat jw-mobile-menu-search__button"} aria-label="Zoeken">{"\n                "}<span className={"website-rendering-icon-search"} aria-hidden="true" />{"\n            "}</button><button type="button" className={"jw-btn jw-btn--style-flat jw-mobile-menu-search__button js-cancel-search"} aria-label="Zoekopdracht annuleren">{"\n                "}<span className={"website-rendering-icon-cancel"} aria-hidden="true" />{"\n            "}</button></form>
            </div>
            <div className={"block-header__brand"}>
              <div className={"jw-header-logo"}>
                <div id="jw-header-image-container" className={"jw-header jw-header-image-container jw-header-image-toggle"}>
                  <a href="/">
                    <img id="jw-header-image" srcSet="/site-assets/a2cc4ba225247567.webp 504w, /site-assets/65181eeb3dcea99d.webp 678w" className={"jw-header-image"} title="MVRvirtual assistant" style={{ width: "504px" }} sizes="504px" width="504" height="178" alt="MVRvirtual assistant" />
                  </a>
                </div>
                <div className={"jw-header jw-header-title-container jw-header-text jw-header-text-toggle"}>
                  <a className={"jw-header-title"} href="/" id="jw-header-title">
              MVR Virtual Assistant    </a>
                </div>
              </div>
            </div>
            <nav className={"block-header__menu jw-menu-copy"}>
              <ul className={isMobile ? "jw-menu jw-menu-horizontal" : "jw-menu jw-menu-horizontal sf-js-enabled sf-arrows"} id="jw-menu" style={{ touchAction: "pan-y" }} data-site-import-responsive="18" data-site-import-scroll-header={"{\"mobile\":{\"added\":[],\"removed\":[\"sf-js-enabled\",\"sf-arrows\"],\"threshold\":633}}"}>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/">
                    <span className={""}>
                  Home        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/diensten">
                    <span className={""}>
                  Diensten        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/tarieven">
                    <span className={""}>
                  Tarieven        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/over-mij">
                    <span className={""}>
                  Over Mij        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/contact">
                    <span className={""}>
                  Contact        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/faq">
                    <span className={""}>
                  FAQ        </span>
                  </a>
                </li>
                <li className={"jw-menu-item"}>
                  <a className={"jw-menu-link"} href="/actueel">
                    <span className={""}>
                  Actueel        </span>
                  </a>
                </li>
                <li className={"jw-menu-item jw-menu-search-item"}>
                  <button className={"jw-menu-link jw-menu-link--icon jw-text-button"} title="Zoeken">{"\n                                "}<span className={"website-rendering-icon-search"} />{"\n                            "}<span className={"hidden-desktop-horizontal-menu"}>
                  Zoeken        </span>{"\n            "}</button>
                  <div className={"jw-popover-container jw-popover-container--inline is-hidden"}>
                    <div className={"jw-popover-backdrop"} />
                    <div className={"jw-popover"}>
                      <div className={"jw-popover__arrow"} />
                      <div className={"jw-popover__content"}>
                        <form className={"jw-search"} method="get"><input className={"jw-search__input"} type="text" name="q" defaultValue="" placeholder="Zoeken..." aria-label="Zoeken" /><button className={"jw-search__submit"} type="submit" aria-label="Zoeken">{"\n                                "}<span className={"website-rendering-icon-search"} aria-hidden="true" />{"\n                            "}</button></form>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className={"block-slideshow"} />
        <div className={"main-content"}>
          <main id="main-content" className={"block-content"}>
            <div className={"jw-section jw-section-content jw-responsive"}>
              <div className={"jw-block-element"}>
                <div id="jw-element-651088982" className={"jw-tree-node jw-element jw-strip-root jw-tree-container jw-responsive jw-node-is-first-child jw-node-is-last-child"}>
                  <div id="jw-element-651090706" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-first-child jw-strip--primary"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651090707" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1 className={"jw-heading-130"} style={{ textAlign: "center" }}>Privacyverklaring</h1>
                          </div>
                        </div>
                        <div id="jw-element-651090708" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>Bij MVRvirtual assistant hechten we groot belang aan jouw privacy. Deze privacyverklaring legt uit welke persoonsgegevens we verzamelen, waarom we deze nodig hebben en hoe we jouw gegevens beschermen. Jouw vertrouwen is onze prioriteit.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-651090709" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-split-image jw-strip--color-default jw-strip--split-image-position-left jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"}>
                        <div className={"jw-strip__image-container"}>
                          <img src="/site-assets/03d34ac5c0cc9525.webp" width="1920" height="2880" className={"jw-strip__image"} alt="" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651090710" className={"jw-tree-node jw-element jw-spacer jw-node-is-first-child"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "120px" }} />
                        </div>
                        <div id="jw-element-651090711" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Jouw gegevens, onze verantwoordelijkheid</h2>
                          </div>
                        </div>
                        <div id="jw-element-651090712" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>MVRvirtual assistant, gevestigd aan Meesberg 24 4708 NN Roosendaal, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring. Je kunt ons bereiken via onze website <a href="/">https://www.mvrvirtualassistant.nl/</a> of telefonisch via +31(0)648401985.</p>
                            <p>Marcel M.W.C. van Roosendaal is onze Functionaris Gegevensbescherming en te bereiken via info@mvrvirtualassistant.nl.</p>
                            <p><strong>Persoonsgegevens die wij verwerken:</strong><br />MVRvirtual assistant verwerkt je persoonsgegevens doordat je gebruik maakt van onze diensten en/of omdat je deze gegevens zelf aan ons verstrekt. Hieronder vind je een overzicht van de persoonsgegevens die wij verwerken:</p>
                            <ul>
                              <li>Voor- en achternaam</li>
                              <li>E-mailadres</li>
                            </ul>
                            <p><strong>Bijzondere en/of gevoelige persoonsgegevens:</strong><br />Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar, tenzij ze toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook aan betrokken te zijn bij de online activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming. Als je ervan overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan contact met ons op via info@mvrvirtualassistant.nl<a href="mailto:marcelpriscilla@ziggo.nl" />, dan verwijderen wij deze informatie.</p>
                          </div>
                        </div>
                        <div id="jw-element-651090713" className={"jw-tree-node jw-element jw-spacer jw-node-is-last-child"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "120px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-651090714" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-split-image jw-strip--color-default jw-strip--split-image-position-right jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"}>
                        <div className={"jw-strip__image-container"}>
                          <img src="/site-assets/05dd3fe382045953.webp" width="1920" height="1280" className={"jw-strip__image"} alt="" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651090715" className={"jw-tree-node jw-element jw-spacer jw-node-is-first-child"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "120px" }} />
                        </div>
                        <div id="jw-element-651090716" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Waarom wij gegevens verzamelen en hoelang we ze bewaren</h2>
                          </div>
                        </div>
                        <div id="jw-element-651090717" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p><strong>Doel van de gegevensverwerking:</strong><br />MVRvirtual assistant verwerkt jouw persoonsgegevens voor de volgende doelen:
         </p>
                            <ul>
                              <li>Je te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren.</li>
                            </ul>
                            <p><strong>Geautomatiseerde besluitvorming:</strong><br />MVRvirtual assistant neemt geen besluiten op basis van geautomatiseerde verwerkingen over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen. Het gaat hier om besluiten die worden genomen door computerprogramma's of -systemen, zonder dat daar een mens (bijvoorbeeld een medewerker van MVRvirtual assistant) tussen zit. MVRvirtual assistant gebruikt geen computerprogramma's of -systemen voor geautomatiseerde besluitvorming.</p>
                            <p><strong>Hoe lang we persoonsgegevens bewaren:</strong><br />MVRvirtual assistant bewaart je persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor je gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen: zo lang als nodig voor de dienstverlening en daarna maximaal twee jaar voor administratieve doeleinden, tenzij een langere wettelijke bewaartermijn van toepassing is.</p>
                            <p><strong>Delen van persoonsgegevens met derden:</strong><br />MVRvirtual assistant verstrekt uitsluitend aan derden en alleen als dit nodig is voor de uitvoering van onze overeenkomst met jou of om te voldoen aan een wettelijke verplichting.</p>
                          </div>
                        </div>
                        <div id="jw-element-651090718" className={"jw-tree-node jw-element jw-spacer jw-node-is-last-child"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "120px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-651090719" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-split-image jw-strip--color-default jw-strip--split-image-position-left jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-last-child"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"}>
                        <div className={"jw-strip__image-container"}>
                          <img src="/site-assets/f823b702affee0f8.webp" width="1920" height="1280" className={"jw-strip__image"} alt="" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651090720" className={"jw-tree-node jw-element jw-spacer jw-node-is-first-child"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "120px" }} />
                        </div>
                        <div id="jw-element-651090721" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Jouw rechten en gegevensbeveiliging</h2>
                          </div>
                        </div>
                        <div id="jw-element-651090722" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p><strong>Cookies die wij gebruiken:</strong><br />MVRvirtual assistant gebruikt alleen technische en functionele cookies. En analytische cookies die geen inbreuk maken op je privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op jouw computer, tablet of smartphone. De cookies die wij gebruiken zijn noodzakelijk voor de technische werking van de website en jouw gebruiksgemak. Ze zorgen ervoor dat de website naar behoren werkt en onthouden bijvoorbeeld jouw voorkeursinstellingen. Ook kunnen wij hiermee onze website optimaliseren. Je kunt je afmelden voor cookies door je internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kun je ook alle informatie die eerder is opgeslagen via de instellingen van je browser verwijderen.</p>
                            <p><strong>Gegevens inzien, aanpassen of verwijderen:</strong><br />Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heb je het recht om je eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van jouw persoonsgegevens door MVRvirtual assistant en heb je het recht op gegevensoverdraagbaarheid. Dat betekent dat je bij ons een verzoek kan indienen om de persoonsgegevens die wij van jou beschikken in een computerbestand naar jou of een ander, door jou genoemde organisatie, te sturen.</p>
                            <p>Je kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van je persoonsgegevens of een verzoek tot intrekking van je toestemming of bezwaar op de verwerking van jouw persoonsgegevens sturen naar <a href="mailto:info@mvrvirtualassistant.nl">info@mvrvirtualassistant.nl</a>.  Om er zeker van te zijn dat het verzoek tot inzage door jou is gedaan, vragen wij jou een kopie van je identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie je pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter bescherming van je privacy. We reageren zo snel mogelijk, maar binnen vier weken, op jouw verzoek. MVRvirtual assistant wil je er tevens op wijzen dat je de mogelijkheid hebt om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via de volgende link: <a href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons" rel="noopener" target="_blank">autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons</a>.</p>
                            <p><strong>Hoe wij persoonsgegevens beveiligen:</strong><br />MVRvirtual assistant neemt de bescherming van jouw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als jij het idee hebt dat jouw gegevens toch niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op met onze klantenservice of via <a href="mailto:info@mvrvirtualassistant.nl">info@mvrvirtualassistant.nl</a>.</p>
                          </div>
                        </div>
                        <div id="jw-element-651090723" className={"jw-tree-node jw-element jw-spacer jw-node-is-last-child"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "120px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <ImportedFooter />
        <div className={"jw-bottom-bar__container"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
          <div className={"jw-mobile-bar-container"}>
            <div className={"mobile-bar mobile-bar--accent"}><a className={"mobile-bar__item js-allow-link-click"} href="mailto:info@mvrvirtualassistant.nl">{"\n            "}<span className={"mobile-bar__item-icon"}><span className={"website-rendering-icon-mail"} /></span>{"\n            "}<span className={"mobile-bar__item-label"}>E-mailadres</span>{"\n        "}</a><a className={"mobile-bar__item js-allow-link-click"} href="tel:+31648401985">{"\n            "}<span className={"mobile-bar__item-icon"}><span className={"website-rendering-icon-phone"} /></span>{"\n            "}<span className={"mobile-bar__item-label"}>Telefoonnummer</span>{"\n        "}</a><a className={"mobile-bar__item js-allow-link-click"} href="https://maps.google.com/maps?q=Meesberg%2C%204708%20Roosendaal%2C%20Nederland">{"\n            "}<span className={"mobile-bar__item-icon"}><span className={"website-rendering-icon-location"} /></span>{"\n            "}<span className={"mobile-bar__item-label"}>Kaart</span>{"\n        "}</a><a className={"mobile-bar__item js-allow-link-click"} href="https://linkedin.com/in/marcel-van-roosendaal">{"\n            "}<span className={"mobile-bar__item-icon"}><span className={"website-rendering-icon-linkedin"} /></span>{"\n            "}<span className={"mobile-bar__item-label"}>LinkedIn</span>{"\n        "}</a><a className={"mobile-bar__item js-allow-link-click"} href="https://api.whatsapp.com/send?phone=%2B31648401985">{"\n            "}<span className={"mobile-bar__item-icon"}><span className={"website-rendering-icon-whatsapp"} /></span>{"\n            "}<span className={"mobile-bar__item-label"}>WhatsApp</span>{"\n        "}</a></div>
          </div>
        </div>
        <div className={"jw-bottom-bar__spacer"}>
          <div className={"jw-website-spacer jw-website-spacer--mobile-bar"} />
        </div>
        <div id="jw-variable-loaded" style={{ display: "none" }} />
        <div id="jw-variable-values" style={{ display: "none" }}><span className={"jw-variable-value-background-color"} /><span className={"jw-variable-value-background"} /><span className={"jw-variable-value-font-family"} /><span className={"jw-variable-value-paragraph-color"} /><span className={"jw-variable-value-paragraph-link-color"} /><span className={"jw-variable-value-paragraph-font-size"} /><span className={"jw-variable-value-heading-color"} /><span className={"jw-variable-value-heading-link-color"} /><span className={"jw-variable-value-heading-font-size"} /><span className={"jw-variable-value-heading-font-family"} /><span className={"jw-variable-value-menu-text-color"} /><span className={"jw-variable-value-menu-text-link-color"} /><span className={"jw-variable-value-menu-text-font-size"} /><span className={"jw-variable-value-menu-font-family"} /><span className={"jw-variable-value-menu-capitalize"} /><span className={"jw-variable-value-website-size"} /><span className={"jw-variable-value-u-header-configuration"} /><span className={"jw-variable-value-u-header-background-color"} /><span className={"jw-variable-value-u-header-spacing"} /><span className={"jw-variable-value-u-header-scroll-effect"} /><span className={"jw-variable-value-accent-color"} /><span className={"jw-variable-value-footer-color"} /><span className={"jw-variable-value-footer-text-color"} /><span className={"jw-variable-value-footer-text-link-color"} /><span className={"jw-variable-value-footer-text-font-size"} /></div>
      </div>
    </>
  );
}

function ImportedFooter() {
  return (
    <footer className={"block-footer"}>
      <div className={"jw-section jw-section-footer jw-responsive"}>
        <div className={"jw-strip jw-strip--default jw-strip--style-none jw-strip--primary jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
          <div className={"jw-strip__content-container"}>
            <div className={"jw-strip__content jw-responsive"}>
              <div className={"jw-block-element"}>
                <div id="jw-element-649336271" className={"jw-tree-node jw-element jw-simple-root jw-tree-container jw-responsive jw-node-is-first-child jw-node-is-last-child"}>
                  <div id="jw-element-707447712" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex jw-node-is-first-child"}>
                    <div id="jw-element-707447747" style={{ width: "50%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                      <div id="jw-element-707447761" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                        <div className={"jw-element-imagetext-text"}>
                          <p>
                            <strong>
                              <span>MVR | Logistiek &amp; Douane Ondersteuning</span>
                            </strong>
                            <br />
                            <span>Specialistische extra capaciteit voor importeurs, handelsbedrijven en logistieke ondernemingen.</span>
                          </p>
                        </div>
                      </div>
                      <div id="jw-element-707448499" className={"jw-tree-node jw-element jw-social-follow jw-node-is-last-child"}>
                        <div className={"jw-element-social-follow jw-element-social-follow--align-left jw-element-social-follow--color-brand"} style={{ "--jw-social-follow-custom-color": "transparent", "--jw-social-follow-custom-color-text": "#fff" } as CSSProperties}>
                          <span className={"jw-element-content"}>{"\n            "}<a className={"jw-element-social-follow-profile jw-social-brand--instagram jw-btn jw-btn--size-medium jw-btn--style-flat jw-btn--icon-only"} href="https://instagram.com/mvrvirtualassistant/" rel="noopener" target="_blank">{"\n            "}<span className={"\x73r-only"}>Instagram</span>{"\n            "}<i aria-hidden="true" className={"jw-btn-icon website-rendering-icon-instagram"} />{"\n        "}</a>{"\n            "}<a className={"jw-element-social-follow-profile jw-social-brand--linkedin jw-btn jw-btn--size-medium jw-btn--style-flat jw-btn--icon-only"} href="https://linkedin.com/in/marcel-van-roosendaal" rel="noopener" target="_blank">{"\n            "}<span className={"\x73r-only"}>LinkedIn</span>{"\n            "}<i aria-hidden="true" className={"jw-btn-icon website-rendering-icon-linkedin"} />{"\n        "}</a>{"\n            "}<a className={"jw-element-social-follow-profile jw-social-brand--whatsapp jw-btn jw-btn--size-medium jw-btn--style-flat jw-btn--icon-only"} href="https://api.whatsapp.com/send?phone=31648401985" rel="noopener" target="_blank">{"\n            "}<span className={"\x73r-only"}>WhatsApp</span>{"\n            "}<i aria-hidden="true" className={"jw-btn-icon website-rendering-icon-whatsapp"} />{"\n        "}</a>{"\n        "}</span>
                        </div>
                      </div>
                    </div>
                    <div id="jw-element-707447713" style={{ width: "50%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                      <div id="jw-element-670594118" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                        <div className={"jw-element-imagetext-text"}>
                          <p>
                            <strong>Navigatie</strong>
                          </p>
                          <p><a href="/diensten">Diensten </a>- <a href="/over-mij">Over Mij</a> - <a href="/tarieven">Tarieven</a> - <a href="/faq">FAQ </a>- <a href="/contact">Contact</a></p>
                        </div>
                      </div>
                      <div id="jw-element-707455907" className={"jw-tree-node jw-element jw-button"}>
                        <div className={"jw-btn-container jw-btn-is-center"}>
                          <a className={"jw-element-content jw-btn jw-btn--size-small jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="#" style={{ "--jw-button-custom-color": "#e8882a", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#ea9541" } as CSSProperties} title="Privacy verklaring">
                            <span className={"jw-btn-caption"}>
                    Privacy verklaring            </span>
                          </a>
                        </div>
                      </div>
                      <div id="jw-element-707456884" className={"jw-tree-node jw-element jw-button jw-node-is-last-child"}>
                        <div className={"jw-btn-container jw-btn-is-center"}>
                          <a className={"jw-element-content jw-btn jw-btn--size-small jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="/algemene-voorwaarden" style={{ "--jw-button-custom-color": "#e8882a", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#ea9541" } as CSSProperties} title="Algemene voorwaarden">
                            <span className={"jw-btn-caption"}>
                    Algemene voorwaarden            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-707461827" className={"jw-tree-node jw-element jw-separator jw-node-is-last-child"}>
                    <div className={"jw-element-separator-padding"}>
                      <hr className={"jw-element-separator jw-element-separator--thin jw-element-separator--solid"} style={{ "--jw-element-separator__margin": "2.0000em" } as CSSProperties} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"jw-block-footer-content"}>
                <div className={"jw-credits clear"}>
                  <div className={"jw-credits-owner"}>
                    <div id="jw-footer-text">
                      <div className={"jw-footer-text-content"}>
                        <em>© 2026 MVR | Logistiek &amp; Douane Ondersteuning ·  KVK 42001713                                                                                                  Roosendaal, West-Brabant, Nederland</em>
                      </div>
                    </div>
                  </div>
                  <div className={"jw-credits-right"}>
                    <div id="jw-credits-tool">
                      <small>
            Powered by <a href="https://www.jouwweb.nl/" rel="">JouwWeb</a>{"    "}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
