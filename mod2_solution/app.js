// MODULE 2  SOLUTION
(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('BoughtShoppingController', BoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
 var showList = this;
 showList.listEmpty = false ;
 ShoppingListCheckOffService.addItemALL();
 showList.items = ShoppingListCheckOffService.getItems();
 showList.removeItem = function (itemIndex) {
ShoppingListCheckOffService.removeItem(itemIndex);
    if (showList.items.length == 0 ) { showList.listEmpty = true ; }
};
};
BoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function BoughtShoppingController(ShoppingListCheckOffService) {
  var ctrl2  = this ;
  ctrl2.items2 =  ShoppingListCheckOffService.getItems2();
}
function ShoppingListCheckOffService() {
         var service = this;
          var items = [];
          var items2 = [];
          var curName = "";
          var curQuant = "" ;
          var lstEMPTY = true ;


          var itemsList = [
            {
              name: "Milk",
              quantity: "1"
            },
            {
              name: "Donuts",
              quantity: "2"
            },

            {
              name: "Chocolate",
              quantity: "3"
            },

            {
              name: "Peanut Butter",
              quantity: "4"
            },

            {
              name: "Peanut Butter",
              quantity: "5"
            },

            {
              name: "Pepto Bismol",
              quantity: "6"
            }

          ];
          var listLEN = itemsList.length

          service.addItemALL = function () {

           for (var i = 0 ; i < listLEN ; i++  ) {
             var item = {
                          name:     itemsList[i].name,
                          quantity: itemsList[i].quantity
             };
             items.push(item);
           }

          };
  service.removeItem = function (itemIdex) {
     curName =  items[itemIdex].name ;
     curQuant = items[itemIdex].quantity;
     items2.push(  items[itemIdex] ) ;
     items.splice(itemIdex, 1);
     lstEMPTY = false ;
     service.setlstEMPTY();
  };
  service.getItems = function () {
    return items;
  };
  service.getItems2 = function () {
    return items2;
  };
     service.setlstEMPTY = function() {
       lstEMPTY = false ;
     }
}
})();
