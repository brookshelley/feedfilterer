// List of URLs we've seen this session
// TODO: persist this to disk somewhere so we do a better job of de-duping
const seenUrls = [];

/**
 * Removes duplicate links to the same item.
 * @param {FeedItem} item
 * @return {Boolean} true if we should mark this item as read, false if not
 */
module.exports = function DedupeLinks(item) {
    if (seenUrls.indexOf(item.itemUrl) >= 0) {
        return true;
    }

    seenUrls.push(item.itemUrl);

    return false;
}
