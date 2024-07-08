'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8e970531d945321499c4b9121e820b66",
".git/config": "c91614730c0c3603510d0c2d336a9f3d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7d418580239cf887b04f03c04fa2f348",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8920bc2a603800dc80530d82c352fbe3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7852b7cfaeefc8904976fe72f44590c8",
".git/logs/refs/heads/main": "9552dea7f5759029b9e8c8e231ad08dd",
".git/logs/refs/remotes/origin/main": "2ea11fc8cd3c431a49e4d3772354ad22",
".git/logs/refs/remotes/origin/master": "a6a46782ed1f9acd8d2a0c863b5fd3a7",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0c/d6195854654bde67d7d81c9c10ffa1c839a25a": "9413d23d9fd59d1c27f0e5882465fbda",
".git/objects/11/0ef6d8b5598ece0d6b1767c20d78f7fb13451b": "a61ef0c3dcab21bd81a40f1ade754e20",
".git/objects/12/d674cc10a3e1c4fa295dc0a335ea3fdd37efa0": "ac179d267074e2e5189f638603bb103d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/5293e942f4567a9c83ba992b7d8632a7e1c7cf": "cd930b1e2e5249c750902a9da5504317",
".git/objects/27/99c28f945f097d4ef2a76771340ade7dc08078": "67591827c74972823136e9936eb7713d",
".git/objects/2b/6d2bc5febf4104fc89a5ee202b54966d7713eb": "1d69deb51d46c7d14fa89c9f605cf104",
".git/objects/2c/4e5c1b2b403607c46974afa884a92358cc2013": "69a9d2d6f50a533dd4358983b4caa11c",
".git/objects/3f/db5641e329dc60550522951e5c0b62ffa8407e": "7ddeb71e8c7eb69a0e2e53d98be02ba4",
".git/objects/44/2aaed21a732271d478de6dc4e2cf9eedccb597": "91ce28407ae23077461280db4120b797",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/50/14208d0113240cfda4402d8c30b020037dce39": "178ba4f0efa04baec07272d7cabebace",
".git/objects/52/369df24c3952d6c6036844e7f4138d121ba40e": "28477acbe66c462dee83fe58f0b66486",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/54a2a81fd2d44640b3fc20a5a3a98509589c99": "711a6f4749c3da373067fb3ee34c5e99",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/533d9862896f86b84f53ce869d8f894e2428df": "65a5cd946618b246675304472ff6875d",
".git/objects/5c/46896785a71fd2bafa563fddc49eeea2c92448": "c5a02dc2173eaef46a2522a57bc16d6b",
".git/objects/5d/f53b37adec10039eb15a5f1bba9936d52fcde2": "8740c9590037ef20026a788c5a8d8820",
".git/objects/62/af2a7db54eaedcc7027f927cd030744437df82": "4e6a44cfe8d26013d0859a884eb5344a",
".git/objects/63/6172d1342eb623d789769f2c536f4f1df3e3de": "e77f1fe7df3224c6d43e5bd6c14a377d",
".git/objects/6d/b08e27da2538f2d4b822acf714a8cc9669ece4": "ec5a596d8acfb1bc36656cc22d4aea77",
".git/objects/6e/b3d78b61d0923033140b0ce0674a77e325b066": "fda2f63992396d0c2ece18d14d25cc5e",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/77/46adb7cbd8b3d530a52c6bc492041271767d6b": "953fab7dbab3f54e40f5ed658d6cd57d",
".git/objects/87/4fde423e326b80bf803c6572aa2272009af8ac": "5db7a7abe9df008b45c202c540f83442",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/403fc90f995e8b994e1f079652c48d2fb73704": "17e5562912bce2d0b17f5bb27bc8459f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/801b2ab2ab60b0ee8f180d9acad67340670962": "d1bd36bc6811ea16a1d12052148a9e97",
".git/objects/8c/86ebda4ceae40347cf51a1d4b84309ef8fc11d": "bcdec008f2b49c215cace025f59705e9",
".git/objects/94/75ff4f5cd974111df1f75787bb9b2e5ef44297": "2110c1390768f862e440ab7dc3ae7b6e",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/ae/20ac79b44e85605362d0a133c07bb614699d84": "c54d0042bfe22b7baac053721ab96cc2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/0c2684f6ed55186c7ba8657fde663fe64eda0a": "2ada630c0d3cc3dd8c046f77813dd1f4",
".git/objects/b0/1909a148694bd514601fc82d03bdfce1bab0b0": "6bfb25aac4343d0f4da1b41601817a97",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/96f61c075bc63f7105ba34e2e888835e8e0ebf": "523666d922d85bfaaf0d8e2889c6dc61",
".git/objects/bd/0634234d3b50afa22245162c022f5d9de54ecc": "fb4a3941be17e2754dca33f31163dba1",
".git/objects/bf/9ccd7eedb7b767254e36444dbcdbe3c146b798": "90f1b66bf7bee679ce82b9ed7f54002d",
".git/objects/c1/f9625d68e45cba0227315aa44402b5314cc2d8": "cbcb49cd446fb0dd1adc1eb4d9aa3d23",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/81f633dbba7688d533c2ca3478ecb8c4ab8360": "6d41dffac1ef8058ef0f74bbfcdcbf15",
".git/objects/cb/bda1f6ca31db3d0161df30a75e4420579baca1": "3256f0afe314fed40d3d93acdad2d7c7",
".git/objects/d0/ea50c8fe6b52e659376764135f7029b094a8cc": "d1894e8a3060b2b35a02e3176e080d2a",
".git/objects/d1/f7047f02698003010bc5c70162a1ccf8218da7": "0dd6f2d7a737934f336646e1949f4c4c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/8ae7a8d538cf772bd83d022afb5fa386be670b": "1278baadad5bfb2f0c298f34bfa754c4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/7cabbe637d6ff239fc0c846a6b73be70e2b199": "edc67fc4ca29d46c88560c821cbbbae9",
".git/objects/de/06a30e10e0fa479b0b778300361654f2904f84": "d4cf134a3b9c2349c246ea9d0b9d8a23",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/b63462acef79f2ffb8f95c9f9ad46002fa811f": "c7fc87cbd00c018acaf1fc3592f96d21",
".git/objects/e5/6a219e3252d556764dbf286493b5d334c2b3f6": "e88945c93a53168459bb1190f682d468",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/e5e4971dd6c3b5fc9cff5dd8fac7cf722eccf8": "3e5ff0f9617868721c86e124eb63ad14",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/4962c49d7f63e2c2bc3f57a22a3bdf34916903": "1c63b49773a2783d9f839c6975561dd8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/104a51bd5c6dbd685d5909943801da6a240ea7": "b9329bdd652748ef9610625b3a94366c",
".git/ORIG_HEAD": "7560d6f8420acd1127c4a5babaaf204d",
".git/refs/heads/main": "22ef391402f736bfc8e0eb455bd09fab",
".git/refs/remotes/origin/main": "22ef391402f736bfc8e0eb455bd09fab",
".git/refs/remotes/origin/master": "7560d6f8420acd1127c4a5babaaf204d",
"assets/AssetManifest.bin": "3c5196a59eef3084575d17c322fd93f3",
"assets/AssetManifest.bin.json": "6d4c8033d87a7c467c75dbe97d8d7cc9",
"assets/AssetManifest.json": "37917a77b543fe871e6cf1028e4908ae",
"assets/assets/images/busLogo.png": "476c5294a8a1dd726c88f8fc93a7106a",
"assets/assets/images/gbswLogo.jpeg": "07b205f6741239c9c0785ff6a13fdd47",
"assets/assets/images/GoBus.jpeg": "53db4ce45794dfbc17aaa7e4f665fe9d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9e468ced5e6a199c6b3044c72048438e",
"assets/NOTICES": "391c085257368f54028d7ebd18a16034",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4426a5967f3cbc633e4245d9eb8f7426",
"/": "4426a5967f3cbc633e4245d9eb8f7426",
"main.dart.js": "70beddf587dcd3889b2696944437dc38",
"manifest.json": "f795eb6094034d9bdbfd365ad040afd6",
"version.json": "fc313b52a44d8723c4087598ece4e40f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
