<?php
/*
This file tracks basic user actions to improve the user experience.
*/

function mm_ux_log( $args = array() ) {
	$url = "https://ssl.google-analytics.com/collect";
	
	global $title;

	if ( empty( $_SERVER['REQUEST_URI'] ) ) {
		return;
	}

	$path = explode( 'wp-admin', $_SERVER['REQUEST_URI'] );

	if ( empty( $path ) || empty( $path[1] ) ) {
		$path = array( "", " " );
	}
	
	$defaults = array(
		'v'		=> '1',
		'tid'	=> 'UA-39246514-3',
		't'		=> 'pageview', //hit type
		'cid' 	=> md5( get_option( 'siteurl' ) ),
		'uid'	=> md5( get_option( 'siteurl' ) . get_current_user_id() ), //user
		'cn'	=> 'mojo_wp_plugin', //campaign name
		'cs'	=> 'mojo_wp_plugin', //campaign source
		'cm'	=> 'plugin_admin', //campaign medium
		'ul'	=> get_locale(), //language
		'dp'	=> $path[1], //path
		'sc'	=> '', //start or end
		'ua'	=> $_SERVER['HTTP_USER_AGENT'],
		'dl'	=> $path[1],
		'dh'	=> get_option( 'siteurl' ),
		'dt'	=> $title, //title
		'ec'	=> '', //event category
		'ea'	=> '', //event action
		'el'	=> '', //event label
		'ev'	=> ''  //event value
	);

	$test = get_transient( 'mm_test', '' );

	if( isset( $test['key'] ) && isset( $test['name'] ) ) {
		$defaults['cm'] = $defaults['cm'] . "_" . $test['name'] . "_" . $test['key'];
	}

	if( isset( $_SERVER['REMOTE_IP'] ) ) {
		$defaults['uip'] = $_SERVER['REMOTE_IP'];
	}

	$params = wp_parse_args( $args, $defaults );
	$query = http_build_query( array_filter( $params ) );
	$args = array(
		'body'		=> $query,
		'method'	=> 'POST',
		'blocking'	=> false
	);
	wp_remote_post( $url, $args );
}
add_action( 'admin_footer', 'mm_ux_log', 90 );

function mm_ux_log_start() {
	$session = array(
		'sc'	=> 'start'
	);
	mm_ux_log( $session );
	$event = array(
		't' => 'event',
		'ec' => 'user_action',
		'ea' => 'login',
	);
	mm_ux_log( $event );
}
add_action( 'wp_login', 'mm_ux_log_start' );

function mm_ux_log_end() {
	$session = array(
		'sc'	=> 'end'
	);
	mm_ux_log( $session );
	$user = get_user_by( 'id', get_current_user_id() );
	$role = $user->roles;
	$event = array(
		't' => 'event',
		'ec' => 'user_action',
		'ea' => 'logout',
		'el' => $role[0],
	);
	mm_ux_log( $event );
}
add_action( 'wp_logout', 'mm_ux_log_end' );

function mm_ux_log_deactivated() {
	$event = array(
		't'		=> 'event',
		'ec'	=> 'plugin_status',
		'ea'	=> 'deactivated',
		'el'	=> 'Install date: ' . get_option( 'mm_install_date', date( 'M d, Y' ) ),
	);
	mm_ux_log( $event );
}

function mm_ux_log_activated() {
	$event = array(
		't'		=> 'event',
		'ec'	=> 'plugin_status',
		'ea'	=> 'activated',
		'el'	=> 'Install date: ' . get_option( 'mm_install_date', date( 'M d, Y' ) ),
	);
	mm_ux_log( $event );
}
$plugin_dir = plugin_dir_path( dirname( __FILE__ ) );
register_activation_hook( $plugin_dir . "mojo-marketplace.php", 'mm_ux_log_activated' );
register_deactivation_hook( $plugin_dir . "mojo-marketplace.php", 'mm_ux_log_deactivated' );

function mm_ux_log_theme_preview() {
	if( isset( $_GET['page'] ) && $_GET['page'] == "mojo-theme-preview" ) {
		global $theme;
		if( ! isset( $_GET['details'] ) ) {
			$event = array(
				't'		=> 'event',
				'ec'	=> 'theme_preview',
				'ea'	=> esc_attr( $_GET['items'] ),
				'el'	=> $theme->name
			);
			mm_ux_log( $event );
		} else {
			$event = array(
				't'		=> 'event',
				'ec'	=> 'theme_details',
				'ea'	=> esc_attr( $_GET['items'] ),
				'el'	=> $theme->name
			);
			mm_ux_log( $event );
		}
	}
}
add_action( 'admin_footer', 'mm_ux_log_theme_preview' );

