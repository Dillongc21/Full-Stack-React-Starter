/* This file contains references to the vendor libraries that we're using in this project. This is used
   by webpack in the production build only*. A separate bundle is useful for vendor code since it is
   unlikely to change as often as the application code. So all the libraries that we use here will be
   written to vendor.js so they can be cached until one of them is changed. This avoids customers having
   to download a huge JS file any time a line of code changes. Any files that aren't referenced here
   will be bundled into main.js for the production build.
 */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
import fetchImp from 'whatwg-fetch-importable';
import react from 'react';
import reactDom from 'react-dom';

