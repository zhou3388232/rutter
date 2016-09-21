<?php
/*
Template Name:affiliates
*/
?>
<?php get_header(); ?>
    <div class="affiliates contect fl">
        <div class="header fl">
            <h1 class="title"><?php echo get_post_meta('596','title',true);?></h1>
        </div>
        <div class="affiliates-member fl">
            <?php 
                $args=(get_query_var('paged'))?get_query_var('paged'):1;
                $args=array(
                    'post_type'=>'Affiliates',
                    'meta_key'=>sort,
                    'orderby'=>meta_value_num,
                    'order'=>'ASC',
                    'showposts'=>20,
                );
            query_posts($args);
            while(have_posts()):the_post();
            ?>
            <div class="person">
                <div class="info fl">
                    <h4 class="person-name center fl"><a  href="#<?php the_ID();?>" class="fancybox-popup"><?php the_title();?></a></h4>
		            <div class="fl title"><?php echo get_post_meta($post->ID,'title',true);?></div>
                </div>
                <div class="fan-xbox">
                    <div id="<?php the_ID();?>" class="fan-box">
                        <div class="person-bio">
                        <p class="bio"><?php the_content();?></p></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <?php endwhile; wp_reset_query();?>
        </div>
    </div>
<?php get_sidebar("about-us");?>
<?php get_footer(); ?>