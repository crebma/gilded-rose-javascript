var items = []

items.push(new GR.ItemModel({name: '+5 Dexterity Vest', sell_in: 10, quality: 20}));
items.push(new GR.ItemModel({name: 'Aged Brie', sell_in: 2, quality: 0, dailyQualityChange: 1}));
items.push(new GR.ItemModel({name: 'Elixir of the Mongoose', sell_in: 5, quality: 7}));
items.push(new GR.ItemModel({name: 'Sulfuras, Hand of Ragnaros', sell_in: 0, quality: 80, dailyQualityChange: 0, dailySellInChange: 0}));
items.push(new GR.ItemModel({name: 'Backstage passes to a TAFKAL80ETC concert', sell_in: 15, quality: 20}));
items.push(new GR.ItemModel({name: 'Conjured Mana Cake', sell_in: 3, quality: 6}));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var name = item.get('name');

    if(name !== 'Backstage passes to a TAFKAL80ETC concert') {
      item.nextDay();
    } else {

      
      if (item.get('quality') < 50) {
        item.set('quality', item.get('quality') + 1);
        if (name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.get('sell_in') < 11) {
            if (item.get('quality') < 50) {
              item.set('quality', item.get('quality') + 1);
            }
          }
          if (item.get('sell_in') < 6) {
            if (item.get('quality') < 50) {
              item.set('quality', item.get('quality') + 1);
            }
          }
        }
      }

      if (name != 'Sulfuras, Hand of Ragnaros') {
        item.set('sell_in', item.get('sell_in') - 1);
      }
      
      if (item.get('sell_in') < 0) {
            item.set('quality', 0);
      }
    }
  }
}
