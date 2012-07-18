beforeEach(function() {
  this.addMatchers({
    toHaveSellInAndQuality: function(expectedSellIn, expectedQuality){
		return this.actual.get('sell_in') === expectedSellIn && this.actual.get('quality') === expectedQuality;
	}
  });
});

describe("Gilded Rose", function() {

	var vest = items[0];
	var brie = items[1];
	var elixir = items[2];
	var sulfuras = items[3];
	var passes = items[4];
	var conjured = items[5];

	describe("what happens after one day", function() {

		it('should update correctly', function() {
			update_quality();

			expect(vest).toHaveSellInAndQuality(9, 19);
			expect(brie).toHaveSellInAndQuality(1, 1);
			expect(elixir).toHaveSellInAndQuality(4, 6);
			expect(sulfuras).toHaveSellInAndQuality(0, 80);
			expect(passes).toHaveSellInAndQuality(14, 21);
			expect(conjured).toHaveSellInAndQuality(2, 5);
		});

	});

	describe('what happens after five days', function() {

		it('should update correctly', function() {
			update_quality();
			update_quality();
			update_quality();
			update_quality();

			expect(vest).toHaveSellInAndQuality(5, 15);
			expect(brie).toHaveSellInAndQuality(-3, 8);
			expect(elixir).toHaveSellInAndQuality(0, 2);
			expect(sulfuras).toHaveSellInAndQuality(0, 80);
			expect(passes).toHaveSellInAndQuality(10, 25);
			expect(conjured).toHaveSellInAndQuality(-2, 0);
		});

	});

	describe('what happens after six days', function() {

		it('should update correctly', function() {
			update_quality();

			expect(vest).toHaveSellInAndQuality(4, 14);
			expect(brie).toHaveSellInAndQuality(-4, 10);
			expect(elixir).toHaveSellInAndQuality(-1, 0);
			expect(sulfuras).toHaveSellInAndQuality(0, 80);
			expect(passes).toHaveSellInAndQuality(9, 27);
			expect(conjured).toHaveSellInAndQuality(-3, 0);
		});

	});

	describe('what happens after eleven days', function() {

		it('should update correctly', function() {
			update_quality();
			expect(passes).toHaveSellInAndQuality(8, 29);
			update_quality();
			expect(passes).toHaveSellInAndQuality(7, 31);
			update_quality();
			expect(passes).toHaveSellInAndQuality(6, 33);
			update_quality();
			expect(passes).toHaveSellInAndQuality(5, 35);
			update_quality();

			expect(vest).toHaveSellInAndQuality(-1, 8);
			expect(brie).toHaveSellInAndQuality(-9, 20);
			expect(elixir).toHaveSellInAndQuality(-6, 0);
			expect(sulfuras).toHaveSellInAndQuality(0, 80);
			expect(passes).toHaveSellInAndQuality(4, 38);
			expect(conjured).toHaveSellInAndQuality(-8, 0);
		});

	});

	describe('what happens after sixteen days', function() {

		it('should update correctly', function() {
			update_quality();
			update_quality();
			update_quality();
			update_quality();
			update_quality();

			expect(vest).toHaveSellInAndQuality(-6, 0);
			expect(brie).toHaveSellInAndQuality(-14, 30);
			expect(elixir).toHaveSellInAndQuality(-11, 0);
			expect(sulfuras).toHaveSellInAndQuality(0, 80);
			expect(passes).toHaveSellInAndQuality(-1, 0);
			expect(conjured).toHaveSellInAndQuality(-13, 0);
		});

	});

	describe('what happens after seventeen days', function() {

		it('should update correctly', function() {
			update_quality();

			expect(vest).toHaveSellInAndQuality(-7, 0);
			expect(brie).toHaveSellInAndQuality(-15, 32);
			expect(elixir).toHaveSellInAndQuality(-12, 0);
			expect(sulfuras).toHaveSellInAndQuality(0, 80);
			expect(passes).toHaveSellInAndQuality(-2, 0);
			expect(conjured).toHaveSellInAndQuality(-14, 0);
		});
		
	});

});