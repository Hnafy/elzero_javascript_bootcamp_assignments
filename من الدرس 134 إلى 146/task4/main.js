let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? can include s only one or zero
// : after https or http
// \/\/ to scape /
// (?:[-\w]+\.)? can link include :any word.
// ([-\w]+)\.\w+ any word.any word
// (?:\.\w+)? :.any word can include or no
// \/?.* scape / can include this one or zero any character can include zero or more
// i case-insensitive flag for the regex