function mm_ux_log_theme_category_org() {
	if( isset( $_GET['browse'] ) ) {
		$category = esc_attr( $_GET['browse'] );
	} else {
		$category = "featured";
	}
	$event = array(
		't'		=> 'event',
		'ec'	=> 'theme_category',
		'ea'	=> 'org',
		'el'	=> $category
	);
	mm_ux_log( $event );
}
add_action( 'admin_footer-theme-install.php', 'mm_ux_log_theme_category_org' );

function mm_ux_log_theme_category_mojo() {
	if( isset( $_GET['page'] ) && $_GET['page'] == "mojo-themes" ) {
		if( isset( $_GET['items'] ) ) {
			$category = esc_attr( $_GET['items'] );
		} else {
			$category = "popular";
		}

		$event = array(
			't'		=> 'event',
			'ec'	=> 'theme_category',
			'ea'	=> 'mojo',
			'el'	=> $category
		);
		mm_ux_log( $event );
	}
}
add_action( 'admin_footer', 'mm_ux_log_theme_category_mojo' );

function mm_ux_log_plugin_version() {
	$plugin_dir = plugin_dir_path( dirname( __FILE__ ) );
	$plugin = get_plugin_data( $plugin_dir . 'mojo-marketplace.php' );
	$event = array(
		't'		=> 'event',
		'ec'	=> 'scheduled',
		'ea'	=> 'plugin_version',
		'el'	=> $plugin['Version']
	);
	$events = get_option( 'mm_cron', array() );
	$events['daily'][$event['ea']] = $event;
	update_option( 'mm_cron', $events );
}
add_action( 'admin_footer-index.php', 'mm_ux_log_plugin_version' );

function mm_ux_log_wp_version() {
	global $wp_version;
	$event = array(
		't'		=> 'event',
		'ec'	=> 'scheduled',
		'ea'	=> 'wp_version',
		'el'	=> $wp_version
	);
	$events = get_option( 'mm_cron', array() );
	$events['weekly'][$event['ea']] = $event;
	update_option( 'mm_cron', $events );
}
add_action( 'admin_footer-index.php', 'mm_ux_log_wp_version' );

function mm_ux_log_plugin_count() {
	$plugins = get_option( 'active_plugins' );
	$event = array(
		't'		=> 'event',
		'ec'	=> 'scheduled',
		'ea'	=> 'plugin_count',
		'el'	=> count( $plugins )
	);
	$events = get_option( 'mm_cron', array() );
	$events['monthly'][$event['ea']] = $event;
	update_option( 'mm_cron', $events );
}
add_action( 'admin_footer-index.php', 'mm_ux_log_plugin_count' );

function mm_ux_log_theme_count() {
	$theme_root = get_theme_root();
	$files = glob( $theme_root . "/*" );
	$count = 0;
	foreach ( $files as $file ) {
		if( is_dir( $file ) ) {
			$count++;
		}
	}
	$event = array(
		't'		=> 'event',
		'ec'	=> 'scheduled',
		'ea'	=> 'theme_count',
		'el'	=> $count
	);
	$events = get_option( 'mm_cron', array() );
	$events['monthly'][$event['ea']] = $event;
	update_option( 'mm_cron', $events );
}
add_action( 'admin_footer-index.php', 'mm_ux_log_theme_count' );

function mm_ux_log_current_theme() {
	$theme = get_option( 'stylesheet' );
	$event = array(
		't'		=> 'event',
		'ec'	=> 'scheduled',
		'ea'	=> 'theme_count',
		'el'	=> $theme
	);
	$events = get_option( 'mm_cron', array() );
	$events['monthly'][$event['ea']] = $event;
	update_option( 'mm_cron', $events );
}
add_action( 'admin_footer-index.php', 'mm_ux_log_current_theme' );

function mm_ux_log_scheduled_events_weekly() {
	$events = get_option( 'mm_cron', array( 'weekly' => array() ) );
	$weekly_events = $events['weekly'];
	foreach ( $weekly_events as $event => $details ) {
		mm_ux_log( $details );
	}
}
add_action( 'mm_cron_weekly', 'mm_ux_log_scheduled_events_weekly' );

function mm_ux_log_scheduled_events_monthly() {
	$events = get_option( 'mm_cron', array( 'monthly' => array() ) );
	$monthly_events = $events['monthly'];
	foreach ( $monthly_events as $event => $details ) {
		mm_ux_log( $details );
	}
}
add_action( 'mm_cron_monthly', 'mm_ux_log_scheduled_events_monthly' );

function mm_ux_log_scheduled_events_twicedaily() {
	$events = get_option( 'mm_cron', array( 'twicedaily' => array() ) );
	$twicedaily_events = $events['twicedaily'];
	foreach ( $twicedaily_events as $event => $details ) {
		mm_ux_log( $details );
	}
}
add_action( 'mm_cron_twicedaily', 'mm_ux_log_scheduled_events_twicedaily' );

