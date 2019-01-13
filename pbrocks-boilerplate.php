<?php
/**
 * Plugin Name: PBrocks Boilerplate
 * Plugin URI: https://bitbucket.org/pbrocks/pbrocks-boilerplate
 * Author: pbrocks
 * Author URI: https://bitbucket.org/pbrocks
 * License: GPL-2.0
 * Version: 1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require 'blocks/src/blocks.php';

add_action( 'init', 'initialize_pbrocks_boilerplate' );
function initialize_pbrocks_boilerplate() {
	wp_enqueue_style( 'pbrocks-boilerplate-style', plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ), [ 'wp-blocks' ], time() );
	wp_enqueue_style( 'pbrocks-boilerplate-edit-style', plugins_url( '/blocks/dist/blocks.editor.build.css', __FILE__ ), [ 'wp-edit-blocks' ], time() );
}


/**
 * Add PMPro block category
 */
function create_pbrocks_boilerplate_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'pbrocks-boilerplate',
				'title' => __( 'PBrocks Boilerplate', 'pbrocks-boilerplate' ),
			),
		)
	);
}
add_filter( 'block_categories', 'create_pbrocks_boilerplate_panel', 10, 2 );

