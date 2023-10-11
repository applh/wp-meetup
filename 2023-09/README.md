# Coder en PHP avec WP

## Créér une extension

* https://developer.wordpress.org/plugins/

* Dans le dossier /wp-content/plugins/
* chaque extension est dans son dossier
* Créer un nouveau dossier pour votre extension
  * /wp-content/plugins/mon-plugin/
* Créer un fichier PHP pour votre extension
  * /wp-content/plugins/mon-plugin/index.php
  * et ajouter le code suivant :

```php
<?php
/**
 * Plugin Name: Mon Plugin
 */
```

* Dans le back office, votre extension doit être visible dans la liste des extensions
* Il faut l'activer pour qu'elle soit utilisée

## Créer un shortcode

* https://codex.wordpress.org/Shortcode_API

* Dans le fichier index.php de votre extension, ajouter le code suivant :

```php
<?php
/**
 * Plugin Name: Mon Plugin
 */

function cb_mon_shortcode () 
{
    return date("Y-m-d H:i:s");
}

add_shortcode( 'mon_shortcode', 'cb_mon_shortcode' );

```

* Dans le back office, ajouter le shortcode suivant dans un article ou une page :
  * avec Gutenberg, ajouter un bloc "shortcode" et saisir le shortcode suivant :

```html
[mon_shortcode]
```

## Améliorer le code de votre extension

* Pour les shortcodes, le code auparavant fonctionne, mais il vaut mieux retarder l'ajout de fonctionnalités au moment du `hook` `init`

```php
<?php
/**
 * Plugin Name: Mon Plugin
 */

function cb_mon_shortcode() 
{
    return date("Y-m-d H:i:s");
}

function cb_init ()
{
    add_shortcode( 'mon_shortcode', 'cb_mon_shortcode' );

}

add_action( 'init', 'cb_init' );

```

## Créer un bloc

* https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/

### /mon-plugin/blocks/mon-bloc/

* Comme une extension peut proposer plusieurs blocs, on va créer un dossier pour chaque bloc.
* Dans le dossier de votre extension, créer un dossier pour votre bloc
  * /wp-content/plugins/mon-plugin/blocks/mon-bloc/

### /mon-plugin/blocks/mon-bloc/block.json

* Dans le dossier de votre bloc, créer un fichier PHP pour votre bloc

    * /wp-content/plugins/mon-plugin/blocks/mon-bloc/block.json
    
    * et ajouter le code suivant :
    
```json
{
    "apiVersion": 3,
    "name": "meetup/mon-bloc",
    "title": "Mon Bloc",
    "category": "widgets",
    "icon": "smiley",
    "editorScript": "file:./block.js",
}
```
* note: le format JSON ne permeyt pas d'écrire des fonctions JS, il faut donc fournir le code JS dans un fichier séparé `block.js`


### /mon-plugin/blocks/mon-bloc/block.js

* Créer un fichier JS pour votre bloc
  * /wp-content/plugins/mon-plugin/blocks/mon-bloc/block.js
  * et ajouter le code suivant :

```js
( function ( blocks, element ) {
    var el = element.createElement;

    // WARNING: utiliser le même nom que dans block.json
    blocks.registerBlockType( 'meetup/mon-bloc', {
        edit: function () {
            return el( 'p', {}, 'Hello World (from the editor).' );
        },
        save: function () {
            return el( 'p', {}, 'Hola mundo (from the frontend).' );
        },
    } );
} )( window.wp.blocks, window.wp.element );

```

* Note: WP va charger le fichier `block.js` dans l'éditeur 
* WP a besoin d'un fichier `block.asset.php` pour charger les dépendances JS du fichier `block.js`

### /mon-plugin/blocks/mon-bloc/block.asset.php

* Créer un fichier PHP
* /wp-content/plugins/mon-plugin/blocks/mon-bloc/block.asset.php
* et ajouter le code suivant :

```php
<?php

return
    array(
        'dependencies' =>
        array(
            'wp-blocks',
            'wp-element',
            'wp-polyfill'
        ),
        'version' => '0.1'
    );

```

* Ce fichier est utilisé pour charger les dépendances JS du fichier block.js
  * (note: comme le fichier js s'appelle `block.js` alors le fichier asset doit s'appeler `block.asset.php`)

### /mon-plugin/blocks/mon-bloc/register.php

* Créer un fichier PHP 
* /wp-content/plugins/mon-plugin/blocks/mon-bloc/register.php
* et ajouter le code suivant :

```php
<?php

register_block_type( __DIR__ );

```

### /mon-plugin/index.php

* Dans le fichier mon-plugin/index.php
* Ajouter le code suivant :

```php
<?php
/**
 * Plugin Name: Mon Plugin
 */

function cb_mon_shortcode() 
{
    return date("Y-m-d H:i:s");
}

function cb_init ()
{
    add_shortcode( 'mon_shortcode', 'cb_mon_shortcode' );

    include __DIR__ . '/mon-bloc/register.php';
}

add_action( 'init', 'cb_init' );


```

* Ca y'est votre bloc est disponible dans l'éditeur !

### Block dynamique

Pour rendre le bloc dynamique, il suffit de rajouter une fonction caalback dans le fichier `register.php`, avec la clé `render_callback`.

```php
<?php

register_block_type( __DIR__, [
    "render_callback" => function () {
        return date("Y-m-d H:i:s");
    }
] );

```

