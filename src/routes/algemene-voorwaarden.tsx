import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/algemene-voorwaarden.css?raw";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({ meta: [{ title: "algemene voorwaarden" }] }),
  staticData: { importedDocument: { html: { "lang": "nl" }, body: { "className": "jw-is-no-slideshow jw-header-is-image jw-is-frontend jw-is-no-sidebar jw-is-no-mobile jw-menu-is-desktop", "data-jouwweb-page": "33714009", "data-jouwweb-segment-id": "33714009", "data-jouwweb-segment-type": "page", "data-template-name": "general|clean|blanco", "data-template-threshold": "960", "id": "top" } } },
  component: Index,
});

function Index() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"cc-revoke cc-bottom cc-animate"} style={{ display: "none" }}>Cookie Policy</div>
      <div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" className={"cc-window cc-banner cc-type-opt-in cc-theme-jw cc-bottom "}>
        <span id="cookieconsent:desc" className={"cc-message"}>Deze website maakt gebruik van cookies om uw ervaring te verbeteren en op maat gemaakte advertenties weer te geven. Door op ‘Accepteren’ te klikken, gaat u akkoord met het gebruik van alle cookies.</span>
        <div className={"cc-compliance cc-highlight"}>
          <a aria-label="deny cookies" className={"cc-btn cc-deny"} role="button" tabIndex={0}>Afwijzen</a>
          <a aria-label="allow cookies" className={"cc-btn cc-allow"} role="button" tabIndex={0}>Accepteren</a>
        </div>
      </div>
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
              <button type="button" className={"jw-mobile-menu__button jw-mobile-toggle"} aria-label="Open / sluit menu">
                <span className={isMobile ? "jw-icon-burger" : "jw-icon-burger jw-icon-burger--cross"} data-site-import-scroll-header={"{\"mobile\":{\"added\":[],\"removed\":[\"jw-icon-burger--cross\"],\"threshold\":633}}"} />
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
                <div id="jw-element-651100101" className={"jw-tree-node jw-element jw-strip-root jw-tree-container jw-responsive jw-node-is-first-child jw-node-is-last-child"}>
                  <div id="jw-element-651102077" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-first-child jw-strip--primary"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651102078" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h1 className={"jw-heading-130"} style={{ textAlign: "center" }}>Algemene voorwaarden</h1>
                          </div>
                        </div>
                        <div id="jw-element-651102079" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p style={{ textAlign: "center" }}>Welkom bij MVRvirtual assistant. Deze algemene voorwaarden zijn de basis van onze samenwerking en beschrijven duidelijk hoe we te werk gaan. Hierin staan de afspraken over onze diensten, betalingen, eventuele wijzigingen en hoe we omgaan met vertrouwelijke informatie. Door deze voorwaarden te lezen, weet u precies wat u van ons kunt verwachten en welke wederzijdse verantwoordelijkheden er zijn. Ons doel is een transparante en succesvolle samenwerking. Lees ze zorgvuldig door.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-651102080" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651102081" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 1: algemeen</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102082" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Deze voorwaarden zijn van toepassing op iedere aanbieding, offerte en overeenkomst tussen MVRvirtual assistant, hierna te noemen: “Opdrachtnemer”, en een Opdrachtgever waarop Opdrachtnemer deze voorwaarden van toepassing heeft verklaard, voor zover van deze voorwaarden niet door partijen uitdrukkelijk en schriftelijk is afgeweken.<br />De onderhavige voorwaarden zijn eveneens van toepassing op handelingen van door de Opdrachtnemer in het kader van de/een opdracht ingeschakelde derden.<br />Deze algemene voorwaarden zijn eveneens geschreven voor de medewerkers van Opdrachtnemer en zijn directie.<br />De toepasselijkheid van eventuele inkoop- of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen.<br />Indien één of meerdere bepalingen in deze algemene voorwaarden op enig moment geheel of gedeeltelijk nietig zijn of vernietigd mochten worden, dan blijft het overigens in deze algemene voorwaarden bepaalde volledig van toepassing. Opdrachtnemer en de Opdrachtgever zullen alsdan in overleg treden teneinde nieuwe bepalingen ter vervanging van de nietige of vernietigde bepalingen overeen te komen, waarbij zoveel als mogelijk het doel en de strekking van de oorspronkelijke bepalingen in acht wordt genomen.<br />Indien onduidelijkheid bestaat omtrent de uitleg van één of meerdere bepalingen van deze algemene voorwaarden, dan dient de uitleg plaats te vinden ‘naar de geest’ van deze bepalingen.<br />Indien zich tussen partijen een situatie voordoet die niet in deze algemene voorwaarden geregeld is, dan dient deze situatie te worden beoordeeld naar de geest van deze algemene voorwaarden.<br />Indien Opdrachtnemer niet steeds strikte naleving van deze voorwaarden verlangt, betekent dit niet dat de bepalingen daarvan niet van toepassing zijn, of dat Opdrachtnemer in enigerlei mate het recht zou verliezen om in andere gevallen de stipte naleving van de bepalingen van deze voorwaarden te verlangen.</p>
                          </div>
                        </div>
                        <div id="jw-element-651102083" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 2: offertes, aanbiedingen</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102084" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Alle offertes en aanbiedingen van Opdrachtnemer zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld. Indien geen aanvaardingstermijn is gesteld, vervalt de aanbieding altijd na 30 dagen.<br />Opdrachtnemer kan niet aan zijn offertes of aanbiedingen worden gehouden indien de Opdrachtgever redelijkerwijs kan begrijpen dat de offertes of aanbiedingen, dan wel een onderdeel daarvan, een kennelijke vergissing of verschrijving bevat.<br />De in een offerte of aanbieding vermelde prijzen zijn exclusief btw en andere heffingen van overheidswege, eventuele in het kader van de overeenkomst te maken kosten, daaronder begrepen reis- en verblijf-, verzend- en administratiekosten, tenzij anders aangegeven.<br />Indien de aanvaarding (al dan niet op ondergeschikte punten) afwijkt van het in de offerte of de aanbieding opgenomen aanbod dan is Opdrachtnemer daaraan niet gebonden. De overeenkomst komt dan niet overeenkomstig deze afwijkende aanvaarding tot stand, tenzij Opdrachtnemer anders aangeeft.<br />Een samengestelde prijsopgave verplicht Opdrachtnemer niet tot het verrichten van een gedeelte van de opdracht tegen een overeenkomstig deel van de opgegeven prijs. Aanbiedingen of offertes gelden niet automatisch voor toekomstige orders.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-651102085" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651102086" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 3: contractduur, uitvoeringstermijnen, risico-overgang, uitvoering en wijziging overeenkomst, prijsverhoging</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102087" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>De overeenkomst tussen Opdrachtnemer en de Opdrachtgever wordt aangegaan voor bepaalde tijd, tenzij uit de aard van de overeenkomst anders voortvloeit of indien partijen uitdrukkelijk en schriftelijk anders overeenkomen.<br />Is voor de uitvoering van bepaalde werkzaamheden of voor de levering van bepaalde zaken een termijn overeengekomen of opgegeven, dan is dit nimmer een fatale termijn. Bij overschrijding van een termijn dient de Opdrachtgever Opdrachtnemer derhalve schriftelijk in gebreke te stellen. Opdrachtnemer dient daarbij een redelijke termijn te worden geboden om alsnog uitvoering te geven aan de overeenkomst.<br />Opdrachtnemer zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren. Een en ander op grond van de op dat moment bekende stand der wetenschap.<br />Opdrachtnemer heeft het recht bepaalde werkzaamheden te laten verrichten door derden. De toepasselijkheid van artikel 7:404, 7:407 lid 2 en 7:409 BW wordt uitdrukkelijk uitgesloten.<br />Indien door Opdrachtnemer of door Opdrachtnemer ingeschakelde derden in het kader van de opdracht werkzaamheden worden verricht op de locatie van de Opdrachtgever of een door de Opdrachtgever aangewezen locatie, draagt de Opdrachtgever kosteloos zorg voor de door die medewerkers in redelijkheid gewenste faciliteiten.<br />Opdrachtnemer is gerechtigd de overeenkomst in verschillende fasen uit te voeren en het aldus uitgevoerde gedeelte afzonderlijk te factureren.<br />Indien de overeenkomst in fasen wordt uitgevoerd kan Opdrachtnemer de uitvoering van die onderdelen die tot een volgende fase behoren opschorten totdat de Opdrachtgever de resultaten van de daaraan voorafgaande fase schriftelijk heeft goedgekeurd.<br />De Opdrachtgever draagt er zorg voor dat alle gegevens, waarvan Opdrachtnemer aangeeft dat deze noodzakelijk zijn of waarvan de Opdrachtgever redelijkerwijs behoort te begrijpen dat deze noodzakelijk zijn voor het uitvoeren van de overeenkomst, tijdig aan Opdrachtnemer worden verstrekt. Indien de voor de uitvoering van de overeenkomst benodigde gegevens niet tijdig aan Opdrachtnemer zijn verstrekt, heeft Opdrachtnemer het recht de uitvoering van de overeenkomst op te schorten en / of de uit de vertraging voortvloeiende extra kosten volgens de alsdan gebruikelijke tarieven aan de Opdrachtgever in rekening te brengen. De uitvoeringstermijn vangt niet eerder aan dan nadat de Opdrachtgever de gegevens aan Opdrachtnemer ter beschikking heeft gesteld. Opdrachtnemer is niet aansprakelijk voor schade, van welke aard ook, doordat Opdrachtnemer is uitgegaan van door de Opdrachtgever verstrekte onjuiste en / of onvolledige gegevens.<br />Indien tijdens de uitvoering van de overeenkomst blijkt dat het voor een behoorlijke uitvoering daarvan noodzakelijk is om deze te wijzigen of aan te vullen, dan zullen partijen tijdig en in onderling overleg tot aanpassing van de overeenkomst overgaan. Indien de aard, omvang of inhoud van de overeenkomst, al dan niet op verzoek of aanwijzing van de Opdrachtgever, van de bevoegde instanties et cetera, wordt gewijzigd en de overeenkomst daardoor in kwalitatief en / of kwantitatief opzicht wordt gewijzigd, dan kan dit consequenties hebben voor hetgeen oorspronkelijk overeengekomen werd. Daardoor kan ook het oorspronkelijk overeengekomen bedrag worden verhoogd of verlaagd. Opdrachtnemer zal daarvan zoveel als mogelijk vooraf prijsopgaaf doen. Door een wijziging van de overeenkomst kan voorts de oorspronkelijk opgegeven termijn van uitvoering worden gewijzigd. De Opdrachtgever aanvaardt de mogelijkheid van wijziging van de overeenkomst, daaronder begrepen de wijziging in prijs en termijn van uitvoering.<br />Indien de overeenkomst wordt gewijzigd, daaronder begrepen een aanvulling, dan is Opdrachtnemer gerechtigd om daaraan eerst uitvoering te geven nadat daarvoor akkoord is gegeven door de binnen Opdrachtnemer bevoegde persoon en de Opdrachtgever akkoord is gegaan met de voor de uitvoering opgegeven prijs en andere voorwaarden, daaronder begrepen het alsdan te bepalen tijdstip waarop daaraan uitvoering gegeven zal worden. Het niet of niet onmiddellijk uitvoeren van de gewijzigde overeenkomst levert geen wanprestatie van Opdrachtnemer op en is voor de Opdrachtgever geen grond om de overeenkomst op te zeggen of te annuleren.<br />Zonder daarmee in gebreke te komen, kan Opdrachtnemer een verzoek tot wijziging van de overeenkomst weigeren, indien dit in kwalitatief en / of kwantitatief opzicht gevolg zou kunnen hebben bijvoorbeeld voor de in dat kader te verrichten werkzaamheden of te leveren zaken.<br />Indien de Opdrachtgever in gebreke mocht komen in de deugdelijke nakoming van hetgeen waartoe hij jegens Opdrachtnemer gehouden is, dan is de Opdrachtgever aansprakelijk voor alle schade aan de zijde van Opdrachtnemer daardoor direct of indirect ontstaan.<br />Indien Opdrachtnemer met de Opdrachtgever een vast honorarium of vaste prijs overeenkomt, dan is Opdrachtnemer niettemin te allen tijde gerechtigd tot verhoging van dit honorarium of deze prijs zonder dat de Opdrachtgever in dat geval gerechtigd is om de overeenkomst om die reden te ontbinden, indien de verhoging van de prijs voortvloeit uit een bevoegdheid of verplichting ingevolge de wet- of regelgeving of haar oorzaak vindt in een stijging van de prijs van grondstoffen, lonen et cetera of op andere gronden die bij het aangaan van de overeenkomst redelijkerwijs niet voorzienbaar waren.<br />Indien de prijsstijging anders dan als gevolg van een wijziging van de overeenkomst meer bedraagt dan 10% en plaatsvindt binnen drie maanden na het sluiten van de overeenkomst, dan is uitsluitend de Opdrachtgever die een beroep toekomt op titel 5 afdeling 3 van Boek 6 BW gerechtigd de overeenkomst door een schriftelijke verklaring te ontbinden, tenzij Opdrachtnemer alsdan alsnog bereid is om de overeenkomst op basis van het oorspronkelijk overeengekomen bedrag uit te voeren;<br />indien de prijsverhoging voortvloeit uit een bevoegdheid of een op Opdrachtnemer rustende verplichting ingevolge de wet;<br />indien bedongen is dat de aflevering langer dan drie maanden na de totstandkoming van de overeenkomst zal plaatsvinden;<br />of, bij levering van een zaak, indien is bedongen dat de aflevering langer dan drie maanden na de koop zal plaatsvinden.</p>
                          </div>
                        </div>
                        <div id="jw-element-651102088" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 4: opschorting, ontbinding en tussentijdse opzegging van de overeenkomst</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102089" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Opdrachtnemer is bevoegd de nakoming van de verplichtingen op te schorten of de overeenkomst te ontbinden, indien de Opdrachtgever de verplichtingen uit de overeenkomst niet, niet volledig of niet tijdig nakomt, na het sluiten van de overeenkomst Opdrachtnemer ter kennis gekomen omstandigheden goede grond geven te vrezen dat de Opdrachtgever de verplichtingen niet zal nakomen, indien de Opdrachtgever bij het sluiten van de overeenkomst verzocht is om zekerheid te stellen voor de voldoening van zijn verplichtingen uit de overeenkomst en deze zekerheid uitblijft of onvoldoende is of indien door de vertraging aan de zijde van de Opdrachtgever niet langer van Opdrachtnemer kan worden gevergd dat hij de overeenkomst tegen de oorspronkelijk overeengekomen condities zal nakomen.<br />Voorts is Opdrachtnemer bevoegd de overeenkomst te ontbinden indien zich omstandigheden voordoen welke van dien aard zijn dat nakoming van de overeenkomst onmogelijk is of indien er zich anderszins omstandigheden voordoen die van dien aard zijn dat ongewijzigde instandhouding van de overeenkomst in redelijkheid niet van Opdrachtnemer kan worden gevergd.<br />Indien de overeenkomst wordt ontbonden zijn de vorderingen van Opdrachtnemer op de Opdrachtgever onmiddellijk opeisbaar. Indien Opdrachtnemer de nakoming van de verplichtingen opschort, behoudt hij zijn aanspraken uit de wet en overeenkomst.<br />Indien Opdrachtnemer tot opschorting of ontbinding overgaat, is hij op generlei wijze gehouden tot vergoeding van schade en kosten daardoor op enigerlei wijze ontstaan.<br />Indien de ontbinding aan de Opdrachtgever toerekenbaar is, is Opdrachtnemer gerechtigd tot vergoeding van de schade, daaronder begrepen de kosten, daardoor direct en indirect ontstaan.<br />Indien de Opdrachtgever zijn uit de overeenkomst voortvloeiende verplichtingen niet nakomt en deze niet-nakoming ontbinding rechtvaardigt, dan is Opdrachtnemer gerechtigd de overeenkomst terstond en met directe ingang te ontbinden zonder enige verplichting zijnerzijds tot betaling van enige schadevergoeding of schadeloosstelling, terwijl de Opdrachtgever, uit hoofde van wanprestatie, wél tot schadevergoeding of schadeloosstelling is verplicht.<br />Indien de overeenkomst tussentijds wordt opgezegd door Opdrachtnemer, zal Opdrachtnemer in overleg met de Opdrachtgever zorgdragen voor overdracht van nog te verrichten werkzaamheden aan derden. Dit tenzij de opzegging aan de Opdrachtgever toerekenbaar is. Indien de overdracht van de werkzaamheden voor Opdrachtnemer extra kosten met zich meebrengt, dan worden deze aan de Opdrachtgever in rekening gebracht. De Opdrachtgever is gehouden deze kosten binnen de daarvoor genoemde termijn te voldoen, tenzij Opdrachtnemer anders aangeeft.<br />In geval van liquidatie, van (aanvrage van) surséance van betaling of faillissement, van beslaglegging - indien en voor zover het beslag niet binnen drie maanden is opgeheven - ten laste van de Opdrachtgever, van schuldsanering of een andere omstandigheid waardoor de Opdrachtgever niet langer vrijelijk over zijn vermogen kan beschikken, staat het Opdrachtnemer vrij om de overeenkomst terstond en met directe ingang op te zeggen dan wel de order of overeenkomst te annuleren, zonder enige verplichting zijnerzijds tot betaling van enige schadevergoeding of schadeloosstelling.<br />De vorderingen van Opdrachtnemer op de Opdrachtgever zijn in dat geval onmiddellijk opeisbaar.<br />Indien de Opdrachtgever een geplaatste order geheel of gedeeltelijk annuleert, dan zullen de werkzaamheden die werden verricht en de daarvoor bestelde of gereedgemaakte zaken, vermeerdert met de eventuele aan- afvoer- en afleveringskosten daarvan en de voor de uitvoering van de overeenkomst gereserveerde arbeidstijd, integraal aan de Opdrachtgever in rekening worden gebracht.</p>
                          </div>
                        </div>
                        <div id="jw-element-651102090" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 5: overmacht</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102091" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Opdrachtnemer is niet gehouden tot het nakomen van enige verplichting jegens de Opdrachtgever indien hij daartoe gehinderd wordt als gevolg van een omstandigheid die niet is te wijten aan schuld, en noch krachtens de wet, een rechtshandeling of in het verkeer geldende opvattingen voor zijn rekening komt.<br />Onder overmacht wordt in deze algemene voorwaarden verstaan, naast hetgeen daaromtrent in de wet en jurisprudentie wordt begrepen, alle van buitenkomende oorzaken, voorzien of niet-voorzien, waarop Opdrachtnemer geen invloed kan uitoefenen, doch waardoor Opdrachtnemer niet in staat is zijn verplichtingen na te komen. Werkstakingen in het bedrijf van Opdrachtnemer of van derden daaronder begrepen. Opdrachtnemer heeft ook het recht zich op overmacht te beroepen indien de omstandigheid die (verdere) nakoming van de overeenkomst verhindert, intreedt nadat Opdrachtnemer zijn verbintenis had moeten nakomen.<br />Opdrachtnemer kan gedurende de periode dat de overmacht voortduurt de verplichtingen uit de overeenkomst opschorten. Indien deze periode langer duurt dan drie maanden, dan is ieder der partijen gerechtigd de overeenkomst te ontbinden, zonder verplichting tot vergoeding van schade aan de andere partij.<br />Voor zover Opdrachtnemer ten tijde van het intreden van overmacht zijn verplichtingen uit de overeenkomst inmiddels gedeeltelijk is nagekomen of deze zal kunnen nakomen, en aan het nagekomen respectievelijk na te komen gedeelte zelfstandige waarde toekomt, is Opdrachtnemer gerechtigd om het reeds nagekomen respectievelijk na te komen gedeelte separaat te factureren. De Opdrachtgever is gehouden deze factuur te voldoen als ware er sprake van een afzonderlijke overeenkomst.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-651102092" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651102093" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 6: betaling en incassokosten</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102094" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Betaling dient steeds te geschieden binnen 14 dagen na factuurdatum, op een door Opdrachtnemer aan te geven wijze in de valuta waarin is gefactureerd, tenzij schriftelijk anders door Opdrachtnemer aangegeven.<br />Opdrachtnemer is gerechtigd om periodiek te factureren.<br />Indien de Opdrachtgever in gebreke blijft in de tijdige betaling van een factuur, dan is de Opdrachtgever van rechtswege in verzuim. De Opdrachtgever is dan de wettelijke rente verschuldigd. De rente over het opeisbare bedrag zal worden berekend vanaf het moment dat de Opdrachtgever in verzuim is tot het moment van voldoening van het volledig verschuldigde bedrag.<br />Opdrachtnemer heeft het recht de door Opdrachtgever gedane betalingen te laten strekken in de eerste plaats in mindering van de kosten, vervolgens in mindering van de opengevallen rente en tenslotte in mindering van de hoofdsom en de lopende rente. Opdrachtnemer kan, zonder daardoor in verzuim te komen, een aanbod tot betaling weigeren, indien de Opdrachtgever een andere volgorde voor de toerekening van de betaling aanwijst. Opdrachtnemer kan volledige aflossing van de hoofdsom weigeren, indien daarbij niet eveneens de opengevallen en lopende rente en incassokosten worden voldaan.<br />De Opdrachtgever is nimmer gerechtigd tot verrekening van het door hem aan Opdrachtnemer verschuldigde. Bezwaren tegen de hoogte van een factuur schorten de betalingsverplichting niet op. De Opdrachtgever die geen beroep toekomt op afdeling 6.5.3 (de artikelen 231 tot en met 247 boek 6 BW) is evenmin gerechtigd om de betaling van een factuur om een andere reden op te schorten.<br />Indien de Opdrachtgever in gebreke of in verzuim is in de (tijdige) nakoming van zijn verplichtingen, dan komen alle redelijke kosten ter verkrijging van voldoening buiten rechte voor rekening van de Opdrachtgever. De buitengerechtelijke kosten worden berekend op basis van hetgeen in de Nederlandse incassopraktijk gebruikelijk is, momenteel de berekeningsmethode volgens Rapport Voorwerk II. Indien Opdrachtnemer echter hogere kosten ter incasso heeft gemaakt die redelijkerwijs noodzakelijk waren, komen de werkelijk gemaakte kosten voor vergoeding in aanmerking. De eventuele gemaakte gerechtelijke en executiekosten zullen eveneens op de Opdrachtgever worden verhaald. De Opdrachtgever is over de verschuldigde incassokosten eveneens rente verschuldigd.</p>
                          </div>
                        </div>
                        <div id="jw-element-651102095" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 7: eigendomsvoorbehoud</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102096" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Het door in het kader van de overeenkomst Opdrachtnemer geleverde blijft eigendom van Opdrachtnemer totdat de Opdrachtgever alle verplichtingen uit de met Opdrachtnemer gesloten overeenkomst(en) deugdelijk is nagekomen.<br />Het door Opdrachtnemer geleverde, dat ingevolge lid 1. onder het eigendomsvoorbehoud valt, mag niet worden doorverkocht en mag nimmer als betaalmiddel worden gebruikt. De Opdrachtgever is niet bevoegd om het onder het eigendomsvoorbehoud vallende te verpanden of op enige andere wijze te bezwaren.<br />De Opdrachtgever dient steeds al hetgeen te doen dat redelijkerwijs van hem verwacht mag worden om de eigendomsrechten van Opdrachtnemer veilig te stellen.<br />Indien derden beslag leggen op het onder eigendomsvoorbehoud geleverde dan wel rechten daarop willen vestigen of doen gelden, dan is de Opdrachtgever verplicht om Opdrachtnemer daarvan onmiddellijk op de hoogte te stellen. Voorts verplicht de Opdrachtgever zich om het onder eigendomsvoorbehoud geleverde te verzekeren en verzekerd te houden tegen brand, ontploffings- en waterschade alsmede tegen diefstal en de polis van deze verzekering op eerste verzoek aan Opdrachtnemer ter inzage te geven. Bij een eventuele uitkering van de verzekering is Opdrachtnemer gerechtigd tot deze penningen. Voor zoveel als nodig verbindt de Opdrachtgever zich er jegens Opdrachtnemer bij voorbaat toe om zijn medewerking te verlenen aan al hetgeen dat in dat kader nodig of wenselijk mocht (blijken) te zijn.<br />Voor het geval Opdrachtnemer zijn in dit artikel aangeduide eigendomsrechten wil uitoefenen, geeft de Opdrachtgever bij voorbaat onvoorwaardelijke en niet herroepelijke toestemming aan Opdrachtnemer en door Opdrachtnemer aan te wijzen derden om al die plaatsen te betreden waar de eigendommen van Opdrachtnemer zich bevinden en deze terug te nemen.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-651102097" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651102098" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 8: garanties, onderzoek en reclames, verjaringstermijn</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102099" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>De door Opdrachtnemer te leveren zaken voldoen aan de gebruikelijke eisen en normen die daaraan op het moment van levering redelijkerwijs gesteld kunnen worden en waarvoor zij bij normaal gebruik in Nederland zijn bestemd. De in dit artikel genoemde garantie is van toepassing op zaken die bestemd zijn voor het gebruik binnen Nederland. Bij gebruik buiten Nederland dient de Opdrachtgever zelf te verifiëren of het gebruik daarvan geschikt is voor het gebruik aldaar en voldoen aan de voorwaarden die daaraan gesteld worden. Opdrachtnemer kan in dat geval andere garantie- en andere voorwaarden stellen ter zake van de te leveren zaken of uit te voeren werkzaamheden.<br />De in lid 1 van dit artikel genoemde garantie geldt voor een periode van 30 dagen na levering, tenzij uit de aard van het geleverde anders voortvloeit of partijen anders zijn overeengekomen. Indien de door Opdrachtnemer verstrekte garantie een zaak betreft die door een derde werd geproduceerd, dan is de garantie beperkt tot die, die door de producent van de zaak ervoor wordt verstrekt, tenzij anders wordt vermeld.<br />Iedere vorm van garantie komt te vervallen indien een gebrek is ontstaan als gevolg van of voortvloeit uit onoordeelkundig of oneigenlijk gebruik daarvan of gebruik na de houdbaarheidsdatum, onjuiste opslag of onderhoud daaraan door de Opdrachtgever en / of door derden wanneer, zonder schriftelijke toestemming van Opdrachtnemer, de Opdrachtgever of derden aan de zaak wijzigingen hebben aangebracht dan wel hebben getracht aan te brengen, daaraan andere zaken werden bevestigd die daaraan niet bevestigd dienen te worden of indien deze werden ver- of bewerkt op een andere dan de voorgeschreven wijze.<br />De Opdrachtgever komt evenmin aanspraak op garantie toe indien het gebrek is ontstaan door of het gevolg is van omstandigheden waar Opdrachtnemer geen invloed op kan uitoefenen, daaronder begrepen weersomstandigheden (zoals bijvoorbeeld doch niet uitsluitend, extreme regenval of temperaturen) et cetera.<br />De Opdrachtgever is gehouden het geleverde te (doen) onderzoeken, onmiddellijk op het moment dat de zaken hem ter beschikking worden gesteld respectievelijk de desbetreffende werkzaamheden zijn uitgevoerd. Daarbij behoort de Opdrachtgever te onderzoeken of kwaliteit en/of kwantiteit van het geleverde overeenstemt met hetgeen is overeengekomen en voldoet aan de eisen die partijen dienaangaande zijn overeengekomen. Eventuele zichtbare gebreken dienen binnen 7 dagen na levering schriftelijk aan Opdrachtnemer te worden gemeld. Eventuele niet zichtbare gebreken dienen terstond, doch in ieder geval uiterlijk binnen veertien dagen, na ontdekking daarvan, schriftelijk aan Opdrachtnemer te worden gemeld. De melding dient een zo gedetailleerd mogelijke omschrijving van het gebrek te bevatten, zodat Opdrachtnemer in staat is adequaat te reageren. De Opdrachtgever dient Opdrachtnemer in de gelegenheid te stellen een klacht te (doen) onderzoeken.<br />Indien de Opdrachtgever tijdig reclameert, schort dit zijn betalingsverplichting niet op. De Opdrachtgever blijft in dat geval ook gehouden tot afname en betaling van de overigens bestelde zaken en hetgeen waartoe hij Opdrachtnemer opdracht gegeven heeft.<br />Indien van een gebrek later melding wordt gemaakt, dan komt de Opdrachtgever geen recht meer toe op herstel, vervanging of schadeloosstelling.<br />Indien vaststaat dat een zaak gebrekkig is en dienaangaande tijdig is gereclameerd, dan zal Opdrachtnemer de gebrekkige zaak binnen redelijke termijn na retourontvangst daarvan dan wel, indien retournering redelijkerwijze niet mogelijk is, schriftelijke kennisgeving ter zake van het gebrek door de Opdrachtgever, ter keuze van Opdrachtnemer, vervangen of zorgdragen voor herstel daarvan dan wel vervangende vergoeding daarvoor aan de Opdrachtgever voldoen. In geval van vervanging is de Opdrachtgever gehouden om de vervangen zaak aan Opdrachtnemer te retourneren en de eigendom daarover aan Opdrachtnemer te verschaffen, tenzij Opdrachtnemer anders aangeeft.<br />Indien komt vast te staan dat een klacht ongegrond is, dan komen de kosten daardoor ontstaan, daaronder begrepen de onderzoekskosten, aan de zijde van Opdrachtnemer daardoor gevallen, integraal voor rekening van de Opdrachtgever.<br />Na verloop van de garantietermijn zullen alle kosten voor herstel of vervanging, inclusief administratie-, verzend- en voorrijdkosten, aan de Opdrachtgever in rekening gebracht worden.<br />In afwijking van de wettelijke verjaringstermijnen, bedraagt de verjaringstermijn van alle vorderingen en verweren jegens Opdrachtnemer en de door Opdrachtnemer bij de uitvoering van een overeenkomst betrokken derden, één jaar.</p>
                          </div>
                        </div>
                        <div id="jw-element-651102100" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 9: aansprakelijkheid</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102101" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Indien Opdrachtnemer aansprakelijk mocht zijn, dan is deze aansprakelijkheid beperkt tot hetgeen in deze bepaling is geregeld.<br />Opdrachtnemer is niet aansprakelijk voor schade, van welke aard ook, ontstaan doordat Opdrachtnemer is uitgegaan van door of namens de Opdrachtgever verstrekte onjuiste en / of onvolledige gegevens.<br />Indien Opdrachtnemer aansprakelijk mocht zijn voor enigerlei schade, dan is de aansprakelijkheid van Opdrachtnemer beperkt tot maximaal eenmaal de factuurwaarde van de order, althans tot dat gedeelte van de order waarop de aansprakelijkheid betrekking heeft.<br />De aansprakelijkheid van Opdrachtnemer is in ieder geval steeds beperkt tot het bedrag der uitkering van zijn verzekeraar in voorkomend geval.<br />Opdrachtnemer is uitsluitend aansprakelijk voor directe schade.<br />Onder directe schade wordt uitsluitend verstaan de redelijke kosten ter vaststelling van de oorzaak en de omvang van de schade, voor zover de vaststelling betrekking heeft op schade in de zin van deze voorwaarden, de eventuele redelijke kosten gemaakt om de gebrekkige prestatie van Opdrachtnemer aan de overeenkomst te laten beantwoorden, voor zoveel deze aan Opdrachtnemer toegerekend kunnen worden en redelijke kosten, gemaakt ter voorkoming of beperking van schade, voor zover de Opdrachtgever aantoont dat deze kosten hebben geleid tot beperking van directe schade als bedoeld in deze algemene voorwaarden. Opdrachtnemer is nimmer aansprakelijk voor indirecte schade, daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie.<br />De in dit artikel opgenomen beperkingen van de aansprakelijkheid gelden niet indien de schade te wijten is aan opzet of grove schuld van Opdrachtnemer of zijn leidinggevende ondergeschikten.</p>
                          </div>
                        </div>
                        <div id="jw-element-651102102" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 10: vrijwaring</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102103" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>De Opdrachtgever vrijwaart Opdrachtnemer voor eventuele aanspraken van derden, die in verband met de uitvoering van de overeenkomst schade lijden en waarvan de oorzaak aan andere dan aan Opdrachtnemer toerekenbaar is. Indien Opdrachtnemer uit dien hoofde door derden mocht worden aangesproken, dan is de Opdrachtgever gehouden Opdrachtnemer zowel buiten als in rechte bij te staan en onverwijld al hetgeen te doen dat van hem in dat geval verwacht mag worden. Mocht de Opdrachtgever in gebreke blijven in het nemen van adequate maatregelen, dan is Opdrachtnemer, zonder ingebrekestelling, gerechtigd zelf daartoe over te gaan. Alle kosten en schade aan de zijde van Opdrachtnemer en derden daardoor ontstaan, komen integraal voor rekening en risico van de Opdrachtgever.</p>
                          </div>
                        </div>
                        <div id="jw-element-651102104" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 11: intellectuele eigendom</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102105" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Opdrachtnemer behoudt zich de rechten en bevoegdheden voor die hem toekomen op grond van de Auteurswet en andere intellectuele wet- en regelgeving. Opdrachtnemer heeft het recht de door de uitvoering van een overeenkomst aan zijn zijde toegenomen kennis ook voor andere doeleinden te gebruiken, voor zover hierbij geen strikt vertrouwelijke informatie van de Opdrachtgever ter kennis van derden wordt gebracht.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="jw-element-651102106" className={"jw-tree-node jw-element jw-strip jw-tree-container jw-responsive jw-strip--default jw-strip--style-color jw-strip--color-default jw-strip--padding-both jw-strip--vertical-padding-default jw-strip--border-shape-none jw-node-is-last-child"}>
                    <div className={"jw-strip__background-container"}>
                      <div className={"jw-strip__background"} />
                    </div>
                    <div className={"jw-strip__content-container"}>
                      <div className={"jw-strip__content jw-responsive"}>
                        <div id="jw-element-651102107" className={"jw-tree-node jw-element jw-image-text jw-node-is-first-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 12: toepasselijk recht en geschillen</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102108" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Op alle rechtsbetrekkingen waarbij Opdrachtnemer partij is, is uitsluitend het Nederlands recht van toepassing, ook indien aan een verbintenis geheel of gedeeltelijk in het buitenland uitvoering wordt gegeven of indien de bij de rechtsbetrekking betrokken partij aldaar woonplaats heeft. De toepasselijkheid van het Weens Koopverdrag wordt uitgesloten.<br />De rechter in de vestigingsplaats van Opdrachtnemer is bij uitsluiting bevoegd van geschillen kennis te nemen, tenzij de wet dwingend anders voorschrijft. Niettemin heeft Opdrachtnemer het recht het geschil voor te leggen aan de volgens de wet bevoegde rechter.<br />Partijen zullen eerst een beroep op de rechter doen nadat zij zich tot het uiterste hebben ingespannen een geschil in onderling overleg te beslechten.</p>
                          </div>
                        </div>
                        <div id="jw-element-651102109" className={"jw-tree-node jw-element jw-image-text"}>
                          <div className={"jw-element-imagetext-text"}>
                            <h2 className={"jw-heading-100"}>Artikel 13: vindplaats en wijziging algemene voorwaarden</h2>
                          </div>
                        </div>
                        <div id="jw-element-651102110" className={"jw-tree-node jw-element jw-image-text jw-node-is-last-child"}>
                          <div className={"jw-element-imagetext-text"}>
                            <p>Deze voorwaarden zijn gedeponeerd bij de Kamer van Koophandel. Van toepassing is steeds de laatst gedeponeerde versie c.q. de versie zoals die gold ten tijde van de totstandkoming van de rechtsbetrekking met Opdrachtnemer.<br />De Nederlandse tekst van de algemene voorwaarden is steeds bepalend voor de uitleg daarvan.</p>
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
                          <a className={"jw-element-content jw-btn jw-btn--size-small jw-btn-is-full-width jw-btn--roundness-round jw-btn--icon-position-start jw-btn--custom-color"} href="#" style={{ "--jw-button-custom-color": "#e8882a", "--jw-button-custom-color-text": "#ffffff", "--jw-button-custom-color-hover": "#ea9541" } as CSSProperties} title="Algemene voorwaarden">
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
