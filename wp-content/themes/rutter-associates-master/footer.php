	<?php do_action('installation_point'); ?>
            <footer>
            <?php wp_footer();?>
                <div class="footer">
                    <div class="footer-bar">
                        <?php 
                          wp_nav_menu(array('menu'=>'bottom','depth'=>1));
                        ?>
                        <div class="clear"></div>
                    </div>
                    <div class="footer-message">
                        <div class="fl copyright">
                              <?php
                                $post_id=540;
                                $post_info=get_post($post_id);
                                $content=$post_info->post_content;
                              ?>
                              <?php echo $content;?>
                        </div>
                              <?php
                                $post_id=541;
                                $post_info=get_post($post_id);
                                $content=$post_info->post_content;
                              ?>
                        <div class="fr social">
                            <a href="<?php echo $content;?>" target="_blank">
                                <img src="<?php $full_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(541), 'full');echo $full_image_url[0];?>" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </footer>
        </div>
    <a href="#" id="gotop" title="Back to the top"><i>^</i>top</a>
    <script type="text/javascript">
        (function($) {
            $(function() {

                var scrollTop = function(){
                    $('body').on('click','#gotop',function(){
                        $('html, body').animate( { scrollTop: 0 },'800','swing');
                        return false;
                    });
                };

                scrollTop();
                $(window).scroll( function(){
                    if($(window).scrollTop()>160){
                        $('#gotop').addClass('active');
                    }
                    else{
                        $('#gotop').removeClass('active');
                    }
                });
            });
        })(jQuery)
    </script>
</body>
</html>