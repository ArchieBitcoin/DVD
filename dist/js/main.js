var DVDNameSpace;
(function (DVDNameSpace) {
    // export class Main {
    //   public contact_div; 
    // }
    $(document).ready(function () {
        console.log("Loading main");
        /** JQuery reference to the mainSection */
        var mainSection = $('#mainSection');
        /**
         * The main elements of our base application consist of a bootstrap menu which
         * is coded in index.html as well dynamic div's (start_div, second_div ...)
         * which initialized above but constructed in there own files.
         */
        DVDNameSpace.start_div = $('#start_div');
        DVDNameSpace.second_div = $('#second_div');
        DVDNameSpace.where_div = $('#where_div');
        DVDNameSpace.utility_div = $('#utility_div');
        $('#start_menu_btn').click(openDiv);
        $('#where_menu_btn').click(openDiv);
        $('#second_menu_btn').click(openDiv);
        $('#utility_menu_btn').click(openDiv);
        /**
         * Use jquery to " OPEN " a page.
         * In code this achieved by "detach"ing all the pages
         *    and removing the active class from all the menu list.
         *
         * We the use the default source argument when the function
         *    openDiv() is called from a menu button click.
         * This "element" is used to find which view to append to the main section
         *    as well to make it active.
         */
        function openDiv(element) {
            //  console.log(" element.target ");
            //   console.log(element.target.id);
            var targetId = element.target.id;
            $(".menuLi").removeClass('active');
            $(".pages").detach();
            $("#" + targetId).parent().addClass('active');
            switch (targetId) {
                case "start_menu_btn":
                    mainSection.append(DVDNameSpace.start_div);
                    break;
                case "second_menu_btn":
                    mainSection.append(DVDNameSpace.second_div);
                    break;
                case "where_menu_btn":
                    mainSection.append(DVDNameSpace.where_div);
                    break;
                case "utility_menu_btn":
                    mainSection.append(DVDNameSpace.utility_div);
                    break;
                default: console.log(" Targetted div " + targetId + " not found ");
            }
        }
    }); // End of document.ready
})(DVDNameSpace || (DVDNameSpace = {}));
//# sourceMappingURL=main.js.map