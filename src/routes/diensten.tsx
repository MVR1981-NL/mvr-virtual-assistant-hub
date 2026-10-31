import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/diensten.css?raw";

export const Route = createFileRoute("/diensten")({
  head: () => ({ meta: [{ title: "Logistieke Administratie Uitbesteden | MVR" }] }),
  staticData: { importedDocument: { html: { "lang": "nl" }, body: { "className": "jw-is-no-slideshow jw-header-is-image jw-is-frontend jw-is-no-sidebar jw-is-no-mobile jw-menu-is-desktop", "data-jouwweb-page": "33649325", "data-jouwweb-segment-id": "33649325", "data-jouwweb-segment-type": "page", "data-site-import-responsive-incomplete": "scroll", "data-template-name": "general|clean|blanco", "data-template-threshold": "960", "id": "top" } } },
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
                <li className={"jw-menu-item jw-menu-is-active"}>
                  <a className={"jw-menu-link js-active-menu-item"} href="#">
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
                <li className={"jw-menu-item jw-menu-is-active"}>
                  <a className={"jw-menu-link js-active-menu-item"} href="#">
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
                <div id="jw-element-649337209" className={"jw-tree-node jw-element jw-strip-root jw-tree-container jw-responsive jw-node-is-first-child jw-node-is-last-child"}>
                  <div id="jw-element-649346422" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-first-child jw-strip--primary"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-649346423" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1>
                              <strong>
                                <span style={{ color: "rgb(228, 228, 228)" }}>Logistieke administratie uitbesteden: dit kan MVR overnemen</span>
                              </strong>
                            </h1>
                          </div>
                        </div>
                        <div id="jw-element-649346424" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>
                              <span>Niet iedere logistieke taak hoeft bij jou of je vaste medewerkers te blijven liggen.</span>
                            </p>
                            <p>
                              <span>MVR ondersteunt importeurs, handelsbedrijven en logistieke ondernemingen bij afgebakende en planbare werkzaamheden rondom logistiek, import/export en douane-administratie.</span>
                            </p>
                            <p>
                              <strong>
                                <span>Flexibel. Op afstand. Met praktijkkennis van logistiek &amp; douane.</span>
                              </strong>
                            </p>
                          </div>
                        </div>
                        <div id="jw-element-800875284" className={"jw-tree-node jw-element jw-button-group jw-tree-container jw-responsive jw-button-group--alignment-left jw-node-is-last-child"}>
                          <div id="jw-element-800875064" className={"jw-tree-node jw-element jw-button jw-node-is-first-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      DOE DE GRATIS CHECK            </span>
                              </a>
                            </div>
                          </div>
                          <div id="jw-element-800875285" className={"jw-tree-node jw-element jw-button jw-node-is-last-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/74840ee7ef314775be297f6fbcc5d9fc?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      IK HEB CAPACITEIT NODIG            </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-800875842" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-inverse jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-800875844" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex jw-node-is-first-child"}>
                          <div id="jw-element-800875845" style={{ width: "49.9625%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-800875846" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>
                                    <strong>01 — DOCUMENTEN &amp; DOSSIERS</strong>
                                  </span>
                                </p>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>Voorbereiden, controleren en compleet maken van logistieke documentatie en dossiers.<br /><br /></span>
                                </p>
                                <ul>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>CMR- en AWB-documentatie</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>dossieropbouw en dossiercontrole</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>ontbrekende documenten/informatie opvolgen</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>paklijsten en transportdocumenten</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>administratieve documentcontrole</span>
                                  </li>
                                </ul>
                                <p> </p>
                                <p> </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800875847" style={{ width: "50.0375%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-800875848" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>
                                    <strong>02 — IMPORT &amp; EXPORT</strong>
                                  </span>
                                </p>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>Administratieve ondersteuning rondom internationale goederenstromen en voorbereidende werkzaamheden rondom douaneprocessen<br /></span>
                                </p>
                                <ul>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>import- en exportdocumentatie</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>oorsprongsdocumentatie en certificaten</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>HS-code- en goedereninformatie verzamelen/controleren</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>informatie voorbereiden voor douaneprocessen</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>administratieve opvolging rondom import/export</span>
                                  </li>
                                </ul>
                                <br />
                                <p> </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800877582" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex"}>
                          <div id="jw-element-800877583" style={{ width: "50%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-800877591" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>
                                    <strong>03 — ORDERS &amp; ZENDINGEN</strong>
                                  </span>
                                </p>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>Planbare administratieve ondersteuning rondom orders, zendingen en logistieke informatiestromen.<br /><br /></span>
                                </p>
                                <ul>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>orderadministratie</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>zendinginformatie verwerken</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>documentstatus opvolgen</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>ontbrekende informatie najagen</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>administratieve afstemming met betrokken partijen</span>
                                  </li>
                                </ul>
                                <br />
                                <p> </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800877584" style={{ width: "50%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-800877598" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>
                                    <strong>04 — PIEKEN &amp; ACHTERSTAND</strong>
                                  </span>
                                </p>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>Tijdelijke specialistische capaciteit wanneer het werk zich opstapelt of extra ondersteuning nodig is.<br /><br /></span>
                                </p>
                                <ul>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>achterstallige dossiers wegwerken</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>documentatie structureren</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>tijdelijke projectondersteuning</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>extra capaciteit tijdens drukke perioden</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>afgebakende werkpakketten tijdelijk overnemen</span>
                                  </li>
                                </ul>
                                <br />
                                <p> </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-707471125" className={"jw-tree-node jw-element jw-button"}>
                          <div className={"jw-btn-container jw-btn-is-center"}>
                            <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/74840ee7ef314775be297f6fbcc5d9fc?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#e8882a", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#ea9541" } as CSSProperties} target="_blank">
                              <span className={"jw-btn-caption"}>
                      IK HEB CAPACITEIT NODIG            </span>
                            </a>
                          </div>
                        </div>
                        <div id="jw-element-801217175" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>MEER OVER SPECIALISTISCHE ONDERSTEUNING</strong>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div id="jw-element-801215507" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>
                                  <a href="/extra-logistieke-capaciteit" style={{ color: "rgb(0, 0, 0)" }}>Meer over extra logistieke capaciteit zonder extra FTE</a>
                                </strong>
                              </span>
                            </p>
                            <p style={{ textAlign: "center" }}>
                              <br />
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>
                                  <a href="/import-export-administratie-uitbesteden" style={{ color: "rgb(0, 0, 0)" }}>Meer over import-export administratie uitbesteden</a>
                                </strong>
                              </span>
                            </p>
                            <p style={{ textAlign: "center" }}>
                              <br />
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>
                                  <a href="/logistieke-documentatie-uitbesteden" style={{ color: "rgb(0, 0, 0)" }}>Meer over logistieke documentatie uitbesteden</a>
                                </strong>
                              </span>
                            </p>
                            <p style={{ textAlign: "center" }}>
                              <br />
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>
                                  <a href="/douane-administratie-ondersteuning" style={{ color: "rgb(0, 0, 0)" }}>Meer over douane-administratie ondersteuning</a>
                                </strong>
                              </span>
                            </p>
                            <p style={{ textAlign: "center" }}>
                              <br />
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>
                                  <a href="/tarieven" style={{ color: "rgb(0, 0, 0)" }}>Bekijk de tarieven voor specialistische logistieke capaciteit</a>
                                </strong>
                              </span>
                            </p>
                            <p style={{ textAlign: "center" }}> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-649346426" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-last-child"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-649346429" className={"jw-tree-node jw-element jw-spacer jw-node-is-first-child"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "5px" }} />
                        </div>
                        <div id="jw-element-649346443" className={"jw-tree-node jw-element jw-spacer"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "20px" }} />
                        </div>
                        <div id="jw-element-664323008" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1>
                              <span style={{ color: "rgb(97, 79, 19)" }}>Wat blijft bij jouw organisatie?</span>
                            </h1>
                          </div>
                        </div>
                        <div id="jw-element-800882264" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "left" }}>MVR neemt niet zomaar een volledig logistiek proces over.<br />Vooraf bepalen we welke werkzaamheden geschikt zijn om extern uit te voeren, welke verantwoordelijkheden bij jouw organisatie blijven en hoe documenten en informatie worden overgedragen.<br />Zo houd jij de regie, terwijl specialistisch en planbaar werk niet blijft liggen.</p>
                          </div>
                        </div>
                        <div id="jw-element-707547416" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex"}>
                          <div id="jw-element-707547417" style={{ width: "24.9333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-707547882" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h4>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>JIJ HOUDT DE REGIE</span>
                                </h4>
                                <p style={{ textAlign: "left" }}>Beslissingen, eindverantwoordelijkheid en interne bevoegdheden blijven binnen jouw organisatie.</p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-707547418" style={{ width: "44.3726%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-707547792" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h4>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>MVR NEEMT AFGEBAKEND WERK OVER</span>
                                </h4>
                                <p>Vooraf spreken we duidelijk af welke werkzaamheden MVR uitvoert en welke werkzaamheden intern blijven.</p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-707547419" style={{ width: "30.6941%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-707549224" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h4>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>DUIDELIJKE WERKWIJZE</span>
                                </h4>
                                <p>Digitale overdracht, heldere afspraken en uitvoering op vooraf afgesproken momenten.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800884408" className={"jw-tree-node jw-element jw-spacer"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "50px" }} />
                        </div>
                        <div id="jw-element-800883605" className={"jw-tree-node jw-element jw-spacer"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "50px" }} />
                        </div>
                        <div id="jw-element-800882958" className={"jw-tree-node jw-element jw-button-group jw-tree-container jw-responsive jw-button-group--alignment-center jw-node-is-last-child"}>
                          <div id="jw-element-800882954" className={"jw-tree-node jw-element jw-button jw-node-is-first-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      DOE DE GRATIS CHECK            </span>
                              </a>
                            </div>
                          </div>
                          <div id="jw-element-800882959" className={"jw-tree-node jw-element jw-button jw-node-is-last-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/74840ee7ef314775be297f6fbcc5d9fc?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      IK HEB CAPACITEIT NODIG            </span>
                              </a>
                            </div>
                          </div>
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
                          <p><a href="#">Diensten </a>- <a href="/over-mij">Over Mij</a> - <a href="/tarieven">Tarieven</a> - <a href="/faq">FAQ </a>- <a href="/contact">Contact</a></p>
                        </div>
                      </div>
                      <div id="jw-element-707455907" className={"jw-tree-node jw-element jw-button"}>
                        <div className={"jw-btn-container jw-btn-is-center"}>
                          <a className={"jw-element-content jw-btn jw-btn--size-small jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="/privacy-verklaring" style={{ "--jw-button-custom-color": "#e8882a", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#ea9541" } as CSSProperties} title="Privacy verklaring">
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
