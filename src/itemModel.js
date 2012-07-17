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
			for(var i = 0; i < extras.length; i++){
				if(extras[i].predicate(this)){
					extras[i].action(this);
				}
			}
		}

		var quality = this.get('quality');
		var amountToChangeQuality = this.get('dailyQualityChange');

		if(quality > 0 || amountToChangeQuality > 0) {
			if(this.get('sell_in') < 0){
				amountToChangeQuality *= 2;
			}
			this.set('quality', quality + amountToChangeQuality);
		}

		this.set('sell_in', this.get('sell_in') + this.get('dailySellInChange'));
	}
});