"use client";

import { useEffect } from "react";

const originalHtml = `
<header class="top" id="top"><div class="w"><a href="#top" aria-label="MASHUWA – Accueil"><img src="/assets/img/logo.png" alt="MASHUWA – Votre trajet, optimisé"></a>
<button class="burger" id="burger" type="button" aria-label="Menu" aria-expanded="false"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 7h16M4 12h16M4 17h16'/></svg></button>
<nav id="tnav"><a href="#top">Accueil</a><a href="#solution">Solution</a><a href="#compagnies">Pour les Compagnies</a><a href="#equipe">Notre Équipe</a><a href="#faq">FAQ</a><a href="#contact">Contact</a><a class="cta" href="#contact">Nous contacter</a></nav></div><div class="prog" id="prog"></div></header>

<div class="hero"><div class="w hg">
<div><h1>Naviguer vers un transport lacustre plus intelligent, plus transparent et plus performant.</h1>
<p>MASHUWA est la plateforme numérique qui modernise le transport lacustre en RDC : billetterie en ligne et au guichet, embarquement par QR code, suivi des recettes et rapports de voyage. Fini les billets papier et les registres à la main, même sans Internet.</p>
<p class="slg">Votre trajet, optimisé.</p>
<a class="btn b1" href="#solution">Découvrir la solution</a><a class="btn b2" href="#compagnies">Je suis une compagnie</a></div>
<figure class="ph"><img src="/assets/img/hero-embarquement.jpg" width="1800" height="1350" alt="Embarquement du bateau Emmanuel 4 : passagers et bagages sur le quai"><figcaption>Au port, chaque jour : la foule, l’attente, les billets papier.</figcaption></figure>
</div><div class="sun" aria-hidden="true"></div>
<svg class="wave" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30C150 0 300 60 450 30S750 0 900 30 1100 55 1200 28V60H0Z"/></svg></div>

<div class="statsband"><div class="w stats"><div><b><i data-count="24">0</i>h/24</b><span>Plateforme disponible</span></div><div><b><i data-count="2">0</i> min</b><span>Pour réserver un billet</span></div><div><b><i data-count="5">0</i></b><span>Membres dans l’équipe</span></div></div></div>
<section>
<div class="w">
<h2>Un secteur qui fait vivre des milliers de personnes, géré encore à la main.</h2>
<p class="lead">Chaque jour, des milliers de passagers et de tonnes de marchandises traversent les lacs de RDC. Les outils, eux, n’ont pas suivi.</p>
<div class="g">
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z'/><path d='M14 7v2M14 11v2M14 15v2'/></svg></span><h3>Billets manuels</h3><p>Des tickets papier faciles à perdre, à copier ou à contester.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='9' cy='9' r='6'/><path d='M15 10a6 6 0 1 1-5 5'/></svg></span><h3>Recettes sans traçabilité</h3><p>Difficile de savoir précisément ce qui a été vendu et encaissé.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='9' cy='8' r='3'/><path d='M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6'/><circle cx='17' cy='9' r='2.5'/><path d='M17 14c2.5 0 4.5 2 4.5 5'/></svg></span><h3>Passagers mal suivis</h3><p>Pas de liste fiable de qui est monté à bord, et sur quelle traversée.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6'/></svg></span><h3>Peu de données</h3><p>Sans chiffres fiables, impossible d’évaluer les voyages et d’améliorer.</p></div>
</div>
</div>
</section>
<section class="soft" id="solution">
<div class="w">
<h2>Une plateforme pour vendre, embarquer et piloter.</h2>
<p class="lead">MASHUWA va plus loin que la billetterie : elle donne aux compagnies la vue d’ensemble qui leur manquait.</p>
<div class="g">
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z'/><path d='M14 7v2M14 11v2M14 15v2'/></svg></span><h3>Billets en ligne ou au guichet</h3><p>Le passager achète depuis son téléphone, ou auprès d’un agent physique.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><rect x='3' y='3' width='7' height='7' rx='1'/><rect x='14' y='3' width='7' height='7' rx='1'/><rect x='3' y='14' width='7' height='7' rx='1'/><path d='M14 14h3v3h-3zM20 14v1M14 20h2M20 18v3'/></svg></span><h3>Embarquement par QR code</h3><p>Chaque billet est vérifié en un scan. Un billet déjà utilisé est refusé.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6'/></svg></span><h3>Ventes et recettes</h3><p>Le suivi des encaissements par agent, par canal et par traversée.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='9' cy='8' r='3'/><path d='M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6'/><circle cx='17' cy='9' r='2.5'/><path d='M17 14c2.5 0 4.5 2 4.5 5'/></svg></span><h3>Gestion des passagers</h3><p>La liste des voyageurs de chaque départ, toujours à jour.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M6 3h9l4 4v14H6Z'/><path d='M14 3v5h5M9 13h6M9 17h6'/></svg></span><h3>Rapports de voyage</h3><p>Remplissage, recettes, embarquements : des rapports détaillés après chaque voyage.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z'/></svg></span><h3>Évaluation des prestations</h3><p>Des indicateurs pour mesurer la performance des compagnies et progresser.</p></div>
</div>
</div>
</section>
<section><div class="w"><div class="off"><span class="ic" style="background:var(--navy);color:var(--sand)"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01M3 3l18 18'/></svg></span>
<h2>Pensée pour les réalités du terrain : elle marche sans réseau.</h2>
<p>Sur le lac, la connexion est rare. Les ventes et les validations sont enregistrées sur l’appareil, puis synchronisées automatiquement dès que le réseau revient.</p>
</div></div></section>
<section class="soft" id="comment"><div class="w"><h2>Simple. Rapide. Fiable.</h2><p class="lead">Comment ça marche, de l’émission du billet au rapport de voyage.</p><div class="steps"><div class="st"><h3>Le billet est émis</h3><p>En ligne ou chez un agent, avec un QR code unique.</p></div><div class="st"><h3>Le QR est scanné</h3><p>À l’embarquement, le billet est validé et marqué comme utilisé.</p></div><div class="st"><h3>La compagnie pilote</h3><p>Recettes, passagers et rapports sont disponibles dès la fin du voyage.</p></div></div></div></section>
<section>
<div class="w">
<h2>Pour qui ?</h2>
<p class="lead">Trois publics, un même objectif : des traversées plus fiables.</p>
<div class="g">
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 16h16l-2.5 4h-11ZM12 3v11M12 4l6 9h-6ZM11 6l-5 7h5'/></svg></span><h3>Compagnies maritimes</h3><p>Contrôler les recettes, réduire les pertes et décider avec des données.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><rect x='6' y='4' width='12' height='17' rx='2'/><path d='M9 4h6v3H9zM9 12h6M9 16h4'/></svg></span><h3>Gestionnaires de bateaux</h3><p>Suivre les départs, les embarquements et le remplissage de chaque bateau.</p></div>
<div class="it"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='12' cy='8' r='4'/><path d='M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8'/></svg></span><h3>Passagers</h3><p>Acheter son billet simplement et voyager avec la certitude d’avoir sa place.</p></div>
</div>
</div>
</section>
<section class="alt" id="compagnies"><div class="w"><h2>Vous avez une compagnie ? On vous donne l’outil.</h2>
<p class="lead">MASHUWA vous aide à mieux gérer vos réservations, vos billets et vos clients. Vous gardez le contrôle de vos bateaux, de vos ports et de vos passagers. Nous, on s’occupe de la technologie.</p>
<div class="wcard"><h3>Ce que vous gagnez</h3><ul class="ul"><li>Vos départs publiés et vendus en ligne</li><li>Gestion de vos réservations en temps réel</li><li>Visibilité auprès de milliers de voyageurs</li><li>Moins de files d’attente au port</li></ul>
<a class="btn b1 nv" href="mailto:contact.mashuwa@gmail.com?subject=Devenir%20compagnie%20partenaire">Devenir compagnie partenaire</a></div></div></section>
<section class="soft" id="modele">
<div class="w">
<h2>Un modèle qui grandit avec les compagnies.</h2>
<p class="lead">MASHUWA gagne sa vie en même temps que les compagnies qui l’utilisent.</p>
<div class="biz">
<div class="bz"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><rect x='3' y='5' width='18' height='16' rx='2'/><path d='M3 10h18M8 3v4M16 3v4'/></svg></span><h3>Abonnement</h3><p>Les compagnies maritimes paient un abonnement pour accéder à la plateforme et à ses rapports.</p></div>
<div class="bz"><span class="ic"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M19 5L5 19'/><circle cx='7' cy='7' r='2.5'/><circle cx='17' cy='17' r='2.5'/></svg></span><h3>Commission</h3><p>Une commission est prélevée sur chaque billet vendu via la plateforme.</p></div>
</div>
<p class="lead" style="margin:28px 0 0">Après les lacs de RDC, MASHUWA vise d’autres marchés africains du transport lacustre.</p>
</div>
</section>
<section id="equipe"><div class="w"><h2>L’équipe derrière MASHUWA</h2><p class="lead">La vision. La rigueur. La performance.</p><div class="team"><div class="tm"><img src="/assets/img/lewis-ntadumba.jpg" width="640" height="640" alt="Lewis NTADUMBA"><h3>Lewis NTADUMBA</h3><p class="role">CEO &amp; Fondateur</p><p class="en">Chief Executive Officer &amp; Founder</p><p class="desc">Vision stratégique. Pilotage du projet. Partenariats avec les compagnies maritimes.</p></div><div class="tm"><img src="/assets/img/josue-kabene.jpg" width="640" height="640" alt="Josué KABENE, COO de MASHUWA"><h3>Josué KABENE</h3><p class="role">COO – Direction des Opérations</p><p class="en">Chief Operating Officer</p><p class="desc">Opérations quotidiennes. Suivi des partenaires.</p></div><div class="tm"><img src="/assets/img/wanny-manegabe.jpg" width="640" height="640" alt="Wanny MANEGABE"><h3>Wanny MANEGABE</h3><p class="role">CFO – Direction Financière</p><p class="en">Community Financial Manager</p><p class="desc">Gestion financière. Transparence des flux. Pérennité du projet.</p></div><div class="tm"><img src="/assets/img/rene-amani.jpg" width="640" height="640" alt="René AMANI"><h3>René AMANI</h3><p class="role">CMO – Direction Marketing</p><p class="en">Chief Marketing Officer</p><p class="desc">Stratégie de communication. Acquisition. Croissance de la plateforme.</p></div><div class="tm"><img src="/assets/img/david-keukeu.jpg" width="640" height="640" alt="David KEUKEU, CTO de MASHUWA"><h3>David KEUKEU</h3><p class="role">CTO – Direction Technique</p><p class="en">Chief Technology Officer</p><p class="desc">Architecture de la plateforme. Fiabilité. Performance.</p></div></div></div></section>
<section class="soft"><div class="w"><h2>Pourquoi MASHUWA ?</h2><div class="g" style="margin-top:28px"><div class="it"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/></svg></span><h3>Disponible 24h/24</h3></div><div class="it"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d='M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6Z'/><path d='M9 12l2 2 4-4'/></svg></span><h3>Paiement sécurisé</h3></div><div class="it"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx='12' cy='12' r='9'/><path d='M8 12l3 3 5-6'/></svg></span><h3>Compagnies vérifiées</h3></div><div class="it"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x='3' y='3' width='7' height='7' rx='1'/><rect x='14' y='3' width='7' height='7' rx='1'/><rect x='3' y='14' width='7' height='7' rx='1'/><path d='M14 14h3v3h-3zM20 14v1M14 20h2M20 18v3'/></svg></span><h3>Billets traçables par QR code</h3></div><div class="it"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d='M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01M3 3l18 18'/></svg></span><h3>Fonctionne sans Internet</h3></div><div class="it"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d='M6 3h9l4 4v14H6Z'/><path d='M14 3v5h5M9 13h6M9 17h6'/></svg></span><h3>Rapports détaillés par voyage</h3></div></div></div></section>
<section id="faq"><div class="w"><svg class="faqill" viewBox="0 0 360 230" role="img" aria-label="Illustration : questions"><line x1="40" y1="206" x2="320" y2="206" stroke="#04375a" stroke-width="2"/><text x="258" y="200" text-anchor="middle" font-size="235" font-weight="800" fill="#c79a3a" font-family="Poppins,Arial,sans-serif">?</text><text x="250" y="192" text-anchor="middle" font-size="235" font-weight="800" fill="#ebd6a9" font-family="Poppins,Arial,sans-serif">?</text><circle cx="86" cy="62" r="20" fill="#f5ecd5"/><circle cx="78" cy="62" r="2.6" fill="#04375a"/><circle cx="86" cy="62" r="2.6" fill="#04375a"/><circle cx="94" cy="62" r="2.6" fill="#04375a"/><circle cx="100" cy="88" r="6" fill="#f5ecd5"/><ellipse cx="116" cy="196" rx="58" ry="12" fill="#ebd6a9"/><rect x="82" y="128" width="68" height="58" rx="26" fill="#04375a"/><rect x="96" y="148" width="40" height="26" rx="4" fill="#f3f0ea" stroke="#04375a" stroke-width="2"/><circle cx="116" cy="112" r="19" fill="#8a5a3c"/><path d="M98 108c2-18 34-20 38 0-8-6-26-8-38 0Z" fill="#1d1d2b"/><path d="M92 150c-14-4-16-22-2-26" stroke="#04375a" stroke-width="12" fill="none" stroke-linecap="round"/></svg><h2>Questions fréquemment posées</h2><p class="lead">Trouvez rapidement les réponses à vos questions sur MASHUWA.</p><div class="faq"><details><summary><span class="qt"><span class="qi">?</span>Qu’est-ce que MASHUWA ?</span></summary><p>MASHUWA est une plateforme numérique qui modernise le transport lacustre en RDC : billets en ligne ou au guichet, embarquement par QR code, suivi des ventes et des recettes, gestion des passagers et rapports de voyage.</p></details><details><summary><span class="qt"><span class="qi">?</span>À qui s’adresse MASHUWA ?</span></summary><p>Aux compagnies maritimes, aux gestionnaires de bateaux et aux passagers. Chacun dispose d’outils adaptés à son rôle.</p></details><details><summary><span class="qt"><span class="qi">?</span>MASHUWA est-il propriétaire des bateaux ?</span></summary><p>Non. MASHUWA est une plateforme technologique. Les bateaux appartiennent aux compagnies maritimes partenaires. Nous connectons les voyageurs et les compagnies.</p></details><details><summary><span class="qt"><span class="qi">?</span>Comment un passager obtient-il son billet ?</span></summary><p>En ligne depuis son téléphone, ou auprès d’un agent au guichet. Dans les deux cas, un billet avec un QR code unique est émis.</p></details><details><summary><span class="qt"><span class="qi">?</span>Comment se passe l’embarquement ?</span></summary><p>Le contrôleur scanne le QR code du billet. Un billet inconnu, déjà utilisé ou d’une autre traversée est refusé.</p></details><details><summary><span class="qt"><span class="qi">?</span>Faut-il Internet pour utiliser MASHUWA ?</span></summary><p>Pas pour le guichet ni pour l’embarquement : les ventes et les validations sont enregistrées sur l’appareil, puis synchronisées automatiquement dès le retour du réseau.</p></details><details><summary><span class="qt"><span class="qi">?</span>Comment MASHUWA lutte-t-il contre la fraude ?</span></summary><p>Le rapport de chaque voyage compare les billets vendus ou autorisés, les passagers scannés et la caisse comptée, et signale les écarts. Chaque action est inscrite dans un journal d’audit en ajout seulement.</p></details><details><summary><span class="qt"><span class="qi">?</span>Combien coûte MASHUWA pour une compagnie ?</span></summary><p>Les compagnies paient un abonnement et une commission sur les billets vendus. Contactez-nous pour une offre adaptée à votre flotte.</p></details><details><summary><span class="qt"><span class="qi">?</span>Je suis une compagnie, comment rejoindre MASHUWA ?</span></summary><p>Cliquez sur « Devenir compagnie partenaire » et notre équipe vous accompagne pour publier vos départs, vos bateaux et vos places.</p></details></div><p class="more">Vous avez d’autres questions ? <a href="#contact">Contactez notre équipe</a></p></div></section>
<section class="alt" id="contact"><div class="w"><h2>Nos contacts</h2><p class="lead">Une question, une réservation, un partenariat ? Notre équipe vous répond.</p>
<div class="cgrid"><div class="cinfo"><h3>Téléphone</h3><a class="cb" href="https://wa.me/243972084612" target="_blank" rel="noopener">WhatsApp : +243 (0) 97 208 46 12</a><a class="cb" href="tel:+243836287096">Téléphone : +243 (0) 83 628 70 96</a>
<h3>E-mail</h3><a class="cb" href="mailto:contact.mashuwa@gmail.com">contact.mashuwa@gmail.com</a>
<h3>Adresse</h3><span class="cb">Goma, Nord-Kivu, RDC.</span>
<div class="sbox"><img class="clogo" src="/assets/img/logo-marine.jpg" width="150" alt="MASHUWA – Votre trajet, optimisé"><div class="socs"><span class="soc" title="Lien bientôt disponible" role="img" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/></svg></span><span class="soc" title="Lien bientôt disponible" role="img" aria-label="X"><svg viewBox="0 0 24 24"><path d='M4 4l16 16M20 4L4 20'/></svg></span><span class="soc" title="Lien bientôt disponible" role="img" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x='2' y='2' width='20' height='20' rx='5'/><circle cx='12' cy='12' r='4'/><path d='M17.5 6.5h.01'/></svg></span><span class="soc" title="Lien bientôt disponible" role="img" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><rect x='3' y='3' width='18' height='18' rx='3'/><path d='M8 11v6M8 7.5v.01M12 17v-6M12 13a3 3 0 0 1 6 0v4'/></svg></span></div></div></div>
<form class="fcard" id="cf"><h3>Contactez-nous</h3><p>Pour toute demande de démonstration ou d’information, veuillez remplir ce formulaire.</p>
<input id="fn" placeholder="Nom et post-nom" autocomplete="name" required><input id="ft" placeholder="Téléphone" inputmode="tel" autocomplete="tel" required><input id="fc" placeholder="Nom de la compagnie (facultatif)">
<button class="btn" type="submit">Envoyer</button><p class="fnote">Sans engagement · Réponse sur WhatsApp</p></form></div></div></section>
<footer><div class="w"><b>MASHUWA – Votre trajet, optimisé.</b><br>Goma, Nord-Kivu, RDC.<br>© 2026 MASHUWA – Tous droits réservés.<br>Designed by <b>Devinno</b></div></footer>
<button class="totop" id="totop" type="button" aria-label="Retour en haut"><svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 19V5M6 11l6-6 6 6'/></svg></button>

`;

export default function Page() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    document.title = "MASHUWA – Votre trajet, optimisé";

    const fontPreconnect = document.createElement("link");
    fontPreconnect.rel = "preconnect";
    fontPreconnect.href = "https://fonts.googleapis.com";
    document.head.appendChild(fontPreconnect);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(fontLink);

    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "/assets/css/style.css";
    document.head.appendChild(styleLink);

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "/assets/img/icon-192.png";
    document.head.appendChild(favicon);

    // Original JS behavior, loaded after the original HTML is inserted.
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(styleLink);
      document.head.removeChild(fontLink);
      document.head.removeChild(fontPreconnect);
      document.head.removeChild(favicon);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);


  return <main dangerouslySetInnerHTML={{ __html: originalHtml }} />;
}
