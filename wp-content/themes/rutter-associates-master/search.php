<?php
/**
 * The template for displaying search results pages.
 *
 * @package aaaa
 */

get_header(); ?>
        <main id="main" class="site-main" role="main">
        <?php if ( have_posts() ) : ?>
            <header class="page-header">
                <h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'twentysixteen' ), '<span>' . esc_html( get_search_query() ) . '</span>' ); ?></h1>
            </header><!-- .page-header -->
			<ul class="news-list">
                    <?php 
                      while(have_posts()):the_post();
                    ?>
			<li>
				<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				 <div><?php the_time("m. d. Y"); ?></div>
				<div class="news-image fl"><?php the_post_thumbnail('medium'); ?></div>
				<div class="news-excerpt fr"><?php the_excerpt(); ?></div>
				<div class="clear"></div>
			</li>
            <?php endwhile;
            the_posts_pagination( array(
                'prev_text'          => Previous,
                'next_text'          => Next,            
            ) );?>
		</ul>
	<?php
          else : 
          ?>
            <section class="no-results not-found">
              <header class="page-header">
                <h1 class="page-title"><?php _e( 'Nothing Found', 'twentysixteen' ); ?></h1>
              </header><!-- .page-header -->
              <div class="page-content">
                <?php if ( is_search() ) : ?>
                  <p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'twentysixteen' );?></p>
                <?php endif; ?>
              </div>
            </section>
          <?php endif;?>
        </main>
<?php get_footer(); ?>