<?php if (!defined('W3TC')) die(); ?>
<?php echo $this->postbox_header('Required Information', 'required'); ?>
<table class="form-table">
    <tr>
        <th><?php _e('Request type:', 'w3-total-cache'); ?></th>
        <td><?php echo esc_attr($this->_request_types[$request_type]); ?></td>
    </tr>
    <tr>
        <th><label for="support_url"><?php _e('Blog <acronym title="Uniform Resource Locator">URL</acronym>:', 'w3-total-cache'); ?></label></th>
        <td><input id="support_url" type="text" name="url" value="<?php echo esc_attr($url); ?>" size="80" /></td>
    </tr>
    <tr>
        <th><label for="support_name"><?php _e('Name:', 'w3-total-cache'); ?></label></th>
        <td><input id="support_name" type="text" name="name" value="<?php echo esc_attr($name); ?>" size="80" /></td>
    </tr>
    <tr>
        <th><label for="support_email"><?php _e('E-Mail:', 'w3-total-cache'); ?></label></th>
        <td><input id="support_email" type="text" name="email" value="<?php echo esc_attr($email); ?>" size="80" /></td>
    </tr>
    <tr>
        <th><label for="support_twitter"><?php _e('Twitter ID:', 'w3-total-cache'); ?></label></th>
        <td><input id="support_twitter" type="text" name="twitter" value="<?php echo esc_attr($twitter); ?>" size="80" /></td>
    </tr>
    <tr>
        <th><label for