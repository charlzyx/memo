# 微信网页授权登陆回调多个域名的 nginx 实现

```nginx
     location ^~ /oauth2/wechat {
       if ($arg_code = '') {
          set $wx_oauth2 open.weixin.qq.com/connect/oauth2/authorize;
          set $re  http%3A%2F%2F$host%2Foauth2%2Fwechat%3Fng_re%3D$arg_redirect_uri;
          # 这一段好丑, 有没有高端写法???
          rewrite ^/(.*) https://$wx_oauth2?appid=$arg_appid&redirect_uri=$re&response_type=$arg_response_type&scope=$arg_scope&state=$arg_state#wechat_redirect last;
       }
       if ($arg_code ~ .*) {
         return 302 $arg_ng_re?code=$arg_code&state=$arg_state;
       }
     }
```
