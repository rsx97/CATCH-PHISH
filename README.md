# CATCH-PHISH
L'extension Chrome de détection de phishing vise à classer, chaque URL parcourue, dans les catégories hameçonnées et non hameçonnées (au chargement de la page) ; ainsi, alerter l'utilisateur de toute activité malveillante et empêcher toute intrusion.

## Étapes pour installer l'extension Chrome :
1. Google Chrome -> Plus d'outils -> Extensions
2. Cliquez sur « Charger l'extension décompressée. »
3. Ouvrez le répertoire 'Module d'ingénierie'
4. Extension de détection de phishing prête à surveiller tous les sites chargés sur le navigateur Chrome

## URL de test (tests positifs - hameçonnage détecté) :
1. ../Engineering Module/Phishing.html (Page de test hameçonnée créée)
2. https://www.phishtank.com/phish_search.php?verified=u&active=y (Liste des sites de phishing disponibles)

## Algorithmes ML :
Les algorithmes SVM, Neural Networks et Random Forest ont été utilisés pour évaluer l'ensemble de données ; et le modèle persistant formé par SVM a été transmis au module d'ingénierie pour la détection du phishing.

## Modules d'ingénierie :
1. manifest.json :
Il fournit à Chrome les informations de base sur l'extension, telles que le nom, les autorisations, les scripts et les fichiers associés.

2. content.js :
Il s'exécute dans un environnement javscript non privilégié séparé et a un accès complet au DOM.
Ici, le modèle SVM entraîné (poids calculés dans ./ML Algorithm Evaluation/run_algorithms.py) a été utilisé comme modèle persistant pour classer les sites Web.
Les fonctions ci-dessous calculent le vecteur de caractéristiques pour le portail en cours d'analyse :
isIPInURL()
isLongURL()
isTinyURL()
isAlphaNumericURL()
isRedirectingURL()
isHypenURL()
isMultiDomainURL()
isFaviconDomainUnidentical()
isIllegalHttpsURL()
isImgFromDifferentDomain()
isAnchorFromDifferentDomain()
isScLnkFromDifferentDomain()
isFormActionInvalid()
isMailToAvailable()
isStatusBarTampered()
isIframePrésent()
Le vecteur de caractéristiques évalué, en outre, transmis à la fonction predict(data) calcule la prédiction pour le site Web.

C'est dans le contenu.js qu'on affiche l'annimation verte pour les bons sites et rouge pour les sites malveillant.

REMARQUE : L'extension valide chaque appel d'URL, c'est-à-dire qu'en cas de redirection d'URL, elle évaluera également chaque accès d'URL intermittent.

## DEMO Site non malveillant:
<img src="https://github.com/rsx97/CATCH-PHISH/blob/main/image/Capture%20d%E2%80%99%C3%A9cran%20(30).png" width=800/>

## DEMO Site malveillant:
<img src="https://github.com/rsx97/CATCH-PHISH/blob/main/image/Capture%20d%E2%80%99%C3%A9cran%20(29).png" width=800/>
