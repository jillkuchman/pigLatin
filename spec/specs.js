describe('pigLatin', function() {
    it("returns the same word with -ay at the end if the word begins with a vowel", function() {
        expect(pigLatin("apple")).to.equal("appleay");
    });
    it("returns the word with the vowel sound at the beginning, followed by the starting consonant followed by -ay", function() {
        expect(pigLatin("fox")).to.equal("oxfay");
    });
    it("returns the word with the vowel sound at the beginning, followed by the starting consonants followed by -ay, even if the word starts with two consonants", function() {
        expect(pigLatin("fridge")).to.equal("idgefray");
    });
    it("returns the word with the vowel sound at the beginning, followed by the starting consonants followed by -ay, even if the word starts with q", function() {
        expect(pigLatin("quest")).to.equal("estquay");
    });

    it("returns the word with the vowel sound at the beginning, followed by the starting consonants followed by -ay, even if the word starts with y", function() {
        expect(pigLatin("qill")).to.equal("illqay");
    });


});
