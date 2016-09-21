<?php
/*
Template Name:about-us
*/
?>
<?php get_header(); ?>
<?php if(have_posts()):the_post();?>
    <div class="article contect fl">
        <div class="header fl">
            <h1 class="title"><?php the_title();?></h1>
            <div class="clear"></div>
        </div>
        <div class="banner fl">
            <img width="610px" height="268px" src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');echo $full_image_url[0];?>" alt="">
        </div>
        <div class="clear"></div>
        <div class="rutter-introduce">
        <?php the_content();?>
        </div>
    </div>
<?php endif;?>
<?php get_sidebar("about-us");?>
<?php get_footer(); ?>