'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fceb8bce4cd1d8abefc3c2781c9332e0",
"version.json": "88231b857fefba57b41a166ed4d250b3",
"index.html": "6fe969f8fc0e876882e2d9ec51b68af4",
"/": "6fe969f8fc0e876882e2d9ec51b68af4",
"main.dart.js": "a64faee2eff0a2b92b176fc4e8d11b11",
"404.html": "955d352144d0667a2f6426d542479975",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "a16d7ea39360df2972a268e93df9707b",
"icons/Icon-192.png": "5cee44c901f7fa3340be4fc0a0648f8c",
"icons/Icon-maskable-192.png": "5cee44c901f7fa3340be4fc0a0648f8c",
"icons/Icon-maskable-512.png": "30f382f20dd418a9eb9b5fa9ba0d802e",
"icons/Icon-512.png": "30f382f20dd418a9eb9b5fa9ba0d802e",
"manifest.json": "61bac645bef2f236b7dc807720397aa5",
"assets/NOTICES": "f293c9daf8fb39c5fb8f43fe6e66b210",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e93df93267dc111ffcceec2e1872b25d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "68496ec1a9e50d61e848e528f3319c62",
"assets/fonts/MaterialIcons-Regular.otf": "89db185c7bf92b1122dffd5a2001dfd9",
"assets/assets/images/photo_2.jpeg": "fb438b13ea077e81742e4a7ae53dfd2e",
"assets/assets/images/photo_1.jpg": "2f2cf32e32e145ebbf46c8d0af423016",
"assets/assets/images/dummay_picture.jpg": "6241a612d1afbb0d945841f32bd8050c",
"assets/assets/resume/Harsh_Shah_Flutter_Developer_Resume.pdf": "c92a98203581074a3ba13695971a0b43",
"assets/assets/project_mockup/mom_kiosk/screen_1.webp": "adad24077bab9e7348f3630e839d5dc7",
"assets/assets/project_mockup/mom_kiosk/screen_2.webp": "504ff0aae415753d3af579cca7bb96bf",
"assets/assets/project_mockup/mom_kiosk/screen_3.webp": "3386d77573608845281e43d4ea8a4ddf",
"assets/assets/project_mockup/mom_kiosk/screen_4.webp": "79ba2bb37bbcae1838fa12fd842bbceb",
"assets/assets/project_mockup/mom_kiosk/screen_5.webp": "475d9ae56d233984e1929baefb0a89ad",
"assets/assets/project_mockup/medantv/screen_6.webp": "de9905200c35fcd0e35bc91b7a48e0e9",
"assets/assets/project_mockup/medantv/screen_7.webp": "2c50b43bab5d0ff8a7492f74ee3dabf0",
"assets/assets/project_mockup/medantv/screen_1.webp": "8664eeaf1d94f2726ff54ae9d399e1cb",
"assets/assets/project_mockup/medantv/screen_2.webp": "c9018afa257c47f3d219001d644b0f41",
"assets/assets/project_mockup/medantv/screen_3.webp": "db4aa01292a08acdeda530476f6dbfe4",
"assets/assets/project_mockup/medantv/screen_4.webp": "974b94d20a757745e29d9c60d4982d46",
"assets/assets/project_mockup/medantv/screen_8.webp": "6a1c048a6585f478f04bbbbd3ad6b0fc",
"assets/assets/project_mockup/medantv/screen_5.webp": "f848b14c8abe7374db7b5b86a691fa51",
"assets/assets/project_mockup/country_kart/screen_6.webp": "6833fd32abccec071d899e03a9bd15d0",
"assets/assets/project_mockup/country_kart/screen_1.webp": "ff5468299347f0de8af79ff1a28d1bc6",
"assets/assets/project_mockup/country_kart/screen_2.webp": "4c61be67e22e57d428af80fd5f35f077",
"assets/assets/project_mockup/country_kart/screen_3.webp": "57b80f58ad9870bd1b3d40b28fcd71f4",
"assets/assets/project_mockup/country_kart/screen_4.webp": "1ae4a59229651b6132d9426f160a86c3",
"assets/assets/project_mockup/country_kart/screen_5.webp": "81c346f1c86b12583b9ec9d8e6787b18",
"assets/assets/project_mockup/utah/screen_6.webp": "68eada23264bf2ba1e48d9ceb978e80b",
"assets/assets/project_mockup/utah/screen_7.webp": "518ae61afb61618c512219612c0ae6c6",
"assets/assets/project_mockup/utah/screen_11.webp": "d020dc4a445f72002b3ce6b7a963d497",
"assets/assets/project_mockup/utah/screen_1.webp": "c78201a4e165955ed71db59f9643955e",
"assets/assets/project_mockup/utah/screen_10.webp": "285f3a8d77097df07d5435a9a9b09721",
"assets/assets/project_mockup/utah/screen_2.webp": "8bbb3adc3c766b942f6d3bc2109b940a",
"assets/assets/project_mockup/utah/screen_3.webp": "67670c66375a2255b35f6d37144d7a51",
"assets/assets/project_mockup/utah/screen_12.webp": "d7826bf0e01697c5a653acbbb45c57d1",
"assets/assets/project_mockup/utah/screen_4.webp": "7e017d312ddb52fa8b800c54c02edadd",
"assets/assets/project_mockup/utah/screen_8.webp": "862e182da178ab1e6da252f2ecdf7ef0",
"assets/assets/project_mockup/utah/screen_9.webp": "9bc2f46e25011aa492ed4f026a9760e4",
"assets/assets/project_mockup/utah/screen_5.webp": "2b371a429df2c6c4f24374b53f71c30f",
"assets/assets/project_mockup/softify_qr/screen_6.webp": "96847af0bc69339810caa5f47cdf8c21",
"assets/assets/project_mockup/softify_qr/screen_1.webp": "e3b4b176eb33b53f30ffd5ee8bc86580",
"assets/assets/project_mockup/softify_qr/screen_2.webp": "1577813430818370ea0750c76c5ebb34",
"assets/assets/project_mockup/softify_qr/screen_3.webp": "163dec5cb7922e3824996348515a4e72",
"assets/assets/project_mockup/softify_qr/screen_4.webp": "493941442a7a50378ed85c4c0732c0a3",
"assets/assets/project_mockup/softify_qr/screen_5.webp": "c1174d451c284951bf4baf3e8758fe6e",
"assets/assets/project_mockup/mom_employee/screen_6.webp": "4fbe94b7b15c13a5219c025294f86ce7",
"assets/assets/project_mockup/mom_employee/screen_7.webp": "302d45f5c3305cc2ecb18a6c48242c14",
"assets/assets/project_mockup/mom_employee/screen_11.webp": "ae980234908c689abe7979df493eb22c",
"assets/assets/project_mockup/mom_employee/screen_1.webp": "c9ead69a6394c597de947ef75f89ff9a",
"assets/assets/project_mockup/mom_employee/screen_10.webp": "5da5c4893689150408be1c3905772459",
"assets/assets/project_mockup/mom_employee/screen_13.webp": "613b30b5f1f737e3c0881560a79e7ca5",
"assets/assets/project_mockup/mom_employee/screen_2.webp": "c794ef2239e5c3e85380f42f6a1a4a4f",
"assets/assets/project_mockup/mom_employee/screen_3.webp": "bd490f9787fe5ed9c2caa4584080f6ed",
"assets/assets/project_mockup/mom_employee/screen_12.webp": "17df9e241bc5b61c4308ee494c0b599f",
"assets/assets/project_mockup/mom_employee/screen_4.webp": "174683021c8fc1ae42dd60a855c0680f",
"assets/assets/project_mockup/mom_employee/screen_8.webp": "26c261c988fb70399de656c0d8374211",
"assets/assets/project_mockup/mom_employee/screen_15.webp": "9e4b58920a75875cf8cf40ef89d399a2",
"assets/assets/project_mockup/mom_employee/screen_14.webp": "dd941a0b2af8c78c7b95ce87a53f0872",
"assets/assets/project_mockup/mom_employee/screen_9.webp": "7365dcd4b2ba9792a377f95cc943ebd9",
"assets/assets/project_mockup/mom_employee/screen_5.webp": "bb6acec02fc7d885b5fa9b29c9a88742",
"assets/assets/project_mockup/softify_pdf/screen_6.webp": "eb823f6c2e33fde66d9e0928a8539e89",
"assets/assets/project_mockup/softify_pdf/screen_7.webp": "06497a5ad18bc3160a4e207cd4090f5f",
"assets/assets/project_mockup/softify_pdf/screen_1.webp": "8219622089caa2a27ecd4d189213be08",
"assets/assets/project_mockup/softify_pdf/screen_2.webp": "c6402cd82416ff0b453b197c15dc5205",
"assets/assets/project_mockup/softify_pdf/screen_3.webp": "8ef9887e104673f7c634d9b7f03ef6f2",
"assets/assets/project_mockup/softify_pdf/screen_4.webp": "8905106639f506fda83aee9ef0946daf",
"assets/assets/project_mockup/softify_pdf/screen_5.webp": "e713fb2b875394dbff893ac3f1cdfd50",
"assets/assets/project_mockup/mamgo/screen_6.webp": "65cfdab539a88032ad0a07015cc15324",
"assets/assets/project_mockup/mamgo/screen_7.webp": "db05e13999e0977e0f7f28edab9a9fef",
"assets/assets/project_mockup/mamgo/screen_1.webp": "c97cd894bf01b50af42937388fa92761",
"assets/assets/project_mockup/mamgo/screen_2.webp": "77e4f5440dfa8c3dd6805e79165a0a08",
"assets/assets/project_mockup/mamgo/screen_3.webp": "711eadec34e0077bb70f39141fd4aa39",
"assets/assets/project_mockup/mamgo/screen_4.webp": "575ab928c83a6d85356b1b691223588a",
"assets/assets/project_mockup/mamgo/screen_8.webp": "801e787b1244079d13297ae6536d0d6e",
"assets/assets/project_mockup/mamgo/screen_5.webp": "d0d09a2bb99daede8e78501ee0a4cbd1",
"assets/assets/project_mockup/karuna/screen_1.webp": "9db4bba0b2132351e08376782bdfbe36",
"assets/assets/project_mockup/karuna/screen_2.webp": "39d8085aceb30c2240db5ecadc963d30",
"assets/assets/project_mockup/karuna/screen_3.webp": "8284bacfa652487808a670369c873edf",
"assets/assets/project_mockup/karuna/screen_4.webp": "227892b96ef2b9696c9761e4d19f2526",
"assets/assets/project_mockup/karuna/screen_5.webp": "c506ae4a18a457aab1f2202efb4d3ce6",
"assets/assets/project_mockup/realnest/screen_6.webp": "32171e49cd670d900253c9bba938070f",
"assets/assets/project_mockup/realnest/screen_17.webp": "9bc444f117598a7bc55f2d454e33ef81",
"assets/assets/project_mockup/realnest/screen_16.webp": "264fa4b9356a027a2c0819c1d4489c98",
"assets/assets/project_mockup/realnest/screen_7.webp": "8d1e7808288549cc604f6ee13dab2f39",
"assets/assets/project_mockup/realnest/screen_11.webp": "eee24f93e9cbb2b176d46958e0d7022e",
"assets/assets/project_mockup/realnest/screen_1.webp": "9d9072d0c638963532172084e46ced3b",
"assets/assets/project_mockup/realnest/screen_10.webp": "51ed9ed4c46a1857ee051318809ab291",
"assets/assets/project_mockup/realnest/screen_13.webp": "bd3e5cdb9bf8493ddb0ad37f13296f5b",
"assets/assets/project_mockup/realnest/screen_2.webp": "d11efb70413c1d7f501e9341c21ed720",
"assets/assets/project_mockup/realnest/screen_3.webp": "a1b4b47ba4dbc0bdfee17f67548ec0c7",
"assets/assets/project_mockup/realnest/screen_12.webp": "b9469cd1ffe00d1f60687c7a70c8acd1",
"assets/assets/project_mockup/realnest/screen_4.webp": "96bc59d5f17658e1f3510c762c9677e0",
"assets/assets/project_mockup/realnest/screen_8.webp": "50dda5160271c19ed7c1f56f0b28ad06",
"assets/assets/project_mockup/realnest/screen_15.webp": "cb9f72ddaa76791b5094e1840ee85fe1",
"assets/assets/project_mockup/realnest/screen_14.webp": "057e9943730f44e1c24ac84d06d7d1dc",
"assets/assets/project_mockup/realnest/screen_9.webp": "4ed7310aecf16a610c95906b60f4f8dd",
"assets/assets/project_mockup/realnest/screen_18.webp": "a47ab171696da1e75259a39be4981364",
"assets/assets/project_mockup/realnest/screen_5.webp": "536252b56101f809acdf7c6b12677829",
"assets/assets/project_mockup/crimechime/screen_1.webp": "8dc8f7b7838f6474906eb2a6325c14f3",
"assets/assets/project_mockup/crimechime/screen_2.webp": "e4b06f82dddbdbc8ce64ef31409798d1",
"assets/assets/project_mockup/crimechime/screen_3.webp": "cd3ed9a01a234b60d24cac848afe0cec",
"assets/assets/project_mockup/crimechime/screen_4.webp": "b0729e84692adc5e53bc234c81050a18",
"assets/assets/project_mockup/crimechime/screen_5.webp": "1796ccafcfe2dc9a1a516f9782bd5847",
"assets/assets/project_mockup/trackdots/screen_6.webp": "d26c65769ffa287cd23941be508676c2",
"assets/assets/project_mockup/trackdots/screen_7.webp": "893cccb3a3d6556adbe0d2a06d4ff330",
"assets/assets/project_mockup/trackdots/screen_11.webp": "f56af6bd2839562d542f0e76c9b7aec6",
"assets/assets/project_mockup/trackdots/screen_1.webp": "359b55ca7af6e6415a0fd72542b1da07",
"assets/assets/project_mockup/trackdots/screen_10.webp": "f389931b903039ad4e171548eff45472",
"assets/assets/project_mockup/trackdots/screen_2.webp": "c9156c487e5614203708a3c2eeb4013d",
"assets/assets/project_mockup/trackdots/screen_3.webp": "e03cb4e0556ec91163e946e77f515fbf",
"assets/assets/project_mockup/trackdots/screen_4.webp": "0e180c2ff942a395622c75d666233071",
"assets/assets/project_mockup/trackdots/screen_8.webp": "ee8b7cb4388c24f8a2d9638c280b3d53",
"assets/assets/project_mockup/trackdots/screen_9.webp": "42efa202125bd1133c6af9fd6669538e",
"assets/assets/project_mockup/trackdots/screen_5.webp": "d30616b9c44cf62a7bb1c0be070c5a8c",
"assets/assets/project_mockup/fitme/screen_6.webp": "a464b2f436387ba8f4b9302e650d502e",
"assets/assets/project_mockup/fitme/screen_7.webp": "ae34961be64ed4abe1072976a2e24abf",
"assets/assets/project_mockup/fitme/screen_11.webp": "c9d302d841f51d7a39f51a8eb51f32c4",
"assets/assets/project_mockup/fitme/screen_1.webp": "1fbf4e3a47f4e5be8fe7ab99cb4a3fd7",
"assets/assets/project_mockup/fitme/screen_10.webp": "4eba13955a70f4cddffdafab9dc310d3",
"assets/assets/project_mockup/fitme/screen_13.webp": "e0153a0a0be743bb74b1e1b3a9dc4345",
"assets/assets/project_mockup/fitme/screen_2.webp": "b5db062cc70ca9df40e56982358cb10c",
"assets/assets/project_mockup/fitme/screen_3.webp": "224812960d93f432bc5cd84b0ba5f609",
"assets/assets/project_mockup/fitme/screen_12.webp": "3cdbcecada7c77698b73376b5f43fe8e",
"assets/assets/project_mockup/fitme/screen_4.webp": "a9268cc5b8a494c8574e2e8eb2842e6c",
"assets/assets/project_mockup/fitme/screen_8.webp": "2d06a00978e26dea72f3445b24bbbbc1",
"assets/assets/project_mockup/fitme/screen_15.webp": "b00a54eda40ce71e87b0947bf75d67d1",
"assets/assets/project_mockup/fitme/screen_14.webp": "6876b257b156f868bc4aa430715465be",
"assets/assets/project_mockup/fitme/screen_9.webp": "9f9f8870c022513139444c8f8c6b1901",
"assets/assets/project_mockup/fitme/screen_5.webp": "8699353abe2aa0d1238a182a0157cf97",
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
