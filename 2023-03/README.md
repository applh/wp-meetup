# WordPress

## Meetup

### DEBUTER SON PROJET AVEC WP

#### Choisir un Nom de domaine

* choisir un domaine disponible
* https://gandi.net

#### Publier son site

* Pack Domaine + Hébergement mutualisé
  * https://ionos.fr/
  * https://o2switch.fr
  * ...
  * La création du compte peut prendre de quelques minutes à quelques jours
    * délai variable pour réservation du nom de domaine et publication dans les annuaires
  * Simple et sécurisé
  * Sauvegardes (quotidienne/hebdomadaire/...)
  * Pour installer WP
    * PHP 8
    * Base de Données SQL (MySQL ou MariaDB)
  * Installation facile de WP incluse
    * En 5 minutes, le site est disponible
  * accès SSH 
    * (optionnel mais mieux pour les devs)

#### Pour les Devs + administrateurs système

* Serveur dédié virtuel (VPS)
  * Prérequis: Nécessite des compétences en administration système
    * Outil de gestion de serveur WP et PHP
    * https://wordops.net/
    * (gratuit et open-source)
  * Avantages: Plus de liberté, plus de puissance
  * https://ovhcloud.com
  * https://ionos.fr
  * ...

##### Environnement de développement (local)

* XAMPP
  * https://www.apachefriends.org/fr/index.html
* DevKinsta
  * https://kinsta.com/fr/devkinsta/
* Il existe d'autres outils...

##### Developper sur MacOS

* homebrew
  * https://brew.sh/index_fr
  * Outil de gestion de logiciels
  * Pratique pour centraliser les mises à jours

* Et ensuite avec homebrew installer les autres logiciels...
* ...Ouvrir un terminal pour lancer les lignes de commandes

* VScode
  * `brew install --cask visual-studio-code`
  * https://formulae.brew.sh/cask/visual-studio-code
  * https://code.visualstudio.com/

* Git
  * `brew install git`

##### LocalWP

* LocalWP
  * `brew install --cask local` 
  * https://localwp.com/

##### WP-ENV

* WP-ENV
* https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/

##### EASYENGINE

* EasyEngine
  * `brew install easyengine`
  * https://easyengine.io/

##### XAMPP

* XAMPP
    * `brew install --cask xampp` 

##### PHP+SQL

Ou séparément...

* PHP
    * `brew upgrade php`

* MySQL
    * `brew install mysql`

* Composer

* WP-CLI

* etc...

### INSTALLER WORDPRESS

1. Activer le certificat SSL pour pouvoir utiliser https://
2. Vérifier la version de PHP pour le nom de domaine
3. Et ensuite installer WP sur le nom de domaine avec https://
4. Créer le compte administrateur
   1. ne pas choisir un login trop commun (éviter admin, ...)
   2. choisir un mot de passe fort 
      1. (long, avec des chiffres, des lettres majuscules et minuscules, des caractères spéciaux)
