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
		var extras = this.get('extras');
		if(extras){
			var self = this;
			var sellIns = _.keys(extras);
			var sortedSellIns = _.sortBy(sellIns, function(sellIn) {
				return sellIn * -1;
			});

			_.each(sortedSellIns, function(sellIn){
				if(self.get('sell_in') <= sellIn){
					self.set('dailyQualityChange', extras[sellIn]);
				}
			});
		}

		this.set('sell_in', this.get('sell_in') + this.get('dailySellInChange'));

		var quality = this.get('quality');
		var amountToChangeQuality = this.get('dailyQualityChange');

		if(quality > 0 || amountToChangeQuality > 0) {
			if(this.get('sell_in') < 0){
				amountToChangeQuality *= 2;
			}

			var change = quality + amountToChangeQuality;
			if (change < 0) {change = 0;}
			this.set('quality', change);
		}
	}
});