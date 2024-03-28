if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let t = {};
    const r = (e) => n(e, a),
      o = { module: { uri: a }, exports: t, require: r };
    s[a] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-07a7b4f2"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "1fc460316007a87b585828c26ddf8f8c",
        },
        {
          url: "/_next/static/CSnTWVqcpiDZkVpePBbMg/_buildManifest.js",
          revision: "ed8a39873587a05331215998ad0b0f4e",
        },
        {
          url: "/_next/static/CSnTWVqcpiDZkVpePBbMg/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/260-0b5af008cb098413.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/406-44194817a0285557.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/69-7cd1d8a9ad200993.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/703-2a40cf99ead21e00.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/862-2d167bd9c2f0e664.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/_not-found-00c249f79f4c310f.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/layout-024208e91ae49172.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/page-7bc88d60030fe509.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/pages/doctor/login/page-ea082fb758fbd2b5.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/pages/doctor/register/page-fe0be91e72ff1709.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/pages/editor/page-93f8169d1ebd08f5.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/pages/home/page-9de0621fb50a3f25.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/pages/otp/page-af8fe48f0015a783.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/pages/patient/login/page-1415fb583428a956.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/app/pages/patient/register/page-e26eaf2734d4d656.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/fd9d1056-f1685d5f614ff1d3.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/framework-aec844d2ccbe7592.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/main-60f727f285e14e8f.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/main-app-00ae60bdc8bcaddb.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/pages/_app-75f6107b0260711c.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-9bf52cd937eeee51.js",
          revision: "CSnTWVqcpiDZkVpePBbMg",
        },
        {
          url: "/_next/static/css/b2be54ca9615086b.css",
          revision: "b2be54ca9615086b",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/check_icon.svg",
          revision: "856a55bd86d6b100a8acd7de2d1c3692",
        },
        { url: "/down_icon.svg", revision: "acb4f2c521d3a68b3511ec8cd4ec48cb" },
        {
          url: "/error_icon.svg",
          revision: "bbee2f18dbef1c1c92ce657ff4ce88fd",
        },
        {
          url: "/icon-192x192.png",
          revision: "9654770f17e069435b792b844fc23468",
        },
        {
          url: "/icon-256x256.png",
          revision: "b37e8548732616fd361ef53828812a92",
        },
        {
          url: "/icon-384x384.png",
          revision: "820c6802af62826854f1027e1ada2ef5",
        },
        {
          url: "/icon-512x512.png",
          revision: "547fed7a198e995c5b7488bfda62c661",
        },
        { url: "/manifest.json", revision: "46ac46c121224bf76a63bdb0bc7f4edf" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        {
          url: "/pass_close_icon.svg",
          revision: "181c4073e6772915c0672988e51ea51e",
        },
        {
          url: "/pass_open_icon.svg",
          revision: "5dea0098adbca39e75e65ab3f95a847e",
        },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
