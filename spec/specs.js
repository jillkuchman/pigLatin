describe('pigLatin', function() {
    it("returns the same word with -ay at the end if the word begins with a vowel", function() {
        expect(pigLatin("apple")).to.equal("appleay");
    });
    it("returns the word with the vowel sound at the beginning, followed by the starting consonants followed by -ay", function() {
        expect(pigLatin("fox")).to.equal("oxfay");
    });
});
