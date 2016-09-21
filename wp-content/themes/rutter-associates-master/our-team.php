<?php
/*
Template Name:our-team
*/
?>
<?php get_header(); ?>
<div class="team contect fl">
    <div class="header fl">
       <h1 class="title"><?php echo get_post_meta('594','title',true);?></h1>
    </div>
    <div class="members fl">
        <?php 
            $args=(get_query_var('paged'))?get_query_var('paged'):1;
            $args=array(
                'post_type'=>'Our Team',
                'meta_key'=>sort,
                'orderby'=>meta_value_num,
                'order'=>'ASC',
                'showposts'=>100,
            );
            query_posts($args);
            while(have_posts()):the_post();
        ?>
        <div class="person">
            <div class="person-pic-info">
                <a class="fancybox-popup fl" href="#<?php the_ID();?>"><img src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium');echo $full_image_url[0];?>" class="box-image"></a>
                <div class="info fl">
                    <h4 class="name"><a id="various1" href="#<?php the_ID();?>" class="fancybox-popup"><?php the_title();?></a></h4>
                    <h5 class="title"><label>Title: </label><?php echo get_post_meta($post->ID,'title',true);?></h5>
                    <h5 class="email"><label>Email: </label><a href="mailto:<?php echo get_post_meta($post->ID,'email',true);?>"><?php echo get_post_meta($post->ID,'email',true);?></a></h5>
                </div>
                <div class="clear"></div>
            </div>
            <div class="fan-xbox">
                <div id="<?php the_ID();?>" class="fan-box">
                    <div class="person-pic-info">
                        <img class="box-image fl" src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');echo $full_image_url[0];?>">
                        <div class="info fl">
                            <h4 class="name"><?php the_title();?></h4>
                            <h5 class="title"><label>Title: </label><?php echo get_post_meta($post->ID,'title',true);?></h5>
                            <h5 class="email"><label>Email: </label><a href="mailto:<?php echo get_post_meta($post->ID,'email',true);?>"><?php echo get_post_meta($post->ID,'email',true);?></a></h5>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="person-bio">
                        <p class="bio"><?php the_content();?></p>
                    </div>
                </div>
            </div>
        </div>
        <?php endwhile; wp_reset_query();?>
    </div>
</div>
<?php get_sidebar("about-us");?>
<?php get_footer(); ?>