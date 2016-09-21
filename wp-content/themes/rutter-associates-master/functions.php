<?php 
register_nav_menus();
//摘要
function new_excerpt_more($more) {
 return '...';
 }
add_filter('excerpt_more', 'new_excerpt_more');
function new_excerpt_length($length) {
return 10;
}
add_filter("excerpt_length", "new_excerpt_length");
?>
<?php
add_theme_support( 'post-thumbnails' );

function cmp_breadcrumbs() {
    $delimiter = '»'; // 分隔符
    $before = '<span class="current">'; // 在当前链接前插入
    $after = '</span>'; // 在当前链接后插入
    if ( !is_home() && !is_front_page() || is_paged() ) {
        echo '<div itemscope itemtype="http://schema.org/WebPage" id="crumbs">'.__( '' , 'cmp' );
        global $post;
        $homeLink = home_url();
        echo ' <a itemprop="breadcrumb" href="' . $homeLink . '">' . __( 'Home' , 'cmp' ) . '</a> ' . $delimiter . ' ';
        if ( is_category() ) { // 分类 存档
            global $wp_query;
            $cat_obj = $wp_query->get_queried_object();
            $thisCat = $cat_obj->term_id;
            $thisCat = get_category($thisCat);
            $parentCat = get_category($thisCat->parent);
            if ($thisCat->parent != 0){
                $cat_code = get_category_parents($parentCat, TRUE, ' ' . $delimiter . ' ');
                echo $cat_code = str_replace ('<a','<a itemprop="breadcrumb"', $cat_code );
            }
            echo $before . '' . single_cat_title('', false) . '' . $after;
        } elseif ( is_day() ) { // 天 存档
            echo '<a itemprop="breadcrumb" href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
            echo '<a itemprop="breadcrumb"  href="' . get_month_link(get_the_time('Y'),get_the_time('m')) . '">' . get_the_time('F') . '</a> ' . $delimiter . ' ';
            echo $before . get_the_time('d') . $after;
        } elseif ( is_month() ) { // 月 存档
            echo '<a itemprop="breadcrumb" href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
            echo $before . get_the_time('F') . $after;
        } elseif ( is_year() ) { // 年 存档
            echo $before . get_the_time('Y') . $after;
        } elseif ( is_single() && !is_attachment() ) { // 文章
            if ( get_post_type() != 'post' ) { // 自定义文章类型
                $post_type = get_post_type_object(get_post_type());
                $slug = $post_type->rewrite;
                echo '<a itemprop="breadcrumb" href="' . $homeLink . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a> ' . $delimiter . ' ';
                echo $before . get_the_title() . $after;
            } else { // 文章 post
                $cat = get_the_category(); $cat = $cat[0];
                $cat_code = get_category_parents($cat, TRUE, ' ' . $delimiter . ' ');
                if($cat->cat_ID===21){echo $before . get_the_title() . $after;}else{
                echo $cat_code = str_replace ('<a','<a itemprop="breadcrumb"', $cat_code );
                echo $before . get_the_title() . $after;
                }
            }
        } elseif ( !is_single() && !is_page() && get_post_type() != 'post' ) {
            $post_type = get_post_type_object(get_post_type());
            echo $before . $post_type->labels->singular_name . $after;
        } elseif ( is_attachment() ) { // 附件
            $parent = get_post($post->post_parent);
            $cat = get_the_category($parent->ID); $cat = $cat[0];
            echo '<a itemprop="breadcrumb" href="' . get_permalink($parent) . '">' . $parent->post_title . '</a> ' . $delimiter . ' ';
            echo $before . get_the_title() . $after;
        } elseif ( is_page() && !$post->post_parent ) { // 页面
            echo $before . get_the_title() . $after;
        } elseif ( is_page() && $post->post_parent ) { // 父级页面
            $parent_id  = $post->post_parent;
            $breadcrumbs = array();
            while ($parent_id) {
                $page = get_page($parent_id);
                $breadcrumbs[] = '<a itemprop="breadcrumb" href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a>';
                $parent_id  = $page->post_parent;
            }
            $breadcrumbs = array_reverse($breadcrumbs);
            foreach ($breadcrumbs as $crumb) echo $crumb . ' ' . $delimiter . ' ';
            echo $before . get_the_title() . $after;
        } elseif ( is_search() ) { // 搜索结果
            echo $before ;
            printf( __( 'Search Results for: %s', 'cmp' ),  get_search_query() );
            echo  $after;
        } elseif ( is_tag() ) { //标签 存档
            echo $before ;
            printf( __( 'Tag Archives: %s', 'cmp' ), single_tag_title( '', false ) );
            echo  $after;
        } elseif ( is_author() ) { // 作者存档
            global $author;
            $userdata = get_userdata($author);
            echo $before ;
            printf( __( 'Author Archives: %s', 'cmp' ),  $userdata->display_name );
            echo  $after;
        } elseif ( is_404() ) { // 404 页面
            echo $before;
            _e( 'Not Found', 'cmp' );
            echo  $after;
        }
        if ( get_query_var('paged') ) { // 分页
            if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() )
                echo sprintf( __( '( Page %s )', 'cmp' ), get_query_var('paged') );
        }
        echo '</div>';
    }
}
?>
<?php
/** widgets */
if( function_exists('register_sidebar') ) {
    register_sidebar(array(
        'name' => 'First_sidebar',
        'before_widget' => '',
        'after_widget' => '',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
    ));
    register_sidebar(array(
        'name' => 'Second_sidebar',
        'before_widget' => '',
        'after_widget' => '',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
    ));
    register_sidebar(array(
        'name' => 'Third_sidebar',
        'before_widget' => '',
        'after_widget' => '',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
    ));
    register_sidebar(array(
        'name' => 'Fourth_sidebar',
        'before_widget' => '',
        'after_widget' => '',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
    ));
}
?>
<?php
add_action('init', 'create_services_posttype');
function create_services_posttype()
{
  $labels = array(
    'name' => _x('Services', 'post type general name'),
    'singular_name' => _x('Service', 'post type singular name'),
    'add_new' => _x('Add New', 'Service'),
    'add_new_item' => __('Add New Service'),
    'edit_item' => __('Edit Service'),
    'new_item' => __('New Service'),
    'view_item' => __('View Services'),
    'search_items' => __('Search Services'),
    'not_found' =>  __('No Services found'),
    'not_found_in_trash' => __('No Services found in Trash'), 
    'parent_item_colon' => '',
    'menu_name' => 'Services'
 
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true, 
    'show_in_menu' => true, 
    'query_var' => true,
    'rewrite' => array('slug'=>'services'),
    'capability_type' => 'post',
    'has_archive' => true, 
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title','editor','author','thumbnail','excerpt','custom-fields')
  ); 
  register_post_type('services',$args);
}
?>
<?php 
function my_taxonomies_services() {
  $labels = array(
    'name'              => _x( 'Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Categories' ),
    'all_items'         => __( 'All Categories' ),
    'parent_item'       => __( 'Parent' ),
    'parent_item_colon' => __( 'Parent：' ),
    'edit_item'         => __( 'Edit Category' ),
    'update_item'       => __( 'Update Category' ),
    'add_new_item'      => __( 'Add New Category' ),
    'new_item_name'     => __( 'New Category' ),
    'menu_name'         => __( 'Categories' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'service_category', 'services', $args );
}
add_action( 'init', 'my_taxonomies_services', 0 );
?>
<?php
add_action('init', 'create_public_posttype');
function create_public_posttype()
{
  $labels = array(
    'name' => _x('Blocks', 'post type general name'),
    'singular_name' => _x('block', 'post type singular name'),
    'add_new' => _x('Add New', 'Block'),
    'add_new_item' => __('Add New Block'),
    'edit_item' => __('Edit Block'),
    'new_item' => __('New Block'),
    'view_item' => __('View Blocks'),
    'search_items' => __('Search Blocks'),
    'not_found' =>  __('No Blocks found'),
    'not_found_in_trash' => __('No Blocks found in Trash'), 
    'parent_item_colon' => '',
    'menu_name' => 'Blocks'
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true, 
    'show_in_menu' => true, 
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'has_archive' => true, 
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title','editor','author','thumbnail','excerpt','custom-fields')
  ); 
  register_post_type('public',$args);
}
?>
<?php
add_action('init', 'create_ourTeam_posttype');
function create_ourTeam_posttype()
{
  $labels = array(
    'name' => _x('Our Team', 'post type general name'),
    'singular_name' => _x('Our Team', 'post type singular name'),
    'add_new' => _x('Add New', 'Our Team'),
    'add_new_item' => __('Add New Our Team'),
    'edit_item' => __('Edit Our Team'),
    'new_item' => __('New Our Team'),
    'view_item' => __('View Our Team'),
    'search_items' => __('Search Our Team'),
    'not_found' =>  __('No Our Team found'),
    'not_found_in_trash' => __('No Our Team found in Trash'), 
    'parent_item_colon' => '',
    'menu_name' => 'Our Team'
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'has_archive' => true, 
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title','editor','author','thumbnail','excerpt','custom-fields')
  );
  register_post_type('Our Team',$args);
}
?>
<?php
add_action('init', 'create_Affiliates_posttype');
function create_Affiliates_posttype()
{
  $labels = array(
    'name' => _x('Affiliates', 'post type general name'),
    'singular_name' => _x('Affiliates', 'post type singular name'),
    'add_new' => _x('Add New', 'Affiliates'),
    'add_new_item' => __('Add New Affiliates'),
    'edit_item' => __('Edit Affiliates'),
    'new_item' => __('New Affiliates'),
    'view_item' => __('View Affiliates'),
    'search_items' => __('Search Affiliates'),
    'not_found' =>  __('No Affiliates found'),
    'not_found_in_trash' => __('No Affiliates found in Trash'), 
    'parent_item_colon' => '',
    'menu_name' => 'Affiliates'
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'has_archive' => true, 
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title','editor','author','thumbnail','excerpt','custom-fields')
  );
  register_post_type('Affiliates',$args);
}
?>
<?php
add_action('init', 'create_News_posttype');
function create_News_posttype()
{
  $labels = array(
    'name' => _x('News and insights', 'post type general name'),
    'singular_name' => _x('News and insights', 'post type singular name'),
    'add_new' => _x('Add New', 'News'),
    'add_new_item' => __('Add New News'),
    'edit_item' => __('Edit News'),
    'new_item' => __('New News'),
    'view_item' => __('View News'),
    'search_items' => __('Search News'),
    'not_found' =>  __('No News found'),
    'not_found_in_trash' => __('No News found in Trash'), 
    'parent_item_colon' => '',
    'menu_name' => 'News and insights'
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'has_archive' => true, 
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title','editor','author','thumbnail','excerpt','custom-fields')
  );
  register_post_type('news',$args);
}
?>
<?php
add_action('init', 'create_carousel_posttype');
function create_carousel_posttype()
{
  $labels = array(
    'name' => _x('Banners', 'post type general name'),
    'singular_name' => _x('Banners', 'post type singular name'),
    'add_new' => _x('Add New', 'Banners'),
    'add_new_item' => __('Add New Banners'),
    'edit_item' => __('Edit Banners'),
    'new_item' => __('New Banners'),
    'view_item' => __('View Banners'),
    'search_items' => __('Search Banners'),
    'not_found' =>  __('No Banners found'),
    'not_found_in_trash' => __('No Banners found in Trash'), 
    'parent_item_colon' => '',
    'menu_name' => 'Banners'
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'query_var' => true,
    'rewrite' => array('slug'=>'banners'),
    'capability_type' => 'post',
    'has_archive' => true, 
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title','editor','author','thumbnail','excerpt','custom-fields')
  );
  register_post_type('carousel',$args);
}
?>
<?php
add_action( 'init', 'boj_add_excerpts_to_pages' );
function boj_add_excerpts_to_pages() {
add_post_type_support( 'page', array( 'excerpt' ) );
}
?>