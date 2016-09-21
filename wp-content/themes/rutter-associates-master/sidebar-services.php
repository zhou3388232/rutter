    <div class="sideber fr">
        <h4 class="title">Services</h4>
        <div class="clear"></div>
        <div class="introduce">
            <ul>
            <?php
              //获取创建的所有菜单
                global $wp;
                $current_url = home_url(add_query_arg(array(),$wp->request));
                $menu_items = wp_get_nav_menu_items('19');
                foreach($menu_items as $item){
                    if($item->menu_item_parent==646){
                        $title = $item->title;
                        $redirect = $item->url;
            ?>
                <li class="<?php if($current_url==$redirect){echo "current-cat";}?>"><a href="<?php echo $redirect;?>"><?php echo $title;?></a></li>
                <?php }} ?>
            </ul>
       </div>
    </div>
<div class="clear"></div>
</div>