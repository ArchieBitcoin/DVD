var DVDNameSpace;
(function (DVDNameSpace) {
    console.log("Jquery");
    console.log("About to execute a typescript command");
    var dvd1 = new DVDNameSpace.DVD();
    console.log(" The dvd 2");
    dvd1.setPrice(340);
    dvd1.setName("Lion King");
    dvd1.displayDVD();
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
    $('body').append(form).addClass('container-fluid');
    function btnClick() {
        confirm("Are you sure you want to add this DVD!");
    }
    //  });
})(DVDNameSpace || (DVDNameSpace = {}));
//# sourceMappingURL=main.js.map