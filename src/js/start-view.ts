/// <reference path="main.ts" />
namespace DVDNameSpace {

    $(document).ready(function () {
        const start_div = $('#start_div');
        console.log("Loading start");
        
        /* Create the html elements */
        const head1 = $('<h1>Reference Application</h1>');
        /* Apply known classes to the elements */
        head1.addClass("head-style");
        /* append element to the div */
        start_div.append(head1);

        /**
         * Remove this from the DOM.
         * It gets added (attached) back when menu button is clicked  
         */ 
        start_div.detach();
    });

}