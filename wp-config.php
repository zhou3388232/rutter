<?php
/** Enable W3 Total Cache */
// define('WP_CACHE', true); // Added by W3 Total Cache

// / ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'rutter');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '1q2w3e4r');

/** MySQL hostname */
define('DB_HOST', 'mysql');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         'H>M)GYI-5@9rA?o6E1A,GVZ<CYZIDCz8Ws4ix5I7,1j&5jE2NSVd,rrX& ? |Q9Y');
define('SECURE_AUTH_KEY',  '!&rBzn0R+~+2)XX`X5~m}z-.Pk~+U6Ig{Dj~aVUm^<PGB6MT!Dh7Pp9yaTk)iv33');
define('LOGGED_IN_KEY',    '#b^T4%X4=:{X9.&8C-/[Em,V:FNT#z4#wR1_:4>E4|QlqY}|qTpR[P[=(G^-|4qX');
define('NONCE_KEY',        'l|kC0?VKhM$m7iS_^EwYA*u+b0Gr-4B+]1/I@2+E6<Tl|vcY:{7Qwc*ya3r0.p4Q');
define('AUTH_SALT',        '-*DuYVuYFT`u,~J[Cfy[J4j(oo*-t 5{w?kpeVS%nlkuMTCJfJZQ<D;bN vSuE>?');
define('SECURE_AUTH_SALT', '7<sc8i_2oKSBD-8N1431+-g!b6X_RNPR(/c.D>,070]NG7CBK>N8|tiLj-+MUzyA');
define('LOGGED_IN_SALT',   '~xafqZjk1C?g?B%#|{-h^#CSFyCxSIQ#hK7S$A},JZ+>~sn]I8i,X{+I~!<|-yDi');
define('NONCE_SALT',       'eEgmrzg.ACHQ=BBnIWPbR}a9vvOY2?rFzx-W1:VC.BX6H0pM)e)f>y_i-ht{#E#-');


$table_prefix = 'wp_';

define('WP_DEBUG', false);

define('WP_ZH_CN_ICP_NUM', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
// define('FS_METHOD', 'direct');
