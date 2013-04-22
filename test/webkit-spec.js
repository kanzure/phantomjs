describe("WebKit", function() {
    it("should construct a date in mm-dd-yyyy format", function() {
        var date = new Date('2012-09-07');
        expect(date.toString()).toNotEqual('Invalid Date');
    });

    it("should parse a date in ISO 8601 format (yyyy-mm-dd)", function() {
        var date = Date.parse("2012-01-01");
        expect(date).toEqual(1325376000000);
    });

    it("should not crash when failing to dirty lines while removing an inline", function () {
        var p = require("webpage").create();
        p.open('../test/webkit-spec/inline-destroy-dirty-lines-crash.html');
        waits(50);
    });
});
