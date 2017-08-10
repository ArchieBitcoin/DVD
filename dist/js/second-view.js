/// <reference path="main.ts" />
var DVDNameSpace;
(function (DVDNameSpace) {
    $(document).ready(function () {
        var second_div = $('#second_div');
        console.log("Loading second");
        /**
         * Load the data classes
         */
        var dvd1 = new DVDNameSpace.DVD();
        console.log(" The dvd 3");
        dvd1.setPrice(340);
        dvd1.setName("Lion King");
        dvd1.displayDVD();
        var head1 = $('<h1>Page1</h1>');
        var label1 = $('<label>').text('Name').addClass('label-style');
        var label2 = $('<label>').text('Price').addClass('label-style');
        var input1 = $('<input>');
        var input2 = $('<input>');
        var button = $('input[type=submit]')
            .addClass('btn btn-danger')
            .click(btnClick);
        var form = $('<form>');
        form.append(label1);
        form.append(input1);
        form.append('<br>');
        form.append(label2);
        form.append(input2);
        form.append('<br>');
        form.append(button);
        second_div.append(head1);
        second_div.append(form).addClass('container-fluid');
        function btnClick() {
            confirm("Are you sure  you want to add this DVD!");
            window.location.href = "mailto:sydwell@gmail.com:testing 123";
        }
        /**
         * Remove this from the DOM.
         * It gets added (attached) back when menu button is clicked
         */
        second_div.detach();
    });
})(DVDNameSpace || (DVDNameSpace = {}));
//# sourceMappingURL=second-view.js.map