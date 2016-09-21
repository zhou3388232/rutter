<?php get_header(); ?>
<ul class="news-list">
<?php 
    $paged=(get_query_var('paged'))?get_query_var('paged'):1;
    $args=array(
      'post_type'=>'news',
      'posts_per_page'=>6,
      'paged'=>$paged
    );
    query_posts($args);
    while(have_posts()):the_post();
?>
    <li>
        <h2><a href="<?php the_field('pdf'); ?>"><?php the_title(); ?></a></h2>
        <span class="post-time">Posted on <?php the_time("m/d/Y"); ?></span>
        <div class="news-excerpt"><?php the_excerpt(); ?></div>
        <a class="download"href="<?php the_field('pdf'); ?>">Download PDF</a>
        <div class="clear"></div>
    </li>
    <?php endwhile;
        the_posts_pagination( array(
        'prev_text'          => __( '<<', 'raccoon-tech' ),
        'next_text'          => __( '>>', 'raccoon-tech' ),
        'mid_size'=>1,
        'end_size'=>2,
        'screen_reader_text' => ' '
        ));
    wp_reset_query();?>
</ul>
<?php get_footer(); ?>