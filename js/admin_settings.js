jQuery(document).ready(function() {

    if (document.getElementById('wpcf_nd_template_html')) {

        var wpcfCodeMirror = CodeMirror.fromTextArea(document.getElementById('wpcf_nd_template_html'), {
            matchBrackets: true,
            lineNumbers: true,
            styleActiveLine: true,
            autoCloseTags: true,
            mode: "xml",
            htmlMode: true
        });
        wpcfCodeMirror.setOption("theme", "monokai");
        setTimeout(function () {
            wpcfCodeMirror.refresh();
        }, 1);

        jQuery("body").on("click", "#wpcf_restore_default_template", function() {
            var proceed = confirm(wpcf_nd_confirm_restore_template_string.label);
            if(proceed) {
                var def_template = jQuery("#wpcf_nd_template_html_default").val();

                jQuery('#wpcf_nd_template_html').html(def_template);
                wpcfCodeMirror.getDoc().setValue(def_template);
            }
        });
    }

    if (document.getElementById('wpcf_custom_css')){
        var wpcfCodeMirror = CodeMirror.fromTextArea(document.getElementById('wpcf_custom_css'), {
            matchBrackets: true,
            lineNumbers: true,
            styleActiveLine: true,
            smartIndent: true,
            mode: "text/css",
        });
        wpcfCodeMirror.setOption("theme", "monokai");
        setTimeout(function () {
            wpcfCodeMirror.refresh();
        }, 1);
    }

    var gdprNotice = jQuery('.wpcf-notice-secondary');
    var gdprInput = jQuery('input[name=wpcf_nd_enable_gdpr]');
    gdprInput.on('change', gdprIsChecked);
    gdprIsChecked();

    function gdprIsChecked() {
        gdprInput.prop('checked') ? gdprNotice.addClass('is-hidden') : gdprNotice.removeClass('is-hidden');
    }

});
