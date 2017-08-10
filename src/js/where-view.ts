/// <reference path="main.ts" />
namespace DVDNameSpace {
  $(document).ready(function () {

  console.log("Loading where");
  const head2 = $('<h1>Where Page</h1>');
  const p2 = $('<p> Where do I find the developers of this application</p>');
  // const div2 = $('<div>');

  where_div = $('<div>').attr('id', 'contact_div').addClass('pages');
  const head3 = $('<h1>Page 3 </h1>');
  const p3 = $('<p> Content for page Three </p>');
  const tbl3 = $('<table>');
  where_div.append(head3);
  where_div.append(tbl3);

  const ur = "http://mmedia.cput.ac.za/MUT370S_live/api/rest.php/user_t?transform=1";
  $.get(ur, function (data: any) {
    console.log(data.user_t);
    console.log(data.user_t.length);
    // tbl3.append(data.user_t);
    for (let i = 0; i <= data.user_t.length; i++) {
      if (data.user_t[i] === undefined) continue;
      tbl3.append('<tr><td>' + data.user_t[i].user_name + '</td></tr>')
    }
  });
  where_div.append("<h1>END</h1>");
  });
}