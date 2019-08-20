/**
 * Removes that one family.
 * @param {FeedItem} item
 * @return {Boolean} true if we should mark this item as read, false if not
 */
module.exports = function ExcludeKardass(item) {
return (item.content.toLowerCase().indexOf('kardashian') >= 0);
}
