var count=0;
exports.next = function() {
    return count++;
}
exports.getCount = function() {
    return count;
}