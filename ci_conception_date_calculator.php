<?php
/*
Plugin Name: CI Conception date calculator
Plugin URI: https://www.calculator.io/conception-date-calculator/
Description: This conception calculator calculates your conception date based on the date of your last period, your ultrasound date, or your due date.
Version: 1.0.0
Author: Conception Date Calculator / www.calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_conception_date_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Conception Date Calculator by www.calculator.io";

function display_calcio_ci_conception_date_calculator(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Conception Date Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_conception_date_calculator_iframe"></iframe></div>';
}


add_shortcode( 'ci_conception_date_calculator', 'display_calcio_ci_conception_date_calculator' );