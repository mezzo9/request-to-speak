/* global module,require*/
/* eslint no-console: "off" */

let logger = null;

/**
 * get meetings from agenda management system
 * @return {Promise}
 */
function getMeetings() {
    return new Promise(function(fulfill, reject) {
        let ret = [{
                sireId: "12",
                meetingName: "TUESDAY BOARD MEETING",
                meetingDate: "2017-09-05"
            }];
        fulfill(ret);
    });
}

/**
 * Get all items for a specified meeting
 * @param {string} meetingId
 * @return {recordSet}
 */
function getItems(meetingId) {
    return new Promise(function(fulfill, reject) {
        let ret = {};
        fulfill(ret);
    });
}

module.exports = function(cfg, log) {
    logger = log;

    return {
        version: "1.0",
        dbType: "N/A",
        getMeetings: getMeetings,
        getItems: getItems
    };
};
