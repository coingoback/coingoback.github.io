'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a02373ffb2629aa04e7e5de35f5a572a",
"index.html": "fa97a412ebae036dc3863f4ceafeb2ef",
"/": "fa97a412ebae036dc3863f4ceafeb2ef",
"firebase-messaging-sw.js": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js": "579e68326a2d863bbd9608c7d09aea76",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "06a3f613b7735590b82351de6ecc2275",
"assets/AssetManifest.json": "9e18f673a4dfdb0a37bc79f63f6c717a",
"assets/NOTICES": "f41c7b282dae65c81695ff1f82f2e88f",
"assets/FontManifest.json": "51f946839ec2a15d8214c778f81e5425",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/auth_module/assets/images/google_icon.svg": "c8a05689467d8fa598e16194d170e748",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9713978c68bcf226d5b984ada43cb8a0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "45e1d3666d6e25e67f39fc1ae39837ce",
"assets/packages/design_system_lib/lib/fonts/rubik/Rubik-Bold.ttf": "614e020a9cab9dfc649d024b78cd4e56",
"assets/packages/design_system_lib/lib/fonts/rubik/Rubik-Medium.ttf": "2566a5dd3dbaf337b9928fdf48c2d030",
"assets/packages/design_system_lib/lib/fonts/rubik/Rubik-SemiBold.ttf": "b87ea1ca8149bd479456eb6104aef078",
"assets/packages/design_system_lib/lib/fonts/rubik/Rubik-Regular.ttf": "35c2b913e9977fe4a3d4327824fbaf35",
"assets/packages/design_system_lib/lib/fonts/work_sans/WorkSans-Regular.ttf": "7d761a652f8e716f57f4352b0f4e6280",
"assets/packages/design_system_lib/lib/fonts/work_sans/WorkSans-Medium.ttf": "800a9cf85712fd7f1b863e3b2b3a1dc5",
"assets/packages/design_system_lib/lib/fonts/work_sans/WorkSans-SemiBold.ttf": "a66feef293ecb953decfc8aa3fbf12ab",
"assets/packages/design_system_lib/lib/fonts/work_sans/WorkSans-Bold.ttf": "f051cc0ed2761378e886727284cf3c05",
"assets/packages/design_system_lib/fonts/work_sans/WorkSans-Regular.ttf": "7d761a652f8e716f57f4352b0f4e6280",
"assets/packages/design_system_lib/fonts/work_sans/WorkSans-Medium.ttf": "800a9cf85712fd7f1b863e3b2b3a1dc5",
"assets/packages/design_system_lib/fonts/work_sans/WorkSans-SemiBold.ttf": "a66feef293ecb953decfc8aa3fbf12ab",
"assets/packages/design_system_lib/fonts/work_sans/WorkSans-Bold.ttf": "f051cc0ed2761378e886727284cf3c05",
"assets/packages/design_system_lib/assets/images/flutter_logo.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/design_system_lib/assets/images/flutter_logo_green.png": "8c0831df91a361fdf5cfc6bc4c9ab254",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "92666cc97576adbea2e2d3061a953137",
"assets/AssetManifest.bin": "94f84eb625f6a44e810d98c7689b73f6",
"assets/fonts/MaterialIcons-Regular.otf": "e57353b6fc4604014a1bdd4b55d918de",
"assets/assets/images/services-icon.svg": "e16b5f78470994ba6cb1adf6f04ed1dd",
"assets/assets/images/banners_fce.gif": "a644f5bdc509afa65dc3cfc5eb322de2",
"assets/assets/images/submarcas.svg": "d46a0e901208f17718274bcf828f892d",
"assets/assets/images/finish_signup_img.png": "e58160bd34862d215db9ebd5a86b97ae",
"assets/assets/images/finish_signup.svg": "0e549f5fea41bbb6728f7fe5f232f0d2",
"assets/assets/images/mail.svg": "e813b12c6b5204a822cf1292d349549b",
"assets/assets/images/google_icon.svg": "c8a05689467d8fa598e16194d170e748",
"assets/assets/images/selection-icon.svg": "309af445d7532d629ff7591126bf027a",
"assets/assets/images/news-icon.svg": "50c719c84081116d430964bf4a58d1a6",
"assets/assets/images/logo_stage.png": "af36f168505d8942afd01d0573855bf6",
"assets/assets/images/home-icon.svg": "bda42acb0db04062053d504a21b50fb9",
"assets/assets/images/profile-icon.svg": "4f207db8a5fb55a7334f0f0094b09103",
"assets/assets/images/logo.svg": "e7626f22b8f23337c4a391ba1063534b",
"assets/assets/images/welcome_vector.svg": "077a392e1a4f199e7b4a034546e404cb",
"canvaskit/canvaskit.js": "678d9f53b0e5c5f22543631f43279fb9",
"canvaskit/profiling/canvaskit.js": "5a0f05139f1d43c603dcfc67d15b1ec9",
"canvaskit/profiling/canvaskit.wasm": "09aacbc0d8b20c7ee684e310703e2d86",
"canvaskit/canvaskit.wasm": "6972cd6e8f48c5f3c027416c7b2443a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
