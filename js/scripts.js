var pigLatin = function(input) {
    var split_input = input.split('');
    var vowels = ["a", "e", "i", "o", "u"];
    var output;
    var completed_word = false;
    var exception = ["q", "u"];


    split_input.forEach(function(letter) {
        if (letter === "q") {
            var q_index = split_input.indexOf(letter);
            var u_index = q_index + 1;
            if(!completed_word){
                if (split_input[u_index] === "u") {
                    var letter_index = split_input.indexOf(letter);
                    var consonant_array = split_input.slice(0, (u_index+1));
                    var input_length = input.length;
                    var vowel_array = split_input.slice((u_index+1), input_length);
                    output = vowel_array.join('') + consonant_array.join('') + "ay";
                    completed_word = true;
                    console.log(output);
                    return output;
                }
            }
        }
    });

    split_input.forEach(function(letter) {
        vowels.forEach(function(vowel) {
            if (!completed_word) {
                if(letter === vowel) {
                    var letter_index = split_input.indexOf(letter);
                    var consonant_array = split_input.slice(0, letter_index);
                    var input_length = input.length;
                    var vowel_array = split_input.slice(letter_index, input_length);
                    output = vowel_array.join('') + consonant_array.join('') + "ay";
                    completed_word = true;
                    return output;
                }
            }
        });
    });

    return output;
};


// we will want to split the array at the first vowel
//foreach loop?
    //foreach split_input as letter
    //foreach vowels as vowel
    //if letter === vowel, then split the array into two strings at that point
//split into 2 strings: beginning consonants and rest of word starting with the first vowel
//return vowel_string+consonant_string+"ay"

//if the first argument is not found in the second argument, -1 is returned, so !== -1 evaluates true
// if (($.inArray(split_input[0], vowels)) !== -1) {
//     return input+"ay";
// }
