        <?php do_action('installation_point'); ?>
    <div class="sideber fr">
        <?php
            $typename=get_post_type();
            $obj=get_post_type_object($typename);
            $args=array(
              'post_type'=>$typename,
              'meta_key'   => 'sort',
              'orderby'    => 'meta_value_num',
              'order'      => 'ASC',
              'post_per_page'=>10
              );
            $loop=new WP_Query($args);
            global $wp;
            $current_url = home_url(add_query_arg(array(),$wp->request));
        ?>
        <h4 class="title"><?php echo $obj->labels->name;?></h4>
        <div class="introduce">
            <ul>
                <?php while($loop->have_posts()):$loop->the_post();?>
                <li class="<?php if($current_url==get_permalink()){echo "current-cat";}?>">
                    <a href="<?php the_permalink(); ?>"><?php the_title();?></a>
                </li>
                <?php endwhile;?>
            </ul>
        </div>
    </div>
    <div class="clear"></div>
</div>