function mm_ux_log_scheduled_events_daily() {
	$events = get_option( 'mm_cron', array( 'daily' => array() ) );
	$daily_events = $events['daily'];
	foreach ( $daily_events as $event => $details ) {
		mm_ux_log( $details );
	}
}
add_action( 'mm_cron_daily', 'mm_ux_log_scheduled_events_daily' );

function mm_ux_log_scheduled_events_hourly() {
	$events = get_option( 'mm_cron', array( 'hourly' => array() ) );
	$hourly_events = $events['hourly'];
	foreach ( $hourly_events as $event => $details ) {
		mm_ux_log( $details );
	}
}
add_action( 'mm_cron_hourly', 'mm_ux_log_scheduled_events_hourly' );

function mm_ux_log_plugin_search() {
	if( isset( $_GET['tab'] ) && isset( $_GET['s'] ) ) {
		$event = array(
			't'		=> 'event',
			'ec'	=> 'user_action',
			'ea'	=> 'plugin_search',
			'el'	=> esc_attr( $_GET['s'] )
		);
		mm_ux_log( $event );
	}
}
add_action( 'admin_footer-plugin-install.php', 'mm_ux_log_plugin_search' );

function mm_ux_log_content_status( $new_status, $old_status, $post ) {
	$status = array( 'draft', 'pending', 'publish', 'new', 'future', 'private', 'trash' );
	if ( $old_status !== $new_status && in_array( $new_status, $status ) ) {
		$event = array(
			't'		=> 'event',
			'ec'	=> 'user_action',
			'ea'	=> 'content_status',
			'el'	=> $new_status
		);
		mm_ux_log( $event );
	}
	//first post is 3 beause of the example post and page.
	if( $post->ID == 3 && $old_status != 'publish' && $new_status == 'publish' ) {
		$event = array(
			't'		=> 'event',
			'ec'	=> 'user_action',
			'ea'	=> 'first_post',
			'el'	=> $post->post_type
		);
		mm_ux_log( $event );
	}
}
add_action( 'transition_post_status', 'mm_ux_log_content_status', 10, 3 );

function mm_ux_log_comment_status( $new_status, $old_status, $comment ) {
	$status = array( 'deleted', 'approved', 'unapproved', 'spam' );
	if ( $old_status !== $new_status && in_array( $new_status, $status ) ) {
		$event = array(
			't'		=> 'event',
			'ec'	=> 'user_action',
			'ea'	=> 'comment_status',
			'el'	=> $new_status
		);
		mm_ux_log( $event );
	}
}
add_action( 'transition_comment_status', 'mm_ux_log_comment_status', 10, 3 );

/**
 * Here are some log events that make use of the endpoint.
 */
function mm_ux_log_buy_now_clicks_category() {
	if( isset( $_GET['page'] ) && ( $_GET['page'] == 'mojo-themes' || $_GET['page'] == 'mojo-services' ) ) {
		?>
		<script type="text/javascript">
			jQuery( 'form.buy_now' ).submit( function() {
				var item = jQuery( this ).attr('class');
				var endpoint = "<?php echo MM_BASE_URL . 'e.php'; ?>";
				var single_item = item.replace( 'buy_now ', '' );
				var parent = jQuery( this ).parent( '.mojo-theme-actions' );
				var value = parent.children( '.price' ).text();
				var nonce = "<?php echo wp_create_nonce( 'mm_nonce-buy_now_click' ); ?>";
				jQuery.ajax( endpoint + "?action=buy_now_click&item=" + single_item + "&value=" + value + "&nonce=" + nonce );
			} );
		</script>
		<?php
	}
}
add_action( 'admin_footer', 'mm_ux_log_buy_now_clicks_category' );

function mm_ux_log_buy_now_clicks_preview() {
	if( isset( $_GET['page'] ) && $_GET['page'] == "mojo-theme-preview" ) {
		global $theme;
		?>
		<script type="text/javascript">
			jQuery( 'form .mm-btn-primary' ).click( function() {
				var item = "item_preview_<?php echo mm_title_to_slug( $theme->name ); ?>";
				var endpoint = "<?php echo MM_BASE_URL . 'e.php'; ?>";
				var value = "<?php echo $theme->prices->single_domain_license; ?>";
				var nonce = "<?php echo wp_create_nonce( 'mm_nonce-buy_now_click' ); ?>";
				jQuery.ajax( endpoint + "?action=buy_now_click&item=" + item + "&value=" + value + "&nonce=" + nonce );
			} );
		</script>
		<?php
	}
}
add_action( 'admin_footer', 'mm_ux_log_buy_now_clicks_preview' );

