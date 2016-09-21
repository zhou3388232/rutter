<?php get_header();?>

    <div class="article contect fl">
        <?php if(have_posts()):the_post();?>
        <div class="header fl">
            <h1 class="title"><?php the_title();?></h1>
            <div class="clear"></div>
        </div> 
        <div class="clear"></div>
        <div class="rutter-introduce">
            <?php the_content();?>
        </div>
    <?php endif;?>
    </div>
<?php 
    if(in_category(array("16"))){
        get_sidebar("services");
    }else{
        get_sidebar("services");
    }
    ?>
<?php get_footer(); ?>
