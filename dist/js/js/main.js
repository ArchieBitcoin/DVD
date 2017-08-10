var DVDNameSpace;
(function (DVDNameSpace) {
    $(document).ready(function () {
        var mainSection = $('#mainSection');
        // const page2 = $('#page2');
        // const page3 = $('#page3');
        // const page4 = $('#page4');
        // const page5 = $('#page5');
        var main_div = $('<div>').attr('id', 'main_div').addClass('pages');
        var about_div = $('<div>').attr('id', 'about_div').addClass('pages');
        var contact_div = $('<div>').attr('id', 'contact_div').addClass('pages');
        var gallery_div = $('<div>').attr('id', 'gallery_div').addClass('pages');
        $('#main_menu_btn').click(openDiv);
        $('#about_menu_btn').click(openDiv);
        $('#contact_menu_btn').click(openDiv);
        $('#gallery_menu_btn').click(openDiv);
        console.log("Jquery");
        console.log("About to execute a typescript command");
        var dvd1 = new DVDNameSpace.DVD();
        console.log(" The dvd 2");
        dvd1.setPrice(340);
        dvd1.setName("Lion King");
        dvd1.displayDVD();
        var head1 = $('<h1>Page1</h1>');
        var label1 = $('<label>').text('Name').addClass('label-style');
        var label2 = $('<label>').text('Price').addClass('label-style');
        var input1 = $('<input>');
        var input2 = $('<input>');
        var button = $('<button>ADD</button>')
            .addClass('btn btn-danger')
            .click(btnClick);
        var form = $('<div>');
        form.append(label1);
        form.append(input1);
        form.append('<br>');
        form.append(label2);
        form.append(input2);
        form.append('<br>');
        form.append(button);
        main_div.append(head1);
        main_div.append(form).addClass('container-fluid');
        var head2 = $('<h1>Page 2</h1>');
        var p2 = $('<p> Content for page Two </p>');
        // const div2 = $('<div>');
        about_div.append(head2);
        about_div.append(p2);
        var head3 = $('<h1>Page 3 </h1>');
        var p3 = $('<p> Content for page Three </p>');
        // const div2 = $('<div>');
        contact_div.append(head3);
        contact_div.append(p3);
        var head4 = $('<h1>Page 4 </h1>');
        var p4 = $('<p> Content for page Four </p>');
        // const div2 = $('<div>');
        gallery_div.append(head4);
        gallery_div.append(p4);
        function btnClick() {
            confirm("Are you sure  you want to add this DVD!");
        }
        /**
         * Use jquery to " OPEN " a page
         */
        function openDiv(element) {
            //  console.log(" element.target ");
            //   console.log(element.target.id);
            var targetId = element.target.id;
            $(".menuLi").removeClass('active');
            $(".pages").detach();
            $("#" + targetId).parent().addClass('active');
            switch (targetId) {
                case "main_menu_btn":
                    mainSection.append(main_div);
                    break;
                case "about_menu_btn":
                    mainSection.append(about_div);
                    break;
                case "contact_menu_btn":
                    mainSection.append(contact_div);
                    break;
                case "gallery_menu_btn":
                    mainSection.append(gallery_div);
                    break;
                default: console.log(" Targetted div " + targetId + " not found ");
            }
        }
    }); // End of document.ready
})(DVDNameSpace || (DVDNameSpace = {}));
//# sourceMappingURL=main.js.map