                            importScripts('/js/workbox-sw.prod.v2.1.1.js');

            const workboxSW = new WorkboxSW({
                cacheId: 'workbox',
                ignoreUrlParametersMatching: [/^utm_/],
                skipWaiting: true,
                clientsClaim: true
            });
            workboxSW.precache([{"url":"/404.html","revision":"66fe80026c96b7d7b1d19d98f64705ef"},{"url":"/about/index.html","revision":"ff6ff21c048950ffe48741f157563e7c"},{"url":"/index.html","revision":"a96e901f93e1704a6761969759592379"},{"url":"/jekyll/update/2018/03/16/welcome-to-jekyll.html","revision":"c24af9a273c7cb57d87e680d4fdd228a"},{"url":"/sw-register.js","revision":"9e0d49f2d503aa22f039c8f6fd1f1c2c"},{"url":"/assets/main.css","revision":"6c6b1de0fc20924a403482f02883b25b"},{"url":"/assets/minima-social-icons.svg","revision":"3a70b871c930a7ed8af27caa162af123"}]);
            