5. Une fois le site WP installé, on peut directement le voir en ligne dans le navigateur
   1. aller sur votre nom de domaine
      1. (exemple: https://monsite.com)
   2. aller sur l'espace administrateur 
      1. (dans le dossier `/wp-admin`)
      2. (exemple: https://monsite.com/wp-admin)
      3. entrer le login et le mot de passe

#### IONOS

* ionos essaie de vendre des options payantes... 😱
* ionos envoie un mail pour confirmer l'installation de votre site WP
* ionos pré-installe des extensions
    * il est possible de les désactiver

#### O2SWITCH

* utiliser le domaine principal
* ou si nécessaire: 
  * créer un sous-domaine
  * créer un 'dossier racine' pour le sous-domaine
* activer le certificat SSL pour le nom de domaine ou sous-domaine
  * `Sécurité / Let's Encrypt SSL`
    * Choisir le nom de domaine ou sous-domaine
    * Générer
    * Vérifier que le certificat `Let's Encrypt` est bien dans l'état `installé`
* Aller dans l'installation de WordPress
  * Choisir votre `adresse d'installation`
    * (exemple: https://monsite.com) 
    * attention: laisser le champ `dossier` vide
  * Choisir un `Compte administrateur`
    * choisir un login et un mot de passe
      * éviter les logins trop communs (admin, ...)
      * bien choisir un mot de passe fort
        * (long, avec des chiffres, des lettres majuscules et minuscules, des caractères spéciaux)
      * Choisir une adresse email auquel vous avez accès
    * Attention: Bien noter les identifiants (quelque part...)
      * login
      * mot de passe
      * email
    * En bas de la page, cliquer sur le bouton `Install`
    * En quelques minutes, le site WP est installé
      * (cas perso: aucun mail reçu...)
      * o2switch devrait envoyer un mail 
        * pour confirmer l'installation de votre site WP ?!

* Une fois le site WP installé, on peut directement le voir en ligne dans le navigateur
   * aller sur votre nom de domaine
      * (exemple: https://monsite.com)
   * aller sur l'espace administrateur 
      * (dans le dossier `/wp-admin`)
      * (exemple: https://monsite.com/wp-admin)
      * entrer le login et le mot de passe

### REFERENCEMENT

* Souvent les porteurs de projet web ne pensent pas au référencement
* Ils imaginent mettre en ligne leur site et que les visiteurs vont venir tout seul
* Mais les visiteurs ne viennent pas tout seul sur un site
* Ils cherchent des mots clés sur Google
* Et ils cliquent sur les liens qui correspondent à leurs recherches

* Comment Google construit un résultat de recherche ?
* Un résultat de recherche est composé de plusieurs éléments 
  * qui sont extraits du contenu d'une page web
* Google analyse le contenu d'une page web pour en extraire des informations
* Un résultat de recherche est un lien vers une page web d'un site en ligne
  * Pas de site en ligne = pas de référencement
  * Le référencement peut prendre du temps (semaines, mois, ...)
  * Action prioritaire: démarrer le référencement dès le début du projet
  * => publier une V0 rapidment

* Stratégie de publication d'un site internet
* Avant de construire une V1 qui sera destinée aux humains
* Il faut construire une V0 qui sera destinée aux robots de Google
  * Focalisée sur le contenu et les mots-clé
  * Bien structurée avec une hiérarchie de titres
  * pas besoin d'animation, de design, de couleurs, de polices, ... 😎
    * (...ce sera pour les humains avec la V1...)

* Le contenu doit être fourni par le client/porteur de projet 
  * (pas le développeur)
  * scénario 1: le client envoie le contenu au développeur qui l'intègre dans une page du site web
  * scénario 2: le client a un outil simple qui lui permet de publier le contenu directement en ligne
    * => le client peut construire sa landing page sans aide technique
    * => Il faut un CMS pour le client
    * CMS: Content Management System
    * => WP aide à la publication de +40% des sites web dans le monde

* Avec WP, on peut publier rapidement une V0 du site avec du contenu à référencer par Google
  * V0: site landing page publiée par le client/porteur de projet
* Le développeur peut travailler en même temps sur la V1 du site
  * avec un design, des animations, des couleurs, des polices, ...
  * qui sera destinée aux humains


#### Google Search Console

* Outils Google pour améliorer le référencement de votre site
* https://search.google.com/search-console/about?hl=fr


### WORDPRESS PATTERNS

* On peut copier/coller un pattern d'un site WP vers un autre
* https://wordpress.org/patterns/
* un pattern est une suite d'annotations en HTML
* A partir de ce code, WP va produire le code HTML publié sur le site


```
<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"textAlign":"center","level":3,"style":{"spacing":{"padding":{"top":"var:preset|spacing|30","right":"var:preset|spacing|30","bottom":"var:preset|spacing|30","left":"var:preset|spacing|30"},"margin":{"top":"var:preset|spacing|30","right":"var:preset|spacing|30","bottom":"var:preset|spacing|30","left":"var:preset|spacing|30"}},"typography":{"fontStyle":"normal","fontWeight":"800","textTransform":"uppercase"}}} -->
<h3 class="wp-block-heading has-text-align-center" style="margin-top:var(--wp--preset--spacing--30);margin-right:var(--wp--preset--spacing--30);margin-bottom:var(--wp--preset--spacing--30);margin-left:var(--wp--preset--spacing--30);padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);font-style:normal;font-weight:800;text-transform:uppercase">Contactez-nous</h3>
<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center">GET APPOINTMENT</h2>
<!-- /wp:heading --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"blockGap":"var:preset|spacing|30","margin":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30"}}},"fontSize":"medium"} -->
<div class="wp-block-buttons has-custom-font-size has-medium-font-size" style="margin-top:var(--wp--preset--spacing--30);margin-bottom:var(--wp--preset--spacing--30)"><!-- wp:button {"textAlign":"center","width":50,"style":{"typography":{"textTransform":"capitalize"}}} -->
<div class="wp-block-button has-custom-width wp-block-button__width-50" style="text-transform:capitalize"><a class="wp-block-button__link has-text-align-center wp-element-button">Call Now</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->
```


### Participants 😎

* prénom
* présentation du participant
* présentation du projet
* nom de domaine
* hébergement

#### Projets

* ...

### Idées/Suggestions 🤔


### Organisation 👭


  
#### 2023

* MARS
* AVRIL
* MAI
* JUIN
* JUILLET
* AOUT
* SEPTEMBRE
* OCTOBRE
* NOVEMBRE
* DECEMBRE

