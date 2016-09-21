<?php get_header(); ?>
    <div class="article contect fl">
        <?php
            if ( is_category() ) :
            global $post;
            $categories = get_the_category();
            foreach ($categories as $category) :
        ?>
        <div class="header fl">
            <h1 class="title"><?php echo $category->name; ?></h1>
            <div class="clear"></div>
        </div> 
        <div class="clear"></div>
        <div class="rutter-introduce">
            <ul>
                <?php
                    $posts = get_posts('numberposts=10&category='. $category->term_id);
                    foreach($posts as $post) :
                ?>
                <li class="categoryli">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </li>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php endforeach; endif ; ?>
    </div>
<?php get_sidebar();?>
<?php get_footer();?>
