'use strict';

let Promise = require('bluebird');
let fs = Promise.promisifyAll(require('fs'));
const request = require('request');
const progress = require('request-progress');

let downloadState = {};
let downloadRequests = {};

function isoList(next) {
    const testFolder = '/isos/';

    fs.readdir(testFolder, (err, files) => {
        if (err) return next(err);

        let filesPromises = files.map((file) => {
            return fs.statAsync(testFolder + file).then((stat) => {
                return {
                    path: testFolder + file,
                    filename: file,
                    size: stat.size,
                    creation: stat.birthtime
                };
            });
        });

        Promise.all(filesPromises).then((stats) => {
            return next(null, stats);
        }).catch((err) => {
            return next(err);
        });
    });
}

function downloadIso(url, next) {
    let filename = url.split('/');
    filename = filename[filename.length - 1];
    let path = '/isos/' + filename;

    if (!downloadRequests[filename]) {
        downloadRequests[filename] = request(url);

        progress(downloadRequests[filename]).on('progress', function (state) {
            downloadState[filename] = state; //TODO: add file & url??
        }).on('error', function (err) {
            console.log(err);
            downloadState[filename] = undefined;
            downloadRequests[filename] = undefined;
            fs.unlink(path);
        }).on('end', function () {
            downloadState[filename] = undefined;
            downloadRequests[filename] = undefined;
        }).pipe(fs.createWriteStream(path));
        return next(null, true);
    } else {
        return next({err: "Duplicate download"});
    }
}

function downloadsInfo(next) {
    next(null, downloadState);
}

function stopDownload(filename, next) {
    if (downloadRequests[filename]) {
        downloadRequests[filename].abort();
        removeIso(filename, (err) => {
            return next(null, true);
        })
    } else {
        return next(true);
    }
}

function removeIso(iso, next) {
    let path = "/isos/" + iso;

    fs.unlink(path, (err) => {
        if (err) return next(err);
        return next(null, true);
    });
}

module.exports = {
    isoList,
    downloadIso,
    downloadsInfo,
    stopDownload,
    removeIso
};