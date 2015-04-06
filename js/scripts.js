var pigLatin = function(input) {
    var split_input = input.split('');
    var vowels = ["a", "e", "i", "o", "u"];
    if (($.inArray(split_input[0], vowels)) !== -1) {
        return input+"ay";
    }
    else {
        return false;
    }
};
