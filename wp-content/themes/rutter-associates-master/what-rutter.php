<?php
/*
Template Name:what-rutter
*/
?>
<?php get_header(); ?>
<?php if(have_posts()):the_post();?>
    <div class="article contect fl">
        <div class="header fl">
            <h1 class="title"><?php echo get_post_meta('581','title',true);?></h1>
            <div class="clear"></div>
        </div> 
        <div class="introduce fl">
            <div class="rutter-image fl"><img src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');echo $full_image_url[0];?>" alt="">
                <?php the_excerpt();?>
            </div>
            <div class="rutter-content fr">
                <?php the_content();?>
            </div>
        </div>
    </div>
<?php endif;?>
<?php get_sidebar("about-us");?>
<?php get_footer(); ?>