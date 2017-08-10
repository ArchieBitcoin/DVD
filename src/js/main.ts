
namespace DVDNameSpace {
   export let start_div;
   export let second_div;
   export let where_div;
   export let utility_div;
   
  // export class Main {
  //   public contact_div; 
  // }
  $(document).ready(function () {
    console.log("Loading main");
    /** JQuery reference to the mainSection */
    const mainSection = $('#mainSection');

    /**
     * The main elements of our base application consist of a bootstrap menu which 
     * is coded in index.html as well dynamic div's (start_div, second_div ...) 
     * which initialized above but constructed in there own files.   
     */
    start_div = $('#start_div');
    second_div = $('#second_div');
    where_div = $('#where_div');
    utility_div = $('#utility_div');

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
    function openDiv(element: JQueryEventObject) {
    //  console.log(" element.target ");
   //   console.log(element.target.id);
      const targetId = element.target.id;
      $(".menuLi").removeClass('active');
      $(".pages").detach();

      $("#" + targetId).parent().addClass('active');

      switch (targetId) {
        case "start_menu_btn": mainSection.append(start_div); break;
        case "second_menu_btn": mainSection.append(second_div); break;
        case "where_menu_btn": mainSection.append(where_div); break;
        case "utility_menu_btn": mainSection.append(utility_div); break;
        default: console.log(" Targetted div " + targetId + " not found ");
      }

    }
  }); // End of document.ready

}
