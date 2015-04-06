describe('pigLatin', function() {
    it("is false for a word that does not end in -ay", function() {
        expect(pigLatin("fox")).to.equal(false);
    });
    it("returns the same word with -ay at the end if the word begins with a vowel", function() {
        expect(pigLatin("apple")).to.equal("appleay");
    });
});
