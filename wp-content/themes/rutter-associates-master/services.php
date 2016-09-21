<?php
/*
Template Name:services
*/
?>
<?php get_header(); ?>
    <div class="list contect fl">
        <div class="header fl">
            <h1 class="title"><?php echo get_post_meta('641','title',true);?></h1>
        </div>
        <div class="clear"></div>
        <div class="lists fl">
            <?php 
                $args=(get_query_var('paged'))?get_query_var('paged'):1;
                $args=array(
                   'post_type'=>'services',
                   'meta_key'=>sort,
                   'orderby'=>meta_value_num,
                   'order'=>'ASC',
                   'showposts'=>11,
                   'paged'=>$paged
                );
                query_posts($args);
            ?>
            <?php while(have_posts()):the_post();?>
            <div class="list-item">
                <div class="list-banner fl">
                    <a href="<?php the_permalink();?>" title="" >
                        <img src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');echo $full_image_url[0];?>" width="162px" height="162px" alt="" class="box-image fl">
                    </a>
                </div>
                <div class="info fl">
                    <h4 class="list-title name"><a href="<?php the_permalink();?>" title="" ><?php the_title();?></a></h4>
                    <div class="clear"></div>
                    <div class="details"><?php the_excerpt();?></div>
                </div>
                <div class="clear"></div>
            </div>
            <?php endwhile;?>
        </div>
    </div>
<?php get_sidebar("services");?>
<?php get_footer(); ?>