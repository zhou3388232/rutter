<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package aa
 * @subpackage ab
 * @since Aa 1.0
 */
?><!DOCTYPE html>
<html lang="en-US">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">

    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/reset.css" />
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/jquery.bxslider.css" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/tablet.css" type="text/css" media="(min-width: 768px) and (max-width: 959px)" />
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/phone.css" type="text/css" media="(max-width: 959px)" />
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/font-awesome/css/font-awesome.min.css" media="(max-width: 959px)">
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery-1.8.2.min.js" ></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.bxslider.js" ></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/main.js" ></script>
    <script>
    !window.jQuery && document.write('<script src="<?php bloginfo('template_url'); ?>/js/jquery-1.4.3.min.js"><\/script>');
    </script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/fancybox/bios.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
    <script type="text/javascript">function hello(){form1.submit();}</script>
    <title>
        <?php
            if(is_home()){
              bloginfo('name');echo " - ";the_title();
            }elseif(is_single()||is_page()){
              bloginfo('name');echo " - ";single_post_title();
            }elseif(is_category()){
              bloginfo('name');echo " - ";single_cat_title();
            }elseif(is_search()){
              bloginfo('name');echo " - ";echo "search result";
            }elseif(is_404()){
              echo "404 Not Found";
            }else{
              wp_title('',true);
            }
        ?>
    </title>
    <?php wp_head(); ?>
</head>
<body class="homepage">
    <div class="wrapper">
    <header class="page-width">
    <?php
        $post_id=539;
        $post_info=get_post($post_id);
        $content=$post_info->post_content;
    ?>
    <div class="title">
        <div class="nav-toggle fl phone">
            <a href="#" class="open active"><i class="fa fa-bars"></i></a>
            <a href="#" class="close"><i class="fa fa-close"></i></a>
        </div>
        <div class="search-toggle fr phone">
            <a href="#" class="open active"><i class="fa fa-search"></i></a>
            <a href="#" class="close"><i class=" fa fa-close"></i></a>
        </div>
        <div class="title-img fl">
            <a href="<?php echo home_url();?>">
		<img class="pc" src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post_id), 'full');echo $full_image_url[0];?>" />
		<img class="phone" src="/wp-content/uploads/2016/09/1LOGOrutter.png" />
            </a>
        </div>
            <div class="title-message fr">
                <div class="pc title-info">
                    <?php echo $content;?>
                </div>
                <div class="search">
                    <form name="form1" method="get" action="<?php echo home_url('/');?>">
                        <a href="#" class="btn btn-submit fr" onclick="return hello();">&gt;</a>
                        <input type="text" class="text-input fr" name="s" value="<?php echo get_search_query(); ?>" placeholder="Search ..." />
                    </form>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <nav>
        <?php
          wp_nav_menu(array('menu'=>'top','depth'=>2));
        ?>
            <div class="phone title-info"><?php echo $content;?></div>
        </nav>
        <?php if(is_page(array('575','577','579'))){ ?>
        <script type=text/javascript>
            (function($) {
                $(function(){
                    $(".menu-item-583").css("background","#013370");
                });
            })(jQuery);
        </script>
        <?php }?>
    </header>
    <?php if(!(is_home()||is_front_page())){ ?>
        <div class="main page-width">
        <div class="Ex-link">
          <?php if(function_exists('cmp_breadcrumbs')) {cmp_breadcrumbs();}?>
        </div>
    <?php }?>