<?php get_header();?>
<style>
.menu-item-263 { background: #013370; }
</style>
<div class="article news-content">
  <?php if(have_posts()):the_post();?>
  <div class="header">
    <div class="logo center">
      <img src="http://rutter.aaoo-tech.com/wp-content/uploads/2016/01/header-title-img.jpg" alt="rutter associates llc" width="300" height="90">
    </div>
    <h1 class="title"><?php the_title();?></h1>
    <div class="time">Posted on <?php the_time("m/d/Y"); ?> by <?php the_author(); ?></div>
  </div> 
  <div class="content">
      <?php the_content();?>
  </div>
<?php endif;?>
</div>
<?php get_footer(); ?>