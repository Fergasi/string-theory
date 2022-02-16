// * `xify` - returns the same string, but with every character replaced by an 'x'
//   * Examples:
//     * xify('hello') -> 'xxxxx'
//     * xify('hi there') -> 'xxxxxxxx'

    console.log(xify("hi there"));

    function xify(str) {
        let strX = "";
        let count = 0;

        while (count < str.length) {

            strX += 'x';
            count++;

        }
        
        return strX;
    }

//OR ALTERNATIVELY:

    console.log(xfiy("hi there"));

    function xfiy(str) {
        let strX = "";

        for (let count = 0; count < str.length; count++) {

            strX += 'x';

        }

        return strX;
    }

// * `yellingChars` - returns the given string with an exclamation point after each character
//   * Examples:
//     * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
//     * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
//   * Hints:
//     * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.

       console.log(yellingChars("goodness"));

        function yellingChars(str) {
            let strX = "";

            for (let count = 0; count < str.length; count++) {

                strX += str[count] + '!';

            }

            return strX;
        }

// * `indexedChars` - adds the index of each character before that character in the given string
//   * Examples:
//     * indexedChars('hello') -> '0h1e2l3l4o'
//     * indexedChars('bye') -> '0b1y2e'
//   * Hints: 
//     * We can add something BEFORE the current character as well!

    console.log(indexedChars("hello"));

    function indexedChars(str) {
        let strX = "";

        for (let count = 0; count < str.length; count++) {

            strX += count + str[count];

        }

        return strX;
    }

// * `numberedChars` - adds the number of each character before that character in the given string
//   * Examples:
//     * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
//     * numberedChars('bye') -> '(1)b(2)y(3)e'
//   * Hints: 
//     * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!

// console.log(numberedChars("hello"));

    function numberedChars(str) {
        let strX = "";

        for (let count = 0; count < str.length; count++) {

            strX += '(' + (count+1) + ')' + str[count];

        }

        return strX;
    }

// * `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
//   * Examples:
//     * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
//     * exclaim('This is fine.') -> 'This is fine!'

    console.log(exclaim("What are you doing? Are you a fool?"));

    function exclaim(str) {
        let strX = "";

        for (let i = 0; i < str.length; i++) {

            if (str[i] === '?' || str[i] ===  '.') {

                strX += '!'; 

            } else {
                
                strX += str[i];

            }
        }

        return strX;
    }

// * `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
//   * Examples:
//     * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
//     * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'

    console.log(repeatIt("beetlejuice", 3));

        function repeatIt(str, n) {
            var strX = "";

            while (n > 0) {

            strX += str;
            n--;

            }

            return strX;
        }

// * `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
//   * Examples:
//     * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
//     * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

    console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));

    function truncate(str) {
        let strX = "";
        let i = 0;
    
        while (i < 15) {

            strX += str[i];
            i++ 

        } 
        
        if (i = 15) {

            strX += '...';

        }
         
        return strX;
    }  

// * `ciEmailify` - creates an email from a two-part name
//   * Examples:
//     * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
//     * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'

    console.log(ciEmailify("colin jaffe"));

    function ciEmailify(str) {
        let strX = "";

        for (let i = 0; i < str.length; i++) {

            if (str[i] === " ") {

                strX += ".";

            } else {
            
            strX += str[i];

            }
        } 
        
        if (i = str.length) {

            strX += "@codeimmersives.com"
        }
        
        return strX;
    }  

// * `reverse` - reverses the given string
//   * Examples:
//     * reverse('colin') -> 'niloc'
//     * reverse('mesuara') -> 'arausem'

    console.log(reverse("mesuara"));

    function reverse(str) {
        let strX = "";
    
        for (let i = 0;i <= str.length; i++) {
            
            strX += str.charAt(str.length - i);
            
        }
        return strX;
    }

// * `onlyVowels` - returns only the vowels from a word
//   * Examples:
//     * onlyVowels('Colin Jaffe') -> 'oiae'
//     * onlyVowels('quickly') -> 'ui'
//     * onlyVowels('Anthony DeRosa') -> 'Aoeoa'

    console.log(onlyVowels("Anthony DeRosa"));

    function onlyVowels(str) {
        let strX = "";
    
        for (let i = 0;i < str.length; i++) {
            
            if (str.toLowerCase()[i] === 'a' || str.toLowerCase()[i] === 'e' || str.toLowerCase()[i] === 'i' || str.toLowerCase()[i] === 'o' || str.toLowerCase()[i] === 'u' ) {

                strX += str[i];

            }
        }
        return strX;
    }

// ## Extra stretch goals

// * `crazyCase` - returns the given string with alternating lower and upper cases
//   * Examples:
//     * crazyCase('hello') -> 'hElLo'
//     * crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
//     * crazyCase('YELLING') -> 'yElLiNg'

    console.log(crazyCase("multiple words here"));

    function crazyCase(str) {
        let strX = "";
    
        for (let i = 0;i < str.length; i++) {
            
            if (i % 2 === 0) {

                strX += str.toLowerCase()[i];
            
            } else {

                strX += str.toUpperCase()[i];
            }
        }
        return strX;
    }

// * `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
//   * Examples:
//     * titleCase('return of the king') -> 'Return Of The King'
//     * titleCase('cOde iMMerSives') -> 'Code Immersives'

    console.log(titleCase("cOde iMMerSives"));

    function titleCase(str) {
        let strX = "";
    
        for (let i = 0;i < str.length; i++) {
            
            if (i === 0 || str[i-1] === " ") {

                strX += str.toUpperCase()[i];

            } else 

                strX += str.toLowerCase()[i];
            
        }
        return strX;
    }

// * `camelCase` - returns the given string in camel case
//   * Examples:
//     * camelCase('oh Hello') -> 'ohHello'
//     * camelCase('well yeah of course') -> 'wellYeahOfCourse'
//     * camelCase('Boy howdy') -> 'boyHowdy'

    console.log(camelCase("well yeah of course"));

    function camelCase(str) {
        let strX = "";
    
        for (let i = 0;i < str.length; i++) {
            
            if (str[i] === " ") {

                strX += "";

            } else

            if (str[i-1] === " ") {

                strX += str.toUpperCase()[i];

            } else

                strX += str.toLowerCase()[i];
        }
        return strX;
    }

// * `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
//   * Examples:
//     * crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
//     * crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'

    console.log(crazyCase2ReturnOfCrazyCase("multiple words here"));

    function crazyCase2ReturnOfCrazyCase(str) {
        let strX = "";
        let count = 0;
    
        for (let i = 0;i < str.length; i++) {
            
            if (count % 2 === 0 && str[i] !== " ") {

                strX += str.toLowerCase()[i];
                count++;

            } else

            if (count % 2 === 1 && str[i] !== " ") {

                strX += str.toUpperCase()[i];
                count++;

            } else

            strX += str[i];
        }
        return strX;
    }

 


    
