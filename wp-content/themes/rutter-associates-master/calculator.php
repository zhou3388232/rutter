<?php
/*
Template Name:calculator
*/
?>
<?php get_header(); ?>
<div class="header">
    <h1 class="title"><?php the_title(); ?>
</div>
<div class="form-warp rutter-calculator-form">
    <?php echo do_shortcode( '[contact-form-7 id="749" title="Calculator"]' ); ?>
</div>
<?php get_footer(); ?>

<style type="text/css">
.form-warp { position: relative; padding-bottom: 50px; }
.form-holder { max-width: 500px; }

.form-holder .top-select label { display: block; padding-bottom: 8px; }
.form-holder label { display: inline-block; padding-bottom: 8px; }

.form-holder .entry.industry select { width: 500px; }
.form-holder .entry select { width: 500px; padding: 5px; }
.form-holder .btn-set { float: left; }

/* country selector */
.linkage div { margin: 0 10px 5px 0; }
.linkage select { display: inline-block; width: 500px; padding: 6px; font-size: 16px; box-sizing:border-box; border: 1px solid #3068bf; border-radius: 3px; background: #F6F6F6; }
.linkage label { text-transform: capitalize; }
.linkage .required_tip { color: #f00; }
#city input{ width: 500px; padding: 7px 8px 8px; margin-bottom: 10px; border: 1px solid #3068bf; box-sizing: border-box; }

.part { max-height: 0; min-height: 0; opacity: 0; transition: .2s all ease-in-out; overflow: hidden; width: 500px; }
.part.active { max-height: inherit; opacity: 1; }

.customSelect { padding: 5px 10px; border: 1px solid #3068BF; margin: 0 0 10px; }
.customSelectInner { background: url('<?php bloginfo('template_url'); ?>/js/customSelect-arrow.gif') no-repeat center right; }
.indicator { position: absolute; top: 50px; left: 50%; margin-left: 115px; }
.indicator .pan { width: 360px; height: 200px; background: url('<?php bloginfo('template_url'); ?>/../../uploads/2016/04/pan.png') center 0 no-repeat; }
.indicator .pan .hand { width: 160px; position: absolute; top: 168px; left: 35px; transform-origin:145px center; transition:all ease .8s; }
.indicator .pan .hand-line { width: 160px; height: 20px; background: url('<?php bloginfo('template_url'); ?>/../../uploads/2016/03/zhizhen.png') center no-repeat;}

@media (max-width: 768px) {
.form-holder { max-width: 370px; }
.linkage select,
#state,
#city,
#city input,
.part,
.form-holder .entry.industry select,
.form-holder .entry select { width: 100%; box-sizing: border-box; }
.linkage div{margin: 0;}
.wpcf7-form-control-wrap {padding: 0;}
.indicator {position: initial;margin: 40px calc(50% - 90px) 0;}
.indicator .pan{ width: 180px; height: 100px; background-size: contain; position: relative; }
.indicator .pan .hand { top: 80px; left: 15px; width: 80px; transform-origin: 76px center; background-size: 100%; }
.indicator .pan .hand-line { width: 80px; background-size: contain; }
}
@media (max-width: 768px) and (min-width: 640px)  {
.indicator {position: absolute; right:20px; left: auto; width: 180px; margin: 0;}
}

</style>

<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.customSelect.min.js" ></script>
<script type="text/javascript">
(function($) {
  $(function() {

    $('.entry select').customSelect();

    var STEP_TOTAL = 4;
    $('select.last').on('change', function() {
        var $container = $(this).closest('.part'),
            step = +$container.data('part'),
            v = $(this).val();

        if (step != 1) {
            $('.part[data-part=4]').addClass('active');
        } else if (v == 'Yes_0') {
            $('.part[data-part=2]').removeClass('active').removeClass('included');
            $('.part[data-part=3]').addClass('active').addClass('included');
        } else {
            $('.part[data-part=2]').addClass('active').addClass('included');
            $('.part[data-part=3]').removeClass('active').removeClass('included');
        }

        if ( $(window).height()< 770 ) {
            var h = $(this).offset().top -70;
            $('html, body').animate( { scrollTop: h },'200','swing');
        };
    });

    var tablet_top = 0;
    if ( $(window).width()< 769 ){
        tablet_top = 50;
    }
    $(window).scroll( function(){
        var startscroll = $('.rutter-calculator-form').offset().top;
        if ($(window).scrollTop() > startscroll ){
            $('.indicator').css('top',$(window).scrollTop() - startscroll + 50 + tablet_top +'px');
        };
    });

    if ( $(window).height()< 360 ) {
        $(window).unbind('scroll');
        $('.indicator').css({
            'position': 'fixed',
            'bottom':'80px',
            'top':'auto'
        });
    };

    var score;
    var max_score; 

    var calc = function(obj) {
        max_score = $.makeArray($(obj).map(function() {
            var m = 0;
            $(this).find('option').each(function(idx, option) {
                var v = +$(option).attr('value').split('_')[1];
                if (v > m) {
                    m = v;
                }
            });
            return m;
        })).reduce(function(p, c) { return p+c; });

        score = $.makeArray($(obj).map(function() {
            return +this.value.split('_')[1];
        })).reduce(function(p, c) { return p+c; });
    };

    var changehand = function (obj1, obj2){
        var rate = (score / max_score) * 180;
        var _rate = 'rotate(' + rate + 'deg)';
        $(obj1).css('transform', _rate);
        return false;
    };

    $('.question select').on('change', function() {
        calc('.included .question select');
        $('input[name=score]').val(score);
        changehand('.hand', '.numb');
    });

    var tip = function(){

        var tip_p = '<p class="required_tip" >Please fill in the required field.</p>';
        $('.required_tip').remove();

        $('.linkage select').map(function(){
            if($(this).find('option:selected').text()==''){
                $(this).parent().append(tip_p);
            };
        });
        if ($('#city2').length) {
            if ($('#city2').val()=='') {
                $('#city').append(tip_p);
            };
        };
    };

    var _country='';
    var _state='';
    var _city='';

    $('body').on('click','.rutter-calculator-form .btn-action',function(){
        if ( _state!='' ) {
            $('input[name=state]').val(_state);
        };
        if ($('#city select').length) {
            $('input[name=city]').val(_city);
        };
        if ($('#city2').length) {
            $('input[name=city]').val($('#city2').val());
        };
        _state='';
        _city='';
        tip();
        return false;
    });

    $.fn.extend({
        GlobalGeography: function() {
            var relatedObj = ['div[id="country"]', 'div[id="state"]', 'div[id="city"]'];
            var selectmenu = ['country', 'state', 'city'];
            var selector   = this.selector;
             
            // 输出下拉列表
            function _traversal(source, type){
                if(typeof(source)!='undefined'){
                    var _select_  = '<label class="required">'+type+'</label><select class="_GlobalGeography_">';
                        _select_ += '<option value=""></option>';
                    $.each(source,function(i,v){
                        _select_ += '<option value="'+v.Name+'"'+'code="'+v.Code+'">'+v.Name+'</option>';
                    });
                    _select_ += '</select>';
                    return _select_;
                }
                return false;
            };
             
            // 清除/还原下级关联下拉菜单
            function cleanNextMenu(index){
                for(var i=index;i<relatedObj.length;i++){
                    if(typeof(relatedObj[(i+1)])!='undefined'){
                        $(relatedObj[(i+1)]).find('._GlobalGeography_').remove();
                        $(relatedObj[(i+1)]).find('label').remove();
                        $(relatedObj[(i+1)]).find('input').remove();
                        $('input[name=country]').val(_country);
                        $('input[name=state]').val(_country);
                        $('input[name=city]').val(_country);
                    }
                }
            }

            var updateCustomSelect = function() {
                $('select._GlobalGeography_').each(function(idx, elem) {
                    var $elem = $(elem);
                    if ($elem.hasClass('hasCustomSelect') === false) {
                        $elem.customSelect();
                    }
                });
            };

            // 遍历获取下拉菜单内容
            function checkMenu(json){
                // 遍历赋值所有类型
                $.each(relatedObj,function(i,v){
                    $(v).find('select').bind('change',function(){
                        var _code_ = $(this).find('option:selected').attr('code');
                        cleanNextMenu(i);
                        if(typeof(json[selectmenu[(i+1)]][_code_])!='undefined'){
                            $(relatedObj[(i+1)]).append(_traversal(json[selectmenu[(i+1)]][_code_],selectmenu[(i+1)]));
                            updateCustomSelect();
                            // 绑定方法
                            $(relatedObj[(i+1)]).find('._GlobalGeography_').bind('change',function(){
                                $(relatedObj[(i+1)]).find('input').val($(this).find('option:selected').text());
                                if(i==0){
                                _city='';
                                _state=$(this).find('option:selected').text();
                                };
                            });
                            $('input[name=state]').val('');
                            $('input[name=city]').val('');
                            //checkMenu(json);
                            return $('#city').html('<label class="required">City</label><input id="city2" type="text" placeholder="Please input..." />');
                        } else {
                            $(relatedObj[(i+2)]).append(_traversal(json[selectmenu[(i+2)]][_code_],selectmenu[(i+2)]));
                            updateCustomSelect()
                            // 绑定方法
                            $(relatedObj[(i+2)]).find('._GlobalGeography_').bind('change',function(){
                                $(relatedObj[(i+2)]).find('input').val($(this).find('option:selected').text());
                                _city=$(this).find('option:selected').text();
                            });
                            if ($('#city input').index($('#city2'))!=-1) {
                                $('#city label').remove();
                                $('#city2').remove();
                            };
                        }
                    });
                });
            }
           
            // 加载世界国家城市数据
            $.getJSON("<?php bloginfo('template_url'); ?>/js/db_en.data", function(json){
                // 输出国家列表
                $(selector).append(_traversal(json.country, 'country'));
                updateCustomSelect();
                $(selector).find('._GlobalGeography_').bind('change',function(){
                    $(selector).find('input').val($(this).find('option:selected').text());
                    _country=$(this).find('option:selected').text();  
                });
                checkMenu(json);
            });
        }
    })
    $('#country').GlobalGeography();

    $('body').on('click', '.rutter-calculator-form .btn-action', function (){
        $('.rutter-calculator-form form').submit();
    });
  });
})(jQuery);
</script>