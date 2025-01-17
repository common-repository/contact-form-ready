var fbTemplate;
var formBuilder;
jQuery(document).ready(function($) {
    
    jQuery("#post").attr('novalidate','novalidate');

     var buildWrap = document.querySelector('.build-wrap'),
        renderWrap = document.querySelector('.render-wrap'),
        editing = true,
        fbOptions = {
            controlPosition: 'left',
            disableFields: ['autocomplete', 'button', 'access'],
            editOnAdd: true,
            dataType: 'xml',
            formData: tmpformData.json,
            disableHTMLLabels: true,
            onAddField: function(formData) {
                jQuery('body').trigger('cfr_field_update_event');
            },
            onOpenFieldEdit: function(formData) {
                jQuery('body').trigger('cfr_field_update_event');
            },
            onCloseFieldEdit: function(formData) {
                jQuery('body').trigger('cfr_field_update_event');
            },

        };

    var isJson = false;
    try {
        var json = JSON.parse(tmpformData.json);
        isJson = true;
    } catch(err) {
        isJson = false;
    }
    
    if (isJson) {
        fbOptions.formData = tmpformData.json;
        fbOptions.dataType = 'json';
    }


    formBuilder = jQuery(buildWrap).formBuilder(fbOptions);

});