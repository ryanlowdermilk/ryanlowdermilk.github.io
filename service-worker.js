                            importScripts('/js/workbox-sw.prod.v2.1.1.js');

            const workboxSW = new WorkboxSW({
                cacheId: 'workbox',
                ignoreUrlParametersMatching: [/^utm_/],
                skipWaiting: true,
                clientsClaim: true
            });
            workboxSW.precache([{"url":"/404.html","revision":"dfe464624566edbb14b262628a13beff"},{"url":"/about/index.html","revision":"a473d0a6eec337667f429a9fdbcdf967"},{"url":"/index.html","revision":"c5fd46bea574e73410490356242ec959"},{"url":"/jekyll/update/2018/03/16/welcome-to-jekyll.html","revision":"726a97fd49192158a145e518d1a4e5a0"},{"url":"/sw-register.js","revision":"fa3953b36a4bf43153ceaf21a7e1764f"},{"url":"/assets/main.css","revision":"6c6b1de0fc20924a403482f02883b25b"},{"url":"/assets/minima-social-icons.svg","revision":"3a70b871c930a7ed8af27caa162af123"}]);
            
