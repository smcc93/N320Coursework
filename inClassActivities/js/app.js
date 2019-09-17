//observer model example
class expressLane {
  constructor() {
    this.groceryItem = [];
  }
  addItem(groceryItem) {
    this.groceryItem.push(groceryItem);
  }
  beep() {
    this.groceryItem.forEach(function(groceryItem) {
      groceryItem.beep();
    });
  }
}

class groceryItem {
  beep() {
    console.log("beep");
  }
}
var expressLane = new expressLane();
expressLane.addItem(new groceryItem());
expressLane.addItem(new groceryItem());
expressLane.beep();
