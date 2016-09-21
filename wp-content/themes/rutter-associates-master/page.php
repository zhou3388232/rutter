<?php get_header();?>

<?php while(have_posts()):the_post();?>
    <div class="header fl">
       <h1 class="title"><?php the_title();?></h1>
       <div class="clear"></div>
    </div> 
    <div class="clear"></div>
    <div class="rutter-introduce <?php echo basename(get_permalink()); ?>">
        <?php the_content();?>
    </div>
<div>
<?php endwhile;?>
<?php get_footer();?>
