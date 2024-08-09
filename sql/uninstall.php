<?php
/**
 * DISCLAIMER.
 *
 * Do not edit or add to this file.
 * You are not authorized to modify, copy or redistribute this file.
 * Permissions are reserved by FME Modules.
 *
 *  @author    FMM Modules
 *  @copyright FME Modules 2023
 *  @license   Single domain
 */
$sql = [];
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'productquotation';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'productquotation_templates';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'productquotation_templates_lang';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'productquotation_templates_shop';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'quotes_products';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'quote_data';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'quote_data_file';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'quote_messages';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'fmm_quote_fields';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'fmm_quote_fields_lang';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'fmm_quote_fields_values';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'fmm_quote_userdata';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'fmm_quote_fee';
$sql[] = 'DROP TABLE IF EXISTS ' . _DB_PREFIX_ . 'fmm_quote_fields_values_lang';
foreach ($sql as $query) {
    if (Db::getInstance()->execute($query) == false) {
        return false;
    }
}