function mm_ux_log_service_outbound() {
	if( isset( $_GET['page'] ) && $_GET['page'] == 'mojo-services' ) {
		$event = array(
			't'		=> 'event',
			'ec'	=> 'user_action',
			'ea'	=> 'link_click',
			'el'	=> 'mojo_services_outbound'
		);
		mm_ux_log( $event );
	}
}
add_action( 'admin_init', 'mm_ux_log_service_outbound', 5 );

function mm_endpoint_filter_buy_now_click( $approved_actions ) {
	$approved_actions[] = "buy_now_click";
	return $approved_actions;
}
add_filter( 'mm_approved_endpoint_action', 'mm_endpoint_filter_buy_now_click' );

function mm_endpoint_action_buy_now_click() {
	if( wp_verify_nonce( $_GET['nonce'], 'mm_nonce-buy_now_click' ) ) {
		$event = array(
				't'		=> 'event',
				'ec'	=> 'user_action',
				'ea'	=> 'buy_now_click',
				'el'	=> esc_attr( $_GET['item'] ),
				'ev'	=> esc_attr( str_replace( '$', '', $_GET['value'] ) )
			);
		mm_ux_log( $event );
	} else {
		wp_die( 'Invalid Nonce' );
	}
}
add_action( 'mm_endpoint-buy_now_click', 'mm_endpoint_action_buy_now_click' );

function mm_ux_log_browse_all_themes() {
	if( isset( $_GET['page'] ) && $_GET['page'] == "mojo-themes" ) {
		?>
		<script type="text/javascript">
			jQuery( 'h2 .add-new-h2' ).click( function() {
				var endpoint = "<?php echo MM_BASE_URL . 'e.php'; ?>";
				var nonce = "<?php echo wp_create_nonce( 'mm_nonce-browse_all_themes' ); ?>";
				jQuery.ajax( endpoint + "?action=browse_all_themes&nonce=" + nonce );
			} );
		</script>
		<?php
	}
}
add_action( 'admin_footer', 'mm_ux_log_browse_all_themes' );

function mm_endpoint_filter_browse_all_themes( $approved_actions ) {
	$approved_actions[] = "browse_all_themes";
	return $approved_actions;
}
add_filter( 'mm_approved_endpoint_action', 'mm_endpoint_filter_browse_all_themes' );

function mm_endpoint_action_browse_all_themes() {
	if( wp_verify_nonce( $_GET['nonce'], 'mm_nonce-browse_all_themes' ) ) {
		$event = array(
			't'		=> 'event',
			'ec'	=> 'user_action',
			'ea'	=> 'link_click',
			'el'	=> 'browse_all_themes'
		);
		mm_ux_log( $event );
	}
}
add_action( 'mm_endpoint-browse_all_themes', 'mm_endpoint_action_browse_all_themes' );

function mm_ux_log_btn_click() {
	if( isset( $_GET['page'] ) && $_GET['page'] == "mojo-themes" ) {
		if( isset( $_GET['btn'] ) ) {
			$event = array(
				't'		=> 'event',
				'ec'	=> 'user_action',
				'ea'	=> 'link_click',
				'el'	=> esc_attr( $_GET['btn'] )
			);
			mm_ux_log( $event );
		}
	}
}
add_action( 'admin_footer', 'mm_ux_log_btn_click' );

function mm_jetpack_log_photon_enabled() {
	$event = array(
		't'		=> 'event',
		'ec'	=> 'jetpack_event',
		'ea'	=> 'module_enabled',
		'el'	=> 'photon'
	);
	mm_ux_log( $event );
}
add_action( 'jetpack_activate_module_photon', 'mm_jetpack_log_photon_enabled' );

function mm_jetpack_log_likes_enabled() {
	$event = array(
		't'		=> 'event',
		'ec'	=> 'jetpack_event',
		'ea'	=> 'module_enabled',
		'el'	=> 'likes'
	);
	mm_ux_log( $event );
}
add_action( 'jetpack_activate_module_likes', 'mm_jetpack_log_likes_enabled' );

function mm_jetpack_log_publicize_enabled() {
	$event = array(
		't'		=> 'event',
		'ec'	=> 'jetpack_event',
		'ea'	=> 'module_enabled',
		'el'	=> 'publicize'
	);
	mm_ux_log( $event );
}
add_action( 'jetpack_activate_module_publicize', 'mm_jetpack_log_publicize_enabled' );

function mm_jetpack_log_publicized( $submit_post, $post_id, $service_name, $connection ){
	$event = array(
		't'		=> 'event',
		'ec'	=> 'jetpack_event',
		'ea'	=> 'publicized',
		'el'	=> $service_name
	);
	mm_ux_log( $event );
}
add_action( 'publicize_save_meta', 'mm_jetpack_log_publicized', 10, 4 );