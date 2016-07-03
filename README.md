# file-cloud-cloudinary-uploader [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> file uploader for cloudinary

## Installation

```sh
$ npm install --save file-cloud-cloudinary-uploader
```

## Usage

```js
var fileCloudCloudinaryUploader = require('file-cloud-cloudinary-uploader');
var config = {
  cloud_name: process.env.FCU_CLOUDINARY_NAME,
  api_key: process.env.FCU_CLOUDINARY_API_KEY,
  api_secret: process.env.FCU_CLOUDINARY_API_SECRET
};
fileCloudCloudinaryUploader(function (error, hashNamedFile, data) {
  //data.url
  //data.secure_url
}, path.resolve(__dirname, 'data/a.jpg'), config);

```
## License

Apache-2.0 © [file-cloud]()


[npm-image]: https://badge.fury.io/js/file-cloud-cloudinary-uploader.svg
[npm-url]: https://npmjs.org/package/file-cloud-cloudinary-uploader
[travis-image]: https://travis-ci.org/file-cloud/file-cloud-cloudinary-uploader.svg?branch=master
[travis-url]: https://travis-ci.org/file-cloud/file-cloud-cloudinary-uploader
[daviddm-image]: https://david-dm.org/file-cloud/file-cloud-cloudinary-uploader.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/file-cloud/file-cloud-cloudinary-uploader
[coveralls-image]: https://coveralls.io/repos/file-cloud/file-cloud-cloudinary-uploader/badge.svg
[coveralls-url]: https://coveralls.io/r/file-cloud/file-cloud-cloudinary-uploader
