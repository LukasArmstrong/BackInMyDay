<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dBackInMyDay' );

/** MySQL database username */
define( 'DB_USER', 'user_Lukas' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', '192.168.3.63:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'op=j3`e/_>Ry?bT^Y3JDI?(Myps5DFm2x<0gxNTQYO3$@L,:!,ci`7.nMGdH-KCL' );
define( 'SECURE_AUTH_KEY',  ':<HLzG_|R~ v;sa%/]4uIw9rz{y3WKRTf7SzOmqCa:/[7L@cx?$ty0~|WNq|<eq:' );
define( 'LOGGED_IN_KEY',    'g0@_o~xq@%pOLCo/a,kY/ySu)pBQ0wclgGI&}q]qe#E=tIsJgC}%}g7[Bx1W4]Q7' );
define( 'NONCE_KEY',        'f:(eS$1;1JgUn$u6&/@;I+v<&isNOFt+Pq;A:,dV+~]62{ 0vD`}ShNCe{)!a^b[' );
define( 'AUTH_SALT',        'k$7ant!?58n(wg3E.fzJ{W?PFyqc>ndp6;PGIp,Y5j^5wH$h[(OnIpl>^uW:)H[b' );
define( 'SECURE_AUTH_SALT', '@|B.,(rov%sE(kB/w:=Exd}>eH#R)e4|#<0-jrj^s~5<QOl5@F<|D5G#YL#~h=0q' );
define( 'LOGGED_IN_SALT',   '{{-945vGsI[_*PfE&Dj+wrr@vyBBm:Q~`aZS(OZU(Ib]:+ uIpKq#t{wtIS]2vn_' );
define( 'NONCE_SALT',       '1XbhoS|G6t,#|*&M`n-Mt:imu1ayrkZwS#67t#S6+i0S/Z>|x.aIVDdAla?i;>76' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
