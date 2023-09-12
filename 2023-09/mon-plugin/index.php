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


