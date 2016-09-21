<?php get_header(); ?>

<section class="content">

	<?php
    if ( hu_is_checked('blog-heading-enabled') && is_home() ) {
      get_template_part('parts/page-title');
    }
  ?>

	<div class="pad group">

		<?php if ( hu_is_checked('featured-posts-enabled') ) { get_template_part('parts/featured'); } ?>

		<?php if ( have_posts() ) : ?>

			<?php if ( hu_get_option('blog-standard') == 'on' ): ?>
				<?php while ( have_posts() ): the_post(); ?>
					<?php get_template_part('content-standard'); ?>
				<?php endwhile; ?>
			<?php else: ?>
			<div class="post-list group">
				<?php $i = 1; echo '<div class="post-row">'; while ( have_posts() ): the_post(); ?>
					<?php get_template_part('content'); ?>
				<?php if($i % 2 == 0) { echo '</div><div class="post-row">'; } $i++; endwhile; echo '</div>'; ?>
			</div><!--/.post-list-->
			<?php endif; ?>

			<?php get_template_part('parts/pagination'); ?>

		<?php endif; ?>

	</div><!--/.pad-->

</section><!--/.content-->

<?php get_sidebar(); ?>

<?php get_footer(); ?>