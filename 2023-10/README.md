# ACF: Advanced Custom Fields & Post Types

* https://www.advancedcustomfields.com/
* Extension Freemium
    * licence gratuite
    * licence pro (abonnement annuel)
      * https://www.advancedcustomfields.com/pro/#pricing-table
      * les "early adopters" ont une licence à vie

## Documentation

* https://www.advancedcustomfields.com/resources/

## WordPress: Post Metadata et Posts Types

* WP est devenu en 20 ans le CMS le plus populaire (+40% des sites)
* Ecosystème d'extensions très riche.
  * https://wordpress.org/plugins/

### Quel est son secret ?!

* WordPress est construit avec du code PHP et une base de données SQL.
* Le code PHP et les tables SQL sont prévues pour être personnalisables/extensibles.

### Custom Fields / Post Metadata
* Dans WordPress, les posts et les pages peuvent avoir des champs personnalisés
  * `Post Metadata`
  * Clé / Valeur (meta_key / meta_value )
  * https://developer.wordpress.org/plugins/metadata/managing-post-metadata/

### Post Types

* Dans WordPress, les `pages` et les `posts` (articles) 
  * sont stockées dans une même table SQL
  * différenciées par la colonne `post_type` 
  * Il est possible de créer des `post types` personnalisés

## ACF: Advanced Custom Fields

* Extension disponible (depuis 2011)
* https://wordpress.org/plugins/advanced-custom-fields/#developers
* https://www.advancedcustomfields.com/changelog/
  
## Custom Fields

* Champs personnalisés
  * WordPress: Post Meta
* Enrichir les pages/posts avec des infos supplémentaires
  * Très flexible: on peut paramétrer 
  * suivant les catégories, les tags, etc...
* https://www.advancedcustomfields.com/resources/
  * email, password, text, textarea, url, 
  * number, range
  * button group
  * checkbox, radio, select, true/false
  * date picker, date time picker, time picker
  * color picker
  * file, image, gallery
  * wysiwyg editor
  * google map
  * oembed
  * repeater
  * flexible content
  * clone
  * etc...
  * 


## Post Types

* https://www.advancedcustomfields.com/resources/post-types-and-taxonomies/
* Depuis ACF 6.1 (Juin 2022)
* https://www.advancedcustomfields.com/blog/acf-6-1-0-released/
  
* Types de contenus
* Pour aller au delà des pages et des posts (articles)
* utilisation interne ou publique
  * SEO: url préfixée avec le nom du post type
  * exemple: https://monsite.com/mes-produits/mon-produit-a
  * exemple: https://monsite.com/mes-produits/mon-produit-b 

* ATTENTION: choisir si le post type sera `public` ou `privé`
* Pour cacher les post types privés...
  * Ne pas sauver les posts avec le statut `publish`
  * Sauver les posts avec le statut `private` ou autre
  * option URLs: `No Permalink`
  * option: `exclude from search`
  * option: `Publicly Queryable`

### Idées de Post Types

* Tasks
* Products
* Services
* Contact Form
* Newsletter Form


## shortcodes

* https://www.advancedcustomfields.com/resources/shortcode/
  
```
[acf field="field_name" post_id="123"]

```

* [acf] : affiche les champs personnalisés d'un post

## PHP functions

* https://www.advancedcustomfields.com/resources/
* `the_field()`
* `get_field()`
* `get_fields()`

## ACF Blocks (PRO)

* (PRO)
* https://www.advancedcustomfields.com/resources/blocks/
* Dev en cours...
* https://www.advancedcustomfields.com/blog/

### Options Pages (PRO)

* Options Pages (PRO)
* https://www.advancedcustomfields.com/resources/options-page/

## ACF Forms

* Il est possible de créer des formulaires publics
  * formulaire de contact
* https://www.advancedcustomfields.com/resources/create-a-front-end-form/
* https://www.advancedcustomfields.com/resources/acf_register_form/

### Hooks

* https://www.advancedcustomfields.com/resources/acf-validate_save_post/
* https://www.advancedcustomfields.com/resources/acf-pre_save_post/
* https://www.advancedcustomfields.com/resources/acf-save_post/

### plugin example

```php
<?php

/**
 * Plugin Name: My Meetup ACF
 */


// https://www.advancedcustomfields.com/resources/acf_register_form/
add_action('acf/init', 'my_acf_form_init');

function my_acf_form_init()
{
    $form_id = 'new-contact';
    $post_type = 'contact'; // create the post type contact before...
    $field_groups = [
        'group_65251dff731b9', // copy the Keys from the field group
    ];
    $post_title = "contact " . date("Y-m-d H:i:s");
    $submit_value = "SEND";
    $updated_message = "Thank you for your submission!";

    // Check function exists.
    if (function_exists('acf_register_form')) {

        // Register form.
        acf_register_form(array(
            'id'       => $form_id,  // unique as called in acf_form('new-contact')
            'post_id'  => 'new_post',
            'new_post' => array(
                'post_title' => $post_title,
                'post_type'   => $post_type,
                'post_status' => 'private'
            ),
            'field_groups' => $field_groups,
            "submit_value" => $submit_value,
            "updated_message" => $updated_message,
        ));

        // will be called when the form is submitted
        add_action('acf/save_post', 'my_save_post');

        // will show the form when the shortcode is used
        add_shortcode('my_acf_form', 'my_acf_form_shortcode');
    }
}

function my_save_post($post_id)
{
    $target_post_type = 'event';
    // vars
    $post = get_post($post_id);
    if ($post) {
        $post_type = $post->post_type;
        if ($post_type != $target_post_type) {
            return;
        }
        // bail early if editing in admin
        if (is_admin()) {
            return;
        }

        // ADD YOUR CODE...

        // EXAMPLE 1: send email
        // // get custom fields (field group exists for content_form)
        // $name = get_field('name', $post_id);
        // $email = get_field('email', $post_id);

        // // email data
        // $to = 'contact@website.com';
        // $headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n";
        // $subject = $post->post_title;
        // $body = $post->post_content;

        // wp_mail($to, $subject, $body, $headers);

        // EXAMPLE 2: save file to this __DIR__
        // $file = __DIR__ . "/event-$post_id.json";
        // file_put_contents($file, json_encode($_POST));

    }
}

// add a shortcode to display the form
function my_acf_form_shortcode($atts)
{
    ob_start();

    if (function_exists('acf_form')) {
        acf_form_head();
        acf_form('new-contact');  // id key when calling acf_register_form()
    }

    return ob_get_clean();
}

```



