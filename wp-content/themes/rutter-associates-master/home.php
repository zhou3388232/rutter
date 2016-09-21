<?php
/*
Template Name:home
*/
?>
<?php get_header(); ?>
    <div class="main">
        <div class="main-img">
            <ul class="bxslider">
                <?php 
                  $args=(get_query_var('paged'))?get_query_var('paged'):1;
                  $args=array(
                    'post_type'=>'carousel',
                    'meta_key'=>sort,
                    'orderby'=>meta_value_num,
                    'order'=>'ASC',
                    'showposts'=>10,
                    'paged'=>$paged
                  );
                  query_posts($args);
                  while(have_posts()):the_post();
                ?>
                <li>
                    <a href="<?php echo get_post_meta($post->ID,'url',true);?>"><img src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');echo $full_image_url[0];?>" alt="" /></a>
                    <?php if(get_post_meta($post->ID,'position',true)=='left'){
                            $position="bxslider-left";
                          }elseif(get_post_meta($post->ID,'position',true)=="middle"){
                            $position="bxslider-middle";
                          }else{
                            $position="bxslider-right";
                    }?>
                    <a href="<?php echo get_post_meta($post->ID,'url',true);?>">
                        <div class="bxslider-word <?php echo $position;?>">
                            <div>
                                <h2 class="title"><?php the_title();?><br>
                                <?php echo get_post_meta($post->ID,'title',true);?></h2>
                            <div class="text">
                                <p class="p1"><?php echo get_post_meta($post->ID,'title1',true);?></p>
                                <p><?php echo get_post_meta($post->ID,'title2',true);?></p>
                            </div>
                                <a class="btn-action" href="<?php the_permalink(); ?>">Read More</a>
                            </div>
                        </div>
                    </a>
                </li>
                <?php endwhile; wp_reset_query();?>
            </ul>
        </div>
        <div class="service-list">
            <ul>
                <?php 
                    $args=(get_query_var('paged'))?get_query_var('paged'):1;
                    $args=array(
                        'post_type'=>services,
                        'meta_key'=>sort,
                        'orderby'=>meta_value_num,
                        'order'=>'ASC',
                        'showposts'=>12,
                        'paged'=>$paged
                      );
                    query_posts($args);
                    while(have_posts()):the_post();
                ?>
                <li class="service">
                    <a href="<?php the_permalink(); ?>">
                        <img src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');echo $full_image_url[0];?>"/>
                    </a>
                    <div class="text center">
                        <div class="title"><h3><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h3></div>
                        <div class="info">
                            <?php the_excerpt();?>
                        </div>
                        <div class="fl read-more">
                            <a href="<?php the_permalink(); ?>" style="">Read More</a>
                        </div>
                    </div>
                </li>
                <?php endwhile;?>
            </ul>
            <div class="clear"></div>
        </div>
    </div>
<?php get_footer(); ?>
