/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let dictionary = new Set(words);
    let ans = [], baseWord = '';

    const dfs = (len, count) => {
        if (baseWord.length === len) {
            if (count > 1) return true;
            else return false;
        }

        for (let i = len + 1; i <= baseWord.length; i++) {
            let subStr = baseWord.substring(len, i);
            if (dictionary.has(subStr) && dfs(i, count + 1)) {
                return true;
            }
        }

        return false;
    };

    words.forEach(word => {
        baseWord = word;
        if (dfs(0, 0)) ans.push(word);
    });

    return ans;
};