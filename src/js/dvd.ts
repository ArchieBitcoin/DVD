namespace DVDNameSpace {
    export class DVD {
        private price: number;
        private name;
        private available;

        public constructor () {
            //Will create a DVD
        }

        public setPrice(newPrice: number):void {
            this.price = newPrice;
        }

        public setName(newName: string):void {
            this.name = newName;
        }

        public displayDVD():void {
            var out = '';
            out += '<br> Price:  R' + this.price;
            out += '<br> Name: ' + this.name;
         //   $('body').append(out);
        }
    }

}