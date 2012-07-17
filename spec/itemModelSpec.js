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

});