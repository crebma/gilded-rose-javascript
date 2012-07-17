GR.ItemModel = Backbone.Model.extend({
	initialize: function(){
		if(this.get('dailyQualityChange') === undefined) {
			this.set('dailyQualityChange', -1);
		}
		if(this.get('dailySellInChange') === undefined) {
			this.set('dailySellInChange', -1);
		}
	},
	nextDay: function() {
		var amountToChangeSellIn = this.get('sell_in') + this.get('dailySellInChange');
		this.set('sell_in', amountToChangeSellIn);

		var quality = this.get('quality');
		if(quality > 0) {
			var amountToChangeQuality = this.get('dailyQualityChange');
			if(amountToChangeSellIn < 0){
				amountToChangeQuality *= 2;
			}
			this.set('quality', quality + amountToChangeQuality);
		}
	}
});