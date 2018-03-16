                            importScripts('/js/workbox-sw.prod.v2.1.1.js');

            const workboxSW = new WorkboxSW({
                cacheId: 'workbox',
                ignoreUrlParametersMatching: [/^utm_/],
                skipWaiting: true,
                clientsClaim: true
            });
            workboxSW.precache([{"url":"/404.html","revision":"a431b87d3eb7617576e8d546e06f71aa"},{"url":"/about/index.html","revision":"868ef0fb94f5b7092d05d0c7323ef9f1"},{"url":"/index.html","revision":"1bf9859e028e58df1abb3b8d9a538ef3"},{"url":"/jekyll/update/2018/03/16/welcome-to-jekyll.html","revision":"b51145158d231d8c38b20614ec7fe3f4"},{"url":"/sw-register.js","revision":"c34b58b3ebce9e9311f70b879f611dda"},{"url":"/assets/main.css","revision":"6c6b1de0fc20924a403482f02883b25b"},{"url":"/assets/minima-social-icons.svg","revision":"3a70b871c930a7ed8af27caa162af123"}]);
            
