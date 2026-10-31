import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/over-mij.css?raw";

export const Route = createFileRoute("/over-mij")({
  head: () => ({ meta: [{ title: "29+ Jaar Logistiek \u0026 7+ Jaar Douane | MVR" }] }),
  staticData: { importedDocument: { html: { "lang": "nl" }, body: { "className": "jw-is-no-slideshow jw-header-is-image jw-is-frontend jw-is-no-sidebar jw-is-no-mobile jw-menu-is-desktop", "data-jouwweb-page": "33649326", "data-jouwweb-segment-id": "33649326", "data-jouwweb-segment-type": "page", "data-template-name": "general|clean|blanco", "data-template-threshold": "960", "id": "top" } } },
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
                <li className={"jw-menu-item jw-menu-is-active"}>
                  <a className={"jw-menu-link js-active-menu-item"} href="#">
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
                <li className={"jw-menu-item jw-menu-is-active"}>
                  <a className={"jw-menu-link js-active-menu-item"} href="#">
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
                <div id="jw-element-649337211" className={"jw-tree-node jw-element jw-strip-root jw-tree-container jw-responsive jw-node-is-first-child jw-node-is-last-child"}>
                  <div id="jw-element-649355635" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-first-child jw-strip--primary"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-664329323" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1 className={"jw-heading-200"}>
                              <span style={{ color: "rgb(97, 79, 19)" }}>ACHTER MVR</span>
                            </h1>
                          </div>
                        </div>
                        <div id="jw-element-801093609" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1 style={{ textAlign: "left" }}>
                              <strong>
                                <span style={{ color: "rgb(228, 228, 228)" }}>Marcel van Roosendaal | 29+ jaar logistiek &amp; 7+ jaar douane</span>
                              </strong>
                            </h1>
                          </div>
                        </div>
                        <div id="jw-element-707561281" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex jw-node-is-last-child"}>
                          <div id="jw-element-707561286" style={{ width: "50%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-707561288" className={"jw-tree-node jw-element jw-album-gallery jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"fotorama--hidden"} />
                              <div className={"fotorama fotorama--align-center fotorama1793460568333"}>
                                <div className={"fotorama__wrap fotorama__wrap--css3 fotorama__wrap--fade fotorama__wrap--no-captions fotorama__wrap--toggle-arrows"} style={{ width: "100%", minWidth: "0px", maxWidth: "100%" }}>
                                  <div className={"fotorama__stage"} style={{ width: "523px", height: "608px" }} data-site-import-responsive="70">
                                    <div className={"fotorama__fullscreen-icon"} tabIndex={0} role="button" />
                                    <div className={"fotorama__stage__shaft"} style={{ transitionDuration: "0ms", transform: "translate3d(0px, 0px, 0px)", width: "523px", marginLeft: "0px" }} data-site-import-responsive="72">
                                      <div className={"fotorama__stage__frame fotorama__loaded fotorama__loaded--img fotorama__fade-front"} style={{ left: "0px", transitionDuration: "0ms", opacity: "0" }}>
                                        <img src="/site-assets/81d88307f53a9126.webp" className={"fotorama__img"} style={{ width: "386.156px", height: "608px", left: "68.4219px", top: "0px" }} />
                                        <div className={"fotorama__caption"}>
                                          <div className={"fotorama__caption__wrap"}>img-20260209-wa0018-standard-1x2pkf.jpg</div>
                                        </div>
                                      </div>
                                      <div className={"fotorama__stage__frame fotorama__loaded fotorama__loaded--img fotorama__fade-rear fotorama__active"} style={{ left: "0px", transitionDuration: "0ms", opacity: "1" }}>
                                        <img src="/site-assets/1e66d2f08c191b3f.webp" className={"fotorama__img"} style={{ width: "455.891px", height: "608px", left: "33.5545px", top: "0px" }} />
                                        <div className={"fotorama__caption"}>
                                          <div className={"fotorama__caption__wrap"}>img20260217053937-standard-sprtfw.jpg</div>
                                        </div>
                                      </div>
                                      <div className={"fotorama__stage__frame fotorama__loaded fotorama__loaded--img"} style={{ left: "0px", transitionDuration: "0ms" }} data-site-import-responsive="286">
                                        <img src="/site-assets/557c3ae814a9d69f.webp" className={"fotorama__img"} style={{ width: "455.029px", height: "608px", left: "33.9853px", top: "0px" }} data-site-import-responsive="287" />
                                        <div className={"fotorama__caption"}>
                                          <div className={"fotorama__caption__wrap"}>img20260218073019-standard-7bsrnd.webp</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={"fotorama__arr fotorama__arr--prev"} tabIndex={0} role="button" />
                                    <div className={"fotorama__arr fotorama__arr--next"} tabIndex={0} role="button" />
                                    <div className={"fotorama__video-close"} />
                                  </div>
                                  <div className={"fotorama__nav-wrap"}>
                                    <div className={"fotorama__nav fotorama__nav--dots"} style={{ width: "523px" }} data-site-import-responsive="78">
                                      <div className={"fotorama__nav__shaft"} style={{ transitionDuration: "330ms", transform: "translate3d(0px, 0px, 0px)" }}>
                                        <div className={"fotorama__thumb-border"} />
                                        <div className={"fotorama__nav__frame fotorama__nav__frame--dot"} tabIndex={0} role="button">
                                          <div className={"fotorama__dot"} />
                                        </div>
                                        <div className={"fotorama__nav__frame fotorama__nav__frame--dot fotorama__active"} tabIndex={0} role="button">
                                          <div className={"fotorama__dot"} />
                                        </div>
                                        <div className={"fotorama__nav__frame fotorama__nav__frame--dot"} tabIndex={0} role="button">
                                          <div className={"fotorama__dot"} />
                                        </div>
                                        <div className={"fotorama__nav__frame fotorama__nav__frame--dot"} tabIndex={0} role="button">
                                          <div className={"fotorama__dot"} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-707561282" style={{ width: "50%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-649355637" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <h4>
                                  <strong>Marcel van Roosendaal</strong>
                                </h4>
                                <p>
                                  <strong>Oprichter MVR | Logistiek &amp; Douane Ondersteuning</strong>
                                </p>
                                <p>Mijn achtergrond ligt niet in algemene administratie, maar in logistiek, warehouses, import/export en douane.<br />Ik heb inmiddels 29+ jaar ervaring binnen logistiek &amp; warehouses en 7+ jaar praktijkervaring binnen douane. Daardoor begrijp ik niet alleen welke administratie gedaan moet worden, maar ook waarom correcte documenten, complete dossiers en goede opvolging belangrijk zijn binnen een goederenstroom.<br />CMR, AWB, Incoterms, HS-codes, oorsprong, import/export en douanedossiers zijn voor mij geen termen uit een cursus. Het is dagelijkse praktijk.<br />Dat betekent dat je bij MVR niet eerst vanaf nul hoeft uit te leggen hoe logistiek werkt voordat we aan het echte werk kunnen beginnen.</p>
                                <p>
                                  <strong>
                                    <span>29+ JAAR</span>
                                  </strong>
                                  <br />
                                  <span>ervaring binnen logistiek &amp; warehouses</span>
                                </p>
                                <p>
                                  <span><strong>7+ JAAR</strong><br />praktijkervaring binnen douane<br /><br /><strong>100%</strong><br />focus op logistiek &amp; douane ondersteuning<br /></span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-664333976" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-inverse jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-last-child"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-707568683" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h4>
                              <span style={{ color: "rgb(0, 0, 0)" }}>Waarom ik MVR ben gestart</span>
                            </h4>
                            <p>
                              <span style={{ color: "rgb(0, 0, 0)" }}>In logistieke organisaties zie ik vaak hetzelfde gebeuren.</span>
                              <br />
                              <span style={{ color: "rgb(0, 0, 0)" }}>Mensen met veel kennis zijn een groot deel van hun tijd bezig met documenten controleren, informatie najagen, dossiers compleet maken en administratieve opvolging.</span>
                            </p>
                            <p>
                              <span style={{ color: "rgb(0, 0, 0)" }}>Dat werk is noodzakelijk. Maar het hoeft niet altijd door een vaste medewerker of specialist binnen je eigen organisatie te worden uitgevoerd.</span>
                            </p>
                            <p>
                              <span style={{ color: "rgb(0, 0, 0)" }}>Tegelijk is een extra fulltime medewerker aannemen niet voor iedere organisatie de juiste oplossing.</span>
                            </p>
                            <p>
                              <span style={{ color: "rgb(0, 0, 0)" }}>Precies daar zit MVR tussenin:<br /><strong>specialistische extra capaciteit voor werkzaamheden die duidelijk af te bakenen, digitaal over te dragen en op afstand uit te voeren zijn.</strong></span>
                            </p>
                          </div>
                        </div>
                        <div id="jw-element-800898731" className={"jw-tree-node jw-element jw-columns jw-tree-container jw-responsive jw-tree-horizontal jw-columns--mode-flex"}>
                          <div id="jw-element-800898732" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-first-child"}>
                            <div id="jw-element-800898741" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>
                                    <strong>PRAKTIJKKENNIS</strong>
                                  </span>
                                  <br />
                                  <span style={{ color: "rgb(0, 0, 0)" }}>Ik ken de vaktaal, documenten en dagelijkse realiteit van logistiek &amp; douane.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800898733" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive"}>
                            <div id="jw-element-800898748" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>
                                    <strong>DUIDELIJKE AFSPRAKEN</strong>
                                  </span>
                                  <br />
                                  <span style={{ color: "rgb(0, 0, 0)" }}>Vooraf bepalen we wat MVR overneemt, wat intern blijft en hoe we samenwerken.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="jw-element-800898734" style={{ width: "33.3333%" }} className={"jw-tree-node jw-element jw-column jw-tree-container jw-responsive jw-node-is-last-child"}>
                            <div id="jw-element-800898759" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child jw-node-is-last-child"}>
                              <div className={"jw-element-imagetext-text"}>
                                <p>
                                  <span style={{ color: "rgb(0, 0, 0)" }}>
                                    <strong>FLEXIBELE CAPACITEIT</strong>
                                  </span>
                                  <br />
                                  <span style={{ color: "rgb(0, 0, 0)" }}>Je zet specialistische capaciteit in die past bij je daadwerkelijke werklast.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-664336419" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1>
                              <span style={{ color: "rgb(0, 0, 0)" }}>
                                <strong>Mijn uitgangspunt is simpel.</strong>
                              </span>
                            </h1>
                            <h1>
                              <br />
                              <span style={{ color: "rgb(0, 0, 0)" }}>Jij houdt grip op je goederenstroom. MVR helpt zorgen dat het werk eromheen niet blijft liggen.</span>
                            </h1>
                            <p> </p>
                          </div>
                        </div>
                        <div id="jw-element-800899497" className={"jw-tree-node jw-element jw-button-group jw-tree-container jw-responsive jw-button-group--alignment-center"}>
                          <div id="jw-element-707570655" className={"jw-tree-node jw-element jw-button jw-node-is-first-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/ef3c75db01d243c08a2ea77894574fe6?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#e8882a", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#ea9541" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      DOE DE GRATIS CHECK            </span>
                              </a>
                            </div>
                          </div>
                          <div id="jw-element-800899500" className={"jw-tree-node jw-element jw-button jw-node-is-last-child"}>
                            <div className={"jw-btn-container jw-btn-is-left"}>
                              <a className={"jw-element-content jw-btn jw-btn--size-extra-large jw-btn--style-flat jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="https://button-limpet-0ed.notion.site/74840ee7ef314775be297f6fbcc5d9fc?pvs=105" rel="noopener" style={{ "--jw-button-custom-color": "#da8044", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#de8e59" } as CSSProperties} target="_blank">
                                <span className={"jw-btn-caption"}>
                      IK HEB CAPACITEIT NODIG            </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="jw-element-801097749" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>
                              <a href="/diensten">
                                <span>Bekijk mijn </span>
                                <strong>
                                  <span>logistieke &amp; douane ondersteuning</span>
                                </strong>
                                <span>.</span>
                              </a>
                            </p>
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
                          <p><a href="/diensten">Diensten </a>- <a href="#">Over Mij</a> - <a href="/tarieven">Tarieven</a> - <a href="/faq">FAQ </a>- <a href="/contact">Contact</a></p>
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
