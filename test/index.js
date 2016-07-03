import assert from 'assert';
import fileCloudCloudinaryUploader from '../lib';
import path from 'path';
import validator from 'validator';

describe('file-cloud-cloudinary-uploader', function () {
  /* eslint camelcase: ["error", {properties: "never"}] */
  var config = {
    cloud_name: process.env.FCU_CLOUDINARY_NAME,
    api_key: process.env.FCU_CLOUDINARY_API_KEY,
    api_secret: process.env.FCU_CLOUDINARY_API_SECRET
  };
  it('should throw exception when no file exists!', function () {
    var catched = false;
    try {
      fileCloudCloudinaryUploader(function () {
      }, path.resolve(__dirname, 'data/ab.jpg'), config);
    } catch (e) {
      catched = true;
    }
    assert(catched);
  });

  it('should uploader to cloudinary!', function (done) {
    fileCloudCloudinaryUploader(function (error, hashNamedFile, data) {
      assert.equal(true, !error);
      assert.equal(true, typeof hashNamedFile === 'string');
      assert.equal(true, validator.isURL(data.url));
      assert.equal(true, validator.isURL(data.secure_url));
      done();
    }, path.resolve(__dirname, 'data/a.jpg'), config);
  });
});
