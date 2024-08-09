/*
* Product Quotation
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
*
* @author    FMM Modules
* @copyright Copyright 2021 © FMM Modules All right reserved
* @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
* @category  front_office_features
* @package   productquotation
*/
var token = $('#token').val();
var controller_url_html = baseDir+"?fc=module&module=productquotation&controller=ajax&action=html&token="+token;
function addQuote(pro_id) {
	var token = $('#token').val();
	var id_product = pro_id;
	$('#gify_img').show();
	$('.fmm_quote_button_'+pro_id).hide();
	var controller_url = baseDir+"?fc=module&module=productquotation&controller=ajax&action=add&id_product="+id_product+"&token="+token;
	var controller_url_count = baseDir+"?fc=module&module=productquotation&controller=ajax&action=count&token="+token;
		var pq_cid = $('#idCombination').val();
		var quantity_wanted = $('#fmm_quote_qty').val();
		var tax_price = $('#fmm_tax_price').val();
		$.ajax({
				type	: "POST",
				cache	: false,
				url		: controller_url,
				data : {comb_id:pq_cid,quantity:quantity_wanted,tax_price:tax_price},
				success: function(data) {
					$('#gify_img').hide();
					$('.fmm_quote_button_'+pro_id).show();
					$('#p_add').show();
					result = parseInt(data);
					if (result < 0) {
                        alert(pq_label_exists);
                    }
					else
					{
						$.ajax({
								type	: "POST",
								cache	: false,
								url		: controller_url_count,
								success: function(data) {
									result = parseInt(data);
									$('#product_quotation_quantity').text(result);
								}
						});
						$('#fmm_quote_content .fmm_content').html(data);
						$('#fmm_quote_content').slideDown();
						$("html, body").animate({ scrollTop: 0 }, "slow");
					}
					
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert(textStatus);
					$('#gify_img').hide();
					$('.fmm_quote_button_'+pro_id).show();
				}
		});
	}
	function fmmDropIt(arg) {
        if ($('#fmm_quote_content').is(':hidden'))
            $('#fmm_quote_content').slideDown();
		else
			$('#fmm_quote_content').slideUp();
    }
	
function dropItemQuote(id) {
	var token = $('#token').val();
	var controller_url_del = baseDir+"?fc=module&module=productquotation&controller=ajax&action=delete&token="+token;
	var controller_url_count = baseDir+"?fc=module&module=productquotation&controller=ajax&action=count&token="+token;

		$.ajax({
				type	: "POST",
				cache	: false,
				url		: controller_url_del,
				data : {quote_id:id},
				success: function(data) {
						$.ajax({
								type	: "POST",
								cache	: false,
								url		: controller_url_count,
								success: function(data) {
									result = parseInt(data);
									$('#product_quotation_quantity').text(result);
								}
						});
					$('#fmm_quote_content .fmm_content').html(data);
					$('#fmm_quote_from .fmm_content_holder').html(data);
					checkPageRefesh();
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert(textStatus);
				}
		});
}
function reloadPath(ar) {
    window.location.reload(false);
}
function checkPageRefesh() {
    if($('body').attr('id') === 'module-productquotation-quote')
		window.location.reload(false);
}

function validateForm(ev) {
	var fmm_email = document.getElementById('fmm_email');
    var fmm_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!fmm_filter.test(fmm_email.value))
	{
		$(fmm_email).focus();
		alert(fmm_label_fail);
		return false;
	}
	else
	{
		return true;
	}
}

//For updating quote
function fmmQuoteUpdate(e) {
	var token = $('#token').val();
	var controller_url_update = baseDir+"?fc=module&module=productquotation&controller=ajax&action=update&token="+token;
	$('.fmm_quote_row_qty').each(function(e){
			var _qty = $(this).val();
			var _quote_id = $(this).attr('tabindex');
			$.ajax({
					type	: "POST",
					cache	: false,
					url		: controller_url_update,
					data : {quote_id:_quote_id, qty:_qty},
					success: function(data) {
						//console.log(data);
						$('#fmm_quote_basetotal').html(data);
						$.ajax({
								type	: "GET",
								cache	: false,
								url		: controller_url_html,
								success: function(data) {
									$('#fmm_quote_content .fmm_content').html(data);
								}
						});
					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						console.log(textStatus);
					}
			});
			console.log('QTY: '+_qty+' '+_quote_id);
		}
	);
}

function addQuote2(pro_id) {
	var token = $('#token').val();
	var p_id= pro_id;
	var id_product = p_id;
	$('#gify_img').show();
	$('.fmm_quote_button_'+pro_id).hide();
	var controller_url = baseDir+"?fc=module&module=productquotation&controller=ajax&action=add&id_product="+id_product+"&token="+token;
	var controller_url_count = baseDir+"?fc=module&module=productquotation&controller=ajax&action=count&token="+token;
		var pq_cid = $('#idCombination').val();
		var quantity_wanted = $('#fmm_quote_qty').val();

		$.ajax({
				type	: "POST",
				cache	: false,
				url		: controller_url,
				data : {comb_id:pq_cid,quantity:quantity_wanted},
				success: function(data) {
					$('#gify_img').hide();
					$('.fmm_quote_button_'+pro_id).show();
					result = parseInt(data);
					if (result < 0) {
                        alert(pq_label_exists);
                    }
					else
					{
						$.ajax({
								type	: "POST",
								cache	: false,
								url		: controller_url_count,
								success: function(data) {
									result = parseInt(data);
									$('#product_quotation_quantity').text(result);
								}
						});
						$('#fmm_quote_content .fmm_content').html(data);
						$('#fmm_quote_content').slideDown();
						$("html, body").animate({ scrollTop: 0 }, "slow");
					}
					
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert(textStatus);
					$('#gify_img').hide();
					$('.fmm_quote_button_'+pro_id).show();
				}
		});
	}

	
		
	