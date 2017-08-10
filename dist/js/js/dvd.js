var DVDNameSpace;
(function (DVDNameSpace) {
    var DVD = (function () {
        function DVD() {
            //Will create a DVD
        }
        DVD.prototype.setPrice = function (newPrice) {
            this.price = newPrice;
        };
        DVD.prototype.setName = function (newName) {
            this.name = newName;
        };
        DVD.prototype.displayDVD = function () {
            var out = '';
            out += '<br> Price:  R' + this.price;
            out += '<br> Name: ' + this.name;
            //   $('body').append(out);
        };
        return DVD;
    }());
    DVDNameSpace.DVD = DVD;
})(DVDNameSpace || (DVDNameSpace = {}));
//# sourceMappingURL=dvd.js.map