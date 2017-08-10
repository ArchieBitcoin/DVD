/// <reference path="main.ts" />
var DVDNameSpace;
(function (DVDNameSpace) {
    $(document).ready(function () {
        console.log("Loading where");
        var head2 = $('<h1>Where Page</h1>');
        var p2 = $('<p> Where do I find the developers of this application</p>');
        // const div2 = $('<div>');
        DVDNameSpace.where_div = $('<div>').attr('id', 'contact_div').addClass('pages');
        var head3 = $('<h1>Page 3 </h1>');
        var p3 = $('<p> Content for page Three </p>');
        var tbl3 = $('<table>');
        DVDNameSpace.where_div.append(head3);
        DVDNameSpace.where_div.append(tbl3);
        var ur = "http://mmedia.cput.ac.za/MUT370S_live/api/rest.php/user_t?transform=1";
        $.get(ur, function (data) {
            console.log(data.user_t);
            console.log(data.user_t.length);
            // tbl3.append(data.user_t);
            for (var i = 0; i <= data.user_t.length; i++) {
                if (data.user_t[i] === undefined)
                    continue;
                tbl3.append('<tr><td>' + data.user_t[i].user_name + '</td></tr>');
            }
        });
        DVDNameSpace.where_div.append("<h1>END</h1>");
    });
})(DVDNameSpace || (DVDNameSpace = {}));
//# sourceMappingURL=where-view.js.map