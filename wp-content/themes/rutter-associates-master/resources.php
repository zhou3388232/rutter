<?php
/*
Template Name:resources
*/
?>
<?php get_header(); ?>

<div class="list contect fl">

   <div class="header fl">
            <h1 class="title"><?php the_title();?></h1>
            <div class="clear"></div>
        </div>

 <div class="clear"></div>
    <?php while(have_posts()):the_post();?>
        <?php the_content();?>
    <?php endwhile;?>
</div>
<script>
    (function($) {
        $(function() {
            if($(window).width() < 769){
                $('.list.contect .header').after($('.sideber .introduce'));
            }
        });
    })(jQuery)
</script>
<?php get_sidebar("resources");?>
<?php get_footer(); ?>