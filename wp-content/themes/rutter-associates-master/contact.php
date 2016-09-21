<?php
/*
Template Name:contact
*/
?>
<?php get_header(); ?>
    <div class="header">
        <h1 class="title"><?php the_title(); ?>
    </div>
    <div class="rutter-contact-form fl">
        <?php echo do_shortcode( '[contact-form-7 id="736" title="Calculator"]' ); ?>
    </div>
    <div class="rutter-address fr">
        <div class="rutter-address-text">
            <dl class="clearfix">
                <dt>Email:</dt>
                <dd><a href="mailto: main@rutterassociates.com">main@rutterassociates.com</a></dd>
                <dt>Telephone:</dt>
                <dd><a href="tel:+1-212-949-1180">+1-212-949-1180</a></dd>
                <dt>Fax:</dt><dd><a href="fax:+1-212-949-1249">+1-212-949-1249</a></dd>
                <dt>Address:</dt>
                <dd>60 East 42nd Street, Suite 2816<p>New York, NY 10165 USA</p></dd>
            </dl>
        </div>
        <div id="rutter-address-map" style="width:100%;height:300px;"></div>
    </div>
    <div class="clear"></div>
</div>

<?php get_footer(); ?>
<script>
(function ($) {
    $(function () {
        $('body').on('click', '.rutter-contact-form .btn-action', function(event) {
            $(event.target).closest('form').submit();
            return false;
        });
    })
})(jQuery)
</script>
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM&sensor=false"></script>
<script>
    var myCenter=new google.maps.LatLng(40.7520312,-73.9785619);

    function initialize(){
        var mapProp = {
            center:myCenter,
            zoom:15,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("rutter-address-map"),mapProp);
        var marker=new google.maps.Marker({
            position:myCenter,
        });
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content:"60 East 42nd Street, Suite 2816, New York, NY 10165 USA"
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
</script>