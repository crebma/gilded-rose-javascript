describe('GR.ItemModel', function() {

	it('should exist', function() {
		expect(GR.ItemModel).toBeDefined();
	});

	it('should decrease quality by one every day', function() {
		var item = new GR.ItemModel({ name: '+5 Dexterity Vest', sell_in: 10, quality: 20 });

		item.nextDay();

		expect(item.get('sell_in')).toBe(9);
		expect(item.get('quality')).toBe(19);
	});


	it('should change quality by custom value if available', function() {
		var item = new GR.ItemModel({ name: '+5 Dexterity Vest', sell_in: 10, quality: 20, dailyQualityChange: 2 });

		item.nextDay();

		expect(item.get('sell_in')).toBe(9);
		expect(item.get('quality')).toBe(22);
	});

	it('should never decrease quality past 0', function() {
		var item = new GR.ItemModel({ name: '+5 Dexterity Vest', sell_in: 10, quality: 0 });

		item.nextDay();

		expect(item.get('sell_in')).toBe(9);
		expect(item.get('quality')).toBe(0);
	});

	it('should honor dailySellInChange if custom', function() {
		var item = new GR.ItemModel({ name: '+5 Dexterity Vest', sell_in: 10, quality: 10, dailySellInChange: 0 });

		item.nextDay();

		expect(item.get('sell_in')).toBe(10);
		expect(item.get('quality')).toBe(9);
	});

	it('should decrease quality by double if past sell by date', function() {
		var item = new GR.ItemModel({ name: '+5 Dexterity Vest', sell_in: 0, quality: 20 });

		item.nextDay();

		expect(item.get('sell_in')).toBe(-1);
		expect(item.get('quality')).toBe(18);
	});

	it('should allow extra funtionality on next day if provided', function() {
		var lessThan7Predicate = function(item) { return item.get('sell_in') < 7; };
		var lessThan7Action = function(item) { item.set('dailyQualityChange', -2); };
		var lessThan7Extra = { predicate: lessThan7Predicate, action: lessThan7Action };

		var lessThan6Predicate = function(item) { return item.get('sell_in') < 6; };
		var lessThan6Action = function(item) { item.set('dailyQualityChange', -4); };
		var lessThan6Extra = { predicate: lessThan6Predicate, action: lessThan6Action };

		var extras = [ lessThan7Extra, lessThan6Extra ];

		var item = new GR.ItemModel({ name: '+5 Dexterity Vest', sell_in: 6, quality: 20, extras: extras });

		item.nextDay();

		expect(item.get('sell_in')).toBe(5);
		expect(item.get('quality')).toBe(18);

		item.nextDay();

		expect(item.get('sell_in')).toBe(4);
		expect(item.get('quality')).toBe(14);
	});

});