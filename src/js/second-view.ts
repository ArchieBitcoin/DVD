/// <reference path="main.ts" />
namespace DVDNameSpace {

    $(document).ready(function () {
        const second_div = $('#second_div');
        console.log("Loading second");
        /**
         * Load the data classes
         */
        let dvd1 = new DVD();
        console.log(" The dvd 3");
        dvd1.setPrice(340);
        dvd1.setName("Lion King");
        dvd1.displayDVD();

        const head1 = $('<h1>Page1</h1>');
        const label1 = $('<label>').text('Name').addClass('label-style');
        const label2 = $('<label>').text('Price').addClass('label-style');
        const input1 = $('<input>');
        const input2 = $('<input>');
        const button = $('input[type=submit]')
            .addClass('btn btn-danger')
            .click(btnClick);
        const form = $('<form>');
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
}