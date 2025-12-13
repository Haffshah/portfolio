'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1021b864239dfcd84d4c11cb4381550b",
"version.json": "88231b857fefba57b41a166ed4d250b3",
"index.html": "8bcb33d914fee9041aae3298eabb46d7",
"/": "8bcb33d914fee9041aae3298eabb46d7",
"main.dart.js": "c62c61e5b1d5e8c27f86c7a8b50adc0e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "a16d7ea39360df2972a268e93df9707b",
"icons/Icon-192.png": "5cee44c901f7fa3340be4fc0a0648f8c",
"icons/Icon-maskable-192.png": "5cee44c901f7fa3340be4fc0a0648f8c",
"icons/Icon-maskable-512.png": "30f382f20dd418a9eb9b5fa9ba0d802e",
"icons/Icon-512.png": "30f382f20dd418a9eb9b5fa9ba0d802e",
"manifest.json": "61bac645bef2f236b7dc807720397aa5",
"assets/NOTICES": "0be4cde6321e725142d88cf4b7916a5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "eb614585d4d38ea1b7303bb1abac0348",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "eef2aef9a2e81ea02eaa164c163ac140",
"assets/fonts/MaterialIcons-Regular.otf": "54dd1a494e0970f424e17240fe99312a",
"assets/assets/images/photo_2.jpeg": "0866c595fea47a8739faac347ec63ec0",
"assets/assets/images/photo_1.jpg": "b132bda00861227a10ff02cadbff1592",
"assets/assets/images/dummay_picture.jpg": "6241a612d1afbb0d945841f32bd8050c",
"assets/assets/resume/Harsh_Shah_Flutter_Developer_Resume.pdf": "c92a98203581074a3ba13695971a0b43",
"assets/assets/project_mockup/mom_kiosk/screen_4.png": "b34e38bc17591e69a2a892f3a55febdf",
"assets/assets/project_mockup/mom_kiosk/screen_5.png": "74aeabc95b06e472e6fa1501e3060c3e",
"assets/assets/project_mockup/mom_kiosk/screen_2.png": "4a4590d5fb4a69f9634bdff810d34b60",
"assets/assets/project_mockup/mom_kiosk/screen_3.png": "3a314e03c2e8f8c0937f1ef3d3afa678",
"assets/assets/project_mockup/mom_kiosk/screen_1.png": "7c84960f1776a524b01d4ef6f54c32f1",
"assets/assets/project_mockup/medantv/screen_4.png": "060825a850551ad0df8a1bf44323b87d",
"assets/assets/project_mockup/medantv/screen_5.png": "94c0b8e7f4f1b0de7083987f4672d1ce",
"assets/assets/project_mockup/medantv/screen_7.png": "4c10eded805b6eb44651151a593f5d52",
"assets/assets/project_mockup/medantv/screen_6.png": "bede72702f7874189108ae5e7d1e2c28",
"assets/assets/project_mockup/medantv/screen_2.png": "b12320442a181913d6adf988c74f20e0",
"assets/assets/project_mockup/medantv/screen_3.png": "85be318dcc7bda47fbb20e972124aa9c",
"assets/assets/project_mockup/medantv/screen_1.png": "b295aad4715186f661f5ec4b1e572916",
"assets/assets/project_mockup/medantv/screen_8.png": "f4e03e3f988858238c5a96adf78e6ad1",
"assets/assets/project_mockup/country_kart/screen_4.png": "a3f6d36da30493311c1c964cd32e3598",
"assets/assets/project_mockup/country_kart/screen_5.png": "c385866dc7fca9a1a2ce3969a003b97e",
"assets/assets/project_mockup/country_kart/screen_6.png": "2110f699b8ffb687bc69a5d5683217f7",
"assets/assets/project_mockup/country_kart/screen_2.png": "f5031a590ba49e1a8f492a870ebe046b",
"assets/assets/project_mockup/country_kart/screen_3.png": "d55964b96d7aa84735fb96695c97d396",
"assets/assets/project_mockup/country_kart/screen_1.png": "7394671d834d8d62576a1f3fd10e90d2",
"assets/assets/project_mockup/utah/screen_4.png": "95cf8cf5969429adf51373a5b2bdfab4",
"assets/assets/project_mockup/utah/screen_5.png": "d186aecbe13cb0b482ebce51b323d202",
"assets/assets/project_mockup/utah/screen_7.png": "3b77a80892dc7ec625f1ef68af360729",
"assets/assets/project_mockup/utah/screen_6.png": "a5081d50aecc942aaaee6720c9872a30",
"assets/assets/project_mockup/utah/screen_2.png": "01a9a1555192240bd7f1ae5b4d9ad0af",
"assets/assets/project_mockup/utah/screen_3.png": "7c246af4c0061e20dbbeb1dfdc5b873f",
"assets/assets/project_mockup/utah/screen_1.png": "c36d4e074d9fffeb2a8a7ce9bf24667a",
"assets/assets/project_mockup/utah/screen_11.png": "c9b9461cde2bcaf25cf002a942b7ce4a",
"assets/assets/project_mockup/utah/screen_10.png": "42db53d1de0e3fe57906a94e8fc5cb95",
"assets/assets/project_mockup/utah/screen_12.png": "d18ccc2fd37fe6df529407fea718205d",
"assets/assets/project_mockup/utah/screen_8.png": "f5dabac995f872a501be04c5fe5b03ee",
"assets/assets/project_mockup/utah/screen_9.png": "a24086ad361d12308c5bfd74be8f7f81",
"assets/assets/project_mockup/softify_qr/screen_4.png": "f1a2989ae8493eeeaa58a54b948448cc",
"assets/assets/project_mockup/softify_qr/screen_5.png": "d5bc02ce70d19d20ba92d57c08b4d412",
"assets/assets/project_mockup/softify_qr/screen_6.png": "a7a05445afb0a8fa419beadc6f2e5f2a",
"assets/assets/project_mockup/softify_qr/screen_2.png": "5bb1976c9a0c8fa1730e9dae49b4127b",
"assets/assets/project_mockup/softify_qr/screen_3.png": "7b478aa9b0b1bdbf4f5400dee325f7c0",
"assets/assets/project_mockup/softify_qr/screen_1.png": "65bd2b6e66f31e48fdc8982b32735d1d",
"assets/assets/project_mockup/mom_employee/screen_4.png": "4834d37943e20848baa5d9d301354257",
"assets/assets/project_mockup/mom_employee/screen_5.png": "5846c46d8b03903f3ea7e7fe405c55de",
"assets/assets/project_mockup/mom_employee/screen_7.png": "f699b29f3a690d96d6724c442bba18ea",
"assets/assets/project_mockup/mom_employee/screen_6.png": "bb326bc95abc019b598f1a52b96273fb",
"assets/assets/project_mockup/mom_employee/screen_2.png": "ecd9f3b9a18b095f0335b22ac0b698ee",
"assets/assets/project_mockup/mom_employee/screen_3.png": "2b4db9810321f746099ae7d69e2eb4ba",
"assets/assets/project_mockup/mom_employee/screen_1.png": "46ebedc65856ac1b7491824f7716a7d9",
"assets/assets/project_mockup/mom_employee/screen_11.png": "93442593dec21832bafbc10a7529ab6b",
"assets/assets/project_mockup/mom_employee/screen_10.png": "f67c9ae0ea702ed221c35dc9ec95cd00",
"assets/assets/project_mockup/mom_employee/screen_12.png": "a501f9b185bc9c5ba6d3fe7e22068416",
"assets/assets/project_mockup/mom_employee/screen_13.png": "cff1ae84905e1301a860628751edefd6",
"assets/assets/project_mockup/mom_employee/screen_8.png": "5ca21a4d8ec9062c782f240f4372176e",
"assets/assets/project_mockup/mom_employee/screen_14.png": "f879674d23c8e34a2640c03588fc6811",
"assets/assets/project_mockup/mom_employee/screen_15.png": "1155384b88569cdb57e0c601316834eb",
"assets/assets/project_mockup/mom_employee/screen_9.png": "192a6d09a0a4fc6b8f1d6e103e58af14",
"assets/assets/project_mockup/softify_pdf/screen_4.png": "1a38a324cbf6b2c61092c97c4c302db0",
"assets/assets/project_mockup/softify_pdf/screen_5.png": "17b8113c4399e3da489a27cdcffde7dc",
"assets/assets/project_mockup/softify_pdf/screen_7.png": "0a085e2fa9d2ed46453087372b437aff",
"assets/assets/project_mockup/softify_pdf/screen_6.png": "36a4031ac3d6954f806a0b319d8d750b",
"assets/assets/project_mockup/softify_pdf/screen_2.png": "78cc0c6c247eeb2cdeee8916f1530346",
"assets/assets/project_mockup/softify_pdf/screen_3.png": "7d7666edbdaca5e405592b2f24f8ec2a",
"assets/assets/project_mockup/softify_pdf/screen_1.png": "cc1fae548cf406ac6fd721c447b38bd1",
"assets/assets/project_mockup/mamgo/screen_4.png": "0141cb92de5cc39c8ce89dc3b5324bd6",
"assets/assets/project_mockup/mamgo/screen_5.png": "c0d8c989c1be19075cf2ff8f66dcf9d7",
"assets/assets/project_mockup/mamgo/screen_7.png": "7bb26df700e63fc9e6b63c89f1ebca3d",
"assets/assets/project_mockup/mamgo/screen_6.png": "4717d02a39429ddc37fbd1279a6e5c1f",
"assets/assets/project_mockup/mamgo/screen_2.png": "17f89d33b9e9d8633906ab69d36ce961",
"assets/assets/project_mockup/mamgo/screen_3.png": "35354905ab0cb4015d0262b0840a22af",
"assets/assets/project_mockup/mamgo/screen_1.png": "7bc6d1d5ab4a1a32ec02825c5dd7d122",
"assets/assets/project_mockup/mamgo/screen_8.png": "46a259698809da09d8f7dc1c88fdb22b",
"assets/assets/project_mockup/karuna/screen_4.png": "31685ef8997ed5cf88e56f022dec294a",
"assets/assets/project_mockup/karuna/screen_5.png": "7893815637b66f0539614c7380686f59",
"assets/assets/project_mockup/karuna/screen_2.png": "77dc549d78740fd8f30f5ddbf84065d4",
"assets/assets/project_mockup/karuna/screen_3.png": "03b1cbbaf2727adfd3419d9aabdc67c3",
"assets/assets/project_mockup/karuna/screen_1.png": "6e20eebe07e4613fb99d699c389cebfc",
"assets/assets/project_mockup/realnest/screen_4.png": "35aa1533efc5de10efd330bd7a5f527c",
"assets/assets/project_mockup/realnest/screen_18.png": "43c19dfb8540ecb2a102b52a5df817a4",
"assets/assets/project_mockup/realnest/screen_5.png": "6585e185e27ad5de2aed6fe9629ad3d1",
"assets/assets/project_mockup/realnest/screen_7.png": "5125dacc046aa268d34de35c69048477",
"assets/assets/project_mockup/realnest/screen_6.png": "cdc77a90d509f957bd1d209edf3c8fed",
"assets/assets/project_mockup/realnest/screen_2.png": "648ac19ccb76adc0f3adc0afd16909f3",
"assets/assets/project_mockup/realnest/screen_3.png": "4a12e3fac1bea309888b5fe7042e8f50",
"assets/assets/project_mockup/realnest/screen_1.png": "116eabeb586bf264cc8632acaa741466",
"assets/assets/project_mockup/realnest/screen_11.png": "f4adc1c6595e5b1cea4f92f9f30a3771",
"assets/assets/project_mockup/realnest/screen_10.png": "5d430d2608b936ace3aa0cb24cf85868",
"assets/assets/project_mockup/realnest/screen_12.png": "ac05b2c3d809026e7325253845e8f332",
"assets/assets/project_mockup/realnest/screen_13.png": "cbd8734808537784fd89eef4f5d35769",
"assets/assets/project_mockup/realnest/screen_17.png": "f97a9a18de3596a6336fa76d8bcaed48",
"assets/assets/project_mockup/realnest/screen_16.png": "4ef773a175a89ee6c86730f46ec374b8",
"assets/assets/project_mockup/realnest/screen_8.png": "628b25714560521c04779abf63a67bb8",
"assets/assets/project_mockup/realnest/screen_14.png": "6a1c0a10e96c35147a59dfedbadf5b1c",
"assets/assets/project_mockup/realnest/screen_15.png": "6321c126dc91b1e7f175104fa2653464",
"assets/assets/project_mockup/realnest/screen_9.png": "4d4fa67df3826ee24557ebf2140bd36f",
"assets/assets/project_mockup/crimechime/screen_4.png": "b96781688e8c96ab2b68069cb1493657",
"assets/assets/project_mockup/crimechime/screen_5.png": "8df71975de815f329bb06f763c0ea4ff",
"assets/assets/project_mockup/crimechime/screen_2.png": "0333f3adae5028c57bdd20de25d0f595",
"assets/assets/project_mockup/crimechime/screen_3.png": "d3ac480c7541b982131f46c4669652bc",
"assets/assets/project_mockup/crimechime/screen_1.png": "6beb6943ce300144913b9f874304929f",
"assets/assets/project_mockup/trackdots/screen_4.png": "0a0d5922578f7e36fec77f0002816bf0",
"assets/assets/project_mockup/trackdots/screen_5.png": "115a8ab5d87840e4d118ea8a1f9b9ba5",
"assets/assets/project_mockup/trackdots/screen_7.png": "be05a11d7a34dc8e5eceed7663a6ee88",
"assets/assets/project_mockup/trackdots/screen_6.png": "dd66bc0c05fcd30b3bda167ea2a480fe",
"assets/assets/project_mockup/trackdots/screen_2.png": "ea4a6593aa7401c178b1591598058422",
"assets/assets/project_mockup/trackdots/screen_3.png": "d1e95488cf533d76c001bb9c77960d53",
"assets/assets/project_mockup/trackdots/screen_1.png": "4c7292571fe332122f6bf46058e84690",
"assets/assets/project_mockup/trackdots/screen_11.png": "e831096a75ce02ca19c027d0678e9fe1",
"assets/assets/project_mockup/trackdots/screen_10.png": "29a197b2bddc4cdf6871cc6c68fdf3ac",
"assets/assets/project_mockup/trackdots/screen_8.png": "10187db275445012787a1d4b10079306",
"assets/assets/project_mockup/trackdots/screen_9.png": "51c5dbdc240cf85daa0ce1e5f9b04711",
"assets/assets/project_mockup/fitme/screen_4.png": "c904d10953cb3dd25f14f099be03a766",
"assets/assets/project_mockup/fitme/screen_5.png": "0891fcab4813a943a5c750d686c1889f",
"assets/assets/project_mockup/fitme/screen_7.png": "df00d4df9eac6bf51faa9c90d829ff47",
"assets/assets/project_mockup/fitme/screen_6.png": "5c4277a5750c92d7be7b3269631113a4",
"assets/assets/project_mockup/fitme/screen_2.png": "65a5435bef4c2ce24c2c64cc9783ac1a",
"assets/assets/project_mockup/fitme/screen_3.png": "7e16f5e134dbd79d4f48e538c60b17bd",
"assets/assets/project_mockup/fitme/screen_1.png": "e612ef1092da9351f7c50dbb077f159a",
"assets/assets/project_mockup/fitme/screen_11.png": "39512a1c0e3c6f837a9f1584b3d545b8",
"assets/assets/project_mockup/fitme/screen_10.png": "a57c8b46146a90d52f9b42c49bb59dad",
"assets/assets/project_mockup/fitme/screen_12.png": "2bb53dec674c5483dc4a6fb838bcb4e8",
"assets/assets/project_mockup/fitme/screen_13.png": "fc82fdda55dc69dddb566783dc4a0f2b",
"assets/assets/project_mockup/fitme/screen_8.png": "e9b1f419d244031baa5c7e1d23389a33",
"assets/assets/project_mockup/fitme/screen_14.png": "93718d1bd42f8b8df0a75573eb31cb38",
"assets/assets/project_mockup/fitme/screen_15.png": "50c97db29a92f517c384f9b9fff0b99b",
"assets/assets/project_mockup/fitme/screen_9.png": "8a67e7a2f1f82445f3dc1ebd6d21a4e6",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
