'use strict';
var fs = require('fs');
var path = require('path');
var fash = require('file-hash');
var cloudinary = require('cloudinary');

export default function (next, filename, conf, type, upper) {
  if (!fs.existsSync(filename)) {
    throw Error(filename + ' not exists');
  }
  fash(function (hash) {
    var hashNamedFile = hash + path.extname(filename);
    cloudinary.config(conf);
    cloudinary.uploader.upload(filename, function (result) {
      next(false, hashNamedFile, result);
    });
  },
    filename,
    type,
    upper
  );
}
