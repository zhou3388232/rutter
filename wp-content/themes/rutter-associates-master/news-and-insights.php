<?php
/*
Template Name:news and insights
*/
?>
<?php get_header();?>
<?php while(have_posts()):the_post();?>
    <div class="header insights-title">
       <h1 class="title"><?php echo get_post_meta($post->ID,'title',true);?></h1>
       <div class="clear"></div>
    </div> 
    <div class="clear"></div>
    <div class="rutter-introduce insights">
        <?php the_content();?>
    </div>
<div>
<?php endwhile;?>
<?php get_footer();?>