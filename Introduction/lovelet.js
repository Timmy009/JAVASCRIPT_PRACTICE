function arrang(s, words) {
    wor = ""
    for (var count = 0; count < words.length; count++) {
        wor += words[count]
    }


    let wordcount = 0
    for (var count = 0; count < s.length; count++) {
        if (s[count] == wor[count]) {
            wordcount++;
        }
    }
    if (s.length == wordcount) {
        return true;
    }
    else {
        return false;
    }
}

s = "iamleetcode"
words = ["i", "love", "leetcode", "applies"]
console.log(arrang(s, words))

s2 = "iloveleetcode"
words2 = ["applies", "i", "love", "leetcode"]
console.log(arrang(s2, words2))