import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/captured.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Logistiek \u0026 Douane Ondersteuning | MVR" }] }),
  staticData: { importedDocument: { html: { "lang": "nl" }, body: { "className": "jw-is-no-slideshow jw-header-is-image jw-is-frontend jw-is-no-sidebar jw-is-no-mobile jw-menu-is-desktop", "data-jouwweb-page": "33649289", "data-jouwweb-segment-id": "33649289", "data-jouwweb-segment-type": "page", "data-template-name": "general|clean|blanco", "data-template-threshold": "960", "id": "top" } } },
  component: Index,
});

function Index() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookiesDone, setCookiesDone] = useState(false);
  useImportedLayout();
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
      </div>
      <a className={"jw-skip-link"} href="/#main-content">
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
                <span className={"jw-mobile-header-content"}>
                  <img className={"jw-mobile-logo jw-mobile-logo--landscape"} src="/site-assets/9b5fac01c344298e.webp" srcSet="/site-assets/9b5fac01c344298e.webp 1x, /site-assets/7678788219ad1506.webp 2x" alt="MVRvirtual assistant" title="MVRvirtual assistant" />
                </span>
              </div>
              <button type="button" className={"jw-mobile-menu__button jw-mobile-toggle"} aria-label="Open / sluit menu">
                <span className={isMobile ? "jw-icon-burger" : "jw-icon-burger jw-icon-burger--cross"} data-site-import-scroll-header={"{\"mobile\":{\"added\":[],\"removed\":[\"jw-icon-burger--cross\"],\"threshold\":633}}"} />
              </button>
            </div>
            <nav className={"menu jw-menu-clone jw-menu-collapse"}>
              <ul id="jw-menu" className={"jw-menu jw-menu-horizontal jw-menu-spacing--mobile-bar"}>
                <li className={"jw-menu-item jw-menu-is-active"}>
                  <a className={"jw-menu-link js-active-menu-item"} href="/">
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
                  <img id="jw-header-image" srcSet="/site-assets/a2cc4ba225247567.webp 504w, /site-assets/65181eeb3dcea99d.webp 678w" className={"jw-header-image"} title="MVRvirtual assistant" style={{ width: "504px" }} sizes="504px" width="504" height="178" alt="MVRvirtual assistant" />
                </div>
                <div className={"jw-header jw-header-title-container jw-header-text jw-header-text-toggle"}>
                  <h1 id="jw-header-title" className={"jw-header-title"}>
              MVR Virtual Assistant    </h1>
                </div>
              </div>
            </div>
            <nav className={"block-header__menu jw-menu-copy"}>
              <ul className={isMobile ? "jw-menu jw-menu-horizontal" : "jw-menu jw-menu-horizontal sf-js-enabled sf-arrows"} id="jw-menu" style={{ touchAction: "pan-y" }} data-site-import-responsive="17" data-site-import-scroll-header={"{\"mobile\":{\"added\":[],\"removed\":[\"sf-js-enabled\",\"sf-arrows\"],\"threshold\":633}}"}>
                <li className={"jw-menu-item jw-menu-is-active"}>
                  <a className={"jw-menu-link js-active-menu-item"} href="/">
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
                        <form itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction" className={"jw-search"} method="get"><input className={"jw-search__input"} type="text" name="q" defaultValue="" placeholder="Zoeken..." aria-label="Zoeken" itemProp="query-input" /><button className={"jw-search__submit"} type="submit" aria-label="Zoeken">{"\n                                "}<span className={"website-rendering-icon-search"} aria-hidden="true" />{"\n                            "}</button></form>
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
                <div id="jw-element-649336272" className={"jw-tree-node jw-element jw-strip-root jw-tree-container jw-responsive jw-node-is-first-child jw-node-is-last-child"}>
                  <div id="jw-element-649337799" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-first-child jw-strip--primary"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-707415522" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1 className={"jw-heading-200"}>
                              <span style={{ color: "rgb(97, 79, 19)" }}>SPECIALISTISCHE LOGISTIEK &amp; DOUANE ONDERSTEUNING</span>
                            </h1>
                          </div>
                        </div>
                        <div id="jw-element-707413686" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex"}>
                          <div id="jw-element-707413687" style={{ width: "66.64%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-707419235" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h1>
                                  <span style={{ color: "rgb(228, 228, 228)" }}>Extra logistieke &amp; douanecapaciteit.</span>
                                  <br />
                                  <span style={{ color: "rgb(228, 228, 228)" }}>Zonder extra FTE.</span>
                                </h1>
                              </div>
                            </div>
                            <div id="jw-element-726863654" className={"jw-tree-node jw-element jw-image-text"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p style={{ textAlign: "left" }}>Voor importeurs, handelsbedrijven en logistieke ondernemingen die structureel tijd verliezen aan documenten, dossiers, import/export-administratie en logistieke opvolging. <br />MVR biedt specialistische extra capaciteit — flexibel, op afstand en met praktijkkennis van logistiek &amp; douane.</p>
                              </div>
                            </div>
                            <div id="jw-element-800645681" className={"jw-tree-node jw-element jw-button"}>
                              <div className={"jw-btn-container jw-btn-is-center"}>
                                <a className={"jw-element-content jw-btn jw-btn--size-small jw-btn--style-flat jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105d243c08a2ea77894574fe6?pvs=106" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                  <span className={"jw-btn-caption"}>
                                    <strong>
                                      <span>DOE DE GRATIS CHECK</span>
                                    </strong>
                                    <span>{" "}</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div id="jw-element-800647629" className={"jw-tree-node jw-element jw-button"}>
                              <div className={"jw-btn-container jw-btn-is-center"}>
                                <a className={"jw-element-content jw-btn jw-btn--size-small jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/74840ee7ef314775be297f6fbcc5d9fc?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                  <span className={"jw-btn-caption"}>
                      IK HEB CAPACITEIT NODIG            </span>
                                </a>
                              </div>
                            </div>
                            <div id="jw-element-707420122" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h4 style={{ textAlign: "left" }}>
                                  <span style={{ color: "rgb(228, 228, 228)" }}>Flexibel • Specialistisch • Op afstand • Op afgesproken momenten</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-707413689" style={{ width: "33.36%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-707413770" className={"jw-tree-node jw-element jw-image jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-intent jw-element-image jw-element-content jw-element-image-is-left"} style={{ width: "100%" }}>
                                <picture className={"jw-element-image__image-wrapper jw-image-is-square jw-intrinsic"} style={{ paddingTop: "133.618%" }}>
                                  <img className={"jw-element-image__image jw-intrinsic__item"} style={{ "--jw-element-image--pan-x": "0.5", "--jw-element-image--pan-y": "0.5" } as CSSProperties} alt="" src="/site-assets/af32087001650710.webp" srcSet="/site-assets/e4f942042b8a6390.webp 96w, /site-assets/f0a58a2aa4c5555e.webp 147w, /site-assets/c1c126373a396c2c.webp 226w, /site-assets/1205e936f4925061.webp 347w, /site-assets/2fb93833d5aac5c0.webp 532w, /site-assets/c064950197040bc7.webp 816w, /site-assets/c064950197040bc7.webp 1252w, /site-assets/c064950197040bc7.webp 1920w" sizes="auto, min(100vw, 1200px), 100vw" loading="lazy" width="586" height="783" />
                                </picture>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-707420707" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex jw-node-is-last-child"}>
                          <div id="jw-element-707420708" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-707420828" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h2 style={{ textAlign: "center" }}>
                                  <span style={{ color: "rgb(228, 228, 228)" }}>10–25u</span>
                                  <br />
                                  <span style={{ color: "rgb(228, 228, 228)" }}>flexibele capaciteit</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-707421325" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-707421326" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h2 style={{ textAlign: "center" }}>
                                  <strong>
                                    <span style={{ color: "rgb(228, 228, 228)" }}>100%</span>
                                  </strong>
                                </h2>
                                <p style={{ textAlign: "center" }}>
                                  <strong>op afstand</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-707420710" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-707421692" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h2 style={{ textAlign: "center" }}>
                                  <span style={{ color: "rgb(228, 228, 228)" }}>Specialistisch</span>
                                  <br />
                                  <span style={{ color: "rgb(228, 228, 228)" }}>logistiek &amp; douane</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-707422946" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-inverse jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-707422947" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h3>
                              <span><span style={{ color: "rgb(97, 79, 19)" }}>Je hebt niet altijd een extra medewerker nodig</span>.</span>
                            </h3>
                            <h4>
                              <span style={{ color: "rgb(97, 79, 19)" }}>
                                <strong>Soms heb je vooral extra capaciteit nodig.</strong>
                              </span>
                            </h4>
                            <p>
                              <span>Je logistieke operatie draait door. Maar ondertussen stapelt het werk eromheen zich op.</span>
                            </p>
                            <p>
                              <span>Documenten moeten gecontroleerd worden. Dossiers moeten compleet. Ontbrekende informatie moet worden nagejaagd. Orders en zendingen vragen opvolging. Import- en exportadministratie blijft liggen.</span>
                            </p>
                            <p style={{ textAlign: "left" }}>En ondertussen zijn jij of je specialisten kostbare tijd kwijt aan werkzaamheden die goed planbaar en uitbesteedbaar zijn.</p>
                          </div>
                        </div>
                        <div id="jw-element-800671590" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-grid jw-columns--grid-column-size-xl"}>
                          <div id="jw-element-800671591" className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-800671915" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p style={{ textAlign: "center" }}>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>DOCUMENTEN &amp; DOSSIERS</strong>
                                  </span>
                                  <br />
                                  <span>CMR, AWB, dossieropbouw, controles en ontbrekende documentatie.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800671619" className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-800671973" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p style={{ textAlign: "center" }}>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>IMPORT &amp; EXPORT</strong>
                                  </span>
                                  <br />
                                  <span>Ondersteuning bij import-/exportadministratie, oorsprongsdocumentatie en voorbereidende werkzaamheden rondom douaneprocessen.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800679067" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex"}>
                          <div id="jw-element-800679070" style={{ width: "50%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-800672531" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p style={{ textAlign: "center" }}>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>ORDERS &amp; ZENDINGEN</strong>
                                  </span>
                                  <br />
                                  <span>Planbare administratieve opvolging rondom orders, zendingen en logistieke informatie.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800679068" style={{ width: "50%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-800672544" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p style={{ textAlign: "center" }}>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>PIEKEN &amp; ACHTERSTAND</strong>
                                  </span>
                                  <br />
                                  <span>Extra specialistische capaciteit wanneer het werk zich opstapelt of tijdelijk piekt.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800664624" className={"jw-tree-node jw-element jw-button"}>
                          <div className={"jw-btn-container jw-btn-is-center"}>
                            <a className={"jw-element-content jw-btn jw-btn--size-large jw-btn--style-flat jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                              <span className={"jw-btn-caption"}>
                      DOE DE GRATIS CHECK            </span>
                            </a>
                          </div>
                        </div>
                        <div id="jw-element-801218431" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>
                              <strong>
                                <span style={{ color: "rgb(0, 0, 0)" }}>MEER OVER MVR</span>
                              </strong>
                            </p>
                          </div>
                        </div>
                        <div id="jw-element-800664997" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>
                                  <a href="/diensten" style={{ color: "rgb(0, 0, 0)" }}>Bekijk welke logistieke werkzaamheden je kunt uitbesteden</a>
                                </strong>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div id="jw-element-801096881" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <a href="/extra-logistieke-capaciteit" style={{ color: "rgb(0, 0, 0)" }}>
                                  <strong>Meer over extra logistieke capaciteit zonder extra FTE</strong>
                                </a>
                              </span>
                              <span>{" "}</span>
                            </p>
                          </div>
                        </div>
                        <div id="jw-element-801217651" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>
                                  <a href="/tarieven" style={{ color: "rgb(0, 0, 0)" }}>Bekijk de tarieven voor specialistische logistieke capaciteit</a>
                                </strong>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-707422945" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-664314023" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h3>
                              <span>
                                <span style={{ color: "rgb(97, 79, 19)" }}>Waarom MVR?</span>
                                <br />
                                <br />
                                <span style={{ color: "rgb(255, 255, 255)" }}>Geen algemene VA die eerst moet leren hoe logistiek werkt.</span>
                                <br />
                              </span>
                            </h3>
                          </div>
                        </div>
                        <div id="jw-element-707426257" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Ik werk zelf al jaren binnen logistiek &amp; douane. Begrippen als CMR, AWB, Incoterms, HS-codes, oorsprong, import/export en douanedossiers zijn voor mij dagelijkse praktijk.<br />Daardoor kan MVR ondersteunen bij specialistische werkzaamheden zonder dat jij eerst vanaf nul hoeft uit te leggen hoe een logistiek proces in elkaar zit.</p>
                          </div>
                        </div>
                        <div id="jw-element-800682754" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-grid jw-columns--grid-column-size-xl"}>
                          <div id="jw-element-800682755" className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-800683091" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p><span style={{ color: "rgb(97, 79, 19)" }}><strong>PRAKTIJKKENNIS</strong></span><br />Logistiek en douane zijn mijn dagelijkse praktijk — geen niche waarin ik me eerst nog moet inwerken.</p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800682756" className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-800683095" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>FLEXIBELE CAPACITEIT</strong>
                                  </span>
                                  <br />
                                  <span>Extra ondersteuning zonder direct een extra fulltime medewerker aan te nemen.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800682757" className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-800683104" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p><span style={{ color: "rgb(97, 79, 19)" }}><strong>OP AFSTAND</strong></span><br />Werkzaamheden worden digitaal, op afstand en op vooraf afgesproken momenten uitgevoerd.</p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800683106" className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-800683113" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>DUIDELIJKE SCOPE</strong>
                                  </span>
                                  <br />
                                  <span>Vooraf spreken we af wat MVR overneemt en wat intern blijft.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800683771" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1>
                              <span style={{ color: "rgb(228, 228, 228)" }}>Jij houdt grip op je goederenstroom. MVR helpt zorgen dat het werk eromheen niet blijft liggen.</span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-664287995" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-inverse jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-800688483" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1 style={{ textAlign: "left" }}>
                              <span style={{ color: "rgb(97, 79, 19)" }}>Zo werkt samenwerken met MVR</span>
                            </h1>
                          </div>
                        </div>
                        <div id="jw-element-800693019" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex"}>
                          <div id="jw-element-800693020" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-800693037" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>01 — WE KIJKEN WAAR TIJD VERDWIJNT</strong>
                                  </span>
                                  <br />
                                  <span>Via de gratis CHECK brengen we in kaart welke werkzaamheden tijd kosten en welke taken geschikt zijn om uit te besteden.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800693021" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-800693041" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>02 — WE BAKENEN HET WERK AF</strong>
                                  </span>
                                  <br />
                                  <span>We spreken vooraf af wat MVR overneemt, wat intern blijft, hoeveel capaciteit nodig is en hoe de overdracht verloopt</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800693022" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-800693045" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>03 — MVR GAAT AAN DE SLAG</strong>
                                  </span>
                                  <br />
                                  <span>De afgesproken werkzaamheden worden op afstand en op afgesproken momenten uitgevoerd. Jij houdt overzicht en regie.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800692125" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h4 style={{ textAlign: "center" }}>
                              <span style={{ color: "rgb(97, 79, 19)" }}>Geen ingewikkeld traject. Eerst bepalen of er een logische match is.</span>
                            </h4>
                          </div>
                        </div>
                        <div id="jw-element-800693636" className={"jw-tree-node jw-element jw-button-group jw-tree-container jw-responsive jw-button-group--alignment-center jw-node-is-last-child"}>
                          <div id="jw-element-800693548" className={"jw-tree-node jw-element jw-button jw-node-is-first-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-large jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      DOE DE GRATIS CHECK            </span>
                              </a>
                            </div>
                          </div>
                          <div id="jw-element-800693637" className={"jw-tree-node jw-element jw-button jw-node-is-last-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-large jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/74840ee7ef314775be297f6fbcc5d9fc?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      IK HEB CAPACITEIT NODIG            </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-707439247" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-707439248" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1 className={"jw-heading-200"}>
                              <span>Gratis checklist</span>
                            </h1>
                            <h1>
                              <span>Welke logistieke werkzaamheden kun je uitbesteden?</span>
                            </h1>
                          </div>
                        </div>
                        <div id="jw-element-800858542" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h3 style={{ textAlign: "left" }}>
                              <span style={{ color: "rgb(228, 228, 228)" }}>Ontdek welke terugkerende werkzaamheden binnen logistiek, import/export en administratie je kunt overdragen — zonder direct een extra medewerker aan te nemen.</span>
                            </h3>
                          </div>
                        </div>
                        <div id="jw-element-800858777" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "left" }}>Praktische checklist voor importeurs, handelsbedrijven en logistieke ondernemingen.</p>
                          </div>
                        </div>
                        <div id="jw-element-707440026" className={"jw-tree-node jw-element jw-download"}>
                          <div className={"jw-download-content"}>
                            <a className={"jw-download-content__image js-download-link"} href="/_downloads/1f57ff45f7ca00134fcb16c03dcb804a">
                              <svg aria-hidden="true" className={"svg-inline--fa fa-file-pdf fa-w-12"} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z" />
                              </svg>
                            </a>
                            <div className={"jw-download-content__body"}>
                              <h4 className={"jw-download-content__title"}>Checklist: Logistieke werkzaamheden uitbesteden</h4>
                              <div className={"jw-download-content__details"} />
                              <div>
                                <a className={"jw-download-content__button jw-btn jw-btn--size-medium js-download-link"} href="/_downloads/1f57ff45f7ca00134fcb16c03dcb804a">
                      Download            </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800859245" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>
                              <strong>LIEVER DIRECT WETEN WAT BIJ JOU PAST? DOE DE GRATIS CHECK</strong>
                            </p>
                          </div>
                        </div>
                        <div id="jw-element-800859650" className={"jw-tree-node jw-element jw-button jw-node-is-last-child"}>
                          <div className={"jw-btn-container jw-btn-is-center"}>
                            <a className={"jw-element-content jw-btn jw-btn--size-large jw-btn--style-flat jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                              <span className={"jw-btn-caption"}>
                      DOE DE GRATIS CHECK            </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-800862662" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-inverse jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-800862663" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>
                              <span style={{ color: "rgb(97, 79, 19)" }}>Past MVR bij jouw situatie?</span>
                            </h2>
                          </div>
                        </div>
                        <div id="jw-element-800862664" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex"}>
                          <div id="jw-element-800862665" style={{ width: "50.0333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-800862666" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h3>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>
                                    <strong>MVR past goed wanneer je:</strong>
                                  </span>
                                </h3>
                                <ul>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>structureel werk hebt rondom documenten, dossiers, import/export of logistieke administratie</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>extra capaciteit nodig hebt zonder direct een extra FTE aan te nemen</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>werkzaamheden goed kunt afbakenen en op afstand kunt laten uitvoeren</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>ongeveer 10–25 uur specialistische ondersteuning per maand zoekt</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>waarde hecht aan iemand die logistieke terminologie en processen al kent.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800862667" style={{ width: "49.9667%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-800863064" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h3>
                                  <span style={{ color: "rgb(97, 79, 19)" }}>MVR past minder goed wanneer je:</span>
                                </h3>
                                <ul>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>permanent iemand tijdens kantooruren beschikbaar moet hebben</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>continu telefoon, inbox of spoedmeldingen wilt laten bewaken</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>dagelijks fysieke aanwezigheid op locatie nodig hebt</span>
                                  </li>
                                  <li>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>vooral de goedkoopste administratieve ondersteuning zoekt.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800863932" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h4>
                              <span style={{ color: "rgb(97, 79, 19)" }}>Twijfel je? Daar is de gratis CHECK precies voor.</span>
                            </h4>
                          </div>
                        </div>
                        <div id="jw-element-800864111" className={"jw-tree-node jw-element jw-button jw-node-is-last-child"}>
                          <div className={"jw-btn-container jw-btn-is-center"}>
                            <a className={"jw-element-content jw-btn jw-btn--size-large jw-btn--style-flat jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                              <span className={"jw-btn-caption"}>
                      DOE DE GRATIS CHECK            </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-800868533" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-last-child"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-800868534" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>
                              <span style={{ color: "rgb(97, 79, 19)" }}>Waar verlies jij nu capaciteit?</span>
                            </h2>
                          </div>
                        </div>
                        <div id="jw-element-800868537" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Blijven documenten, dossiers of logistieke werkzaamheden liggen?<br />Of is je team structureel tijd kwijt aan werk dat prima uitbesteed kan worden?<br />Laat MVR eerst meekijken. We bepalen samen welke werkzaamheden logisch overdraagbaar zijn en hoeveel capaciteit daarbij past.</p>
                          </div>
                        </div>
                        <div id="jw-element-800869085" className={"jw-tree-node jw-element jw-button-group jw-tree-container jw-responsive jw-button-group--alignment-center"}>
                          <div id="jw-element-800869044" className={"jw-tree-node jw-element jw-button jw-node-is-first-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      DOE DE GRATIS CHECK            </span>
                              </a>
                            </div>
                          </div>
                          <div id="jw-element-800869087" className={"jw-tree-node jw-element jw-button jw-node-is-last-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/74840ee7ef314775be297f6fbcc5d9fc?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      IK HEB CAPACITEIT NODIG            </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-800871186" className={"jw-tree-node jw-element jw-spacer"}>
                          <div className={"jw-element-spacer-container "} style={{ height: "50px" }} />
                        </div>
                        <div id="jw-element-800869620" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }} className={"jw-text-small"}>MVR | Specialistische logistiek &amp; douane ondersteuning<br />Flexibel • Op afstand • Op afgesproken momenten</p>
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
                          <p><a href="/diensten">Diensten </a>- <a href="/over-mij">Over Mij</a> - <a href="/tarieven">Tarieven</a> - <a href="/faq">FAQ </a>- <a href="/contact">Contact</a></p>
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
            Powered by <a href="https://www.jouwweb.nl" rel="">JouwWeb</a>{"    "}</small>
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
