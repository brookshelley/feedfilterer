/**
 * Removes baseball-y things.
 * @param {FeedItem} item
 * @return {Boolean} true if we should mark this item as read, false if not
 */
module.exports = function ExcludeBaseball(item) {
    return (item.content.toLowerCase().indexOf('baseball') >= 0);
}
