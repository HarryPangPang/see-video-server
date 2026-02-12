### 获取视频列表
```
curl 'https://jimeng.jianying.com/mweb/v1/get_asset_list?aid=513695&web_version=7.5.0&da_version=3.3.9&aigc_features=app_lip_sync' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
  -H 'app-sdk-version: 48.0.0' \
  -H 'appid: 513695' \
  -H 'appvr: 8.4.0' \
  -H 'content-type: application/json' \
  -b 's_v_web_id=verify_mj78r46p_8wDsFg9E_1EzK_4mFR_8Xk9_N1uVBu6vsqxI; fpk1=360c140015312c376a69d0834df2ff2bc70fc9c489082e812ade6bfcb1d05a963a4f616c11b37eaa109e024c71b9dd38; passport_csrf_token=8a5901841ed8779b95478cb7ae5cc907; passport_csrf_token_default=8a5901841ed8779b95478cb7ae5cc907; n_mh=-j967_pUtflH23IeCX9gxw-G7-JwrdYBAdJ7uJvFwJ0; sid_guard=aa3d8f394440e799ddfac64887e5bbea%7C1765808472%7C31536000%7CTue%2C+15-Dec-2026+14%3A21%3A12+GMT; uid_tt=0cb1584b1c4303da497e25d341e5633e; uid_tt_ss=0cb1584b1c4303da497e25d341e5633e; sid_tt=aa3d8f394440e799ddfac64887e5bbea; sessionid=aa3d8f394440e799ddfac64887e5bbea; sessionid_ss=aa3d8f394440e799ddfac64887e5bbea; session_tlb_tag=sttt%7C4%7Cqj2POURA55nd-sZIh-W76v________-osAm6mDRa_NXAZXauGFyCm_yxpw8ExMkgKUdgujpQxxQ%3D; is_staff_user=false; sid_ucp_v1=1.0.0-KDliNTAzNzZkOTY2NWIyYmQyYWVlNDY2YWZjZmI2YmNjNzA5NjQzN2IKHwip3sD7oMyJBRDYsoDKBhifrR8gDDD87oOxBjgIQCYaAmxmIiBhYTNkOGYzOTQ0NDBlNzk5ZGRmYWM2NDg4N2U1YmJlYQ; ssid_ucp_v1=1.0.0-KDliNTAzNzZkOTY2NWIyYmQyYWVlNDY2YWZjZmI2YmNjNzA5NjQzN2IKHwip3sD7oMyJBRDYsoDKBhifrR8gDDD87oOxBjgIQCYaAmxmIiBhYTNkOGYzOTQ0NDBlNzk5ZGRmYWM2NDg4N2U1YmJlYQ; user_spaces_idc={"7359153912256921865":"hl"}; dm_auid=E7Gmk7ATyFAXnPBjS8n0D9UA4S6B6+gT9quLJB+Y6o4=; uifid_temp=2ef3e99dc2c8a4456c279029beaa3ab8de7e43e99402ad84eeff39b45ea3bba2d9f43f62e032b926472528e76c932342f634a6bfd1ee0bdc2dc35b4440256a0141f0f1d42642bab71333ac47881037b88840ef8b02e5ee1999a47e1baedeb4c56bcf329872a0e40ef7547c2af09eff35; uifid=2ef3e99dc2c8a4456c279029beaa3ab8de7e43e99402ad84eeff39b45ea3bba2d9f43f62e032b926472528e76c932342f8d65572e09945acad2da74629bb2a68257ea37224ea7f65c26cc0b0130cacd56d9a6c37c3fa28c6f0979f56a8e644d667c02f1cf2e409d0fbb47c48d7b4a7c29048615418fa63ba6d56f9fb8e4331b52974f57e5f3f5a5b1cf0afb3bd8a2f81b7ddac1575ba621bb86774252a36dc4226bde24aa31e9360027637524c8c818a7aef909407c3642a0ca12e488393c97d; _tea_web_id=7584089465464899081; _isHitHomeHeaderRefreshExperiment=1; DREAMINA_THEME=light; COOKIE_CONSENT_PROMPT_CONFIG={%22status%22:1%2C%22settings%22:{%22firstPartyAnalytics%22:true%2C%22GoogleAnalytics%22:true}%2C%22updatedTime%22:1770708820699}; passport_mfa_token=CjGtYDbhdhZyFCozQlJ57o87FLZcY%2FPvH%2Fez6vSpaju50CyC6cLfHACWsYjmF3dTt2rUGkoKPAAAAAAAAAAAAABQD7CdCl7JPIT4YC7ScearUXRPhtt3FO8P%2FyH0nsQysTtQ0oSP%2F9aItXEurzjLZEsG0BCEqYkOGPax0WwgAiIBA3YTl1E%3D; biz_trace_id=e48c5adb; ttwid=1|EhmErRErrXfXrpwlX1QduPzrNWxQZLES0CagnAkDNIw|1770799188|b8f5face06504bd29210303f821b6ef73cb68142547d755ebc1908f02506b02d; _uetsid=d190d400065211f1be542d81a99ddbdb; _uetvid=3b536f20d9c111f0a1b1cd46966aaa1d; odin_tt=6f33f751fcae05ff7fec57a237c012e12577554a09f22cf85cd6ad055a7bb9013ae9a7b16971312f5b57bdb5c46f15c491019084772628e65bbfc725621e07ba' \
  -H 'device-time: 1770799188' \
  -H 'dnt: 1' \
  -H 'lan: zh-Hans' \
  -H 'loc: cn' \
  -H 'origin: https://jimeng.jianying.com' \
  -H 'pf: 7' \
  -H 'priority: u=1, i' \
  -H 'referer: https://jimeng.jianying.com/ai-tool/generate' \
  -H 'sec-ch-ua: "Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sign: 99f53a201a714800b940d336ec506155' \
  -H 'sign-ver: 1' \
  -H 'tdid;' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36' \
  --data-raw '{"count":20,"direction":1,"mode":"workbench","option":{"image_info":{"width":2048,"height":2048,"format":"webp","image_scene_list":[{"scene":"normal","width":2400,"height":2400,"uniq_key":"2400","format":"webp"},{"scene":"loss","width":1080,"height":1080,"uniq_key":"1080","format":"webp"},{"scene":"loss","width":900,"height":900,"uniq_key":"900","format":"webp"},{"scene":"loss","width":720,"height":720,"uniq_key":"720","format":"webp"},{"scene":"loss","width":480,"height":480,"uniq_key":"480","format":"webp"},{"scene":"loss","width":360,"height":360,"uniq_key":"360","format":"webp"}]},"origin_image_info":{"width":96,"height":2048,"format":"webp","image_scene_list":[{"scene":"normal","width":2400,"height":2400,"uniq_key":"2400","format":"webp"},{"scene":"loss","width":1080,"height":1080,"uniq_key":"1080","format":"webp"},{"scene":"loss","width":900,"height":900,"uniq_key":"900","format":"webp"},{"scene":"loss","width":720,"height":720,"uniq_key":"720","format":"webp"},{"scene":"loss","width":480,"height":480,"uniq_key":"480","format":"webp"},{"scene":"loss","width":360,"height":360,"uniq_key":"360","format":"webp"}]},"order_by":0,"only_favorited":false,"end_time_stamp":0,"hide_story_agent_result":true},"asset_type_list":[1,2,5,6,7,8,9,10]}'
  ```

  返回结果
  ```
  {
    "ret": "0",
    "errmsg": "success",
    "systime": "1770799188",
    "logid": "2026021116394815A92CE8C12130D4DAC6",
    "data": {
        "has_more": false,
        "next_offset": 1765859463850,
        "asset_list": [
            {
                "id": "9481748596492",
                "uid": "0",
                "type": 7,
                "video": {
                    "generate_type": 32,
                    "history_record_id": "9481748596492",
                    "origin_history_record_id": null,
                    "created_time": 1770799085.999,
                    "item_list": [
                        {
                            "common_attr": {
                                "id": "7605524120645700874",
                                "effect_id": "7605524120645700874",
                                "effect_type": 53,
                                "title": "",
                                "description": "",
                                "cover_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/67df8554529ae06b5c58fad3c6da8928~tplv-tb4s082cfz-aigc_resize:200:200.jpeg?lk3s=43402efa\u0026x-expires=1770804000\u0026x-signature=FcRdMr02A0LB2Dar60J0lOuvejw%3D\u0026format=.jpeg",
                                "item_urls": [
                                    ""
                                ],
                                "md5": "",
                                "create_time": 1770799089,
                                "status": 144,
                                "review_info": {
                                    "review_status": 1,
                                    "review_code_list": []
                                },
                                "aspect_ratio": 1,
                                "publish_source": "user_post_mweb_item",
                                "collection_ids": [],
                                "extra": "",
                                "has_published": false,
                                "cover_url_map": {
                                    "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/67df8554529ae06b5c58fad3c6da8928~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=0W3q1aoAsIVcEquGfNfrDJLL2zA%3D\u0026format=.webp",
                                    "2400": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/67df8554529ae06b5c58fad3c6da8928~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=KDeGz%2B0VgQuto3DBNOXkwO4ULJY%3D\u0026format=.webp",
                                    "360": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/67df8554529ae06b5c58fad3c6da8928~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=xc9%2FgGZB42R3bLwsXNI5ld5QwD4%3D\u0026format=.webp",
                                    "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/67df8554529ae06b5c58fad3c6da8928~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=Kc%2BAeW3ZpGC2sKhnBhr%2Bc1GQd8I%3D\u0026format=.webp",
                                    "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/67df8554529ae06b5c58fad3c6da8928~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=eyAbhc%2FwlzMoILWa4MbehmI8m7M%3D\u0026format=.webp",
                                    "720": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/67df8554529ae06b5c58fad3c6da8928~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=1715Ky2x6tkxHDzeNdPGR2yB5nw%3D\u0026format=.webp"
                                },
                                "local_item_id": "7605524120645700874",
                                "update_time": 0,
                                "cover_uri": "tos-cn-i-tb4s082cfz/67df8554529ae06b5c58fad3c6da8928",
                                "smart_crop_loc": null,
                                "cover_height": 200,
                                "cover_width": 200
                            },
                            "author": null,
                            "video": {
                                "video_id": "v02870g10004d663sunog65pabjdfapg",
                                "duration": 6,
                                "origin_video": null,
                                "transcoded_video": {
                                    "origin": {
                                        "vid": "",
                                        "fps": 24,
                                        "width": 960,
                                        "height": 960,
                                        "duration": 0,
                                        "video_url": "https://v9-artist.vlabvod.com/2959323979a47e8cad484eee2ec29cfb/69957ad9/video/tos/cn/tos-cn-v-148450/oATDXCixqIBVe5QJ8zOQvuiU0ME5gVbAhEnhPA/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=6889\u0026bt=6889\u0026cs=0\u0026ds=12\u0026ft=5QYTUxhhe6BMyqTbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=OzhnNTozMzxlOzc3PDo1ZUBpamRnZXM5cng2OTczNDM7M0AwY2AtYDUuXjMxXy5hM2EzYSNtY2deMmRrcDNhLS1kNC9zcw%3D%3D\u0026btag=c0000e00008000\u0026dy_q=1770799188\u0026feature_id=7bed9f9dfbb915a044e5d473759ce9df\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                        "cover_url": "",
                                        "format": "mp4",
                                        "definition": "origin",
                                        "logo_type": "",
                                        "encryption_key": "",
                                        "md5": "b8bb5cbee3e4fed8dc41b139cdb3102e",
                                        "size": 4424231,
                                        "video_id": ""
                                    }
                                },
                                "video_size_type": 3,
                                "cover_uri": "tos-cn-p-148450/oA8U5JvuhxIAzPguDeQbEXiiwpyqV0MnBkAhAi",
                                "transcode_status": 1,
                                "duration_ms": 5042,
                                "thumb": {
                                    "detail_infos": [
                                        {
                                            "frame_count": 5,
                                            "image_width": 1280,
                                            "image_height": 1280,
                                            "uri": "tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG",
                                            "url": "https://p26-sign.douyinpic.com/tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG~tplv-noop.image?dy_q=1770799188\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1771403993\u0026x-signature=VZ0WUoQNHaYTrsajco7GWnemzUw%3D"
                                        }
                                    ],
                                    "thumb_common_info": {
                                        "single_frame_width": 320,
                                        "single_frame_height": 320,
                                        "total_set_num": 5
                                    }
                                },
                                "watermark_type": 1,
                                "cover_url": "https://p26-sign.douyinpic.com/tos-cn-p-148450/oA8U5JvuhxIAzPguDeQbEXiiwpyqV0MnBkAhAi~tplv-noop.image?dy_q=1770799188\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1771403993\u0026x-signature=fDomzUFf5k4OdPjoI%2F%2FKnssJPDA%3D",
                                "duration_info": "{\"play_info_duration\":5.017,\"v_duration\":5.042,\"a_duration\":0}",
                                "vda_status": 10,
                                "video_model": "{\"status\":10,\"message\":\"success\",\"enable_ssl\":true,\"auto_definition\":\"360p\",\"enable_adaptive\":false,\"video_id\":\"v02870g10004d663sunog65pabjdfapg\",\"video_duration\":5.017,\"media_type\":\"video\",\"url_expire\":1770802794,\"big_thumbs\":[{\"img_num\":5,\"uri\":\"tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG\",\"img_url\":\"https://p26-sign.douyinpic.com/tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=wuuV2P%2FwUhr%2BibTEEQoagHOJUig%3D\",\"img_urls\":[\"https://p26-sign.douyinpic.com/tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=wuuV2P%2FwUhr%2BibTEEQoagHOJUig%3D\"],\"img_x_size\":320,\"img_y_size\":320,\"img_x_len\":4,\"img_y_len\":4,\"duration\":5.041667,\"interval\":1,\"fext\":\"jpeg\"}],\"fallback_api\":\"https://vas-lf-x.snssdk.com/video/fplay/1/40dd4e28bed836b77fff602690913ca7/v02870g10004d663sunog65pabjdfapg?aid=0\u0026device_platform=unknown\u0026force_fids=ZjUzOA%3D%3D\u0026imp=false\u0026key_seed=ZthscnhC%2FiXloQBPlzCfTJVQSy7eyc147WIAScePg6E%3D\u0026logo_type=default\u0026multi_rate_audios=true\u0026stream_type=normal\u0026vps=6\",\"video_list\":{\"video_1\":{\"definition\":\"origin\",\"quality\":\"normal\",\"vtype\":\"mp4\",\"vwidth\":960,\"vheight\":960,\"bitrate\":7054783,\"real_bitrate\":7054783,\"fps\":24,\"codec_type\":\"h264\",\"size\":4424231,\"main_url\":\"aHR0cHM6Ly92MjYtZGVmYXVsdC4zNjV5Zy5jb20vOWIyYzRiNGM0ZTMwNzBlYjQ0NmIyOGZmODk2ZGZiNmQvNjk4YzRlNmEvdmlkZW8vdG9zL2NuL3Rvcy1jbi12LTE0ODQ1MC9vQVREWENpeHFJQlZlNVFKOHpPUXZ1aVUwTUU1Z1ZiQWhFbmhQQS8/YT0wJmNoPTAmY3I9MCZkcj0wJmVyPTAmbHI9ZGVmYXVsdCZjZD0wJTdDMCU3QzAlN0MwJmJyPTY4ODkmYnQ9Njg4OSZjcz0wJmRzPTEyJmZ0PU9pLnBpNzdKV0g2Qk0zdFJJdnIwUEQxSU4mbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPU96aG5OVG96TXp4bE96YzNQRG8xWlVCcGFtUm5aWE01Y25nMk9UY3pORE03TTBBd1kyQXRZRFV1WGpNeFh5NWhNMkV6WVNOdFkyZGVNbVJyY0ROaExTMWtOQzl6Y3clM0QlM0QmYnRhZz04MDAwMGUwMDAwODAwMCZjcXVlcnk9MTAwWCZkeV9xPTE3NzA3OTkxODkmZmVhdHVyZV9pZD03YmVkOWY5ZGZiYjkxNWEwNDRlNWQ0NzM3NTljZTlkZiZsPTIwMjYwMjExMTYzOTQ4MTVBOTJDRThDMTIxMzBENERBQzY=\",\"backup_url_1\":\"aHR0cHM6Ly92MTEtZGVmYXVsdC4zNjV5Zy5jb20vMjBlM2ZjOGJiNGM0ZDE2NTI0ZDE1ZmQ2N2NiNmExNzYvNjk4YzRlNmEvdmlkZW8vdG9zL2NuL3Rvcy1jbi12LTE0ODQ1MC9vQVREWENpeHFJQlZlNVFKOHpPUXZ1aVUwTUU1Z1ZiQWhFbmhQQS8/YT0wJmNoPTAmY3I9MCZkcj0wJmVyPTAmbHI9ZGVmYXVsdCZjZD0wJTdDMCU3QzAlN0MwJmJyPTY4ODkmYnQ9Njg4OSZjcz0wJmRzPTEyJmZ0PU9pLnBpNzdKV0g2Qk0zdFJJdnIwUEQxSU4mbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPU96aG5OVG96TXp4bE96YzNQRG8xWlVCcGFtUm5aWE01Y25nMk9UY3pORE03TTBBd1kyQXRZRFV1WGpNeFh5NWhNMkV6WVNOdFkyZGVNbVJyY0ROaExTMWtOQzl6Y3clM0QlM0QmYnRhZz04MDAwMGUwMDAwODAwMCZjcXVlcnk9MTAwWCZkeV9xPTE3NzA3OTkxODkmZmVhdHVyZV9pZD03YmVkOWY5ZGZiYjkxNWEwNDRlNWQ0NzM3NTljZTlkZiZsPTIwMjYwMjExMTYzOTQ4MTVBOTJDRThDMTIxMzBENERBQzY=\",\"file_id\":\"6bd267d914b4486ba91080c702cdf538\",\"quality_type\":0,\"encryption_method\":\"\",\"audio_channels\":\"0.0\",\"feature_id\":\"7bed9f9dfbb915a044e5d473759ce9df\",\"gear_des_key\":\"0:MP4|1:normal|2:h264|4:origin|5:normal|10000:105\",\"audio_sample_rate\":\"0\",\"audio_bitrate_target\":128,\"url_expire\":1770802794,\"preload_size\":327680,\"preload_interval\":60,\"preload_min_step\":5,\"preload_max_step\":10,\"file_hash\":\"b8bb5cbee3e4fed8dc41b139cdb3102e\"}},\"popularity_level\":0,\"has_embedded_subtitle\":false,\"poster_url\":\"https://p26-sign.douyinpic.com/tos-cn-p-148450/oA8U5JvuhxIAzPguDeQbEXiiwpyqV0MnBkAhAi~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=kborBGVf0oQdiT0Cv%2Bf1XsZB6Dk%3D\",\"key_seed\":\"ZthscnhC/iXloQBPlzCfTJVQSy7eyc147WIAScePg6E=\"}",
                                "has_audio": false,
                                "is_mute": false
                            },
                            "aigc_image_params": {
                                "generate_type": 32,
                                "first_generate_type": 10,
                                "text2video_params": {
                                    "video_gen_inputs": [
                                        {
                                            "prompt": "生成一个拜年视频",
                                            "first_frame_image": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:0:0.png?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=Tw5WiWqpDU3f0kkA%2F38VFglR%2FIw%3D\u0026format=.png",
                                                "width": 682,
                                                "height": 708,
                                                "format": "png",
                                                "cover_url_map": {
                                                    "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=abWET6pz3kPnr%2B7x9tQn6eWT4lo%3D",
                                                    "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=5H6R1y9Hi%2FOYeKvmuMvQIMvDmVw%3D",
                                                    "360": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=A8E3LVgS9ND4zWMu1cd3Nf3G50g%3D",
                                                    "4096": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=Fk7JHcKCUjucxR%2B7YBXZULazZTI%3D",
                                                    "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=e1Of%2BbTqUJHrZxfZPZ6s3qfdOPs%3D",
                                                    "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=NGbovhdNI0rggM2q5%2FrLPHnE2ok%3D"
                                                },
                                                "smart_crop_loc": null
                                            },
                                            "end_frame_image": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:0:0.png?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=0rg6i9o8vOMNHqCKaDmuwydCQy0%3D\u0026format=.png",
                                                "width": 549,
                                                "height": 613,
                                                "format": "png",
                                                "cover_url_map": {
                                                    "1080": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=1upNiqiU7G5zg9LESWP0ikEYrQ0%3D",
                                                    "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=ysdulWhEzXt3NuMjPiV%2BzbnJDw8%3D",
                                                    "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=Y3aAiE0lvhY8LIQ6jcvSyu6dpbM%3D",
                                                    "4096": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=TWjFJz6WXS03JbTIcy16QN6%2Fm7E%3D",
                                                    "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=cDg4i1KI3QRarNH7EaGDJ0J9FNQ%3D",
                                                    "720": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=pCdASEn1VWDv%2BvKKgi%2FxYTc1RUw%3D"
                                                },
                                                "smart_crop_loc": null
                                            },
                                            "lens_motion_type": "",
                                            "motion_speed": "",
                                            "vid": "",
                                            "ending_control": "",
                                            "pre_task_id": "0",
                                            "audio_vid": "",
                                            "video_mode": 2,
                                            "fps": 24,
                                            "duration_ms": 5000,
                                            "template_id": "0"
                                        }
                                    ],
                                    "video_aspect_ratio": "1:1",
                                    "seed": 3550643144,
                                    "task_scene": "",
                                    "priority": 0,
                                    "video_gen_inputs_extra": [
                                        {}
                                    ],
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                    "model_config": {
                                        "icon_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HK%2FKnxh8rDtvWGxR9VPrvLykHHQ%3D",
                                        "model_name_starling_key": "video_3",
                                        "model_tip_starling_key": "new_default_model_beginner_friendly",
                                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                        "is_new_model": false,
                                        "sample_steps": null,
                                        "blend_enable": null,
                                        "feats": [
                                            "support_first_image",
                                            "support_end_image"
                                        ],
                                        "model_name": "视频 3.0",
                                        "model_tip": "精准响应，支持多镜头和运镜",
                                        "feature_key": "",
                                        "generation_category_name_starling_key": "",
                                        "generation_category_name": "",
                                        "duration_option": [
                                            5,
                                            10
                                        ],
                                        "lens_motion_type_option": null,
                                        "motion_speed_option": null,
                                        "camera_strength_option": null,
                                        "video_aspect_ratio_option": [
                                            "21:9",
                                            "16:9",
                                            "4:3",
                                            "1:1",
                                            "3:4",
                                            "9:16"
                                        ],
                                        "commercial_config": {
                                            "commerce_info_map": {
                                                "basic": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                },
                                                "retry": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                }
                                            },
                                            "image_model_commerce_config": null
                                        },
                                        "fps": 24,
                                        "extra": {},
                                        "feats_cant_combine": null,
                                        "model_bg_prompt_starling_key": ""
                                    },
                                    "video_model_config": {
                                        "icon": {
                                            "image_uri": "tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg",
                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HK%2FKnxh8rDtvWGxR9VPrvLykHHQ%3D",
                                            "width": 0,
                                            "height": 0,
                                            "format": "webp",
                                            "smart_crop_loc": null
                                        },
                                        "model_name": "视频 3.0",
                                        "model_name_starling_key": "video_3",
                                        "model_tip": "精准响应，支持多镜头和运镜",
                                        "model_tip_starling_key": "new_default_model_beginner_friendly",
                                        "feature_key": "",
                                        "icon_tag": "",
                                        "options": [
                                            {
                                                "key": "multi_frames",
                                                "value_type": "multi_frames",
                                                "forbidden_display": false,
                                                "lens_motion_val": null,
                                                "multi_frames_config": {
                                                    "duration_ms": {
                                                        "min": 1000,
                                                        "max": 6000,
                                                        "step": 1000,
                                                        "default": 5000
                                                    },
                                                    "media_config": [
                                                        {
                                                            "media_type": 1,
                                                            "max_video_media_duration_ms": 0
                                                        }
                                                    ],
                                                    "max_media_count": 10,
                                                    "min_generation_duration_ms": 2000,
                                                    "first_segment_generation_enabled": false,
                                                    "end_segment_generation_enabled": false
                                                }
                                            },
                                            {
                                                "key": "lens_recipe",
                                                "value_type": "lens_recipe",
                                                "forbidden_display": false,
                                                "lens_motion_val": {
                                                    "lens_recipe_list": [
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=ZVIjG%2FWmso6X2ecJiC9izgEO1Wc%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "hitchcock_dolly_in",
                                                            "name": "希区柯克推进",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.4,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "hitchcock_dolly_in"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=GUX3PcZRfNeWAVFRRXpORv%2BUwRQ%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "hitchcock_dolly_out",
                                                            "name": "希区柯克拉远",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "hitchcock_dolly_out"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/robo_arm_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/robo_arm_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=W9KX2Sf7eY2%2FOUHG7%2FCPfvubaU4%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "robo_arm",
                                                            "name": "机械臂",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "robo_arm"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=pkq75B4SpEpXQ2FRbSv857I%2FBAk%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "dynamic_orbit",
                                                            "name": "动感环绕",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "dynamic_orbit"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/central_orbit_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/central_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=47lDFeTSv%2BzPxPj7Qj4pxUFa2wU%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "central_orbit",
                                                            "name": "中心环绕",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.4,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.7,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "central_orbit"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/crane_push_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/crane_push_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=yP1%2BylhupKpFv90CgJW%2BKcvd1%2Fs%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "crane_push",
                                                            "name": "起重机",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.5,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 0.8,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "crane_push"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=u3sP%2B%2F5g9WMfnLgylG%2FTnYw9GHo%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "quick_pull_back",
                                                            "name": "超级拉远",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.4,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.7,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "quick_pull_back"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=g8HC1uBa8ScSxjtVl0z2aWkvLT8%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "counterclockwise_swivel",
                                                            "name": "逆时针回旋",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "counterclockwise_swivel"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=UM6z93eFJjX0mNSuezEM%2FsZg4%2B8%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "clockwise_swivel",
                                                            "name": "顺时针回旋",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "clockwise_swivel"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/handheld_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/handheld_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=VlW8cnakAfO5duCUhsgrL5dwu8c%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "handheld",
                                                            "name": "手持运镜",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.2,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.5,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "handheld"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=8j0VPs3Kvo3AFWbFZNyfmMEV4VQ%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "rapid_push_pull",
                                                            "name": "快速推拉",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "rapid_push_pull"
                                                        }
                                                    ],
                                                    "default_val_idx": -1
                                                }
                                            },
                                            {
                                                "key": "resolution",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "720p",
                                                        "1080p"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "input_media_type",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "prompt",
                                                        "first_frame",
                                                        "end_frame",
                                                        "multi_frame",
                                                        "idip_frame"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "frames",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "int",
                                                    "string_value": null,
                                                    "double_value": null,
                                                    "int_value": [
                                                        120,
                                                        240
                                                    ],
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "fps",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "int",
                                                    "string_value": null,
                                                    "double_value": null,
                                                    "int_value": [
                                                        24
                                                    ],
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": true,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "video_aspect_ratio",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "21:9",
                                                        "16:9",
                                                        "4:3",
                                                        "1:1",
                                                        "3:4",
                                                        "9:16"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 1
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "multi_frame_duration",
                                                "value_type": "slide_bar",
                                                "slide_bar_val": {
                                                    "min": 1,
                                                    "max": 6,
                                                    "step": 1,
                                                    "default": 5
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "multi_frame_media_type",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "int",
                                                    "string_value": null,
                                                    "double_value": null,
                                                    "int_value": [
                                                        1
                                                    ],
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "multi_frame_media_count",
                                                "value_type": "slide_bar",
                                                "slide_bar_val": {
                                                    "min": 2,
                                                    "max": 10,
                                                    "step": 1,
                                                    "default": 2
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "idip_frame",
                                                "value_type": "slide_bar",
                                                "slide_bar_val": {
                                                    "min": 1,
                                                    "max": 4,
                                                    "step": 0,
                                                    "default": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            }
                                        ],
                                        "commercial_config": {
                                            "default": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            },
                                            "format": "{resolution}",
                                            "format_conf": {
                                                "1080p": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three_1080",
                                                    "amount": 0
                                                },
                                                "720p": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                }
                                            },
                                            "additional_conf": [
                                                {
                                                    "option_key": "lens_recipe",
                                                    "commerce_info": {
                                                        "resource_sub_type": "aigc",
                                                        "resource_id_type": "str",
                                                        "resource_id": "generate_video",
                                                        "benefit_type": "basic_video_operation_vgfm_v_three_recpie_add",
                                                        "amount": 0
                                                    }
                                                },
                                                {
                                                    "option_key": "resolution",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "1080p"
                                                        ]
                                                    },
                                                    "commerce_info": {
                                                        "resource_sub_type": "aigc",
                                                        "resource_id_type": "str",
                                                        "resource_id": "generate_video",
                                                        "benefit_type": "basic_video_operation_vgfm_v_three_1080_add",
                                                        "amount": 0
                                                    }
                                                }
                                            ]
                                        },
                                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                        "extra": {
                                            "pop_icon": {
                                                "image_uri": "tos-cn-i-3jr8j4ixpe/vgfm_lite_cover",
                                                "image_url": "https://p3-heycan-hgt-sign.byteimg.com/tos-cn-i-3jr8j4ixpe/vgfm_lite_cover~tplv-3jr8j4ixpe-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=eOQBlb35MNtfhTUITjai4O8CCjc%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "webp",
                                                "smart_crop_loc": null
                                            },
                                            "model_source": "by Seedance 1.0 mini",
                                            "raw_model_source": "",
                                            "aigc_compliance_confirmation_required": false
                                        },
                                        "model_status": 0,
                                        "mutex_conf": {
                                            "mutex_list": [
                                                [
                                                    {
                                                        "option_key": "lens_recipe"
                                                    },
                                                    {
                                                        "option_key": "input_media_type",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "prompt",
                                                                "end_frame",
                                                                "multi_frame",
                                                                "idip_frame"
                                                            ]
                                                        }
                                                    }
                                                ],
                                                [
                                                    {
                                                        "option_key": "lens_recipe"
                                                    },
                                                    {
                                                        "option_key": "resolution",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "1080p"
                                                            ]
                                                        }
                                                    }
                                                ],
                                                [
                                                    {
                                                        "option_key": "resolution",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "1080p"
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "option_key": "input_media_type",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "multi_frame",
                                                                "idip_frame"
                                                            ]
                                                        }
                                                    }
                                                ],
                                                [
                                                    {
                                                        "option_key": "frames"
                                                    },
                                                    {
                                                        "option_key": "input_media_type",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "multi_frame"
                                                            ]
                                                        }
                                                    }
                                                ]
                                            ]
                                        },
                                        "generation_category_name": "",
                                        "generation_category_name_starling_key": ""
                                    }
                                },
                                "template_id": "0",
                                "insta_drag_params": {
                                    "origin_item_id": null
                                },
                                "hide_ref_images": false,
                                "video_audio_effect_params": {
                                    "origin_history_id": "9475035451916",
                                    "origin_item_id": "7605520754297392435"
                                }
                            },
                            "statistic": {
                                "feedback_status": 0
                            },
                            "category_id_list": [],
                            "aigc_flow": {
                                "version": "0.1.2"
                            },
                            "aigc_draft": {
                                "version": "3.1.2",
                                "uri": "aigc-draft/8326864746764",
                                "content": "",
                                "update_time": 0,
                                "last_preview_time": 0,
                                "resource_type": "",
                                "public_uri": "",
                                "variables": [],
                                "resource_width": 0,
                                "resource_height": 0,
                                "node_keys": [],
                                "cost": 0
                            },
                            "gen_result_data": {
                                "result_code": 0,
                                "result_msg": "Success"
                            },
                            "extra": {
                                "template_type": "video",
                                "ai_feature": "video_auto_audio"
                            },
                            "ai_feature": {
                                "features": [
                                    {
                                        "type": "video_auto_audio"
                                    },
                                    {
                                        "type": "first_end_image_generate_video",
                                        "is_inherit": true
                                    }
                                ],
                                "is_merged": true
                            },
                            "sharing_info": {
                                "share_status": 2
                            },
                            "video_audio_effect": {
                                "result_list": [
                                    {
                                        "audio": {
                                            "vid": "v0d870g10004d663vs7og65hp0vhuh20",
                                            "origin_audio": {
                                                "vid": "v0d870g10004d663vs7og65hp0vhuh20",
                                                "duration": 0,
                                                "audio_url": "",
                                                "format": "mp3",
                                                "size": 168900,
                                                "encryption_key": "",
                                                "title": "",
                                                "duration_ms": 0,
                                                "url": "https://v3-artist.vlabvod.com/5b1f0036bc6f96eb888d871aca088888/69957ada/video/tos/cn/tos-cn-v-148450/o8E9GxGfMIPefTGxwIVP0NhIKQHLgcm9CwBIfE/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=2\u0026cd=0%7C0%7C0%7C0\u0026br=250\u0026bt=250\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=audio_mpeg\u0026qs=3\u0026rc=ZDtnOTZnPGY5ZGlkOGY0aUBpM2trM2s5cnY2OTczNDM7M0AyNl9jMTRjNTIxY181YmE0YSMvcnNtMmQ0czNhLS1kNGFzcw%3D%3D\u0026btag=c0000e00008000\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6"
                                            }
                                        },
                                        "mixed_video": {
                                            "video_item_id": "0",
                                            "audio_vid": "",
                                            "item_id": "7605524146285546761",
                                            "video": {
                                                "video_id": "v03870g10004d663vsiljht2nibut370",
                                                "duration": 6,
                                                "origin_video": {
                                                    "vid": "",
                                                    "fps": 24,
                                                    "width": 960,
                                                    "height": 960,
                                                    "duration": 0,
                                                    "video_url": "https://v3-artist.vlabvod.com/5214f1ac74e22abf5c65d12221fbe981/698d91da/video/tos/cn/tos-cn-v-148450/c05cfdea684b4a88b6e2f6c3af090c26/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=10797\u0026bt=10797\u0026cs=0\u0026ds=4\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=13\u0026rc=MzZ4bDVrb3Y2OTczNDM7M0BpMzZ4bDVrb3Y2OTczNDM7M0A0cV9rcWdmczNhLS1kNDBzYSM0cV9rcWdmczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                    "cover_url": "",
                                                    "format": "mp4",
                                                    "definition": "1080p",
                                                    "logo_type": "",
                                                    "encryption_key": "",
                                                    "md5": "bfd59afe14368841733c2e5401dcc669",
                                                    "size": 6967685,
                                                    "video_id": ""
                                                },
                                                "transcoded_video": {
                                                    "1080p": {
                                                        "vid": "",
                                                        "fps": 24,
                                                        "width": 960,
                                                        "height": 960,
                                                        "duration": 0,
                                                        "video_url": "https://v3-artist.vlabvod.com/4ec2ecc70e38bee6755afca9f77508bf/698d91da/video/tos/cn/tos-cn-v-148450/oYBK0zP9mCuFfZkVIjEERfGM0AfAMiqGfcL5hx/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=2178\u0026bt=2178\u0026cs=0\u0026ds=4\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=Z2c0NDRoNmVpPDs5Z2VnNUBpMzZ4bDVrb3Y2OTczNDM7M0A2L2A1NjMzX2MxYTRjNjViYSM0cV9rcWdmczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026feature_id=f0150a16a324336cda5d6dd0b69ed299\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                        "cover_url": "",
                                                        "format": "mp4",
                                                        "definition": "1080p",
                                                        "logo_type": "",
                                                        "encryption_key": "",
                                                        "md5": "13444d8e5dabb10c9d7e8f275ab901d4",
                                                        "size": 1405680,
                                                        "video_id": ""
                                                    },
                                                    "360p": {
                                                        "vid": "",
                                                        "fps": 24,
                                                        "width": 360,
                                                        "height": 360,
                                                        "duration": 0,
                                                        "video_url": "https://v3-artist.vlabvod.com/483cf7b259d66fe291907c2c148d0c23/698d91da/video/tos/cn/tos-cn-v-148450/ooOw4eBQzkjIMMh0P6ELYmffVl5CGcV7ggfMq6/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=548\u0026bt=548\u0026cs=0\u0026ds=1\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=OGY1O2Q8Nmg2NWVkO2RkOEBpMzZ4bDVrb3Y2OTczNDM7M0A1YmA1L2EtXy8xYjJfL18tYSM0cV9rcWdmczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026feature_id=59cb2766d89ae6284516c6a254e9fb61\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                        "cover_url": "",
                                                        "format": "mp4",
                                                        "definition": "360p",
                                                        "logo_type": "",
                                                        "encryption_key": "",
                                                        "md5": "943f7777409df1abcebe8ed7ccd954b2",
                                                        "size": 353773,
                                                        "video_id": ""
                                                    },
                                                    "480p": {
                                                        "vid": "",
                                                        "fps": 24,
                                                        "width": 480,
                                                        "height": 480,
                                                        "duration": 0,
                                                        "video_url": "https://v3-artist.vlabvod.com/cd86974efbb6fab7b892f0224b168130/698d91da/video/tos/cn/tos-cn-v-148450/oAw0Z6VcGg5IfMoqVoAfL9jml6x0zCkPEB2ffM/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=810\u0026bt=810\u0026cs=0\u0026ds=2\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=ODM2Njs1OWU8NWU4ODM4M0BpMzZ4bDVrb3Y2OTczNDM7M0AzLTMtNi4tX18xYGM0NDMtYSM0cV9rcWdmczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026feature_id=f0150a16a324336cda5d6dd0b69ed299\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                        "cover_url": "",
                                                        "format": "mp4",
                                                        "definition": "480p",
                                                        "logo_type": "",
                                                        "encryption_key": "",
                                                        "md5": "32c14741a91e03b12bf03c03b75daa93",
                                                        "size": 522902,
                                                        "video_id": ""
                                                    },
                                                    "720p": {
                                                        "vid": "",
                                                        "fps": 24,
                                                        "width": 720,
                                                        "height": 720,
                                                        "duration": 0,
                                                        "video_url": "https://v3-artist.vlabvod.com/ebd7cb8f13a9fe3ddaf8233a39ad2c0f/698d91da/video/tos/cn/tos-cn-v-148450/oEjCefmL0fGMzk5c0PIYdgQjwBVMMV6E4tqlfV/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=1334\u0026bt=1334\u0026cs=0\u0026ds=3\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=PDw0OGlkZDQ2OWc8O2RnOUBpMzZ4bDVrb3Y2OTczNDM7M0A1MF82MjFgXzYxMjEtXzY2YSM0cV9rcWdmczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026feature_id=f0150a16a324336cda5d6dd0b69ed299\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                        "cover_url": "",
                                                        "format": "mp4",
                                                        "definition": "720p",
                                                        "logo_type": "",
                                                        "encryption_key": "",
                                                        "md5": "26ea3d823742a609f18411999b1f3f60",
                                                        "size": 861013,
                                                        "video_id": ""
                                                    },
                                                    "origin": {
                                                        "vid": "",
                                                        "fps": 24,
                                                        "width": 960,
                                                        "height": 960,
                                                        "duration": 0,
                                                        "video_url": "https://v3-artist.vlabvod.com/ea288d1209c377f347893212eeae9a21/698d91da/video/tos/cn/tos-cn-v-148450/o0Jc640MMgjTkVAIf4MBqLz5mwRgGVeCMRfPfE/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=6990\u0026bt=6990\u0026cs=0\u0026ds=12\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=ZjpmPGU4O2ZkaDtmZ2k6PEBpMzZ4bDVrb3Y2OTczNDM7M0BiLjMxLTEyNjAxMC1jLjNfYSM0cV9rcWdmczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026feature_id=7bed9f9dfbb915a044e5d473759ce9df\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                        "cover_url": "",
                                                        "format": "mp4",
                                                        "definition": "origin",
                                                        "logo_type": "",
                                                        "encryption_key": "",
                                                        "md5": "0c39624b08ab2ab611a04a2beac821e6",
                                                        "size": 4508955,
                                                        "video_id": ""
                                                    }
                                                },
                                                "video_size_type": 3,
                                                "cover_uri": "tos-cn-p-148450/oMIrqIjM4f4Cf0Gem5MkfDMcBQ8wELNgJWVPz6",
                                                "transcode_status": 1,
                                                "duration_ms": 5042,
                                                "thumb": {
                                                    "detail_infos": [
                                                        {
                                                            "frame_count": 5,
                                                            "image_width": 1280,
                                                            "image_height": 1280,
                                                            "uri": "tos-cn-p-148450/okelzCI06gkVYGJB5WcMMfgPN4fkjqWEMfLmLw",
                                                            "url": "https://p11-sign.douyinpic.com/tos-cn-p-148450/okelzCI06gkVYGJB5WcMMfgPN4fkjqWEMfLmLw~tplv-noop.image?dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770885594\u0026x-signature=X8Sn%2B5JIQ9cGm94wrm4hpZQOans%3D"
                                                        }
                                                    ],
                                                    "thumb_common_info": {
                                                        "single_frame_width": 320,
                                                        "single_frame_height": 320,
                                                        "total_set_num": 5
                                                    }
                                                },
                                                "watermark_type": 0,
                                                "cover_url": "https://p11-sign.douyinpic.com/tos-cn-p-148450/oMIrqIjM4f4Cf0Gem5MkfDMcBQ8wELNgJWVPz6~tplv-noop.image?dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770885594\u0026x-signature=GRcSi8jfevrgy5IAvPF2%2FszZxBA%3D",
                                                "duration_info": "{\"play_info_duration\":5.042,\"v_duration\":5.042,\"a_duration\":5.039}",
                                                "volume_info": {
                                                    "loudness": -14.7,
                                                    "peak": 0.69183
                                                },
                                                "vda_status": 10,
                                                "has_audio": true,
                                                "is_mute": false
                                            },
                                            "has_published": false,
                                            "published_item_id": "0",
                                            "status": 3,
                                            "fail_code": ""
                                        },
                                        "generate_status": 3
                                    },
                                    {
                                        "audio": {
                                            "vid": "v0d870g10004d663vs7og65mk4o8u3fg",
                                            "origin_audio": {
                                                "vid": "v0d870g10004d663vs7og65mk4o8u3fg",
                                                "duration": 0,
                                                "audio_url": "",
                                                "format": "wav",
                                                "size": 336044,
                                                "encryption_key": "",
                                                "title": "",
                                                "duration_ms": 0,
                                                "url": "https://v3-artist.vlabvod.com/b14882aab19ca1646c81a3391274d7be/69957ada/video/tos/cn/tos-cn-v-148450/o0DMCIeG0QagG8mchfN8IMNPwEfIGIfALAAhQB/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=2\u0026cd=0%7C0%7C0%7C0\u0026br=500\u0026bt=500\u0026ds=5\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=audio_wav\u0026qs=13\u0026rc=ajY7N3A5cnY2OTczNDM7M0BpajY7N3A5cnY2OTczNDM7M0BjcmxoMmQ0czNhLS1kNGFzYSNjcmxoMmQ0czNhLS1kNGFzcw%3D%3D\u0026btag=c0000e00008000\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6"
                                            }
                                        },
                                        "mixed_video": {
                                            "video_item_id": "0",
                                            "audio_vid": "",
                                            "item_id": "7605524146285563145",
                                            "video": {
                                                "video_id": "v03870g10004d663vsvog65pk37io0ag",
                                                "duration": 6,
                                                "origin_video": {
                                                    "vid": "",
                                                    "fps": 24,
                                                    "width": 960,
                                                    "height": 960,
                                                    "duration": 0,
                                                    "video_url": "https://v3-artist.vlabvod.com/6db5eca058024cb8899ac449ade415af/698d91da/video/tos/cn/tos-cn-v-148450/oYwUmLEGMGmIMycffBAzIMfwQeBngOCISqQAPA/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=10796\u0026bt=10796\u0026cs=0\u0026ds=4\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=13\u0026rc=ajNsNnM5cnY2OTczNDM7M0BpajNsNnM5cnY2OTczNDM7M0BebDRoMmRzczNhLS1kNDBzYSNebDRoMmRzczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                    "cover_url": "",
                                                    "format": "mp4",
                                                    "definition": "1080p",
                                                    "logo_type": "",
                                                    "encryption_key": "",
                                                    "md5": "d3d77023916585b3fd324c3d02585b88",
                                                    "size": 6967647,
                                                    "video_id": ""
                                                },
                                                "transcoded_video": {
                                                    "origin": {
                                                        "vid": "",
                                                        "fps": 24,
                                                        "width": 960,
                                                        "height": 960,
                                                        "duration": 0,
                                                        "video_url": "https://v3-artist.vlabvod.com/ff6ec8030c6623b72ea8de68e668b24f/698d91da/video/tos/cn/tos-cn-v-148450/ooenCl8MMANlGgmcBf6pxMCPhEeIEQfZXAiniB/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=6990\u0026bt=6990\u0026cs=0\u0026ds=12\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=aTU2OWg0Zzs2OjQzNGg8ZEBpajNsNnM5cnY2OTczNDM7M0A0MmNeNGEzNTIxNDY1MC9iYSNebDRoMmRzczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026feature_id=7bed9f9dfbb915a044e5d473759ce9df\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                        "cover_url": "",
                                                        "format": "mp4",
                                                        "definition": "origin",
                                                        "logo_type": "",
                                                        "encryption_key": "",
                                                        "md5": "6c019b024f42cdac1c38a4552f313825",
                                                        "size": 4508888,
                                                        "video_id": ""
                                                    }
                                                },
                                                "video_size_type": 3,
                                                "cover_uri": "tos-cn-p-148450/ooJhDeBzGC4mLWycnwIfP8QfMEMggUwBmMGxfI",
                                                "transcode_status": 1,
                                                "duration_ms": 5042,
                                                "thumb": {
                                                    "detail_infos": [
                                                        {
                                                            "frame_count": 5,
                                                            "image_width": 1280,
                                                            "image_height": 1280,
                                                            "uri": "tos-cn-p-148450/ogwwBlLcGggIfMaemYgJzyGmkxULICnPEB1ffM",
                                                            "url": "https://p11-sign.douyinpic.com/tos-cn-p-148450/ogwwBlLcGggIfMaemYgJzyGmkxULICnPEB1ffM~tplv-noop.image?dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770885594\u0026x-signature=uOgguY8NNJF8N6mx6xP8F8NaQKA%3D"
                                                        }
                                                    ],
                                                    "thumb_common_info": {
                                                        "single_frame_width": 320,
                                                        "single_frame_height": 320,
                                                        "total_set_num": 5
                                                    }
                                                },
                                                "watermark_type": 0,
                                                "cover_url": "https://p11-sign.douyinpic.com/tos-cn-p-148450/ooJhDeBzGC4mLWycnwIfP8QfMEMggUwBmMGxfI~tplv-noop.image?dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770885594\u0026x-signature=loT1RUJBofV6zQicPdyPf%2F8wico%3D",
                                                "duration_info": "{\"play_info_duration\":5.039,\"v_duration\":5.042,\"a_duration\":5.039}",
                                                "vda_status": 10,
                                                "has_audio": false,
                                                "is_mute": false
                                            },
                                            "has_published": false,
                                            "published_item_id": "0",
                                            "status": 3,
                                            "fail_code": ""
                                        },
                                        "generate_status": 3
                                    },
                                    {
                                        "audio": {
                                            "vid": "v0d870g10004d663vs2ljht1jupa10a0",
                                            "origin_audio": {
                                                "vid": "v0d870g10004d663vs2ljht1jupa10a0",
                                                "duration": 0,
                                                "audio_url": "",
                                                "format": "mp3",
                                                "size": 168900,
                                                "encryption_key": "",
                                                "title": "",
                                                "duration_ms": 0,
                                                "url": "https://v3-artist.vlabvod.com/31f77ccd3a7921c681728ec8a78708a2/69957ada/video/tos/cn/tos-cn-v-148450/osg5OGEmgMwff0CTMQIjfBKc0BCqIgfxqwTszP/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=2\u0026cd=0%7C0%7C0%7C0\u0026br=250\u0026bt=250\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=audio_mpeg\u0026qs=3\u0026rc=aGU4OjRpODU7ZWlnNzY3aEBpMzNkeDRrb3Y2OTczNDM7M0BfNmAuMDVeXjAxMS4uMjA0YSNeLm1ncWcvczNhLS1kNGFzcw%3D%3D\u0026btag=c0000e00008000\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6"
                                            }
                                        },
                                        "mixed_video": {
                                            "video_item_id": "0",
                                            "audio_vid": "",
                                            "item_id": "7605524146285579529",
                                            "video": {
                                                "video_id": "v03870g10004d663vsvog65ja7o793og",
                                                "duration": 6,
                                                "origin_video": {
                                                    "vid": "",
                                                    "fps": 24,
                                                    "width": 960,
                                                    "height": 960,
                                                    "duration": 0,
                                                    "video_url": "https://v3-artist.vlabvod.com/06c58fb3a40c3b328357fc641c92a0ca/698d91da/video/tos/cn/tos-cn-v-148450/okQAwmScAEPAzBG8NHQIILICffGxPMANReEnfM/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=10796\u0026bt=10796\u0026cs=0\u0026ds=4\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=13\u0026rc=ajY6Om05cnY2OTczNDM7M0BpajY6Om05cnY2OTczNDM7M0BsNmxeMmRzczNhLS1kNDBzYSNsNmxeMmRzczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                    "cover_url": "",
                                                    "format": "mp4",
                                                    "definition": "1080p",
                                                    "logo_type": "",
                                                    "encryption_key": "",
                                                    "md5": "681b5fe8299b94af2b13f496d80266ce",
                                                    "size": 6967635,
                                                    "video_id": ""
                                                },
                                                "transcoded_video": {
                                                    "origin": {
                                                        "vid": "",
                                                        "fps": 24,
                                                        "width": 960,
                                                        "height": 960,
                                                        "duration": 0,
                                                        "video_url": "https://v3-artist.vlabvod.com/6d94d1b17c5cb173d79018a9dd667a13/698d91da/video/tos/cn/tos-cn-v-148450/oMgMwmSccEPRjBG8NHRI4LICffGuPMAdReEnfM/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=6990\u0026bt=6990\u0026cs=0\u0026ds=12\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=ZzU1OTU6aThpOjo8ZDVlO0BpajY6Om05cnY2OTczNDM7M0BiXmE1LV9eNS0xMzYwYzAxYSNsNmxeMmRzczNhLS1kNDBzcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026feature_id=7bed9f9dfbb915a044e5d473759ce9df\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                                        "cover_url": "",
                                                        "format": "mp4",
                                                        "definition": "origin",
                                                        "logo_type": "",
                                                        "encryption_key": "",
                                                        "md5": "ebf2694c9a896ea7b4f112253340590f",
                                                        "size": 4508902,
                                                        "video_id": ""
                                                    }
                                                },
                                                "video_size_type": 3,
                                                "cover_uri": "tos-cn-p-148450/oow8BMGDWgmJL4SfcMeEGRnFfNPSfPcHIICEzQ",
                                                "transcode_status": 1,
                                                "duration_ms": 5042,
                                                "thumb": {
                                                    "detail_infos": [
                                                        {
                                                            "frame_count": 5,
                                                            "image_width": 1280,
                                                            "image_height": 1280,
                                                            "uri": "tos-cn-p-148450/os4YlIaxwfYwdhmgofsfPBIeIJLwAEQ1feTwHh",
                                                            "url": "https://p11-sign.douyinpic.com/tos-cn-p-148450/os4YlIaxwfYwdhmgofsfPBIeIJLwAEQ1feTwHh~tplv-noop.image?dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770885594\u0026x-signature=Lw%2BlmFw3%2FeBgh0AxK1%2BAlRqMUUs%3D"
                                                        }
                                                    ],
                                                    "thumb_common_info": {
                                                        "single_frame_width": 320,
                                                        "single_frame_height": 320,
                                                        "total_set_num": 5
                                                    }
                                                },
                                                "watermark_type": 0,
                                                "cover_url": "https://p11-sign.douyinpic.com/tos-cn-p-148450/oow8BMGDWgmJL4SfcMeEGRnFfNPSfPcHIICEzQ~tplv-noop.image?dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770885594\u0026x-signature=699huZDqzd3K9NyUmcVcxa5kT5o%3D",
                                                "duration_info": "{\"play_info_duration\":5.039,\"v_duration\":5.042,\"a_duration\":5.039}",
                                                "vda_status": 10,
                                                "has_audio": false,
                                                "is_mute": false
                                            },
                                            "has_published": false,
                                            "published_item_id": "0",
                                            "status": 3,
                                            "fail_code": ""
                                        },
                                        "generate_status": 3
                                    }
                                ],
                                "default_audio": {
                                    "vid": "v0d870g10004d663vs7og65mk4o8u3fg",
                                    "origin_audio": {
                                        "vid": "v0d870g10004d663vs7og65mk4o8u3fg",
                                        "duration": 0,
                                        "audio_url": "",
                                        "format": "wav",
                                        "size": 336044,
                                        "encryption_key": "",
                                        "title": "",
                                        "duration_ms": 0,
                                        "url": "https://v3-artist.vlabvod.com/b14882aab19ca1646c81a3391274d7be/69957ada/video/tos/cn/tos-cn-v-148450/o0DMCIeG0QagG8mchfN8IMNPwEfIGIfALAAhQB/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=2\u0026cd=0%7C0%7C0%7C0\u0026br=500\u0026bt=500\u0026ds=5\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=audio_wav\u0026qs=13\u0026rc=ajY7N3A5cnY2OTczNDM7M0BpajY7N3A5cnY2OTczNDM7M0BjcmxoMmQ0czNhLS1kNGFzYSNjcmxoMmQ0czNhLS1kNGFzcw%3D%3D\u0026btag=c0000e00008000\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6"
                                    }
                                },
                                "default_audio_idx": 1
                            },
                            "metadata_param": "{\"effect_id\":\"gen_video\",\"effect_type\":\"tool\"}"
                        }
                    ],
                    "origin_item_list": [],
                    "task": {
                        "task_id": "8326192880140",
                        "submit_id": "245ba9e2-cad9-4f14-a8e4-e465061f29bf",
                        "aid": 0,
                        "status": 50,
                        "finish_time": 1770799090,
                        "history_id": "9481748596492",
                        "task_payload": null,
                        "first_frame_image": {
                            "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                            "image_url": "",
                            "width": 682,
                            "height": 708,
                            "format": "",
                            "aigc_image": {
                                "item_id": "0"
                            },
                            "smart_crop_loc": null
                        },
                        "original_input": {
                            "video_gen_inputs": [
                                {
                                    "prompt": "生成一个拜年视频",
                                    "first_frame_image": {
                                        "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                                        "image_url": "",
                                        "width": 682,
                                        "height": 708,
                                        "format": "",
                                        "aigc_image": {
                                            "item_id": "0"
                                        },
                                        "smart_crop_loc": null
                                    },
                                    "end_frame_image": {
                                        "image_uri": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                                        "image_url": "",
                                        "width": 549,
                                        "height": 613,
                                        "format": "",
                                        "aigc_image": {
                                            "item_id": "0"
                                        },
                                        "smart_crop_loc": null
                                    },
                                    "lens_motion_type": "",
                                    "motion_speed": "",
                                    "vid": "",
                                    "ending_control": "1.0",
                                    "pre_task_id": "0",
                                    "audio_vid": "",
                                    "video_mode": 2,
                                    "fps": 24,
                                    "duration_ms": 5000,
                                    "template_id": "0"
                                }
                            ],
                            "video_aspect_ratio": "1:1",
                            "seed": 3550643144,
                            "task_scene": "",
                            "priority": 0,
                            "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                            "model_config": {
                                "icon_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=SI599pl9bIx3gHysabxmD7I5KBc%3D",
                                "model_name_starling_key": "video_3",
                                "model_tip_starling_key": "new_default_model_beginner_friendly",
                                "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                "is_new_model": false,
                                "sample_steps": null,
                                "blend_enable": null,
                                "feats": [
                                    "support_first_image",
                                    "support_end_image"
                                ],
                                "model_name": "视频 3.0",
                                "model_tip": "精准响应，支持多镜头和运镜",
                                "feature_key": "",
                                "generation_category_name_starling_key": "",
                                "generation_category_name": "",
                                "duration_option": [
                                    5,
                                    10
                                ],
                                "lens_motion_type_option": null,
                                "motion_speed_option": null,
                                "camera_strength_option": null,
                                "video_aspect_ratio_option": [
                                    "21:9",
                                    "16:9",
                                    "4:3",
                                    "1:1",
                                    "3:4",
                                    "9:16"
                                ],
                                "commercial_config": {
                                    "commerce_info_map": {
                                        "basic": {
                                            "resource_sub_type": "aigc",
                                            "resource_id_type": "str",
                                            "resource_id": "generate_video",
                                            "benefit_type": "basic_video_operation_vgfm_v_three",
                                            "amount": 0
                                        },
                                        "retry": {
                                            "resource_sub_type": "aigc",
                                            "resource_id_type": "str",
                                            "resource_id": "generate_video",
                                            "benefit_type": "basic_video_operation_vgfm_v_three",
                                            "amount": 0
                                        }
                                    },
                                    "image_model_commerce_config": null
                                },
                                "fps": 24,
                                "extra": {},
                                "feats_cant_combine": null,
                                "model_bg_prompt_starling_key": ""
                            },
                            "video_model_config": {
                                "icon": {
                                    "image_uri": "tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg",
                                    "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=SI599pl9bIx3gHysabxmD7I5KBc%3D",
                                    "width": 0,
                                    "height": 0,
                                    "format": "webp",
                                    "smart_crop_loc": null
                                },
                                "model_name": "视频 3.0",
                                "model_name_starling_key": "video_3",
                                "model_tip": "精准响应，支持多镜头和运镜",
                                "model_tip_starling_key": "new_default_model_beginner_friendly",
                                "feature_key": "",
                                "icon_tag": "",
                                "options": [
                                    {
                                        "key": "multi_frames",
                                        "value_type": "multi_frames",
                                        "forbidden_display": false,
                                        "lens_motion_val": null,
                                        "multi_frames_config": {
                                            "duration_ms": {
                                                "min": 1000,
                                                "max": 6000,
                                                "step": 1000,
                                                "default": 5000
                                            },
                                            "media_config": [
                                                {
                                                    "media_type": 1,
                                                    "max_video_media_duration_ms": 0
                                                }
                                            ],
                                            "max_media_count": 10,
                                            "min_generation_duration_ms": 2000,
                                            "first_segment_generation_enabled": false,
                                            "end_segment_generation_enabled": false
                                        }
                                    },
                                    {
                                        "key": "lens_recipe",
                                        "value_type": "lens_recipe",
                                        "forbidden_display": false,
                                        "lens_motion_val": {
                                            "lens_recipe_list": [
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp",
                                                        "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=WiFLVhI5uXoeyv7mVrFtsi6z0Ao%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "hitchcock_dolly_in",
                                                    "name": "希区柯克推进",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.4,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.6,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "hitchcock_dolly_in"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp",
                                                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=ATts5wyeDTSXeEJWE5OlqQOK7Po%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "hitchcock_dolly_out",
                                                    "name": "希区柯克拉远",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.3,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.6,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "hitchcock_dolly_out"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/robo_arm_320p.webp",
                                                        "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/robo_arm_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=rLZDKlKRpQr1MXSw%2BELF%2F3biAic%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "robo_arm",
                                                    "name": "机械臂",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.3,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.6,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "robo_arm"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp",
                                                        "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=pkq75B4SpEpXQ2FRbSv857I%2FBAk%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "dynamic_orbit",
                                                    "name": "动感环绕",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.3,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.6,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "dynamic_orbit"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/central_orbit_320p.webp",
                                                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/central_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=47lDFeTSv%2BzPxPj7Qj4pxUFa2wU%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "central_orbit",
                                                    "name": "中心环绕",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.4,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.7,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "central_orbit"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/crane_push_320p.webp",
                                                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/crane_push_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=9IsQT08GCfZjdNrH3iWtDpD7ybw%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "crane_push",
                                                    "name": "起重机",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.3,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.5,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 0.8,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "crane_push"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp",
                                                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=bet7NCwefhgc1SrpQj5b%2FQ1EPdQ%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "quick_pull_back",
                                                    "name": "超级拉远",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.4,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.7,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "quick_pull_back"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp",
                                                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=g8HC1uBa8ScSxjtVl0z2aWkvLT8%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "counterclockwise_swivel",
                                                    "name": "逆时针回旋",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.3,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.6,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "counterclockwise_swivel"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp",
                                                        "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=9Fm11Gu2iag0CxXy4EduXABXTsE%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "clockwise_swivel",
                                                    "name": "顺时针回旋",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.3,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.6,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "clockwise_swivel"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/handheld_320p.webp",
                                                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/handheld_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=tSiBfAV%2FHDJ%2Fm5dh8K0Qrxo%2BYyU%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "handheld",
                                                    "name": "手持运镜",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.2,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.5,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "handheld"
                                                },
                                                {
                                                    "icon": {
                                                        "image_uri": "tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp",
                                                        "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=8j0VPs3Kvo3AFWbFZNyfmMEV4VQ%3D",
                                                        "width": 0,
                                                        "height": 0,
                                                        "format": "awebp"
                                                    },
                                                    "key": "rapid_push_pull",
                                                    "name": "快速推拉",
                                                    "strength_list": [
                                                        {
                                                            "name": "弱",
                                                            "strength": 0.3,
                                                            "strength_key": "weak",
                                                            "name_starling_key": "gentle"
                                                        },
                                                        {
                                                            "name": "中",
                                                            "strength": 0.6,
                                                            "strength_key": "medium",
                                                            "name_starling_key": "medium"
                                                        },
                                                        {
                                                            "name": "强",
                                                            "strength": 1,
                                                            "strength_key": "strong",
                                                            "name_starling_key": "strong"
                                                        }
                                                    ],
                                                    "default_strength_idx": 1,
                                                    "name_starling_key": "rapid_push_pull"
                                                }
                                            ],
                                            "default_val_idx": -1
                                        }
                                    },
                                    {
                                        "key": "resolution",
                                        "value_type": "enum",
                                        "enum_val": {
                                            "enum_type": "string",
                                            "string_value": [
                                                "720p",
                                                "1080p"
                                            ],
                                            "double_value": null,
                                            "int_value": null,
                                            "default_val_idx": 0
                                        },
                                        "forbidden_display": false,
                                        "lens_motion_val": null
                                    },
                                    {
                                        "key": "input_media_type",
                                        "value_type": "enum",
                                        "enum_val": {
                                            "enum_type": "string",
                                            "string_value": [
                                                "prompt",
                                                "first_frame",
                                                "end_frame",
                                                "multi_frame",
                                                "idip_frame"
                                            ],
                                            "double_value": null,
                                            "int_value": null,
                                            "default_val_idx": 0
                                        },
                                        "forbidden_display": false,
                                        "lens_motion_val": null
                                    },
                                    {
                                        "key": "frames",
                                        "value_type": "enum",
                                        "enum_val": {
                                            "enum_type": "int",
                                            "string_value": null,
                                            "double_value": null,
                                            "int_value": [
                                                120,
                                                240
                                            ],
                                            "default_val_idx": 0
                                        },
                                        "forbidden_display": false,
                                        "lens_motion_val": null
                                    },
                                    {
                                        "key": "fps",
                                        "value_type": "enum",
                                        "enum_val": {
                                            "enum_type": "int",
                                            "string_value": null,
                                            "double_value": null,
                                            "int_value": [
                                                24
                                            ],
                                            "default_val_idx": 0
                                        },
                                        "forbidden_display": true,
                                        "lens_motion_val": null
                                    },
                                    {
                                        "key": "video_aspect_ratio",
                                        "value_type": "enum",
                                        "enum_val": {
                                            "enum_type": "string",
                                            "string_value": [
                                                "21:9",
                                                "16:9",
                                                "4:3",
                                                "1:1",
                                                "3:4",
                                                "9:16"
                                            ],
                                            "double_value": null,
                                            "int_value": null,
                                            "default_val_idx": 1
                                        },
                                        "forbidden_display": false,
                                        "lens_motion_val": null
                                    },
                                    {
                                        "key": "multi_frame_duration",
                                        "value_type": "slide_bar",
                                        "slide_bar_val": {
                                            "min": 1,
                                            "max": 6,
                                            "step": 1,
                                            "default": 5
                                        },
                                        "forbidden_display": false,
                                        "lens_motion_val": null
                                    },
                                    {
                                        "key": "multi_frame_media_type",
                                        "value_type": "enum",
                                        "enum_val": {
                                            "enum_type": "int",
                                            "string_value": null,
                                            "double_value": null,
                                            "int_value": [
                                                1
                                            ],
                                            "default_val_idx": 0
                                        },
                                        "forbidden_display": false,
                                        "lens_motion_val": null
                                    },
                                    {
                                        "key": "multi_frame_media_count",
                                        "value_type": "slide_bar",
                                        "slide_bar_val": {
                                            "min": 2,
                                            "max": 10,
                                            "step": 1,
                                            "default": 2
                                        },
                                        "forbidden_display": false,
                                        "lens_motion_val": null
                                    },
                                    {
                                        "key": "idip_frame",
                                        "value_type": "slide_bar",
                                        "slide_bar_val": {
                                            "min": 1,
                                            "max": 4,
                                            "step": 0,
                                            "default": 0
                                        },
                                        "forbidden_display": false,
                                        "lens_motion_val": null
                                    }
                                ],
                                "commercial_config": {
                                    "default": {
                                        "resource_sub_type": "aigc",
                                        "resource_id_type": "str",
                                        "resource_id": "generate_video",
                                        "benefit_type": "basic_video_operation_vgfm_v_three",
                                        "amount": 0
                                    },
                                    "format": "{resolution}",
                                    "format_conf": {
                                        "1080p": {
                                            "resource_sub_type": "aigc",
                                            "resource_id_type": "str",
                                            "resource_id": "generate_video",
                                            "benefit_type": "basic_video_operation_vgfm_v_three_1080",
                                            "amount": 0
                                        },
                                        "720p": {
                                            "resource_sub_type": "aigc",
                                            "resource_id_type": "str",
                                            "resource_id": "generate_video",
                                            "benefit_type": "basic_video_operation_vgfm_v_three",
                                            "amount": 0
                                        }
                                    },
                                    "additional_conf": [
                                        {
                                            "option_key": "lens_recipe",
                                            "commerce_info": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three_recpie_add",
                                                "amount": 0
                                            }
                                        },
                                        {
                                            "option_key": "resolution",
                                            "condition": {
                                                "operation": "in",
                                                "value": [
                                                    "1080p"
                                                ]
                                            },
                                            "commerce_info": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three_1080_add",
                                                "amount": 0
                                            }
                                        }
                                    ]
                                },
                                "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                "extra": {
                                    "pop_icon": {
                                        "image_uri": "tos-cn-i-3jr8j4ixpe/vgfm_lite_cover",
                                        "image_url": "https://p3-heycan-hgt-sign.byteimg.com/tos-cn-i-3jr8j4ixpe/vgfm_lite_cover~tplv-3jr8j4ixpe-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=eOQBlb35MNtfhTUITjai4O8CCjc%3D",
                                        "width": 0,
                                        "height": 0,
                                        "format": "webp",
                                        "smart_crop_loc": null
                                    },
                                    "model_source": "by Seedance 1.0 mini",
                                    "raw_model_source": "",
                                    "aigc_compliance_confirmation_required": false
                                },
                                "model_status": 0,
                                "mutex_conf": {
                                    "mutex_list": [
                                        [
                                            {
                                                "option_key": "lens_recipe"
                                            },
                                            {
                                                "option_key": "input_media_type",
                                                "condition": {
                                                    "operation": "in",
                                                    "value": [
                                                        "prompt",
                                                        "end_frame",
                                                        "multi_frame",
                                                        "idip_frame"
                                                    ]
                                                }
                                            }
                                        ],
                                        [
                                            {
                                                "option_key": "lens_recipe"
                                            },
                                            {
                                                "option_key": "resolution",
                                                "condition": {
                                                    "operation": "in",
                                                    "value": [
                                                        "1080p"
                                                    ]
                                                }
                                            }
                                        ],
                                        [
                                            {
                                                "option_key": "resolution",
                                                "condition": {
                                                    "operation": "in",
                                                    "value": [
                                                        "1080p"
                                                    ]
                                                }
                                            },
                                            {
                                                "option_key": "input_media_type",
                                                "condition": {
                                                    "operation": "in",
                                                    "value": [
                                                        "multi_frame",
                                                        "idip_frame"
                                                    ]
                                                }
                                            }
                                        ],
                                        [
                                            {
                                                "option_key": "frames"
                                            },
                                            {
                                                "option_key": "input_media_type",
                                                "condition": {
                                                    "operation": "in",
                                                    "value": [
                                                        "multi_frame"
                                                    ]
                                                }
                                            }
                                        ]
                                    ]
                                },
                                "generation_category_name": "",
                                "generation_category_name_starling_key": ""
                            }
                        },
                        "req_first_frame_image": null,
                        "ai_gen_prompt": "",
                        "priority": 0,
                        "lip_sync_info": {
                            "lip_sync_extra": "",
                            "lip_sync_video_url": "",
                            "lip_sync_audio_url": "",
                            "labcv_task_id": ""
                        },
                        "end_frame_image": {
                            "image_uri": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                            "image_url": "",
                            "width": 549,
                            "height": 613,
                            "format": "",
                            "aigc_image": {
                                "item_id": "0"
                            },
                            "smart_crop_loc": null
                        },
                        "multi_size_first_frame_image": null,
                        "multi_size_end_frame_image": null,
                        "process_flows": [
                            {
                                "task_id": "8326180975116",
                                "cur_process_flows": [
                                    1
                                ],
                                "history_id": "9475035451916"
                            },
                            {
                                "task_id": "8326192880140",
                                "cur_process_flows": [
                                    12
                                ],
                                "history_id": "9481748596492"
                            }
                        ],
                        "create_time": 0,
                        "aigc_image_params": {
                            "generate_type": 32,
                            "first_generate_type": 10,
                            "text2video_params": {
                                "video_gen_inputs": [
                                    {
                                        "prompt": "生成一个拜年视频",
                                        "first_frame_image": {
                                            "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:0:0.png?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=Tw5WiWqpDU3f0kkA%2F38VFglR%2FIw%3D\u0026format=.png",
                                            "width": 682,
                                            "height": 708,
                                            "format": "png",
                                            "cover_url_map": {
                                                "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=abWET6pz3kPnr%2B7x9tQn6eWT4lo%3D",
                                                "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=5H6R1y9Hi%2FOYeKvmuMvQIMvDmVw%3D",
                                                "360": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=A8E3LVgS9ND4zWMu1cd3Nf3G50g%3D",
                                                "4096": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=Fk7JHcKCUjucxR%2B7YBXZULazZTI%3D",
                                                "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=e1Of%2BbTqUJHrZxfZPZ6s3qfdOPs%3D",
                                                "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=NGbovhdNI0rggM2q5%2FrLPHnE2ok%3D"
                                            },
                                            "smart_crop_loc": null
                                        },
                                        "end_frame_image": {
                                            "image_uri": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:0:0.png?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=0rg6i9o8vOMNHqCKaDmuwydCQy0%3D\u0026format=.png",
                                            "width": 549,
                                            "height": 613,
                                            "format": "png",
                                            "cover_url_map": {
                                                "1080": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=1upNiqiU7G5zg9LESWP0ikEYrQ0%3D",
                                                "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=ysdulWhEzXt3NuMjPiV%2BzbnJDw8%3D",
                                                "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=Y3aAiE0lvhY8LIQ6jcvSyu6dpbM%3D",
                                                "4096": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=TWjFJz6WXS03JbTIcy16QN6%2Fm7E%3D",
                                                "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=cDg4i1KI3QRarNH7EaGDJ0J9FNQ%3D",
                                                "720": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=pCdASEn1VWDv%2BvKKgi%2FxYTc1RUw%3D"
                                            },
                                            "smart_crop_loc": null
                                        },
                                        "lens_motion_type": "",
                                        "motion_speed": "",
                                        "vid": "",
                                        "ending_control": "",
                                        "pre_task_id": "0",
                                        "audio_vid": "",
                                        "video_mode": 2,
                                        "fps": 24,
                                        "duration_ms": 5000,
                                        "template_id": "0"
                                    }
                                ],
                                "video_aspect_ratio": "1:1",
                                "seed": 3550643144,
                                "task_scene": "",
                                "priority": 0,
                                "video_gen_inputs_extra": [
                                    {}
                                ],
                                "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                "model_config": {
                                    "icon_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HK%2FKnxh8rDtvWGxR9VPrvLykHHQ%3D",
                                    "model_name_starling_key": "video_3",
                                    "model_tip_starling_key": "new_default_model_beginner_friendly",
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                    "is_new_model": false,
                                    "sample_steps": null,
                                    "blend_enable": null,
                                    "feats": [
                                        "support_first_image",
                                        "support_end_image"
                                    ],
                                    "model_name": "视频 3.0",
                                    "model_tip": "精准响应，支持多镜头和运镜",
                                    "feature_key": "",
                                    "generation_category_name_starling_key": "",
                                    "generation_category_name": "",
                                    "duration_option": [
                                        5,
                                        10
                                    ],
                                    "lens_motion_type_option": null,
                                    "motion_speed_option": null,
                                    "camera_strength_option": null,
                                    "video_aspect_ratio_option": [
                                        "21:9",
                                        "16:9",
                                        "4:3",
                                        "1:1",
                                        "3:4",
                                        "9:16"
                                    ],
                                    "commercial_config": {
                                        "commerce_info_map": {
                                            "basic": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            },
                                            "retry": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            }
                                        },
                                        "image_model_commerce_config": null
                                    },
                                    "fps": 24,
                                    "extra": {},
                                    "feats_cant_combine": null,
                                    "model_bg_prompt_starling_key": ""
                                },
                                "video_model_config": {
                                    "icon": {
                                        "image_uri": "tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg",
                                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HK%2FKnxh8rDtvWGxR9VPrvLykHHQ%3D",
                                        "width": 0,
                                        "height": 0,
                                        "format": "webp",
                                        "smart_crop_loc": null
                                    },
                                    "model_name": "视频 3.0",
                                    "model_name_starling_key": "video_3",
                                    "model_tip": "精准响应，支持多镜头和运镜",
                                    "model_tip_starling_key": "new_default_model_beginner_friendly",
                                    "feature_key": "",
                                    "icon_tag": "",
                                    "options": [
                                        {
                                            "key": "multi_frames",
                                            "value_type": "multi_frames",
                                            "forbidden_display": false,
                                            "lens_motion_val": null,
                                            "multi_frames_config": {
                                                "duration_ms": {
                                                    "min": 1000,
                                                    "max": 6000,
                                                    "step": 1000,
                                                    "default": 5000
                                                },
                                                "media_config": [
                                                    {
                                                        "media_type": 1,
                                                        "max_video_media_duration_ms": 0
                                                    }
                                                ],
                                                "max_media_count": 10,
                                                "min_generation_duration_ms": 2000,
                                                "first_segment_generation_enabled": false,
                                                "end_segment_generation_enabled": false
                                            }
                                        },
                                        {
                                            "key": "lens_recipe",
                                            "value_type": "lens_recipe",
                                            "forbidden_display": false,
                                            "lens_motion_val": {
                                                "lens_recipe_list": [
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=ZVIjG%2FWmso6X2ecJiC9izgEO1Wc%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "hitchcock_dolly_in",
                                                        "name": "希区柯克推进",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.4,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "hitchcock_dolly_in"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=GUX3PcZRfNeWAVFRRXpORv%2BUwRQ%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "hitchcock_dolly_out",
                                                        "name": "希区柯克拉远",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "hitchcock_dolly_out"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/robo_arm_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/robo_arm_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=W9KX2Sf7eY2%2FOUHG7%2FCPfvubaU4%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "robo_arm",
                                                        "name": "机械臂",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "robo_arm"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=pkq75B4SpEpXQ2FRbSv857I%2FBAk%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "dynamic_orbit",
                                                        "name": "动感环绕",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "dynamic_orbit"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/central_orbit_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/central_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=47lDFeTSv%2BzPxPj7Qj4pxUFa2wU%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "central_orbit",
                                                        "name": "中心环绕",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.4,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.7,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "central_orbit"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/crane_push_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/crane_push_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=yP1%2BylhupKpFv90CgJW%2BKcvd1%2Fs%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "crane_push",
                                                        "name": "起重机",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.5,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 0.8,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "crane_push"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=u3sP%2B%2F5g9WMfnLgylG%2FTnYw9GHo%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "quick_pull_back",
                                                        "name": "超级拉远",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.4,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.7,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "quick_pull_back"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=g8HC1uBa8ScSxjtVl0z2aWkvLT8%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "counterclockwise_swivel",
                                                        "name": "逆时针回旋",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "counterclockwise_swivel"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=UM6z93eFJjX0mNSuezEM%2FsZg4%2B8%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "clockwise_swivel",
                                                        "name": "顺时针回旋",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "clockwise_swivel"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/handheld_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/handheld_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=VlW8cnakAfO5duCUhsgrL5dwu8c%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "handheld",
                                                        "name": "手持运镜",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.2,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.5,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "handheld"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=8j0VPs3Kvo3AFWbFZNyfmMEV4VQ%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "rapid_push_pull",
                                                        "name": "快速推拉",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "rapid_push_pull"
                                                    }
                                                ],
                                                "default_val_idx": -1
                                            }
                                        },
                                        {
                                            "key": "resolution",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "720p",
                                                    "1080p"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "input_media_type",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "prompt",
                                                    "first_frame",
                                                    "end_frame",
                                                    "multi_frame",
                                                    "idip_frame"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "frames",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "int",
                                                "string_value": null,
                                                "double_value": null,
                                                "int_value": [
                                                    120,
                                                    240
                                                ],
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "fps",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "int",
                                                "string_value": null,
                                                "double_value": null,
                                                "int_value": [
                                                    24
                                                ],
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": true,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "video_aspect_ratio",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "21:9",
                                                    "16:9",
                                                    "4:3",
                                                    "1:1",
                                                    "3:4",
                                                    "9:16"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 1
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "multi_frame_duration",
                                            "value_type": "slide_bar",
                                            "slide_bar_val": {
                                                "min": 1,
                                                "max": 6,
                                                "step": 1,
                                                "default": 5
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "multi_frame_media_type",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "int",
                                                "string_value": null,
                                                "double_value": null,
                                                "int_value": [
                                                    1
                                                ],
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "multi_frame_media_count",
                                            "value_type": "slide_bar",
                                            "slide_bar_val": {
                                                "min": 2,
                                                "max": 10,
                                                "step": 1,
                                                "default": 2
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "idip_frame",
                                            "value_type": "slide_bar",
                                            "slide_bar_val": {
                                                "min": 1,
                                                "max": 4,
                                                "step": 0,
                                                "default": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        }
                                    ],
                                    "commercial_config": {
                                        "default": {
                                            "resource_sub_type": "aigc",
                                            "resource_id_type": "str",
                                            "resource_id": "generate_video",
                                            "benefit_type": "basic_video_operation_vgfm_v_three",
                                            "amount": 0
                                        },
                                        "format": "{resolution}",
                                        "format_conf": {
                                            "1080p": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three_1080",
                                                "amount": 0
                                            },
                                            "720p": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            }
                                        },
                                        "additional_conf": [
                                            {
                                                "option_key": "lens_recipe",
                                                "commerce_info": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three_recpie_add",
                                                    "amount": 0
                                                }
                                            },
                                            {
                                                "option_key": "resolution",
                                                "condition": {
                                                    "operation": "in",
                                                    "value": [
                                                        "1080p"
                                                    ]
                                                },
                                                "commerce_info": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three_1080_add",
                                                    "amount": 0
                                                }
                                            }
                                        ]
                                    },
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                    "extra": {
                                        "pop_icon": {
                                            "image_uri": "tos-cn-i-3jr8j4ixpe/vgfm_lite_cover",
                                            "image_url": "https://p3-heycan-hgt-sign.byteimg.com/tos-cn-i-3jr8j4ixpe/vgfm_lite_cover~tplv-3jr8j4ixpe-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=eOQBlb35MNtfhTUITjai4O8CCjc%3D",
                                            "width": 0,
                                            "height": 0,
                                            "format": "webp",
                                            "smart_crop_loc": null
                                        },
                                        "model_source": "by Seedance 1.0 mini",
                                        "raw_model_source": "",
                                        "aigc_compliance_confirmation_required": false
                                    },
                                    "model_status": 0,
                                    "mutex_conf": {
                                        "mutex_list": [
                                            [
                                                {
                                                    "option_key": "lens_recipe"
                                                },
                                                {
                                                    "option_key": "input_media_type",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "prompt",
                                                            "end_frame",
                                                            "multi_frame",
                                                            "idip_frame"
                                                        ]
                                                    }
                                                }
                                            ],
                                            [
                                                {
                                                    "option_key": "lens_recipe"
                                                },
                                                {
                                                    "option_key": "resolution",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "1080p"
                                                        ]
                                                    }
                                                }
                                            ],
                                            [
                                                {
                                                    "option_key": "resolution",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "1080p"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "option_key": "input_media_type",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "multi_frame",
                                                            "idip_frame"
                                                        ]
                                                    }
                                                }
                                            ],
                                            [
                                                {
                                                    "option_key": "frames"
                                                },
                                                {
                                                    "option_key": "input_media_type",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "multi_frame"
                                                        ]
                                                    }
                                                }
                                            ]
                                        ]
                                    },
                                    "generation_category_name": "",
                                    "generation_category_name_starling_key": ""
                                }
                            },
                            "template_id": "0",
                            "insta_drag_params": {
                                "origin_item_id": null
                            },
                            "hide_ref_images": false,
                            "video_audio_effect_params": {
                                "origin_history_id": "9475035451916",
                                "origin_item_id": "7605520754297392435"
                            }
                        },
                        "ref_item": null,
                        "resp_ret": {
                            "ret": "0"
                        }
                    },
                    "mode": "workbench",
                    "asset_option": {
                        "has_favorited": false
                    },
                    "uid": "2856952374767401",
                    "aigc_flow": {
                        "version": "3.1.2"
                    },
                    "status": 50,
                    "history_group_key_md5": "039fa3ca768fdf1680883516a6a153f9",
                    "history_group_key": "generate_video#tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f_tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                    "draft_content": "{\"type\":\"draft\",\"id\":\"629220fb-d05f-9035-612a-e91937e307bf\",\"min_version\":\"3.1.2\",\"min_features\":[],\"is_from_tsn\":true,\"version\":\"3.1.2\",\"main_component_id\":\"4445035c-75a2-663e-ad67-d8614267d3d7\",\"component_list\":[{\"type\":\"video_base_component\",\"id\":\"cc507ad6-76cb-5f3b-817b-5e5b3dfeb59d\",\"min_version\":\"1.0.0\",\"aigc_mode\":\"workbench\",\"gen_type\":10,\"metadata\":{\"type\":\"\",\"id\":\"a36296ba-08b6-4a82-db6c-5ba396b91680\",\"created_platform\":3,\"created_platform_version\":\"\",\"created_time_in_ms\":\"1770798305664\",\"created_did\":\"\"},\"generate_type\":\"gen_video\",\"abilities\":{\"type\":\"\",\"id\":\"9fcb60b2-6d29-652f-ddaf-8cdb80e060d2\",\"gen_video\":{\"type\":\"\",\"id\":\"91df0aef-2e15-dd23-7d81-531b523f2359\",\"text_to_video_params\":{\"type\":\"\",\"id\":\"b4fa2556-eeb2-ee88-a20d-489247766025\",\"video_gen_inputs\":[{\"type\":\"\",\"id\":\"8a6c0608-e4a6-a976-cf43-2dce9375b1cd\",\"min_version\":\"3.0.5\",\"prompt\":\"生成一个拜年视频\",\"first_frame_image\":{\"type\":\"image\",\"id\":\"ada52ae6-5566-3952-00a3-a05741cb016f\",\"source_from\":\"produced\",\"platform_type\":1,\"name\":\"\",\"image_uri\":\"tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f\",\"aigc_image\":{\"type\":\"\",\"id\":\"a657f461-6dab-5aaa-842d-494316044b04\"},\"width\":682,\"height\":708,\"format\":\"\",\"uri\":\"tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f\"},\"end_frame_image\":{\"type\":\"image\",\"id\":\"e61f9401-2cb6-58de-2412-d3c9e1229d99\",\"source_from\":\"produced\",\"platform_type\":1,\"name\":\"\",\"image_uri\":\"tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009\",\"aigc_image\":{\"type\":\"\",\"id\":\"90c1f6ba-e421-27b7-bfde-f52f677c0d6d\"},\"width\":549,\"height\":613,\"format\":\"\",\"uri\":\"tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009\"},\"ending_control\":\"1.0\",\"video_mode\":2,\"fps\":24,\"duration_ms\":5000,\"resolution\":\"720p\",\"idip_meta_list\":[]}],\"video_aspect_ratio\":\"1:1\",\"seed\":3550643144,\"model_req_key\":\"dreamina_ic_generate_video_model_vgfm_3.0\",\"priority\":0},\"video_task_extra\":\"{\\\"promptSource\\\":\\\"custom\\\",\\\"isDefaultSeed\\\":1,\\\"originSubmitId\\\":\\\"f48347a1-0864-4ea4-890e-95db15821321\\\",\\\"isRegenerate\\\":false,\\\"enterFrom\\\":\\\"click\\\",\\\"position\\\":\\\"page_bottom_box\\\",\\\"functionMode\\\":\\\"first_last_frames\\\",\\\"sceneOptions\\\":\\\"[{\\\\\\\"type\\\\\\\":\\\\\\\"video\\\\\\\",\\\\\\\"scene\\\\\\\":\\\\\\\"BasicVideoGenerateButton\\\\\\\",\\\\\\\"resolution\\\\\\\":\\\\\\\"720p\\\\\\\",\\\\\\\"modelReqKey\\\\\\\":\\\\\\\"dreamina_ic_generate_video_model_vgfm_3.0\\\\\\\",\\\\\\\"videoDuration\\\\\\\":5,\\\\\\\"reportParams\\\\\\\":{\\\\\\\"enterSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"vipSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"extraVipFunctionKey\\\\\\\":\\\\\\\"dreamina_ic_generate_video_model_vgfm_3.0-720p\\\\\\\",\\\\\\\"useVipFunctionDetailsReporterHoc\\\\\\\":true},\\\\\\\"materialTypes\\\\\\\":[1,1]}]\\\"}\"}},\"process_type\":1},{\"type\":\"video_base_component\",\"id\":\"4445035c-75a2-663e-ad67-d8614267d3d7\",\"min_version\":\"1.0.0\",\"parent_id\":\"cc507ad6-76cb-5f3b-817b-5e5b3dfeb59d\",\"aigc_mode\":\"workbench\",\"gen_type\":32,\"metadata\":{\"type\":\"\",\"id\":\"a96cc06d-49f7-379b-a276-68549e2e71da\",\"created_platform\":3,\"created_platform_version\":\"\",\"created_time_in_ms\":\"1770799085591\",\"created_did\":\"\"},\"generate_type\":\"video_audio_effect\",\"abilities\":{\"type\":\"\",\"id\":\"f2eb3a27-2ee1-8124-8ece-4a47bf4db533\",\"video_audio_effect\":{\"type\":\"\",\"id\":\"5ce0f570-974a-f4f5-a0f6-13755b779818\",\"min_version\":\"3.1.2\",\"origin_history_id\":9475035451916,\"origin_item_id\":7605520754297392435,\"video_ref_params\":{\"type\":\"\",\"id\":\"12eeff9b-0028-bcef-2010-98501366e6d7\",\"generate_type\":0,\"item_id\":7605520754297392435,\"origin_history_id\":9475035451916},\"video_resource\":{\"type\":\"video\",\"id\":\"04adc090-75dc-ae4b-8ed1-ce94a6cb3101\",\"source_from\":\"upload\",\"name\":\"\",\"vid\":\"v02870g10004d663sunog65pabjdfapg\",\"fps\":0,\"width\":960,\"height\":960,\"duration\":5000,\"cover_image_url\":\"\"}}},\"process_type\":12}]}",
                    "resources": [
                        {
                            "key": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                            "type": "image",
                            "name": "",
                            "platform": 1,
                            "image_info": {
                                "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:0:0.image?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=KCdV58NYIBkDEAvCIVFH0sNhwcg%3D",
                                "width": 682,
                                "height": 708,
                                "format": "png",
                                "cover_url_map": {
                                    "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=9pwJ%2BmoivFMh12R2zb7dPY9hyVw%3D",
                                    "2400": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=bl0ZPlD7HJRLlHZZupdkm1DIjwY%3D",
                                    "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:346:360.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=yYrRjrQVnii2fmbk2KW3V6Nk2wQ%3D",
                                    "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=bl0ZPlD7HJRLlHZZupdkm1DIjwY%3D",
                                    "480": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:462:480.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=CX9SCvwxhegbED7cM1WF1qfgWFY%3D",
                                    "720": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=9pwJ%2BmoivFMh12R2zb7dPY9hyVw%3D"
                                },
                                "smart_crop_loc": null
                            }
                        },
                        {
                            "key": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                            "type": "image",
                            "name": "",
                            "platform": 1,
                            "image_info": {
                                "image_uri": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:0:0.image?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=sB0xet4hMwm245cy8OAMS%2BTn20o%3D",
                                "width": 549,
                                "height": 613,
                                "format": "png",
                                "cover_url_map": {
                                    "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:549:613.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=sZ%2BQmm9dd3hyFYlKWnc%2FdNlKt8U%3D",
                                    "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:549:613.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=sZ%2BQmm9dd3hyFYlKWnc%2FdNlKt8U%3D",
                                    "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:322:360.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=SBh7dl2AQGq%2F2tqDa6xuIFdBAQY%3D",
                                    "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:549:613.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=jMUqVkUzQk8KOsNMYzBgNsbbvig%3D",
                                    "480": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:429:480.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=SHT01D665EFvUIxC7Bj0uiglTPo%3D",
                                    "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:549:613.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=jMUqVkUzQk8KOsNMYzBgNsbbvig%3D"
                                },
                                "smart_crop_loc": null
                            }
                        },
                        {
                            "key": "v02870g10004d663sunog65pabjdfapg",
                            "type": "video",
                            "name": "",
                            "platform": 2,
                            "video_info": {
                                "video_id": "v02870g10004d663sunog65pabjdfapg",
                                "duration": 6,
                                "origin_video": {
                                    "vid": "v02870g10004d663sunog65pabjdfapg",
                                    "fps": 0,
                                    "width": 960,
                                    "height": 960,
                                    "duration": 0,
                                    "video_url": "https://v3-artist.vlabvod.com/656ac88591e9498185c82aa71e86a0f5/698c4e6a/video/tos/cn/tos-cn-v-148450/oMCA8nBriAqexPM3AgxzJAXDU5bEEhAvQ0huSi/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026lr=default\u0026cd=0%7C0%7C0%7C0\u0026br=10665\u0026bt=10665\u0026cs=0\u0026ds=4\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=13\u0026rc=amRnZXM5cng2OTczNDM7M0BpamRnZXM5cng2OTczNDM7M0BtY2deMmRrcDNhLS1kNC9zYSNtY2deMmRrcDNhLS1kNC9zcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                    "cover_url": "",
                                    "format": "",
                                    "definition": "",
                                    "logo_type": "",
                                    "encryption_key": "",
                                    "md5": "",
                                    "size": 0,
                                    "video_id": "v02870g10004d663sunog65pabjdfapg"
                                },
                                "transcoded_video": {
                                    "origin": {
                                        "vid": "6bd267d914b4486ba91080c702cdf538",
                                        "fps": 0,
                                        "width": 960,
                                        "height": 960,
                                        "duration": 0,
                                        "video_url": "https://v3-artist.vlabvod.com/2f18c4b671e7e26ae7053a7977ee5149/698c4e6a/video/tos/cn/tos-cn-v-148450/oATDXCixqIBVe5QJ8zOQvuiU0ME5gVbAhEnhPA/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026lr=default\u0026cd=0%7C0%7C0%7C0\u0026br=6889\u0026bt=6889\u0026cs=0\u0026ds=12\u0026ft=5QYTUxhhe6BMyqIbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=OzhnNTozMzxlOzc3PDo1ZUBpamRnZXM5cng2OTczNDM7M0AwY2AtYDUuXjMxXy5hM2EzYSNtY2deMmRrcDNhLS1kNC9zcw%3D%3D\u0026btag=80000e00008000\u0026dy_q=1770799189\u0026feature_id=7bed9f9dfbb915a044e5d473759ce9df\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                        "cover_url": "",
                                        "format": "",
                                        "definition": "",
                                        "logo_type": "",
                                        "encryption_key": "",
                                        "md5": "",
                                        "size": 0,
                                        "video_id": "6bd267d914b4486ba91080c702cdf538"
                                    }
                                },
                                "video_size_type": 0,
                                "cover_uri": "",
                                "transcode_status": 0,
                                "duration_ms": 5042,
                                "watermark_type": 0,
                                "cover_url": "https://p3-sign.douyinpic.com/tos-cn-p-148450/oA8U5JvuhxIAzPguDeQbEXiiwpyqV0MnBkAhAi~tplv-noop.image?dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=3wUnkYUBfII0ikTMH%2BjmqJ2HDf4%3D",
                                "duration_info": "",
                                "vda_status": 0,
                                "has_audio": false,
                                "is_mute": false
                            }
                        }
                    ],
                    "fail_code": "0",
                    "submit_id": "245ba9e2-cad9-4f14-a8e4-e465061f29bf",
                    "capflow_id": "245ba9e2-cad9-4f14-a8e4-e465061f29bf",
                    "metrics_extra": "{\"promptSource\":\"custom\",\"isDefaultSeed\":1,\"originSubmitId\":\"f48347a1-0864-4ea4-890e-95db15821321\",\"enterFrom\":\"click\",\"isRegenerate\":false,\"functionMode\":\"first_last_frames\",\"sceneOptions\":\"[{\\\"type\\\":\\\"video\\\",\\\"scene\\\":\\\"BasicVideoGenerateButton\\\",\\\"resolution\\\":\\\"720p\\\",\\\"modelReqKey\\\":\\\"dreamina_ic_generate_video_model_vgfm_3.0\\\",\\\"videoDuration\\\":5,\\\"reportParams\\\":{\\\"enterSource\\\":\\\"generate\\\",\\\"vipSource\\\":\\\"generate\\\",\\\"extraVipFunctionKey\\\":\\\"dreamina_ic_generate_video_model_vgfm_3.0-720p\\\",\\\"useVipFunctionDetailsReporterHoc\\\":true},\\\"materialTypes\\\":[1,1]}]\",\"originId\":\"7605520754297392435\",\"previewSubmitId\":\"f48347a1-0864-4ea4-890e-95db15821321\"}",
                    "fail_msg": "Success",
                    "generate_id": "20260211163805DE26384DA93147F71B14",
                    "finish_time": 1770799090,
                    "model_info": {
                        "icon_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=C3ZPBNeFOZyZsO1Yfwxq4XW6LZY%3D",
                        "model_name_starling_key": "video_3",
                        "model_tip_starling_key": "new_default_model_beginner_friendly",
                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                        "model_name": "视频 3.0",
                        "commercial_config": {
                            "commerce_info_map": {
                                "basic": {
                                    "resource_sub_type": "aigc",
                                    "resource_id_type": "str",
                                    "resource_id": "generate_video",
                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                    "amount": 0
                                },
                                "retry": {
                                    "resource_sub_type": "aigc",
                                    "resource_id_type": "str",
                                    "resource_id": "generate_video",
                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                    "amount": 0
                                }
                            },
                            "image_model_commerce_config": null
                        },
                        "video_model_options": [
                            {
                                "key": "multi_frames",
                                "value_type": "multi_frames",
                                "forbidden_display": false,
                                "lens_motion_val": null,
                                "multi_frames_config": {
                                    "duration_ms": {
                                        "min": 1000,
                                        "max": 6000,
                                        "step": 1000,
                                        "default": 5000
                                    },
                                    "media_config": [
                                        {
                                            "media_type": 1,
                                            "max_video_media_duration_ms": 0
                                        }
                                    ],
                                    "max_media_count": 10,
                                    "min_generation_duration_ms": 2000,
                                    "first_segment_generation_enabled": false,
                                    "end_segment_generation_enabled": false
                                }
                            },
                            {
                                "key": "lens_recipe",
                                "value_type": "lens_recipe",
                                "forbidden_display": false,
                                "lens_motion_val": {
                                    "lens_recipe_list": [
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=lkOI3SPxk4lZbJ57cUzMj7n8c60%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "hitchcock_dolly_in",
                                            "name": "希区柯克推进",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.4,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "hitchcock_dolly_in"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=mD5xU3mN8AfkXPizqC%2F8qxvRm0U%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "hitchcock_dolly_out",
                                            "name": "希区柯克拉远",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "hitchcock_dolly_out"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/robo_arm_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/robo_arm_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=PYclDRNR%2BnFYURzm6cTiT5UfSDk%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "robo_arm",
                                            "name": "机械臂",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "robo_arm"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=4PLJxoH9meXpit%2BgYBtHGCSwR00%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "dynamic_orbit",
                                            "name": "动感环绕",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "dynamic_orbit"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/central_orbit_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/central_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=UrsfNymWysBoUc%2BjfU5U9vmDuZE%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "central_orbit",
                                            "name": "中心环绕",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.4,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.7,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "central_orbit"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/crane_push_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/crane_push_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=zi8C1%2BEXvSBhgLGce%2F0xPRdf4Cs%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "crane_push",
                                            "name": "起重机",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.5,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 0.8,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "crane_push"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=P5TeOiWJBXW%2BKiGNxlooEjkhz4o%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "quick_pull_back",
                                            "name": "超级拉远",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.4,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.7,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "quick_pull_back"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=b1MOH6R7SzgwD43kbo6HxDkd1S4%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "counterclockwise_swivel",
                                            "name": "逆时针回旋",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "counterclockwise_swivel"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=7QfRRyV9TqRJWA%2Bsh0j1nAN12nM%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "clockwise_swivel",
                                            "name": "顺时针回旋",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "clockwise_swivel"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/handheld_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/handheld_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=17%2FbdifjjVFkYX6pn6CUf6F4lKw%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "handheld",
                                            "name": "手持运镜",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.2,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.5,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "handheld"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=jMrxI%2F%2BKCEcGNgs5Ui5Aldg0tl0%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "rapid_push_pull",
                                            "name": "快速推拉",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "rapid_push_pull"
                                        }
                                    ],
                                    "default_val_idx": -1
                                }
                            },
                            {
                                "key": "resolution",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "720p",
                                        "1080p"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "input_media_type",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "prompt",
                                        "first_frame",
                                        "end_frame",
                                        "multi_frame",
                                        "idip_frame"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "frames",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "int",
                                    "string_value": null,
                                    "double_value": null,
                                    "int_value": [
                                        120,
                                        240
                                    ],
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "fps",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "int",
                                    "string_value": null,
                                    "double_value": null,
                                    "int_value": [
                                        24
                                    ],
                                    "default_val_idx": 0
                                },
                                "forbidden_display": true,
                                "lens_motion_val": null
                            },
                            {
                                "key": "video_aspect_ratio",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "21:9",
                                        "16:9",
                                        "4:3",
                                        "1:1",
                                        "3:4",
                                        "9:16"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 1
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "multi_frame_duration",
                                "value_type": "slide_bar",
                                "slide_bar_val": {
                                    "min": 1,
                                    "max": 6,
                                    "step": 1,
                                    "default": 5
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "multi_frame_media_type",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "int",
                                    "string_value": null,
                                    "double_value": null,
                                    "int_value": [
                                        1
                                    ],
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "multi_frame_media_count",
                                "value_type": "slide_bar",
                                "slide_bar_val": {
                                    "min": 2,
                                    "max": 10,
                                    "step": 1,
                                    "default": 2
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "idip_frame",
                                "value_type": "slide_bar",
                                "slide_bar_val": {
                                    "min": 1,
                                    "max": 4,
                                    "step": 0,
                                    "default": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            }
                        ]
                    },
                    "forecast_generate_cost": 2,
                    "forecast_queue_cost": 0,
                    "fail_starling_key": "",
                    "fail_starling_message": "",
                    "min_feats": null,
                    "lip_sync_info": {
                        "lip_sync_extra": "",
                        "lip_sync_video_url": "",
                        "lip_sync_audio_url": "",
                        "labcv_task_id": ""
                    },
                    "agent_history_id": null,
                    "total_image_count": 0,
                    "finished_image_count": 0,
                    "confirm_status": 0,
                    "confirm_token": "",
                    "image_type": 0,
                    "pre_gen_item_ids": [
                        "7605524120645700874"
                    ]
                },
                "created_time": null
            },
            {
                "id": "9475035451916",
                "uid": "0",
                "type": 2,
                "video": {
                    "generate_type": 10,
                    "history_record_id": "9475035451916",
                    "origin_history_record_id": null,
                    "created_time": 1770798306.075,
                    "item_list": [
                        {
                            "common_attr": {
                                "id": "7605520754297392435",
                                "effect_id": "7605520754297392435",
                                "effect_type": 53,
                                "title": "",
                                "description": "",
                                "cover_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:200:200.png?lk3s=43402efa\u0026x-expires=1770804000\u0026x-signature=RyGN09Xx%2Bz4DMbVX2y5Ig7fnNnI%3D\u0026format=.png",
                                "item_urls": [
                                    ""
                                ],
                                "md5": "",
                                "create_time": 1770798728,
                                "status": 144,
                                "review_info": {
                                    "review_status": 1,
                                    "review_code_list": []
                                },
                                "aspect_ratio": 0.96,
                                "publish_source": "user_post_mweb_item",
                                "collection_ids": [],
                                "extra": "",
                                "has_published": false,
                                "cover_url_map": {
                                    "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=abWET6pz3kPnr%2B7x9tQn6eWT4lo%3D\u0026format=.webp",
                                    "2400": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=m8WsMO%2FRnpnz4qTx0BvJ%2BoQDH%2Fc%3D\u0026format=.webp",
                                    "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=zLI05meQ9MDbY2UQvc1LyppMTIc%3D\u0026format=.webp",
                                    "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=9FcypDGjG6aPkG15tno1aRc9cd8%3D\u0026format=.webp",
                                    "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=e1Of%2BbTqUJHrZxfZPZ6s3qfdOPs%3D\u0026format=.webp",
                                    "720": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=8e6lcr6lx3FW8pXtgntdlOyl%2FVs%3D\u0026format=.webp"
                                },
                                "local_item_id": "7605520754297392435",
                                "update_time": 0,
                                "cover_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                                "smart_crop_loc": null,
                                "cover_height": 200,
                                "cover_width": 192
                            },
                            "author": null,
                            "video": {
                                "video_id": "v02870g10004d663sunog65pabjdfapg",
                                "duration": 6,
                                "origin_video": null,
                                "transcoded_video": {
                                    "origin": {
                                        "vid": "",
                                        "fps": 24,
                                        "width": 960,
                                        "height": 960,
                                        "duration": 0,
                                        "video_url": "https://v9-artist.vlabvod.com/2959323979a47e8cad484eee2ec29cfb/69957ad9/video/tos/cn/tos-cn-v-148450/oATDXCixqIBVe5QJ8zOQvuiU0ME5gVbAhEnhPA/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=6889\u0026bt=6889\u0026cs=0\u0026ds=12\u0026ft=5QYTUxhhe6BMyqTbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=OzhnNTozMzxlOzc3PDo1ZUBpamRnZXM5cng2OTczNDM7M0AwY2AtYDUuXjMxXy5hM2EzYSNtY2deMmRrcDNhLS1kNC9zcw%3D%3D\u0026btag=c0000e00008000\u0026dy_q=1770799188\u0026feature_id=7bed9f9dfbb915a044e5d473759ce9df\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                        "cover_url": "",
                                        "format": "mp4",
                                        "definition": "origin",
                                        "logo_type": "",
                                        "encryption_key": "",
                                        "md5": "b8bb5cbee3e4fed8dc41b139cdb3102e",
                                        "size": 4424231,
                                        "video_id": ""
                                    }
                                },
                                "video_size_type": 3,
                                "cover_uri": "tos-cn-p-148450/oA8U5JvuhxIAzPguDeQbEXiiwpyqV0MnBkAhAi",
                                "transcode_status": 1,
                                "duration_ms": 5042,
                                "thumb": {
                                    "detail_infos": [
                                        {
                                            "frame_count": 5,
                                            "image_width": 1280,
                                            "image_height": 1280,
                                            "uri": "tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG",
                                            "url": "https://p26-sign.douyinpic.com/tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG~tplv-noop.image?dy_q=1770799188\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1771403993\u0026x-signature=VZ0WUoQNHaYTrsajco7GWnemzUw%3D"
                                        }
                                    ],
                                    "thumb_common_info": {
                                        "single_frame_width": 320,
                                        "single_frame_height": 320,
                                        "total_set_num": 5
                                    }
                                },
                                "watermark_type": 1,
                                "cover_url": "https://p26-sign.douyinpic.com/tos-cn-p-148450/oA8U5JvuhxIAzPguDeQbEXiiwpyqV0MnBkAhAi~tplv-noop.image?dy_q=1770799188\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1771403993\u0026x-signature=fDomzUFf5k4OdPjoI%2F%2FKnssJPDA%3D",
                                "duration_info": "{\"play_info_duration\":5.017,\"v_duration\":5.042,\"a_duration\":0}",
                                "vda_status": 10,
                                "video_model": "{\"status\":10,\"message\":\"success\",\"enable_ssl\":true,\"auto_definition\":\"360p\",\"enable_adaptive\":false,\"video_id\":\"v02870g10004d663sunog65pabjdfapg\",\"video_duration\":5.017,\"media_type\":\"video\",\"url_expire\":1770802794,\"big_thumbs\":[{\"img_num\":5,\"uri\":\"tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG\",\"img_url\":\"https://p26-sign.douyinpic.com/tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=wuuV2P%2FwUhr%2BibTEEQoagHOJUig%3D\",\"img_urls\":[\"https://p26-sign.douyinpic.com/tos-cn-p-148450/okv6PhehxAAibazICIXZ5ZJ0qU8Qn0luBDgMiG~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=wuuV2P%2FwUhr%2BibTEEQoagHOJUig%3D\"],\"img_x_size\":320,\"img_y_size\":320,\"img_x_len\":4,\"img_y_len\":4,\"duration\":5.041667,\"interval\":1,\"fext\":\"jpeg\"}],\"fallback_api\":\"https://vas-lf-x.snssdk.com/video/fplay/1/40dd4e28bed836b77fff602690913ca7/v02870g10004d663sunog65pabjdfapg?aid=0\u0026device_platform=unknown\u0026force_fids=ZjUzOA%3D%3D\u0026imp=false\u0026key_seed=ZthscnhC%2FiXloQBPlzCfTJVQSy7eyc147WIAScePg6E%3D\u0026logo_type=default\u0026multi_rate_audios=true\u0026stream_type=normal\u0026vps=6\",\"video_list\":{\"video_1\":{\"definition\":\"origin\",\"quality\":\"normal\",\"vtype\":\"mp4\",\"vwidth\":960,\"vheight\":960,\"bitrate\":7054783,\"real_bitrate\":7054783,\"fps\":24,\"codec_type\":\"h264\",\"size\":4424231,\"main_url\":\"aHR0cHM6Ly92MjYtZGVmYXVsdC4zNjV5Zy5jb20vOWIyYzRiNGM0ZTMwNzBlYjQ0NmIyOGZmODk2ZGZiNmQvNjk4YzRlNmEvdmlkZW8vdG9zL2NuL3Rvcy1jbi12LTE0ODQ1MC9vQVREWENpeHFJQlZlNVFKOHpPUXZ1aVUwTUU1Z1ZiQWhFbmhQQS8/YT0wJmNoPTAmY3I9MCZkcj0wJmVyPTAmbHI9ZGVmYXVsdCZjZD0wJTdDMCU3QzAlN0MwJmJyPTY4ODkmYnQ9Njg4OSZjcz0wJmRzPTEyJmZ0PU9pLnBpNzdKV0g2Qk0zdFJJdnIwUEQxSU4mbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPU96aG5OVG96TXp4bE96YzNQRG8xWlVCcGFtUm5aWE01Y25nMk9UY3pORE03TTBBd1kyQXRZRFV1WGpNeFh5NWhNMkV6WVNOdFkyZGVNbVJyY0ROaExTMWtOQzl6Y3clM0QlM0QmYnRhZz04MDAwMGUwMDAwODAwMCZjcXVlcnk9MTAwWCZkeV9xPTE3NzA3OTkxODkmZmVhdHVyZV9pZD03YmVkOWY5ZGZiYjkxNWEwNDRlNWQ0NzM3NTljZTlkZiZsPTIwMjYwMjExMTYzOTQ4MTVBOTJDRThDMTIxMzBENERBQzY=\",\"backup_url_1\":\"aHR0cHM6Ly92MTEtZGVmYXVsdC4zNjV5Zy5jb20vMjBlM2ZjOGJiNGM0ZDE2NTI0ZDE1ZmQ2N2NiNmExNzYvNjk4YzRlNmEvdmlkZW8vdG9zL2NuL3Rvcy1jbi12LTE0ODQ1MC9vQVREWENpeHFJQlZlNVFKOHpPUXZ1aVUwTUU1Z1ZiQWhFbmhQQS8/YT0wJmNoPTAmY3I9MCZkcj0wJmVyPTAmbHI9ZGVmYXVsdCZjZD0wJTdDMCU3QzAlN0MwJmJyPTY4ODkmYnQ9Njg4OSZjcz0wJmRzPTEyJmZ0PU9pLnBpNzdKV0g2Qk0zdFJJdnIwUEQxSU4mbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPU96aG5OVG96TXp4bE96YzNQRG8xWlVCcGFtUm5aWE01Y25nMk9UY3pORE03TTBBd1kyQXRZRFV1WGpNeFh5NWhNMkV6WVNOdFkyZGVNbVJyY0ROaExTMWtOQzl6Y3clM0QlM0QmYnRhZz04MDAwMGUwMDAwODAwMCZjcXVlcnk9MTAwWCZkeV9xPTE3NzA3OTkxODkmZmVhdHVyZV9pZD03YmVkOWY5ZGZiYjkxNWEwNDRlNWQ0NzM3NTljZTlkZiZsPTIwMjYwMjExMTYzOTQ4MTVBOTJDRThDMTIxMzBENERBQzY=\",\"file_id\":\"6bd267d914b4486ba91080c702cdf538\",\"quality_type\":0,\"encryption_method\":\"\",\"audio_channels\":\"0.0\",\"feature_id\":\"7bed9f9dfbb915a044e5d473759ce9df\",\"gear_des_key\":\"0:MP4|1:normal|2:h264|4:origin|5:normal|10000:105\",\"audio_sample_rate\":\"0\",\"audio_bitrate_target\":128,\"url_expire\":1770802794,\"preload_size\":327680,\"preload_interval\":60,\"preload_min_step\":5,\"preload_max_step\":10,\"file_hash\":\"b8bb5cbee3e4fed8dc41b139cdb3102e\"}},\"popularity_level\":0,\"has_embedded_subtitle\":false,\"poster_url\":\"https://p26-sign.douyinpic.com/tos-cn-p-148450/oA8U5JvuhxIAzPguDeQbEXiiwpyqV0MnBkAhAi~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=kborBGVf0oQdiT0Cv%2Bf1XsZB6Dk%3D\",\"key_seed\":\"ZthscnhC/iXloQBPlzCfTJVQSy7eyc147WIAScePg6E=\"}",
                                "has_audio": false,
                                "is_mute": false
                            },
                            "aigc_image_params": {
                                "generate_type": 10,
                                "text2video_params": {
                                    "video_gen_inputs": [
                                        {
                                            "prompt": "生成一个拜年视频",
                                            "first_frame_image": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:0:0.png?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=%2BuUboDGNQnx5h3HtAa4oOZD%2BRqk%3D\u0026format=.png",
                                                "width": 682,
                                                "height": 708,
                                                "format": "png",
                                                "cover_url_map": {
                                                    "1080": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=O5cHhQyD0tbmSwa9NuqEQRxdKK4%3D",
                                                    "2400": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=m8WsMO%2FRnpnz4qTx0BvJ%2BoQDH%2Fc%3D",
                                                    "360": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=A8E3LVgS9ND4zWMu1cd3Nf3G50g%3D",
                                                    "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=9FcypDGjG6aPkG15tno1aRc9cd8%3D",
                                                    "480": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=CuLskPInLq9YBQ407Jo8zMiPuHY%3D",
                                                    "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=NGbovhdNI0rggM2q5%2FrLPHnE2ok%3D"
                                                },
                                                "smart_crop_loc": null
                                            },
                                            "end_frame_image": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:0:0.png?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=0rg6i9o8vOMNHqCKaDmuwydCQy0%3D\u0026format=.png",
                                                "width": 549,
                                                "height": 613,
                                                "format": "png",
                                                "cover_url_map": {
                                                    "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=CzOx4hX8c312oXfiW5QutAkJPCc%3D",
                                                    "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=ysdulWhEzXt3NuMjPiV%2BzbnJDw8%3D",
                                                    "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=Y3aAiE0lvhY8LIQ6jcvSyu6dpbM%3D",
                                                    "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=Ui0pizEwIwLy%2BK5tjzj678kUSzs%3D",
                                                    "480": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=vine0rIGC79YF3aTW2VjFn03JvQ%3D",
                                                    "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=t6Q8RXPHw0eSmcekIVeNAlgw4lM%3D"
                                                },
                                                "smart_crop_loc": null
                                            },
                                            "lens_motion_type": "",
                                            "motion_speed": "",
                                            "vid": "",
                                            "ending_control": "",
                                            "pre_task_id": "0",
                                            "audio_vid": "",
                                            "video_mode": 2,
                                            "fps": 24,
                                            "duration_ms": 5000,
                                            "template_id": "0"
                                        }
                                    ],
                                    "video_aspect_ratio": "1:1",
                                    "seed": 3550643144,
                                    "task_scene": "",
                                    "priority": 0,
                                    "video_gen_inputs_extra": [
                                        {}
                                    ],
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                    "model_config": {
                                        "icon_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HK%2FKnxh8rDtvWGxR9VPrvLykHHQ%3D",
                                        "model_name_starling_key": "video_3",
                                        "model_tip_starling_key": "new_default_model_beginner_friendly",
                                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                        "is_new_model": false,
                                        "sample_steps": null,
                                        "blend_enable": null,
                                        "feats": [
                                            "support_first_image",
                                            "support_end_image"
                                        ],
                                        "model_name": "视频 3.0",
                                        "model_tip": "精准响应，支持多镜头和运镜",
                                        "feature_key": "",
                                        "generation_category_name_starling_key": "",
                                        "generation_category_name": "",
                                        "duration_option": [
                                            5,
                                            10
                                        ],
                                        "lens_motion_type_option": null,
                                        "motion_speed_option": null,
                                        "camera_strength_option": null,
                                        "video_aspect_ratio_option": [
                                            "21:9",
                                            "16:9",
                                            "4:3",
                                            "1:1",
                                            "3:4",
                                            "9:16"
                                        ],
                                        "commercial_config": {
                                            "commerce_info_map": {
                                                "basic": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                },
                                                "retry": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                }
                                            },
                                            "image_model_commerce_config": null
                                        },
                                        "fps": 24,
                                        "extra": {},
                                        "feats_cant_combine": null,
                                        "model_bg_prompt_starling_key": ""
                                    },
                                    "video_model_config": {
                                        "icon": {
                                            "image_uri": "tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg",
                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HK%2FKnxh8rDtvWGxR9VPrvLykHHQ%3D",
                                            "width": 0,
                                            "height": 0,
                                            "format": "webp",
                                            "smart_crop_loc": null
                                        },
                                        "model_name": "视频 3.0",
                                        "model_name_starling_key": "video_3",
                                        "model_tip": "精准响应，支持多镜头和运镜",
                                        "model_tip_starling_key": "new_default_model_beginner_friendly",
                                        "feature_key": "",
                                        "icon_tag": "",
                                        "options": [
                                            {
                                                "key": "multi_frames",
                                                "value_type": "multi_frames",
                                                "forbidden_display": false,
                                                "lens_motion_val": null,
                                                "multi_frames_config": {
                                                    "duration_ms": {
                                                        "min": 1000,
                                                        "max": 6000,
                                                        "step": 1000,
                                                        "default": 5000
                                                    },
                                                    "media_config": [
                                                        {
                                                            "media_type": 1,
                                                            "max_video_media_duration_ms": 0
                                                        }
                                                    ],
                                                    "max_media_count": 10,
                                                    "min_generation_duration_ms": 2000,
                                                    "first_segment_generation_enabled": false,
                                                    "end_segment_generation_enabled": false
                                                }
                                            },
                                            {
                                                "key": "lens_recipe",
                                                "value_type": "lens_recipe",
                                                "forbidden_display": false,
                                                "lens_motion_val": {
                                                    "lens_recipe_list": [
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=ZVIjG%2FWmso6X2ecJiC9izgEO1Wc%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "hitchcock_dolly_in",
                                                            "name": "希区柯克推进",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.4,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "hitchcock_dolly_in"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=GUX3PcZRfNeWAVFRRXpORv%2BUwRQ%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "hitchcock_dolly_out",
                                                            "name": "希区柯克拉远",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "hitchcock_dolly_out"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/robo_arm_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/robo_arm_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=W9KX2Sf7eY2%2FOUHG7%2FCPfvubaU4%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "robo_arm",
                                                            "name": "机械臂",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "robo_arm"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=pkq75B4SpEpXQ2FRbSv857I%2FBAk%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "dynamic_orbit",
                                                            "name": "动感环绕",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "dynamic_orbit"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/central_orbit_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/central_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=47lDFeTSv%2BzPxPj7Qj4pxUFa2wU%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "central_orbit",
                                                            "name": "中心环绕",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.4,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.7,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "central_orbit"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/crane_push_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/crane_push_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=yP1%2BylhupKpFv90CgJW%2BKcvd1%2Fs%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "crane_push",
                                                            "name": "起重机",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.5,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 0.8,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "crane_push"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=u3sP%2B%2F5g9WMfnLgylG%2FTnYw9GHo%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "quick_pull_back",
                                                            "name": "超级拉远",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.4,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.7,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "quick_pull_back"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=g8HC1uBa8ScSxjtVl0z2aWkvLT8%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "counterclockwise_swivel",
                                                            "name": "逆时针回旋",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "counterclockwise_swivel"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp",
                                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=UM6z93eFJjX0mNSuezEM%2FsZg4%2B8%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "clockwise_swivel",
                                                            "name": "顺时针回旋",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "clockwise_swivel"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/handheld_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/handheld_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=VlW8cnakAfO5duCUhsgrL5dwu8c%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "handheld",
                                                            "name": "手持运镜",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.2,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.5,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "handheld"
                                                        },
                                                        {
                                                            "icon": {
                                                                "image_uri": "tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp",
                                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=8j0VPs3Kvo3AFWbFZNyfmMEV4VQ%3D",
                                                                "width": 0,
                                                                "height": 0,
                                                                "format": "awebp"
                                                            },
                                                            "key": "rapid_push_pull",
                                                            "name": "快速推拉",
                                                            "strength_list": [
                                                                {
                                                                    "name": "弱",
                                                                    "strength": 0.3,
                                                                    "strength_key": "weak",
                                                                    "name_starling_key": "gentle"
                                                                },
                                                                {
                                                                    "name": "中",
                                                                    "strength": 0.6,
                                                                    "strength_key": "medium",
                                                                    "name_starling_key": "medium"
                                                                },
                                                                {
                                                                    "name": "强",
                                                                    "strength": 1,
                                                                    "strength_key": "strong",
                                                                    "name_starling_key": "strong"
                                                                }
                                                            ],
                                                            "default_strength_idx": 1,
                                                            "name_starling_key": "rapid_push_pull"
                                                        }
                                                    ],
                                                    "default_val_idx": -1
                                                }
                                            },
                                            {
                                                "key": "resolution",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "720p",
                                                        "1080p"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "input_media_type",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "prompt",
                                                        "first_frame",
                                                        "end_frame",
                                                        "multi_frame",
                                                        "idip_frame"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "frames",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "int",
                                                    "string_value": null,
                                                    "double_value": null,
                                                    "int_value": [
                                                        120,
                                                        240
                                                    ],
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "fps",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "int",
                                                    "string_value": null,
                                                    "double_value": null,
                                                    "int_value": [
                                                        24
                                                    ],
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": true,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "video_aspect_ratio",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "21:9",
                                                        "16:9",
                                                        "4:3",
                                                        "1:1",
                                                        "3:4",
                                                        "9:16"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 1
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "multi_frame_duration",
                                                "value_type": "slide_bar",
                                                "slide_bar_val": {
                                                    "min": 1,
                                                    "max": 6,
                                                    "step": 1,
                                                    "default": 5
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "multi_frame_media_type",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "int",
                                                    "string_value": null,
                                                    "double_value": null,
                                                    "int_value": [
                                                        1
                                                    ],
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "multi_frame_media_count",
                                                "value_type": "slide_bar",
                                                "slide_bar_val": {
                                                    "min": 2,
                                                    "max": 10,
                                                    "step": 1,
                                                    "default": 2
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "idip_frame",
                                                "value_type": "slide_bar",
                                                "slide_bar_val": {
                                                    "min": 1,
                                                    "max": 4,
                                                    "step": 0,
                                                    "default": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            }
                                        ],
                                        "commercial_config": {
                                            "default": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            },
                                            "format": "{resolution}",
                                            "format_conf": {
                                                "1080p": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three_1080",
                                                    "amount": 0
                                                },
                                                "720p": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                }
                                            },
                                            "additional_conf": [
                                                {
                                                    "option_key": "lens_recipe",
                                                    "commerce_info": {
                                                        "resource_sub_type": "aigc",
                                                        "resource_id_type": "str",
                                                        "resource_id": "generate_video",
                                                        "benefit_type": "basic_video_operation_vgfm_v_three_recpie_add",
                                                        "amount": 0
                                                    }
                                                },
                                                {
                                                    "option_key": "resolution",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "1080p"
                                                        ]
                                                    },
                                                    "commerce_info": {
                                                        "resource_sub_type": "aigc",
                                                        "resource_id_type": "str",
                                                        "resource_id": "generate_video",
                                                        "benefit_type": "basic_video_operation_vgfm_v_three_1080_add",
                                                        "amount": 0
                                                    }
                                                }
                                            ]
                                        },
                                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                        "extra": {
                                            "pop_icon": {
                                                "image_uri": "tos-cn-i-3jr8j4ixpe/vgfm_lite_cover",
                                                "image_url": "https://p3-heycan-hgt-sign.byteimg.com/tos-cn-i-3jr8j4ixpe/vgfm_lite_cover~tplv-3jr8j4ixpe-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=eOQBlb35MNtfhTUITjai4O8CCjc%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "webp",
                                                "smart_crop_loc": null
                                            },
                                            "model_source": "by Seedance 1.0 mini",
                                            "raw_model_source": "",
                                            "aigc_compliance_confirmation_required": false
                                        },
                                        "model_status": 0,
                                        "mutex_conf": {
                                            "mutex_list": [
                                                [
                                                    {
                                                        "option_key": "lens_recipe"
                                                    },
                                                    {
                                                        "option_key": "input_media_type",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "prompt",
                                                                "end_frame",
                                                                "multi_frame",
                                                                "idip_frame"
                                                            ]
                                                        }
                                                    }
                                                ],
                                                [
                                                    {
                                                        "option_key": "lens_recipe"
                                                    },
                                                    {
                                                        "option_key": "resolution",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "1080p"
                                                            ]
                                                        }
                                                    }
                                                ],
                                                [
                                                    {
                                                        "option_key": "resolution",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "1080p"
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "option_key": "input_media_type",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "multi_frame",
                                                                "idip_frame"
                                                            ]
                                                        }
                                                    }
                                                ],
                                                [
                                                    {
                                                        "option_key": "frames"
                                                    },
                                                    {
                                                        "option_key": "input_media_type",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "multi_frame"
                                                            ]
                                                        }
                                                    }
                                                ]
                                            ]
                                        },
                                        "generation_category_name": "",
                                        "generation_category_name_starling_key": ""
                                    }
                                },
                                "template_id": "0",
                                "aigc_mode": "workbench",
                                "insta_drag_params": {
                                    "origin_item_id": null
                                },
                                "hide_ref_images": false
                            },
                            "statistic": {
                                "feedback_status": 0
                            },
                            "category_id_list": [],
                            "aigc_flow": {
                                "version": "0.1.2"
                            },
                            "aigc_draft": {
                                "version": "3.0.5",
                                "uri": "aigc-draft/8325262255116",
                                "content": "",
                                "update_time": 0,
                                "last_preview_time": 0,
                                "resource_type": "",
                                "public_uri": "",
                                "variables": null,
                                "resource_width": 0,
                                "resource_height": 0,
                                "node_keys": null,
                                "cost": 0
                            },
                            "gen_result_data": {
                                "result_code": 0,
                                "result_msg": "Success"
                            },
                            "extra": {
                                "template_type": "video",
                                "ai_feature": "first_end_image_generate_video"
                            },
                            "ai_feature": {
                                "features": [
                                    {
                                        "type": "first_end_image_generate_video"
                                    }
                                ],
                                "is_merged": true
                            },
                            "sharing_info": {
                                "share_status": 2
                            },
                            "metadata_param": "{\"effect_id\":\"gen_video\",\"effect_type\":\"tool\"}"
                        }
                    ],
                    "origin_item_list": [],
                    "task": {
                        "task_id": "9475035451916",
                        "submit_id": "f48347a1-0864-4ea4-890e-95db15821321",
                        "aid": 0,
                        "status": 50,
                        "finish_time": 1770798728,
                        "history_id": "9475035451916",
                        "task_payload": null,
                        "original_input": null,
                        "req_first_frame_image": null,
                        "ai_gen_prompt": "",
                        "priority": 0,
                        "lip_sync_info": null,
                        "multi_size_first_frame_image": null,
                        "multi_size_end_frame_image": null,
                        "process_flows": null,
                        "create_time": 0,
                        "aigc_image_params": {
                            "generate_type": 10,
                            "text2video_params": {
                                "video_gen_inputs": [
                                    {
                                        "prompt": "生成一个拜年视频",
                                        "first_frame_image": {
                                            "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:0:0.png?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=%2BuUboDGNQnx5h3HtAa4oOZD%2BRqk%3D\u0026format=.png",
                                            "width": 682,
                                            "height": 708,
                                            "format": "png",
                                            "cover_url_map": {
                                                "1080": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=O5cHhQyD0tbmSwa9NuqEQRxdKK4%3D",
                                                "2400": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=m8WsMO%2FRnpnz4qTx0BvJ%2BoQDH%2Fc%3D",
                                                "360": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=A8E3LVgS9ND4zWMu1cd3Nf3G50g%3D",
                                                "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=9FcypDGjG6aPkG15tno1aRc9cd8%3D",
                                                "480": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=CuLskPInLq9YBQ407Jo8zMiPuHY%3D",
                                                "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=NGbovhdNI0rggM2q5%2FrLPHnE2ok%3D"
                                            },
                                            "smart_crop_loc": null
                                        },
                                        "end_frame_image": {
                                            "image_uri": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:0:0.png?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=0rg6i9o8vOMNHqCKaDmuwydCQy0%3D\u0026format=.png",
                                            "width": 549,
                                            "height": 613,
                                            "format": "png",
                                            "cover_url_map": {
                                                "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=CzOx4hX8c312oXfiW5QutAkJPCc%3D",
                                                "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=ysdulWhEzXt3NuMjPiV%2BzbnJDw8%3D",
                                                "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=Y3aAiE0lvhY8LIQ6jcvSyu6dpbM%3D",
                                                "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=Ui0pizEwIwLy%2BK5tjzj678kUSzs%3D",
                                                "480": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=vine0rIGC79YF3aTW2VjFn03JvQ%3D",
                                                "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=8e790bc3\u0026x-expires=1772928000\u0026x-signature=t6Q8RXPHw0eSmcekIVeNAlgw4lM%3D"
                                            },
                                            "smart_crop_loc": null
                                        },
                                        "lens_motion_type": "",
                                        "motion_speed": "",
                                        "vid": "",
                                        "ending_control": "",
                                        "pre_task_id": "0",
                                        "audio_vid": "",
                                        "video_mode": 2,
                                        "fps": 24,
                                        "duration_ms": 5000,
                                        "template_id": "0"
                                    }
                                ],
                                "video_aspect_ratio": "1:1",
                                "seed": 3550643144,
                                "task_scene": "",
                                "priority": 0,
                                "video_gen_inputs_extra": [
                                    {}
                                ],
                                "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                "model_config": {
                                    "icon_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HK%2FKnxh8rDtvWGxR9VPrvLykHHQ%3D",
                                    "model_name_starling_key": "video_3",
                                    "model_tip_starling_key": "new_default_model_beginner_friendly",
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                    "is_new_model": false,
                                    "sample_steps": null,
                                    "blend_enable": null,
                                    "feats": [
                                        "support_first_image",
                                        "support_end_image"
                                    ],
                                    "model_name": "视频 3.0",
                                    "model_tip": "精准响应，支持多镜头和运镜",
                                    "feature_key": "",
                                    "generation_category_name_starling_key": "",
                                    "generation_category_name": "",
                                    "duration_option": [
                                        5,
                                        10
                                    ],
                                    "lens_motion_type_option": null,
                                    "motion_speed_option": null,
                                    "camera_strength_option": null,
                                    "video_aspect_ratio_option": [
                                        "21:9",
                                        "16:9",
                                        "4:3",
                                        "1:1",
                                        "3:4",
                                        "9:16"
                                    ],
                                    "commercial_config": {
                                        "commerce_info_map": {
                                            "basic": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            },
                                            "retry": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            }
                                        },
                                        "image_model_commerce_config": null
                                    },
                                    "fps": 24,
                                    "extra": {},
                                    "feats_cant_combine": null,
                                    "model_bg_prompt_starling_key": ""
                                },
                                "video_model_config": {
                                    "icon": {
                                        "image_uri": "tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg",
                                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HK%2FKnxh8rDtvWGxR9VPrvLykHHQ%3D",
                                        "width": 0,
                                        "height": 0,
                                        "format": "webp",
                                        "smart_crop_loc": null
                                    },
                                    "model_name": "视频 3.0",
                                    "model_name_starling_key": "video_3",
                                    "model_tip": "精准响应，支持多镜头和运镜",
                                    "model_tip_starling_key": "new_default_model_beginner_friendly",
                                    "feature_key": "",
                                    "icon_tag": "",
                                    "options": [
                                        {
                                            "key": "multi_frames",
                                            "value_type": "multi_frames",
                                            "forbidden_display": false,
                                            "lens_motion_val": null,
                                            "multi_frames_config": {
                                                "duration_ms": {
                                                    "min": 1000,
                                                    "max": 6000,
                                                    "step": 1000,
                                                    "default": 5000
                                                },
                                                "media_config": [
                                                    {
                                                        "media_type": 1,
                                                        "max_video_media_duration_ms": 0
                                                    }
                                                ],
                                                "max_media_count": 10,
                                                "min_generation_duration_ms": 2000,
                                                "first_segment_generation_enabled": false,
                                                "end_segment_generation_enabled": false
                                            }
                                        },
                                        {
                                            "key": "lens_recipe",
                                            "value_type": "lens_recipe",
                                            "forbidden_display": false,
                                            "lens_motion_val": {
                                                "lens_recipe_list": [
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=ZVIjG%2FWmso6X2ecJiC9izgEO1Wc%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "hitchcock_dolly_in",
                                                        "name": "希区柯克推进",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.4,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "hitchcock_dolly_in"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=GUX3PcZRfNeWAVFRRXpORv%2BUwRQ%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "hitchcock_dolly_out",
                                                        "name": "希区柯克拉远",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "hitchcock_dolly_out"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/robo_arm_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/robo_arm_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=W9KX2Sf7eY2%2FOUHG7%2FCPfvubaU4%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "robo_arm",
                                                        "name": "机械臂",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "robo_arm"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=pkq75B4SpEpXQ2FRbSv857I%2FBAk%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "dynamic_orbit",
                                                        "name": "动感环绕",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "dynamic_orbit"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/central_orbit_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/central_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=47lDFeTSv%2BzPxPj7Qj4pxUFa2wU%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "central_orbit",
                                                        "name": "中心环绕",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.4,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.7,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "central_orbit"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/crane_push_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/crane_push_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=yP1%2BylhupKpFv90CgJW%2BKcvd1%2Fs%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "crane_push",
                                                        "name": "起重机",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.5,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 0.8,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "crane_push"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=u3sP%2B%2F5g9WMfnLgylG%2FTnYw9GHo%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "quick_pull_back",
                                                        "name": "超级拉远",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.4,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.7,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "quick_pull_back"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=g8HC1uBa8ScSxjtVl0z2aWkvLT8%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "counterclockwise_swivel",
                                                        "name": "逆时针回旋",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "counterclockwise_swivel"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp",
                                                            "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=UM6z93eFJjX0mNSuezEM%2FsZg4%2B8%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "clockwise_swivel",
                                                        "name": "顺时针回旋",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "clockwise_swivel"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/handheld_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/handheld_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=VlW8cnakAfO5duCUhsgrL5dwu8c%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "handheld",
                                                        "name": "手持运镜",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.2,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.5,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "handheld"
                                                    },
                                                    {
                                                        "icon": {
                                                            "image_uri": "tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp",
                                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=8j0VPs3Kvo3AFWbFZNyfmMEV4VQ%3D",
                                                            "width": 0,
                                                            "height": 0,
                                                            "format": "awebp"
                                                        },
                                                        "key": "rapid_push_pull",
                                                        "name": "快速推拉",
                                                        "strength_list": [
                                                            {
                                                                "name": "弱",
                                                                "strength": 0.3,
                                                                "strength_key": "weak",
                                                                "name_starling_key": "gentle"
                                                            },
                                                            {
                                                                "name": "中",
                                                                "strength": 0.6,
                                                                "strength_key": "medium",
                                                                "name_starling_key": "medium"
                                                            },
                                                            {
                                                                "name": "强",
                                                                "strength": 1,
                                                                "strength_key": "strong",
                                                                "name_starling_key": "strong"
                                                            }
                                                        ],
                                                        "default_strength_idx": 1,
                                                        "name_starling_key": "rapid_push_pull"
                                                    }
                                                ],
                                                "default_val_idx": -1
                                            }
                                        },
                                        {
                                            "key": "resolution",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "720p",
                                                    "1080p"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "input_media_type",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "prompt",
                                                    "first_frame",
                                                    "end_frame",
                                                    "multi_frame",
                                                    "idip_frame"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "frames",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "int",
                                                "string_value": null,
                                                "double_value": null,
                                                "int_value": [
                                                    120,
                                                    240
                                                ],
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "fps",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "int",
                                                "string_value": null,
                                                "double_value": null,
                                                "int_value": [
                                                    24
                                                ],
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": true,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "video_aspect_ratio",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "21:9",
                                                    "16:9",
                                                    "4:3",
                                                    "1:1",
                                                    "3:4",
                                                    "9:16"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 1
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "multi_frame_duration",
                                            "value_type": "slide_bar",
                                            "slide_bar_val": {
                                                "min": 1,
                                                "max": 6,
                                                "step": 1,
                                                "default": 5
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "multi_frame_media_type",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "int",
                                                "string_value": null,
                                                "double_value": null,
                                                "int_value": [
                                                    1
                                                ],
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "multi_frame_media_count",
                                            "value_type": "slide_bar",
                                            "slide_bar_val": {
                                                "min": 2,
                                                "max": 10,
                                                "step": 1,
                                                "default": 2
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "idip_frame",
                                            "value_type": "slide_bar",
                                            "slide_bar_val": {
                                                "min": 1,
                                                "max": 4,
                                                "step": 0,
                                                "default": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        }
                                    ],
                                    "commercial_config": {
                                        "default": {
                                            "resource_sub_type": "aigc",
                                            "resource_id_type": "str",
                                            "resource_id": "generate_video",
                                            "benefit_type": "basic_video_operation_vgfm_v_three",
                                            "amount": 0
                                        },
                                        "format": "{resolution}",
                                        "format_conf": {
                                            "1080p": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three_1080",
                                                "amount": 0
                                            },
                                            "720p": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            }
                                        },
                                        "additional_conf": [
                                            {
                                                "option_key": "lens_recipe",
                                                "commerce_info": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three_recpie_add",
                                                    "amount": 0
                                                }
                                            },
                                            {
                                                "option_key": "resolution",
                                                "condition": {
                                                    "operation": "in",
                                                    "value": [
                                                        "1080p"
                                                    ]
                                                },
                                                "commerce_info": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three_1080_add",
                                                    "amount": 0
                                                }
                                            }
                                        ]
                                    },
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                                    "extra": {
                                        "pop_icon": {
                                            "image_uri": "tos-cn-i-3jr8j4ixpe/vgfm_lite_cover",
                                            "image_url": "https://p3-heycan-hgt-sign.byteimg.com/tos-cn-i-3jr8j4ixpe/vgfm_lite_cover~tplv-3jr8j4ixpe-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=eOQBlb35MNtfhTUITjai4O8CCjc%3D",
                                            "width": 0,
                                            "height": 0,
                                            "format": "webp",
                                            "smart_crop_loc": null
                                        },
                                        "model_source": "by Seedance 1.0 mini",
                                        "raw_model_source": "",
                                        "aigc_compliance_confirmation_required": false
                                    },
                                    "model_status": 0,
                                    "mutex_conf": {
                                        "mutex_list": [
                                            [
                                                {
                                                    "option_key": "lens_recipe"
                                                },
                                                {
                                                    "option_key": "input_media_type",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "prompt",
                                                            "end_frame",
                                                            "multi_frame",
                                                            "idip_frame"
                                                        ]
                                                    }
                                                }
                                            ],
                                            [
                                                {
                                                    "option_key": "lens_recipe"
                                                },
                                                {
                                                    "option_key": "resolution",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "1080p"
                                                        ]
                                                    }
                                                }
                                            ],
                                            [
                                                {
                                                    "option_key": "resolution",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "1080p"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "option_key": "input_media_type",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "multi_frame",
                                                            "idip_frame"
                                                        ]
                                                    }
                                                }
                                            ],
                                            [
                                                {
                                                    "option_key": "frames"
                                                },
                                                {
                                                    "option_key": "input_media_type",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "multi_frame"
                                                        ]
                                                    }
                                                }
                                            ]
                                        ]
                                    },
                                    "generation_category_name": "",
                                    "generation_category_name_starling_key": ""
                                }
                            },
                            "template_id": "0",
                            "aigc_mode": "workbench",
                            "insta_drag_params": {
                                "origin_item_id": null
                            },
                            "hide_ref_images": false
                        },
                        "ref_item": null,
                        "resp_ret": {
                            "ret": "0"
                        }
                    },
                    "mode": "workbench",
                    "asset_option": {
                        "has_favorited": false
                    },
                    "uid": "2856952374767401",
                    "aigc_flow": {
                        "version": "3.0.5"
                    },
                    "status": 50,
                    "history_group_key_md5": "039fa3ca768fdf1680883516a6a153f9",
                    "history_group_key": "generate_video#tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f_tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                    "draft_content": "{\"type\":\"draft\",\"id\":\"9cdc2d94-ba8c-7c69-e857-cd4f814b483a\",\"min_version\":\"3.0.5\",\"min_features\":[],\"is_from_tsn\":true,\"version\":\"3.0.5\",\"main_component_id\":\"cc507ad6-76cb-5f3b-817b-5e5b3dfeb59d\",\"component_list\":[{\"type\":\"video_base_component\",\"id\":\"cc507ad6-76cb-5f3b-817b-5e5b3dfeb59d\",\"min_version\":\"1.0.0\",\"aigc_mode\":\"workbench\",\"gen_type\":10,\"metadata\":{\"type\":\"\",\"id\":\"a36296ba-08b6-4a82-db6c-5ba396b91680\",\"created_platform\":3,\"created_platform_version\":\"\",\"created_time_in_ms\":\"1770798305664\",\"created_did\":\"\"},\"generate_type\":\"gen_video\",\"abilities\":{\"type\":\"\",\"id\":\"9fcb60b2-6d29-652f-ddaf-8cdb80e060d2\",\"gen_video\":{\"type\":\"\",\"id\":\"91df0aef-2e15-dd23-7d81-531b523f2359\",\"text_to_video_params\":{\"type\":\"\",\"id\":\"b4fa2556-eeb2-ee88-a20d-489247766025\",\"video_gen_inputs\":[{\"type\":\"\",\"id\":\"8a6c0608-e4a6-a976-cf43-2dce9375b1cd\",\"min_version\":\"3.0.5\",\"prompt\":\"生成一个拜年视频\",\"first_frame_image\":{\"type\":\"image\",\"id\":\"ada52ae6-5566-3952-00a3-a05741cb016f\",\"source_from\":\"produced\",\"platform_type\":1,\"name\":\"\",\"image_uri\":\"tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f\",\"aigc_image\":{\"type\":\"\",\"id\":\"a657f461-6dab-5aaa-842d-494316044b04\"},\"width\":682,\"height\":708,\"format\":\"\",\"uri\":\"tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f\"},\"end_frame_image\":{\"type\":\"image\",\"id\":\"e61f9401-2cb6-58de-2412-d3c9e1229d99\",\"source_from\":\"produced\",\"platform_type\":1,\"name\":\"\",\"image_uri\":\"tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009\",\"aigc_image\":{\"type\":\"\",\"id\":\"90c1f6ba-e421-27b7-bfde-f52f677c0d6d\"},\"width\":549,\"height\":613,\"format\":\"\",\"uri\":\"tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009\"},\"ending_control\":\"1.0\",\"video_mode\":2,\"fps\":24,\"duration_ms\":5000,\"resolution\":\"720p\",\"idip_meta_list\":[]}],\"video_aspect_ratio\":\"1:1\",\"seed\":3550643144,\"model_req_key\":\"dreamina_ic_generate_video_model_vgfm_3.0\",\"priority\":0},\"video_task_extra\":\"{\\\"promptSource\\\":\\\"custom\\\",\\\"isDefaultSeed\\\":1,\\\"originSubmitId\\\":\\\"f48347a1-0864-4ea4-890e-95db15821321\\\",\\\"isRegenerate\\\":false,\\\"enterFrom\\\":\\\"click\\\",\\\"position\\\":\\\"page_bottom_box\\\",\\\"functionMode\\\":\\\"first_last_frames\\\",\\\"sceneOptions\\\":\\\"[{\\\\\\\"type\\\\\\\":\\\\\\\"video\\\\\\\",\\\\\\\"scene\\\\\\\":\\\\\\\"BasicVideoGenerateButton\\\\\\\",\\\\\\\"resolution\\\\\\\":\\\\\\\"720p\\\\\\\",\\\\\\\"modelReqKey\\\\\\\":\\\\\\\"dreamina_ic_generate_video_model_vgfm_3.0\\\\\\\",\\\\\\\"videoDuration\\\\\\\":5,\\\\\\\"reportParams\\\\\\\":{\\\\\\\"enterSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"vipSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"extraVipFunctionKey\\\\\\\":\\\\\\\"dreamina_ic_generate_video_model_vgfm_3.0-720p\\\\\\\",\\\\\\\"useVipFunctionDetailsReporterHoc\\\\\\\":true},\\\\\\\"materialTypes\\\\\\\":[1,1]}]\\\"}\"}},\"process_type\":1}]}",
                    "resources": [
                        {
                            "key": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                            "type": "image",
                            "name": "",
                            "platform": 1,
                            "image_info": {
                                "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:0:0.image?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=KCdV58NYIBkDEAvCIVFH0sNhwcg%3D",
                                "width": 682,
                                "height": 708,
                                "format": "png",
                                "cover_url_map": {
                                    "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=3vrfGawUfM7hTampcCbkhHSLcTM%3D",
                                    "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=3vrfGawUfM7hTampcCbkhHSLcTM%3D",
                                    "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:346:360.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=HYye6S5K6SohZVREwydplqaFs3g%3D",
                                    "4096": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=3vrfGawUfM7hTampcCbkhHSLcTM%3D",
                                    "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:462:480.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=jHqL2tSGiHp3rlmkyLUnC2hllyM%3D",
                                    "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=bRgbHvQL3OaRIqKxgVM7Ota56TM%3D"
                                },
                                "smart_crop_loc": null
                            }
                        },
                        {
                            "key": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                            "type": "image",
                            "name": "",
                            "platform": 1,
                            "image_info": {
                                "image_uri": "tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009",
                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:0:0.image?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=sB0xet4hMwm245cy8OAMS%2BTn20o%3D",
                                "width": 549,
                                "height": 613,
                                "format": "png",
                                "cover_url_map": {
                                    "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:549:613.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=sZ%2BQmm9dd3hyFYlKWnc%2FdNlKt8U%3D",
                                    "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:549:613.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=sZ%2BQmm9dd3hyFYlKWnc%2FdNlKt8U%3D",
                                    "360": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:322:360.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=I17glaaVVgc34OJN6%2FW%2FC0WBybA%3D",
                                    "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:549:613.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=jMUqVkUzQk8KOsNMYzBgNsbbvig%3D",
                                    "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:429:480.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=AL1cFtE3CKdA8kppxRT%2FpyqpGjM%3D",
                                    "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/cd76d56859594ca7b8b456491a0a6009~tplv-tb4s082cfz-resize:549:613.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=jMUqVkUzQk8KOsNMYzBgNsbbvig%3D"
                                },
                                "smart_crop_loc": null
                            }
                        }
                    ],
                    "first_generate_type": 10,
                    "task_rets": [
                        {}
                    ],
                    "submit_id": "f48347a1-0864-4ea4-890e-95db15821321",
                    "capflow_id": "f48347a1-0864-4ea4-890e-95db15821321",
                    "metrics_extra": "{\"promptSource\":\"custom\",\"isDefaultSeed\":1,\"originSubmitId\":\"f48347a1-0864-4ea4-890e-95db15821321\",\"isRegenerate\":false,\"enterFrom\":\"click\",\"position\":\"page_bottom_box\",\"functionMode\":\"first_last_frames\",\"sceneOptions\":\"[{\\\"type\\\":\\\"video\\\",\\\"scene\\\":\\\"BasicVideoGenerateButton\\\",\\\"resolution\\\":\\\"720p\\\",\\\"modelReqKey\\\":\\\"dreamina_ic_generate_video_model_vgfm_3.0\\\",\\\"videoDuration\\\":5,\\\"reportParams\\\":{\\\"enterSource\\\":\\\"generate\\\",\\\"vipSource\\\":\\\"generate\\\",\\\"extraVipFunctionKey\\\":\\\"dreamina_ic_generate_video_model_vgfm_3.0-720p\\\",\\\"useVipFunctionDetailsReporterHoc\\\":true},\\\"materialTypes\\\":[1,1]}]\"}",
                    "generate_id": "202602111625056F508830F94C01B60BC3",
                    "finish_time": 1770798728,
                    "model_info": {
                        "icon_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/model_video_v8_3_0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=C3ZPBNeFOZyZsO1Yfwxq4XW6LZY%3D",
                        "model_name_starling_key": "video_3",
                        "model_tip_starling_key": "new_default_model_beginner_friendly",
                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0",
                        "model_name": "视频 3.0",
                        "commercial_config": {
                            "commerce_info_map": {
                                "basic": {
                                    "resource_sub_type": "aigc",
                                    "resource_id_type": "str",
                                    "resource_id": "generate_video",
                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                    "amount": 0
                                },
                                "retry": {
                                    "resource_sub_type": "aigc",
                                    "resource_id_type": "str",
                                    "resource_id": "generate_video",
                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                    "amount": 0
                                }
                            },
                            "image_model_commerce_config": null
                        },
                        "video_model_options": [
                            {
                                "key": "multi_frames",
                                "value_type": "multi_frames",
                                "forbidden_display": false,
                                "lens_motion_val": null,
                                "multi_frames_config": {
                                    "duration_ms": {
                                        "min": 1000,
                                        "max": 6000,
                                        "step": 1000,
                                        "default": 5000
                                    },
                                    "media_config": [
                                        {
                                            "media_type": 1,
                                            "max_video_media_duration_ms": 0
                                        }
                                    ],
                                    "max_media_count": 10,
                                    "min_generation_duration_ms": 2000,
                                    "first_segment_generation_enabled": false,
                                    "end_segment_generation_enabled": false
                                }
                            },
                            {
                                "key": "lens_recipe",
                                "value_type": "lens_recipe",
                                "forbidden_display": false,
                                "lens_motion_val": {
                                    "lens_recipe_list": [
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_in_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=lkOI3SPxk4lZbJ57cUzMj7n8c60%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "hitchcock_dolly_in",
                                            "name": "希区柯克推进",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.4,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "hitchcock_dolly_in"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/hitchcock_dolly_out_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=mD5xU3mN8AfkXPizqC%2F8qxvRm0U%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "hitchcock_dolly_out",
                                            "name": "希区柯克拉远",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "hitchcock_dolly_out"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/robo_arm_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/robo_arm_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=PYclDRNR%2BnFYURzm6cTiT5UfSDk%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "robo_arm",
                                            "name": "机械臂",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "robo_arm"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/dynamic_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=4PLJxoH9meXpit%2BgYBtHGCSwR00%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "dynamic_orbit",
                                            "name": "动感环绕",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "dynamic_orbit"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/central_orbit_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/central_orbit_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=UrsfNymWysBoUc%2BjfU5U9vmDuZE%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "central_orbit",
                                            "name": "中心环绕",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.4,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.7,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "central_orbit"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/crane_push_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/crane_push_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=zi8C1%2BEXvSBhgLGce%2F0xPRdf4Cs%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "crane_push",
                                            "name": "起重机",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.5,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 0.8,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "crane_push"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/quick_pull_back_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=P5TeOiWJBXW%2BKiGNxlooEjkhz4o%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "quick_pull_back",
                                            "name": "超级拉远",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.4,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.7,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "quick_pull_back"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/counterclockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=b1MOH6R7SzgwD43kbo6HxDkd1S4%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "counterclockwise_swivel",
                                            "name": "逆时针回旋",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "counterclockwise_swivel"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/clockwise_swivel_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=7QfRRyV9TqRJWA%2Bsh0j1nAN12nM%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "clockwise_swivel",
                                            "name": "顺时针回旋",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "clockwise_swivel"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/handheld_320p.webp",
                                                "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/handheld_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=17%2FbdifjjVFkYX6pn6CUf6F4lKw%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "handheld",
                                            "name": "手持运镜",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.2,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.5,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "handheld"
                                        },
                                        {
                                            "icon": {
                                                "image_uri": "tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp",
                                                "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/rapid_push_pull_320p.webp~tplv-tb4s082cfz-resize:0:0.awebp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=jMrxI%2F%2BKCEcGNgs5Ui5Aldg0tl0%3D",
                                                "width": 0,
                                                "height": 0,
                                                "format": "awebp"
                                            },
                                            "key": "rapid_push_pull",
                                            "name": "快速推拉",
                                            "strength_list": [
                                                {
                                                    "name": "弱",
                                                    "strength": 0.3,
                                                    "strength_key": "weak",
                                                    "name_starling_key": "gentle"
                                                },
                                                {
                                                    "name": "中",
                                                    "strength": 0.6,
                                                    "strength_key": "medium",
                                                    "name_starling_key": "medium"
                                                },
                                                {
                                                    "name": "强",
                                                    "strength": 1,
                                                    "strength_key": "strong",
                                                    "name_starling_key": "strong"
                                                }
                                            ],
                                            "default_strength_idx": 1,
                                            "name_starling_key": "rapid_push_pull"
                                        }
                                    ],
                                    "default_val_idx": -1
                                }
                            },
                            {
                                "key": "resolution",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "720p",
                                        "1080p"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "input_media_type",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "prompt",
                                        "first_frame",
                                        "end_frame",
                                        "multi_frame",
                                        "idip_frame"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "frames",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "int",
                                    "string_value": null,
                                    "double_value": null,
                                    "int_value": [
                                        120,
                                        240
                                    ],
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "fps",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "int",
                                    "string_value": null,
                                    "double_value": null,
                                    "int_value": [
                                        24
                                    ],
                                    "default_val_idx": 0
                                },
                                "forbidden_display": true,
                                "lens_motion_val": null
                            },
                            {
                                "key": "video_aspect_ratio",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "21:9",
                                        "16:9",
                                        "4:3",
                                        "1:1",
                                        "3:4",
                                        "9:16"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 1
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "multi_frame_duration",
                                "value_type": "slide_bar",
                                "slide_bar_val": {
                                    "min": 1,
                                    "max": 6,
                                    "step": 1,
                                    "default": 5
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "multi_frame_media_type",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "int",
                                    "string_value": null,
                                    "double_value": null,
                                    "int_value": [
                                        1
                                    ],
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "multi_frame_media_count",
                                "value_type": "slide_bar",
                                "slide_bar_val": {
                                    "min": 2,
                                    "max": 10,
                                    "step": 1,
                                    "default": 2
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "idip_frame",
                                "value_type": "slide_bar",
                                "slide_bar_val": {
                                    "min": 1,
                                    "max": 4,
                                    "step": 0,
                                    "default": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            }
                        ]
                    },
                    "forecast_generate_cost": 492,
                    "forecast_queue_cost": 0,
                    "fail_starling_key": "",
                    "fail_starling_message": "",
                    "min_feats": null,
                    "queue_info": {
                        "queue_idx": 0,
                        "priority": 5,
                        "queue_status": 3,
                        "queue_length": 0,
                        "polling_config": {
                            "interval_seconds": 30,
                            "timeout_seconds": 86400
                        },
                        "priority_queue_display_threshold": {
                            "vip_queuing_time_threshold": 300,
                            "waiting_time_threshold": 60
                        },
                        "debug_info": "{\"have_no_dreamina_queue_name\":false,\"dreamina_matrix_queue_name\":\"dreamina_video_queue_ark_end_frame\",\"dreamina_matrix_req_key\":\"DreaminaFusion:Video3_end_frame_720p\",\"dreamina_matrix_second_req_key\":\"\",\"have_no_queue_name\":true,\"queue_name\":\"\",\"matrix_req_key\":\"\",\"matrix_second_req_key\":\"\"}"
                    },
                    "agent_history_id": null,
                    "total_image_count": 0,
                    "finished_image_count": 0,
                    "confirm_status": 0,
                    "confirm_token": "",
                    "image_type": 0,
                    "pre_gen_item_ids": [
                        "7605520754297392435"
                    ]
                },
                "created_time": null
            },
            {
                "id": "6440880641548",
                "uid": "0",
                "type": 2,
                "video": {
                    "generate_type": 10,
                    "history_record_id": "6440880641548",
                    "origin_history_record_id": null,
                    "created_time": 1765859463.851,
                    "item_list": [
                        {
                            "common_attr": {
                                "id": "7584308614890867994",
                                "effect_id": "7584308614890867994",
                                "effect_type": 53,
                                "title": "",
                                "description": "",
                                "cover_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/84ea04c96012c0f924f88a8a47fed865~tplv-tb4s082cfz-aigc_resize:200:200.jpeg?lk3s=43402efa\u0026x-expires=1770804000\u0026x-signature=kllLv6Epiiyrw%2BjG2s921VS5HHA%3D\u0026format=.jpeg",
                                "item_urls": [
                                    ""
                                ],
                                "md5": "",
                                "create_time": 1765859508,
                                "status": 144,
                                "review_info": {
                                    "review_status": 1,
                                    "review_code_list": []
                                },
                                "aspect_ratio": 1.7857142857142858,
                                "publish_source": "user_post_mweb_item",
                                "collection_ids": [],
                                "extra": "",
                                "has_published": false,
                                "cover_url_map": {
                                    "1080": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/84ea04c96012c0f924f88a8a47fed865~tplv-tb4s082cfz-aigc_resize:1080:1080.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=AAQphBqp%2FhiBKqzRkH5SjXLg%2FSI%3D\u0026format=.webp",
                                    "2400": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/84ea04c96012c0f924f88a8a47fed865~tplv-tb4s082cfz-aigc_resize:2400:2400.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=3%2BTrRI4ah2rOhSBqH301gl6Vwpw%3D\u0026format=.webp",
                                    "360": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/84ea04c96012c0f924f88a8a47fed865~tplv-tb4s082cfz-aigc_resize:360:360.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=aKzlo%2BUS1ADD1gIihnrTykErmzs%3D\u0026format=.webp",
                                    "4096": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/84ea04c96012c0f924f88a8a47fed865~tplv-tb4s082cfz-aigc_resize:4096:4096.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=c67kzVAB9iH93vfXfnJuinYMZss%3D\u0026format=.webp",
                                    "480": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/84ea04c96012c0f924f88a8a47fed865~tplv-tb4s082cfz-aigc_resize:480:480.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=sX5Wa4AcUhYL%2F4%2Fnvff4CNTXZzk%3D\u0026format=.webp",
                                    "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/84ea04c96012c0f924f88a8a47fed865~tplv-tb4s082cfz-aigc_resize:720:720.webp?lk3s=43402efa\u0026x-expires=1772928000\u0026x-signature=RvIo%2F7j6uFrRSyRr%2Ftf8TDub0rI%3D\u0026format=.webp"
                                },
                                "local_item_id": "7584308614890867994",
                                "update_time": 0,
                                "cover_uri": "tos-cn-i-tb4s082cfz/84ea04c96012c0f924f88a8a47fed865",
                                "smart_crop_loc": null,
                                "cover_height": 112,
                                "cover_width": 200
                            },
                            "author": null,
                            "video": {
                                "video_id": "v02870g10004d50e1afog65k8kulsu30",
                                "duration": 6,
                                "origin_video": null,
                                "transcoded_video": {
                                    "origin": {
                                        "vid": "",
                                        "fps": 24,
                                        "width": 1248,
                                        "height": 704,
                                        "duration": 0,
                                        "video_url": "https://v9-artist.vlabvod.com/529ef31f8a4aba955922344167866606/69957ad9/video/tos/cn/tos-cn-ve-18544c800/ogGCZQCDpB4oek8FEEDOJSIiHAqAfQCgnBEL5p/?a=4066\u0026ch=0\u0026cr=0\u0026dr=0\u0026er=0\u0026cd=0%7C0%7C0%7C0\u0026br=6630\u0026bt=6630\u0026cs=0\u0026ds=12\u0026ft=5QYTUxhhe6BMyqTbuzVJD12Nzj\u0026mime_type=video_mp4\u0026qs=0\u0026rc=N2Y1OzM7Zmc4Njc6OTg7O0BpM3hvbm45cmRoODczNDM7M0BhNWFjYGFeNmIxNGE1MjNhYSMwcHI1MmRjLi1hLS1kNC9zcw%3D%3D\u0026btag=c0000e00008000\u0026dy_q=1770799188\u0026feature_id=7bed9f9dfbb915a044e5d473759ce9df\u0026l=2026021116394815A92CE8C12130D4DAC6",
                                        "cover_url": "",
                                        "format": "mp4",
                                        "definition": "origin",
                                        "logo_type": "",
                                        "encryption_key": "",
                                        "md5": "8f28ff0b8092f66cd7407a9a615b1cfb",
                                        "size": 4258229,
                                        "video_id": ""
                                    }
                                },
                                "video_size_type": 1,
                                "cover_uri": "tos-cn-p-148450/oEnpCoBGEEeqotVAO4pHADKBQITnC8FfgSiFlB",
                                "transcode_status": 1,
                                "duration_ms": 5042,
                                "thumb": {
                                    "detail_infos": [
                                        {
                                            "frame_count": 5,
                                            "image_width": 1280,
                                            "image_height": 720,
                                            "uri": "tos-cn-p-148450/fa8ca1869d334b26b350a1e12c15fda3_1765863650",
                                            "url": "https://p26-sign.douyinpic.com/tos-cn-p-148450/fa8ca1869d334b26b350a1e12c15fda3_1765863650~tplv-noop.image?dy_q=1770799188\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1771403993\u0026x-signature=6sv7A4YixxN%2FK91OsyUJXG%2BaKiw%3D"
                                        }
                                    ],
                                    "thumb_common_info": {
                                        "single_frame_width": 320,
                                        "single_frame_height": 180,
                                        "total_set_num": 5
                                    }
                                },
                                "watermark_type": 1,
                                "cover_url": "https://p26-sign.douyinpic.com/tos-cn-p-148450/oEnpCoBGEEeqotVAO4pHADKBQITnC8FfgSiFlB~tplv-noop.image?dy_q=1770799188\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1771403993\u0026x-signature=m8lVcimiZeiKmgImbme%2BoGDDrB4%3D",
                                "duration_info": "{\"play_info_duration\":5.017,\"v_duration\":5.042,\"a_duration\":0}",
                                "vda_status": 10,
                                "video_model": "{\"status\":10,\"message\":\"success\",\"enable_ssl\":true,\"auto_definition\":\"360p\",\"enable_adaptive\":false,\"video_id\":\"v02870g10004d50e1afog65k8kulsu30\",\"video_duration\":5.017,\"media_type\":\"video\",\"url_expire\":1770802794,\"big_thumbs\":[{\"img_num\":5,\"uri\":\"tos-cn-p-148450/fa8ca1869d334b26b350a1e12c15fda3_1765863650\",\"img_url\":\"https://p26-sign.douyinpic.com/tos-cn-p-148450/fa8ca1869d334b26b350a1e12c15fda3_1765863650~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=t%2F0cPak1uN7nnMPSkzBT4toaGF8%3D\",\"img_urls\":[\"https://p26-sign.douyinpic.com/tos-cn-p-148450/fa8ca1869d334b26b350a1e12c15fda3_1765863650~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=t%2F0cPak1uN7nnMPSkzBT4toaGF8%3D\"],\"img_x_size\":320,\"img_y_size\":180,\"img_x_len\":4,\"img_y_len\":4,\"duration\":5.041667,\"interval\":1,\"fext\":\"jpeg\"}],\"fallback_api\":\"https://vas-lf-x.snssdk.com/video/fplay/1/c7a965a73db6a81041e6e173d9fe5213/v02870g10004d50e1afog65k8kulsu30?aid=0\u0026device_platform=unknown\u0026force_fids=OGNkNA%3D%3D\u0026imp=false\u0026key_seed=ByQw7atyfBvw4jZ%2FWqw62BE%2Bbl0Xn0WiwwSp0XsZUco%3D\u0026logo_type=default\u0026multi_rate_audios=true\u0026stream_type=normal\u0026vps=6\",\"video_list\":{\"video_1\":{\"definition\":\"origin\",\"quality\":\"normal\",\"vtype\":\"mp4\",\"vwidth\":1248,\"vheight\":704,\"bitrate\":6790080,\"real_bitrate\":6790080,\"fps\":24,\"codec_type\":\"h264\",\"size\":4258229,\"main_url\":\"aHR0cHM6Ly92MjYtZGVmYXVsdC4zNjV5Zy5jb20vNjNlMWE3NTE0Yzg5NTJmY2Q2ZjFhMmFiYjVmYmM4NDEvNjk4YzRlNmEvdmlkZW8vdG9zL2NuL3Rvcy1jbi12ZS0xODU0NGM4MDAvb2dHQ1pRQ0RwQjRvZWs4RkVFRE9KU0lpSEFxQWZRQ2duQkVMNXAvP2E9MCZjaD0wJmNyPTAmZHI9MCZlcj0wJmxyPWRlZmF1bHQmY2Q9MCU3QzAlN0MwJTdDMCZicj02NjMwJmJ0PTY2MzAmY3M9MCZkcz0xMiZmdD1PaS5waTc3SldINkJNM3RSSXZyMFBEMUlOJm1pbWVfdHlwZT12aWRlb19tcDQmcXM9MCZyYz1OMlkxT3pNN1ptYzROamM2T1RnN08wQnBNM2h2Ym00NWNtUm9PRGN6TkRNN00wQmhOV0ZqWUdGZU5tSXhOR0UxTWpOaFlTTXdjSEkxTW1SakxpMWhMUzFrTkM5emN3JTNEJTNEJmJ0YWc9ODAwMDBlMDAwMDgwMDAmY3F1ZXJ5PTEwMFgmZHlfcT0xNzcwNzk5MTg5JmZlYXR1cmVfaWQ9N2JlZDlmOWRmYmI5MTVhMDQ0ZTVkNDczNzU5Y2U5ZGYmbD0yMDI2MDIxMTE2Mzk0ODE1QTkyQ0U4QzEyMTMwRDREQUM2\",\"backup_url_1\":\"aHR0cHM6Ly92MTEtZGVmYXVsdC4zNjV5Zy5jb20vMGQxMjhhZGJmNjgyY2M1NDljMDkzMzQwMGQxMmE2NDcvNjk4YzRlNmEvdmlkZW8vdG9zL2NuL3Rvcy1jbi12ZS0xODU0NGM4MDAvb2dHQ1pRQ0RwQjRvZWs4RkVFRE9KU0lpSEFxQWZRQ2duQkVMNXAvP2E9MCZjaD0wJmNyPTAmZHI9MCZlcj0wJmxyPWRlZmF1bHQmY2Q9MCU3QzAlN0MwJTdDMCZicj02NjMwJmJ0PTY2MzAmY3M9MCZkcz0xMiZmdD1PaS5waTc3SldINkJNM3RSSXZyMFBEMUlOJm1pbWVfdHlwZT12aWRlb19tcDQmcXM9MCZyYz1OMlkxT3pNN1ptYzROamM2T1RnN08wQnBNM2h2Ym00NWNtUm9PRGN6TkRNN00wQmhOV0ZqWUdGZU5tSXhOR0UxTWpOaFlTTXdjSEkxTW1SakxpMWhMUzFrTkM5emN3JTNEJTNEJmJ0YWc9ODAwMDBlMDAwMDgwMDAmY3F1ZXJ5PTEwMFgmZHlfcT0xNzcwNzk5MTg5JmZlYXR1cmVfaWQ9N2JlZDlmOWRmYmI5MTVhMDQ0ZTVkNDczNzU5Y2U5ZGYmbD0yMDI2MDIxMTE2Mzk0ODE1QTkyQ0U4QzEyMTMwRDREQUM2\",\"file_id\":\"d8685586d77443e59dacd8c0f8d28cd4\",\"quality_type\":0,\"encryption_method\":\"\",\"audio_channels\":\"0.0\",\"feature_id\":\"7bed9f9dfbb915a044e5d473759ce9df\",\"gear_des_key\":\"0:MP4|1:normal|2:h264|4:origin|5:normal|10000:105\",\"audio_sample_rate\":\"0\",\"audio_bitrate_target\":128,\"url_expire\":1770802794,\"preload_size\":327680,\"preload_interval\":60,\"preload_min_step\":5,\"preload_max_step\":10,\"file_hash\":\"8f28ff0b8092f66cd7407a9a615b1cfb\"}},\"popularity_level\":0,\"has_embedded_subtitle\":false,\"poster_url\":\"https://p26-sign.douyinpic.com/tos-cn-p-148450/oEnpCoBGEEeqotVAO4pHADKBQITnC8FfgSiFlB~tplv-noop.image?cquery=100X\u0026dy_q=1770799189\u0026l=2026021116394815A92CE8C12130D4DAC6\u0026x-expires=1770802794\u0026x-signature=k2aLpj3dAJvfu2XcbNhnLpNz%2FJE%3D\",\"key_seed\":\"ByQw7atyfBvw4jZ/Wqw62BE+bl0Xn0WiwwSp0XsZUco=\"}",
                                "has_audio": false,
                                "is_mute": false
                            },
                            "aigc_image_params": {
                                "generate_type": 10,
                                "text2video_params": {
                                    "video_gen_inputs": [
                                        {
                                            "prompt": "天空失去颜色的那一天，世界停止了呼吸。\n城市在警报中崩塌，火焰吞噬高楼，灰烬像雪一样落下。\n人类最后的信号在废墟中闪烁，\n而幸存者抬头看向黑暗的天际——\n末日不是结束，\n而是选择开始的那一刻。",
                                            "lens_motion_type": "",
                                            "motion_speed": "",
                                            "vid": "",
                                            "ending_control": "",
                                            "pre_task_id": "0",
                                            "audio_vid": "",
                                            "video_mode": 2,
                                            "fps": 24,
                                            "duration_ms": 5000,
                                            "template_id": "0"
                                        }
                                    ],
                                    "video_aspect_ratio": "16:9",
                                    "seed": 2742552908,
                                    "task_scene": "",
                                    "priority": 0,
                                    "video_gen_inputs_extra": [
                                        {}
                                    ],
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0_fast",
                                    "model_config": {
                                        "icon_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/video_3_fast.png~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=JRXNpYqH0ybvYLazuvEQPfe8AWI%3D",
                                        "model_name_starling_key": "video_3_0fast",
                                        "model_tip_starling_key": "video_3_0fast_des",
                                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0_fast",
                                        "is_new_model": false,
                                        "sample_steps": null,
                                        "blend_enable": null,
                                        "feats": [
                                            "support_first_image"
                                        ],
                                        "model_name": "视频 3.0 Fast",
                                        "model_tip": "Pro级表现，加量不加价",
                                        "feature_key": "",
                                        "generation_category_name_starling_key": "",
                                        "generation_category_name": "",
                                        "duration_option": [
                                            5,
                                            10
                                        ],
                                        "lens_motion_type_option": null,
                                        "motion_speed_option": null,
                                        "camera_strength_option": null,
                                        "video_aspect_ratio_option": [
                                            "21:9",
                                            "16:9",
                                            "4:3",
                                            "1:1",
                                            "3:4",
                                            "9:16"
                                        ],
                                        "commercial_config": {
                                            "commerce_info_map": {
                                                "basic": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                },
                                                "retry": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                }
                                            },
                                            "image_model_commerce_config": null
                                        },
                                        "fps": 24,
                                        "extra": {},
                                        "feats_cant_combine": null,
                                        "model_bg_prompt_starling_key": ""
                                    },
                                    "video_model_config": {
                                        "icon": {
                                            "image_uri": "tos-cn-i-tb4s082cfz/video_3_fast.png",
                                            "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/video_3_fast.png~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=JRXNpYqH0ybvYLazuvEQPfe8AWI%3D",
                                            "width": 0,
                                            "height": 0,
                                            "format": "webp",
                                            "smart_crop_loc": null
                                        },
                                        "model_name": "视频 3.0 Fast",
                                        "model_name_starling_key": "video_3_0fast",
                                        "model_tip": "Pro级表现，加量不加价",
                                        "model_tip_starling_key": "video_3_0fast_des",
                                        "feature_key": "",
                                        "icon_tag": "",
                                        "options": [
                                            {
                                                "key": "multi_frames",
                                                "value_type": "multi_frames",
                                                "forbidden_display": false,
                                                "lens_motion_val": null,
                                                "multi_frames_config": {
                                                    "duration_ms": {
                                                        "min": 0,
                                                        "max": 8000,
                                                        "step": 500,
                                                        "default": 5000
                                                    },
                                                    "media_config": [
                                                        {
                                                            "media_type": 1,
                                                            "max_video_media_duration_ms": 0
                                                        },
                                                        {
                                                            "media_type": 2,
                                                            "max_video_media_duration_ms": 10000
                                                        }
                                                    ],
                                                    "max_media_count": 20,
                                                    "min_generation_duration_ms": 2000,
                                                    "first_segment_generation_enabled": true,
                                                    "end_segment_generation_enabled": true
                                                }
                                            },
                                            {
                                                "key": "resolution",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "720p",
                                                        "1080p"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "input_media_type",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "prompt",
                                                        "first_frame",
                                                        "multi_frame"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "frames",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "int",
                                                    "string_value": null,
                                                    "double_value": null,
                                                    "int_value": [
                                                        120,
                                                        240
                                                    ],
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "fps",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "int",
                                                    "string_value": null,
                                                    "double_value": null,
                                                    "int_value": [
                                                        24
                                                    ],
                                                    "default_val_idx": 0
                                                },
                                                "forbidden_display": true,
                                                "lens_motion_val": null
                                            },
                                            {
                                                "key": "video_aspect_ratio",
                                                "value_type": "enum",
                                                "enum_val": {
                                                    "enum_type": "string",
                                                    "string_value": [
                                                        "21:9",
                                                        "16:9",
                                                        "4:3",
                                                        "1:1",
                                                        "3:4",
                                                        "9:16"
                                                    ],
                                                    "double_value": null,
                                                    "int_value": null,
                                                    "default_val_idx": 1
                                                },
                                                "forbidden_display": false,
                                                "lens_motion_val": null
                                            }
                                        ],
                                        "commercial_config": {
                                            "default": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            },
                                            "format": "{resolution}",
                                            "format_conf": {
                                                "1080p": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three_1080",
                                                    "amount": 0
                                                },
                                                "720p": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                                    "amount": 0
                                                }
                                            },
                                            "additional_conf": [
                                                {
                                                    "option_key": "resolution",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "1080p"
                                                        ]
                                                    },
                                                    "commerce_info": {
                                                        "resource_sub_type": "aigc",
                                                        "resource_id_type": "str",
                                                        "resource_id": "generate_video",
                                                        "benefit_type": "basic_video_operation_vgfm_v_three_1080_add",
                                                        "amount": 0
                                                    }
                                                }
                                            ]
                                        },
                                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0_fast",
                                        "extra": {
                                            "pop_icon": null,
                                            "model_source": "by Seedance 1.0 Fast",
                                            "raw_model_source": "",
                                            "aigc_compliance_confirmation_required": false
                                        },
                                        "model_status": 0,
                                        "mutex_conf": {
                                            "mutex_list": [
                                                [
                                                    {
                                                        "option_key": "frames"
                                                    },
                                                    {
                                                        "option_key": "input_media_type",
                                                        "condition": {
                                                            "operation": "in",
                                                            "value": [
                                                                "multi_frame"
                                                            ]
                                                        }
                                                    }
                                                ]
                                            ]
                                        },
                                        "generation_category_name": "",
                                        "generation_category_name_starling_key": ""
                                    }
                                },
                                "template_id": "0",
                                "aigc_mode": "workbench",
                                "insta_drag_params": {
                                    "origin_item_id": null
                                },
                                "hide_ref_images": false
                            },
                            "statistic": {
                                "feedback_status": 0
                            },
                            "category_id_list": [],
                            "aigc_flow": {
                                "version": "0.1.2"
                            },
                            "aigc_draft": {
                                "version": "3.0.5",
                                "uri": "aigc-draft/5322870646028",
                                "content": "",
                                "update_time": 0,
                                "last_preview_time": 0,
                                "resource_type": "",
                                "public_uri": "",
                                "variables": null,
                                "resource_width": 0,
                                "resource_height": 0,
                                "node_keys": null,
                                "cost": 0
                            },
                            "gen_result_data": {
                                "result_code": 0,
                                "result_msg": "Success"
                            },
                            "extra": {
                                "template_type": "video",
                                "ai_feature": "text_generate_video"
                            },
                            "ai_feature": {
                                "features": [
                                    {
                                        "type": "text_generate_video"
                                    }
                                ],
                                "is_merged": true
                            },
                            "sharing_info": {
                                "share_status": 2
                            },
                            "metadata_param": "{\"effect_id\":\"gen_video\",\"effect_type\":\"tool\"}"
                        }
                    ],
                    "origin_item_list": [],
                    "task": {
                        "task_id": "6440880641548",
                        "submit_id": "ffef6de3-7715-4cd9-8355-f9d10dd0159b",
                        "aid": 0,
                        "status": 50,
                        "finish_time": 1765859508,
                        "history_id": "6440880641548",
                        "task_payload": null,
                        "original_input": null,
                        "req_first_frame_image": null,
                        "ai_gen_prompt": "",
                        "priority": 0,
                        "lip_sync_info": null,
                        "multi_size_first_frame_image": null,
                        "multi_size_end_frame_image": null,
                        "process_flows": null,
                        "create_time": 0,
                        "aigc_image_params": {
                            "generate_type": 10,
                            "text2video_params": {
                                "video_gen_inputs": [
                                    {
                                        "prompt": "天空失去颜色的那一天，世界停止了呼吸。\n城市在警报中崩塌，火焰吞噬高楼，灰烬像雪一样落下。\n人类最后的信号在废墟中闪烁，\n而幸存者抬头看向黑暗的天际——\n末日不是结束，\n而是选择开始的那一刻。",
                                        "lens_motion_type": "",
                                        "motion_speed": "",
                                        "vid": "",
                                        "ending_control": "",
                                        "pre_task_id": "0",
                                        "audio_vid": "",
                                        "video_mode": 2,
                                        "fps": 24,
                                        "duration_ms": 5000,
                                        "template_id": "0"
                                    }
                                ],
                                "video_aspect_ratio": "16:9",
                                "seed": 2742552908,
                                "task_scene": "",
                                "priority": 0,
                                "video_gen_inputs_extra": [
                                    {}
                                ],
                                "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0_fast",
                                "model_config": {
                                    "icon_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/video_3_fast.png~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=JRXNpYqH0ybvYLazuvEQPfe8AWI%3D",
                                    "model_name_starling_key": "video_3_0fast",
                                    "model_tip_starling_key": "video_3_0fast_des",
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0_fast",
                                    "is_new_model": false,
                                    "sample_steps": null,
                                    "blend_enable": null,
                                    "feats": [
                                        "support_first_image"
                                    ],
                                    "model_name": "视频 3.0 Fast",
                                    "model_tip": "Pro级表现，加量不加价",
                                    "feature_key": "",
                                    "generation_category_name_starling_key": "",
                                    "generation_category_name": "",
                                    "duration_option": [
                                        5,
                                        10
                                    ],
                                    "lens_motion_type_option": null,
                                    "motion_speed_option": null,
                                    "camera_strength_option": null,
                                    "video_aspect_ratio_option": [
                                        "21:9",
                                        "16:9",
                                        "4:3",
                                        "1:1",
                                        "3:4",
                                        "9:16"
                                    ],
                                    "commercial_config": {
                                        "commerce_info_map": {
                                            "basic": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            },
                                            "retry": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            }
                                        },
                                        "image_model_commerce_config": null
                                    },
                                    "fps": 24,
                                    "extra": {},
                                    "feats_cant_combine": null,
                                    "model_bg_prompt_starling_key": ""
                                },
                                "video_model_config": {
                                    "icon": {
                                        "image_uri": "tos-cn-i-tb4s082cfz/video_3_fast.png",
                                        "image_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/video_3_fast.png~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335189\u0026x-signature=JRXNpYqH0ybvYLazuvEQPfe8AWI%3D",
                                        "width": 0,
                                        "height": 0,
                                        "format": "webp",
                                        "smart_crop_loc": null
                                    },
                                    "model_name": "视频 3.0 Fast",
                                    "model_name_starling_key": "video_3_0fast",
                                    "model_tip": "Pro级表现，加量不加价",
                                    "model_tip_starling_key": "video_3_0fast_des",
                                    "feature_key": "",
                                    "icon_tag": "",
                                    "options": [
                                        {
                                            "key": "multi_frames",
                                            "value_type": "multi_frames",
                                            "forbidden_display": false,
                                            "lens_motion_val": null,
                                            "multi_frames_config": {
                                                "duration_ms": {
                                                    "min": 0,
                                                    "max": 8000,
                                                    "step": 500,
                                                    "default": 5000
                                                },
                                                "media_config": [
                                                    {
                                                        "media_type": 1,
                                                        "max_video_media_duration_ms": 0
                                                    },
                                                    {
                                                        "media_type": 2,
                                                        "max_video_media_duration_ms": 10000
                                                    }
                                                ],
                                                "max_media_count": 20,
                                                "min_generation_duration_ms": 2000,
                                                "first_segment_generation_enabled": true,
                                                "end_segment_generation_enabled": true
                                            }
                                        },
                                        {
                                            "key": "resolution",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "720p",
                                                    "1080p"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "input_media_type",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "prompt",
                                                    "first_frame",
                                                    "multi_frame"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "frames",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "int",
                                                "string_value": null,
                                                "double_value": null,
                                                "int_value": [
                                                    120,
                                                    240
                                                ],
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "fps",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "int",
                                                "string_value": null,
                                                "double_value": null,
                                                "int_value": [
                                                    24
                                                ],
                                                "default_val_idx": 0
                                            },
                                            "forbidden_display": true,
                                            "lens_motion_val": null
                                        },
                                        {
                                            "key": "video_aspect_ratio",
                                            "value_type": "enum",
                                            "enum_val": {
                                                "enum_type": "string",
                                                "string_value": [
                                                    "21:9",
                                                    "16:9",
                                                    "4:3",
                                                    "1:1",
                                                    "3:4",
                                                    "9:16"
                                                ],
                                                "double_value": null,
                                                "int_value": null,
                                                "default_val_idx": 1
                                            },
                                            "forbidden_display": false,
                                            "lens_motion_val": null
                                        }
                                    ],
                                    "commercial_config": {
                                        "default": {
                                            "resource_sub_type": "aigc",
                                            "resource_id_type": "str",
                                            "resource_id": "generate_video",
                                            "benefit_type": "basic_video_operation_vgfm_v_three",
                                            "amount": 0
                                        },
                                        "format": "{resolution}",
                                        "format_conf": {
                                            "1080p": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three_1080",
                                                "amount": 0
                                            },
                                            "720p": {
                                                "resource_sub_type": "aigc",
                                                "resource_id_type": "str",
                                                "resource_id": "generate_video",
                                                "benefit_type": "basic_video_operation_vgfm_v_three",
                                                "amount": 0
                                            }
                                        },
                                        "additional_conf": [
                                            {
                                                "option_key": "resolution",
                                                "condition": {
                                                    "operation": "in",
                                                    "value": [
                                                        "1080p"
                                                    ]
                                                },
                                                "commerce_info": {
                                                    "resource_sub_type": "aigc",
                                                    "resource_id_type": "str",
                                                    "resource_id": "generate_video",
                                                    "benefit_type": "basic_video_operation_vgfm_v_three_1080_add",
                                                    "amount": 0
                                                }
                                            }
                                        ]
                                    },
                                    "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0_fast",
                                    "extra": {
                                        "pop_icon": null,
                                        "model_source": "by Seedance 1.0 Fast",
                                        "raw_model_source": "",
                                        "aigc_compliance_confirmation_required": false
                                    },
                                    "model_status": 0,
                                    "mutex_conf": {
                                        "mutex_list": [
                                            [
                                                {
                                                    "option_key": "frames"
                                                },
                                                {
                                                    "option_key": "input_media_type",
                                                    "condition": {
                                                        "operation": "in",
                                                        "value": [
                                                            "multi_frame"
                                                        ]
                                                    }
                                                }
                                            ]
                                        ]
                                    },
                                    "generation_category_name": "",
                                    "generation_category_name_starling_key": ""
                                }
                            },
                            "template_id": "0",
                            "aigc_mode": "workbench",
                            "insta_drag_params": {
                                "origin_item_id": null
                            },
                            "hide_ref_images": false
                        },
                        "ref_item": null,
                        "resp_ret": {
                            "ret": "0"
                        }
                    },
                    "mode": "workbench",
                    "asset_option": {
                        "has_favorited": false
                    },
                    "uid": "2856952374767401",
                    "aigc_flow": {
                        "version": "3.0.5"
                    },
                    "status": 50,
                    "history_group_key_md5": "df6036d0656b1d72bf49d1240f1deb52",
                    "history_group_key": "generate_video#天空失去颜色的那一天，世界停止了呼吸。\n城市在警报中崩塌，火焰吞噬高楼，灰烬像雪一样落下。\n人类最后的信号在废墟中闪烁，\n而幸存者抬头看向黑暗的天际——\n末日不是结束，\n而是选择开始的那一刻。",
                    "draft_content": "{\"type\":\"draft\",\"id\":\"21619641-3131-cec7-de4b-682e59d349a8\",\"min_version\":\"3.0.5\",\"min_features\":[],\"is_from_tsn\":true,\"version\":\"3.0.5\",\"main_component_id\":\"b8759e75-009c-4097-7b8e-51aff7fdd7ca\",\"component_list\":[{\"type\":\"video_base_component\",\"id\":\"b8759e75-009c-4097-7b8e-51aff7fdd7ca\",\"min_version\":\"1.0.0\",\"aigc_mode\":\"workbench\",\"gen_type\":10,\"metadata\":{\"type\":\"\",\"id\":\"67afe65f-c499-25e7-09b1-66daca8003ec\",\"created_platform\":3,\"created_platform_version\":\"\",\"created_time_in_ms\":\"1765859463272\",\"created_did\":\"\"},\"generate_type\":\"gen_video\",\"abilities\":{\"type\":\"\",\"id\":\"841898c0-002d-18af-d9b6-a371d619a831\",\"gen_video\":{\"type\":\"\",\"id\":\"b84701e5-2c19-600f-13bf-c6c92e2a7f87\",\"text_to_video_params\":{\"type\":\"\",\"id\":\"41910e9a-d526-93b0-0f66-a4aebcb01d6a\",\"video_gen_inputs\":[{\"type\":\"\",\"id\":\"8fda28fe-af64-edb3-a9db-31f818ccfcb2\",\"min_version\":\"3.0.5\",\"prompt\":\"天空失去颜色的那一天，世界停止了呼吸。\\n城市在警报中崩塌，火焰吞噬高楼，灰烬像雪一样落下。\\n人类最后的信号在废墟中闪烁，\\n而幸存者抬头看向黑暗的天际——\\n末日不是结束，\\n而是选择开始的那一刻。\",\"video_mode\":2,\"fps\":24,\"duration_ms\":5000,\"resolution\":\"720p\",\"idip_meta_list\":[]}],\"video_aspect_ratio\":\"16:9\",\"seed\":2742552908,\"model_req_key\":\"dreamina_ic_generate_video_model_vgfm_3.0_fast\",\"priority\":0},\"video_task_extra\":\"{\\\"promptSource\\\":\\\"custom\\\",\\\"isDefaultSeed\\\":1,\\\"originSubmitId\\\":\\\"ffef6de3-7715-4cd9-8355-f9d10dd0159b\\\",\\\"isRegenerate\\\":false,\\\"enterFrom\\\":\\\"click\\\",\\\"functionMode\\\":\\\"first_last_frames\\\",\\\"sceneOptions\\\":\\\"[{\\\\\\\"type\\\\\\\":\\\\\\\"video\\\\\\\",\\\\\\\"scene\\\\\\\":\\\\\\\"BasicVideoGenerateButton\\\\\\\",\\\\\\\"resolution\\\\\\\":\\\\\\\"720p\\\\\\\",\\\\\\\"modelReqKey\\\\\\\":\\\\\\\"dreamina_ic_generate_video_model_vgfm_3.0_fast\\\\\\\",\\\\\\\"videoDuration\\\\\\\":5,\\\\\\\"reportParams\\\\\\\":{\\\\\\\"enterSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"vipSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"extraVipFunctionKey\\\\\\\":\\\\\\\"dreamina_ic_generate_video_model_vgfm_3.0_fast-720p\\\\\\\",\\\\\\\"useVipFunctionDetailsReporterHoc\\\\\\\":true}}]\\\"}\"}},\"process_type\":1}]}",
                    "first_generate_type": 10,
                    "submit_id": "ffef6de3-7715-4cd9-8355-f9d10dd0159b",
                    "capflow_id": "ffef6de3-7715-4cd9-8355-f9d10dd0159b",
                    "metrics_extra": "{\"promptSource\":\"custom\",\"isDefaultSeed\":1,\"originSubmitId\":\"ffef6de3-7715-4cd9-8355-f9d10dd0159b\",\"isRegenerate\":false,\"enterFrom\":\"click\",\"functionMode\":\"first_last_frames\",\"sceneOptions\":\"[{\\\"type\\\":\\\"video\\\",\\\"scene\\\":\\\"BasicVideoGenerateButton\\\",\\\"resolution\\\":\\\"720p\\\",\\\"modelReqKey\\\":\\\"dreamina_ic_generate_video_model_vgfm_3.0_fast\\\",\\\"videoDuration\\\":5,\\\"reportParams\\\":{\\\"enterSource\\\":\\\"generate\\\",\\\"vipSource\\\":\\\"generate\\\",\\\"extraVipFunctionKey\\\":\\\"dreamina_ic_generate_video_model_vgfm_3.0_fast-720p\\\",\\\"useVipFunctionDetailsReporterHoc\\\":true}}]\"}",
                    "generate_id": "202512161231038884A632465349C0A0BD",
                    "finish_time": 1765859508,
                    "model_info": {
                        "icon_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/video_3_fast.png~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335188\u0026x-signature=hW3%2BsciPkh2xmEkuRAOTjib7kR8%3D",
                        "model_name_starling_key": "video_3_0fast",
                        "model_tip_starling_key": "video_3_0fast_des",
                        "model_req_key": "dreamina_ic_generate_video_model_vgfm_3.0_fast",
                        "model_name": "视频 3.0 Fast",
                        "commercial_config": {
                            "commerce_info_map": {
                                "basic": {
                                    "resource_sub_type": "aigc",
                                    "resource_id_type": "str",
                                    "resource_id": "generate_video",
                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                    "amount": 0
                                },
                                "retry": {
                                    "resource_sub_type": "aigc",
                                    "resource_id_type": "str",
                                    "resource_id": "generate_video",
                                    "benefit_type": "basic_video_operation_vgfm_v_three",
                                    "amount": 0
                                }
                            },
                            "image_model_commerce_config": null
                        },
                        "video_model_options": [
                            {
                                "key": "multi_frames",
                                "value_type": "multi_frames",
                                "forbidden_display": false,
                                "lens_motion_val": null,
                                "multi_frames_config": {
                                    "duration_ms": {
                                        "min": 0,
                                        "max": 8000,
                                        "step": 500,
                                        "default": 5000
                                    },
                                    "media_config": [
                                        {
                                            "media_type": 1,
                                            "max_video_media_duration_ms": 0
                                        },
                                        {
                                            "media_type": 2,
                                            "max_video_media_duration_ms": 10000
                                        }
                                    ],
                                    "max_media_count": 20,
                                    "min_generation_duration_ms": 2000,
                                    "first_segment_generation_enabled": true,
                                    "end_segment_generation_enabled": true
                                }
                            },
                            {
                                "key": "resolution",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "720p",
                                        "1080p"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "input_media_type",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "prompt",
                                        "first_frame",
                                        "multi_frame"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "frames",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "int",
                                    "string_value": null,
                                    "double_value": null,
                                    "int_value": [
                                        120,
                                        240
                                    ],
                                    "default_val_idx": 0
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            },
                            {
                                "key": "fps",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "int",
                                    "string_value": null,
                                    "double_value": null,
                                    "int_value": [
                                        24
                                    ],
                                    "default_val_idx": 0
                                },
                                "forbidden_display": true,
                                "lens_motion_val": null
                            },
                            {
                                "key": "video_aspect_ratio",
                                "value_type": "enum",
                                "enum_val": {
                                    "enum_type": "string",
                                    "string_value": [
                                        "21:9",
                                        "16:9",
                                        "4:3",
                                        "1:1",
                                        "3:4",
                                        "9:16"
                                    ],
                                    "double_value": null,
                                    "int_value": null,
                                    "default_val_idx": 1
                                },
                                "forbidden_display": false,
                                "lens_motion_val": null
                            }
                        ]
                    },
                    "forecast_generate_cost": 31,
                    "forecast_queue_cost": 0,
                    "fail_starling_key": "",
                    "fail_starling_message": "",
                    "min_feats": null,
                    "queue_info": {
                        "queue_idx": 0,
                        "priority": 5,
                        "queue_status": 3,
                        "queue_length": 0,
                        "polling_config": {
                            "interval_seconds": 30,
                            "timeout_seconds": 86400
                        },
                        "priority_queue_display_threshold": {
                            "vip_queuing_time_threshold": 300,
                            "waiting_time_threshold": 60
                        },
                        "debug_info": "{\"have_no_dreamina_queue_name\":false,\"dreamina_matrix_queue_name\":\"dreamina_fusion_video3_fast_t2v\",\"dreamina_matrix_req_key\":\"DreaminaFusion:Video3_fast_t2v_720p\",\"dreamina_matrix_second_req_key\":\"\",\"have_no_queue_name\":true,\"queue_name\":\"\",\"matrix_req_key\":\"\",\"matrix_second_req_key\":\"\"}"
                    },
                    "agent_history_id": null,
                    "total_image_count": 0,
                    "finished_image_count": 0,
                    "confirm_status": 0,
                    "confirm_token": "",
                    "image_type": 0,
                    "pre_gen_item_ids": [
                        "7584308614890867994"
                    ]
                },
                "created_time": null
            }
        ]
    }
}
```

### 图片确认弹窗
出现这个就要点击，避免阻塞
```
<button class="lv-btn lv-btn-primary lv-btn-size-default lv-btn-shape-square button-O1fcZS" type="button"><span>确认</span></button>
/html/body/div[8]/div[2]/div/div[2]/div[3]/button[2]
```

### 生成接口
```
curl 'https://jimeng.jianying.com/mweb/v1/aigc_draft/generate?aid=513695&device_platform=web&region=cn&webId=7584089465464899081&da_version=3.3.9&os=mac&web_component_open_flag=1&web_version=7.5.0&aigc_features=app_lip_sync&msToken=0KVVhLbYK_xh3y38Owoo4A6c-lFXQVKyNi6UYgqGfgDy1TZYf--LpIUKqR0ayQNF7HBFJULxGKWSgcEGIZuSG-1tlJyudlcYYsw1IBx_GGNWh6KuLhp9oxDnyQayK4Y%3D&a_bogus=dJMDhOZ3Msm1UjErEwkz9a8juBL0YW4EgZENE-KudtoT' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
  -H 'app-sdk-version: 48.0.0' \
  -H 'appid: 513695' \
  -H 'appvr: 8.4.0' \
  -H 'content-type: application/json' \
  -b 's_v_web_id=verify_mj78r46p_8wDsFg9E_1EzK_4mFR_8Xk9_N1uVBu6vsqxI; fpk1=360c140015312c376a69d0834df2ff2bc70fc9c489082e812ade6bfcb1d05a963a4f616c11b37eaa109e024c71b9dd38; passport_csrf_token=8a5901841ed8779b95478cb7ae5cc907; passport_csrf_token_default=8a5901841ed8779b95478cb7ae5cc907; n_mh=-j967_pUtflH23IeCX9gxw-G7-JwrdYBAdJ7uJvFwJ0; sid_guard=aa3d8f394440e799ddfac64887e5bbea%7C1765808472%7C31536000%7CTue%2C+15-Dec-2026+14%3A21%3A12+GMT; uid_tt=0cb1584b1c4303da497e25d341e5633e; uid_tt_ss=0cb1584b1c4303da497e25d341e5633e; sid_tt=aa3d8f394440e799ddfac64887e5bbea; sessionid=aa3d8f394440e799ddfac64887e5bbea; sessionid_ss=aa3d8f394440e799ddfac64887e5bbea; session_tlb_tag=sttt%7C4%7Cqj2POURA55nd-sZIh-W76v________-osAm6mDRa_NXAZXauGFyCm_yxpw8ExMkgKUdgujpQxxQ%3D; is_staff_user=false; sid_ucp_v1=1.0.0-KDliNTAzNzZkOTY2NWIyYmQyYWVlNDY2YWZjZmI2YmNjNzA5NjQzN2IKHwip3sD7oMyJBRDYsoDKBhifrR8gDDD87oOxBjgIQCYaAmxmIiBhYTNkOGYzOTQ0NDBlNzk5ZGRmYWM2NDg4N2U1YmJlYQ; ssid_ucp_v1=1.0.0-KDliNTAzNzZkOTY2NWIyYmQyYWVlNDY2YWZjZmI2YmNjNzA5NjQzN2IKHwip3sD7oMyJBRDYsoDKBhifrR8gDDD87oOxBjgIQCYaAmxmIiBhYTNkOGYzOTQ0NDBlNzk5ZGRmYWM2NDg4N2U1YmJlYQ; user_spaces_idc={"7359153912256921865":"hl"}; dm_auid=E7Gmk7ATyFAXnPBjS8n0D9UA4S6B6+gT9quLJB+Y6o4=; uifid_temp=2ef3e99dc2c8a4456c279029beaa3ab8de7e43e99402ad84eeff39b45ea3bba2d9f43f62e032b926472528e76c932342f634a6bfd1ee0bdc2dc35b4440256a0141f0f1d42642bab71333ac47881037b88840ef8b02e5ee1999a47e1baedeb4c56bcf329872a0e40ef7547c2af09eff35; uifid=2ef3e99dc2c8a4456c279029beaa3ab8de7e43e99402ad84eeff39b45ea3bba2d9f43f62e032b926472528e76c932342f8d65572e09945acad2da74629bb2a68257ea37224ea7f65c26cc0b0130cacd56d9a6c37c3fa28c6f0979f56a8e644d667c02f1cf2e409d0fbb47c48d7b4a7c29048615418fa63ba6d56f9fb8e4331b52974f57e5f3f5a5b1cf0afb3bd8a2f81b7ddac1575ba621bb86774252a36dc4226bde24aa31e9360027637524c8c818a7aef909407c3642a0ca12e488393c97d; _tea_web_id=7584089465464899081; _isHitHomeHeaderRefreshExperiment=1; DREAMINA_THEME=light; COOKIE_CONSENT_PROMPT_CONFIG={%22status%22:1%2C%22settings%22:{%22firstPartyAnalytics%22:true%2C%22GoogleAnalytics%22:true}%2C%22updatedTime%22:1770708820699}; passport_mfa_token=CjGtYDbhdhZyFCozQlJ57o87FLZcY%2FPvH%2Fez6vSpaju50CyC6cLfHACWsYjmF3dTt2rUGkoKPAAAAAAAAAAAAABQD7CdCl7JPIT4YC7ScearUXRPhtt3FO8P%2FyH0nsQysTtQ0oSP%2F9aItXEurzjLZEsG0BCEqYkOGPax0WwgAiIBA3YTl1E%3D; biz_trace_id=e48c5adb; ttwid=1|EhmErRErrXfXrpwlX1QduPzrNWxQZLES0CagnAkDNIw|1770799486|7c332ed8cd78f2f5411303a974eec513ec39c9c2938d6cce584ef1f656fb369e; odin_tt=9041fbff82f35b7259b4782ab5ac1281e34a2c6aae2c08b39e8fad48ee523cdad29659b2db9d04c0d8fcb25b7415ec2e9eae38c41d757c7b8a264aa038511b85; _uetsid=d190d400065211f1be542d81a99ddbdb; _uetvid=3b536f20d9c111f0a1b1cd46966aaa1d' \
  -H 'device-time: 1770799600' \
  -H 'dnt: 1' \
  -H 'lan: zh-Hans' \
  -H 'loc: cn' \
  -H 'origin: https://jimeng.jianying.com' \
  -H 'pf: 7' \
  -H 'priority: u=1, i' \
  -H 'referer: https://jimeng.jianying.com/ai-tool/generate' \
  -H 'sec-ch-ua: "Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sign: b2914a6b9e911f746c48d999dc4aa2e7' \
  -H 'sign-ver: 1' \
  -H 'tdid;' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36' \
  --data-raw '{"extend":{"root_model":"dreamina_seedance_40_pro","m_video_commerce_info":{"benefit_type":"dreamina_video_seedance_20_pro","resource_id":"generate_video","resource_id_type":"str","resource_sub_type":"aigc"},"m_video_commerce_info_list":[{"benefit_type":"dreamina_video_seedance_20_pro","resource_id":"generate_video","resource_id_type":"str","resource_sub_type":"aigc"}]},"submit_id":"e12e4e52-ced7-4126-bef4-6066ccbaefb5","metrics_extra":"{\"isDefaultSeed\":1,\"originSubmitId\":\"e12e4e52-ced7-4126-bef4-6066ccbaefb5\",\"isRegenerate\":false,\"enterFrom\":\"click\",\"position\":\"page_bottom_box\",\"functionMode\":\"omni_reference\",\"sceneOptions\":\"[{\\\"type\\\":\\\"video\\\",\\\"scene\\\":\\\"BasicVideoGenerateButton\\\",\\\"modelReqKey\\\":\\\"dreamina_seedance_40_pro\\\",\\\"videoDuration\\\":5,\\\"reportParams\\\":{\\\"enterSource\\\":\\\"generate\\\",\\\"vipSource\\\":\\\"generate\\\",\\\"extraVipFunctionKey\\\":\\\"dreamina_seedance_40_pro\\\",\\\"useVipFunctionDetailsReporterHoc\\\":true},\\\"materialTypes\\\":[1]}]\"}","draft_content":"{\"type\":\"draft\",\"id\":\"0005e0fb-7a8e-bc4a-45ea-c3fb0fbb6585\",\"min_version\":\"3.3.9\",\"min_features\":[\"AIGC_Video_UnifiedEdit\"],\"is_from_tsn\":true,\"version\":\"3.3.9\",\"main_component_id\":\"8181bfe9-8934-0e9e-49da-8750a23fbfe1\",\"component_list\":[{\"type\":\"video_base_component\",\"id\":\"8181bfe9-8934-0e9e-49da-8750a23fbfe1\",\"min_version\":\"1.0.0\",\"aigc_mode\":\"workbench\",\"metadata\":{\"type\":\"\",\"id\":\"fbbc27a4-b097-febc-1bc3-2ad7a432b49a\",\"created_platform\":3,\"created_platform_version\":\"\",\"created_time_in_ms\":\"1770799600615\",\"created_did\":\"\"},\"generate_type\":\"gen_video\",\"abilities\":{\"type\":\"\",\"id\":\"8ddc8cdf-0c49-c2c9-57bb-a27463a6b477\",\"gen_video\":{\"type\":\"\",\"id\":\"83f55500-f3cc-b442-7ce1-2bd6eb3dc540\",\"text_to_video_params\":{\"type\":\"\",\"id\":\"2b8af1dc-2f3f-bf97-7233-de34cbb57f4a\",\"video_gen_inputs\":[{\"type\":\"\",\"id\":\"4df852db-bfbe-2c64-1474-7750d3f01b92\",\"min_version\":\"3.3.9\",\"prompt\":\"\",\"video_mode\":2,\"fps\":24,\"duration_ms\":5000,\"idip_meta_list\":[],\"unified_edit_input\":{\"type\":\"\",\"id\":\"826e7a69-d292-7816-f467-7ee2c497b9fa\",\"material_list\":[{\"type\":\"\",\"id\":\"a5cba3fb-0290-c163-8a53-2dddfcf91122\",\"material_type\":\"image\",\"image_info\":{\"type\":\"image\",\"id\":\"c1f1eda9-f1b6-0eb6-b705-9acc2e29cf08\",\"source_from\":\"upload\",\"platform_type\":1,\"name\":\"\",\"image_uri\":\"tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f\",\"width\":682,\"height\":708,\"format\":\"\",\"uri\":\"tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f\"}}],\"meta_list\":[{\"meta_type\":\"text\",\"text\":\"中东土豪，香车美女逛街泡温泉\"}]}}],\"video_aspect_ratio\":\"1:1\",\"seed\":2176441649,\"model_req_key\":\"dreamina_seedance_40_pro\",\"priority\":0},\"video_task_extra\":\"{\\\"isDefaultSeed\\\":1,\\\"originSubmitId\\\":\\\"e12e4e52-ced7-4126-bef4-6066ccbaefb5\\\",\\\"isRegenerate\\\":false,\\\"enterFrom\\\":\\\"click\\\",\\\"position\\\":\\\"page_bottom_box\\\",\\\"functionMode\\\":\\\"omni_reference\\\",\\\"sceneOptions\\\":\\\"[{\\\\\\\"type\\\\\\\":\\\\\\\"video\\\\\\\",\\\\\\\"scene\\\\\\\":\\\\\\\"BasicVideoGenerateButton\\\\\\\",\\\\\\\"modelReqKey\\\\\\\":\\\\\\\"dreamina_seedance_40_pro\\\\\\\",\\\\\\\"videoDuration\\\\\\\":5,\\\\\\\"reportParams\\\\\\\":{\\\\\\\"enterSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"vipSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"extraVipFunctionKey\\\\\\\":\\\\\\\"dreamina_seedance_40_pro\\\\\\\",\\\\\\\"useVipFunctionDetailsReporterHoc\\\\\\\":true},\\\\\\\"materialTypes\\\\\\\":[1]}]\\\"}\"}},\"process_type\":1}]}","http_common_info":{"aid":513695}}'

```
### 生成结果返回
```
{
    "ret": "0",
    "errmsg": "success",
    "systime": "1770799600",
    "logid": "202602111646408F660FF5CC6FD0044178", //和get_asset_list里的generate_id关联上
    "data": {
        "aigc_data": {
            "generate_type": 10,
            "history_record_id": "9481749473292",
            "origin_history_record_id": null,
            "created_time": 1770799601.029,
            "item_list": [],
            "origin_item_list": [],
            "task": {
                "task_id": "9481749473292",
                "submit_id": "e12e4e52-ced7-4126-bef4-6066ccbaefb5",
                "aid": 0,
                "status": 20,
                "finish_time": 0,
                "history_id": "9481749473292",
                "task_payload": null,
                "original_input": null,
                "req_first_frame_image": null,
                "ai_gen_prompt": "",
                "priority": 0,
                "lip_sync_info": null,
                "multi_size_first_frame_image": null,
                "multi_size_end_frame_image": null,
                "process_flows": null,
                "create_time": 0,
                "aigc_image_params": null,
                "ref_item": null,
                "resp_ret": {
                    "ret": "0"
                }
            },
            "mode": "workbench",
            "asset_option": {
                "has_favorited": false
            },
            "uid": "2856952374767401",
            "aigc_flow": {
                "version": "3.3.9"
            },
            "status": 20,
            "history_group_key_md5": "72abc998033a9e392b28c05792c70fcd",
            "history_group_key": "#generate_video",
            "draft_content": "{\"type\":\"draft\",\"id\":\"0005e0fb-7a8e-bc4a-45ea-c3fb0fbb6585\",\"min_version\":\"3.3.9\",\"min_features\":[\"AIGC_Video_UnifiedEdit\"],\"is_from_tsn\":true,\"version\":\"3.3.9\",\"main_component_id\":\"8181bfe9-8934-0e9e-49da-8750a23fbfe1\",\"component_list\":[{\"type\":\"video_base_component\",\"id\":\"8181bfe9-8934-0e9e-49da-8750a23fbfe1\",\"min_version\":\"1.0.0\",\"aigc_mode\":\"workbench\",\"gen_type\":10,\"metadata\":{\"type\":\"\",\"id\":\"fbbc27a4-b097-febc-1bc3-2ad7a432b49a\",\"created_platform\":3,\"created_platform_version\":\"\",\"created_time_in_ms\":\"1770799600615\",\"created_did\":\"\"},\"generate_type\":\"gen_video\",\"abilities\":{\"type\":\"\",\"id\":\"8ddc8cdf-0c49-c2c9-57bb-a27463a6b477\",\"gen_video\":{\"type\":\"\",\"id\":\"83f55500-f3cc-b442-7ce1-2bd6eb3dc540\",\"text_to_video_params\":{\"type\":\"\",\"id\":\"2b8af1dc-2f3f-bf97-7233-de34cbb57f4a\",\"video_gen_inputs\":[{\"type\":\"\",\"id\":\"4df852db-bfbe-2c64-1474-7750d3f01b92\",\"min_version\":\"3.3.9\",\"prompt\":\"\",\"video_mode\":2,\"fps\":24,\"duration_ms\":5000,\"idip_meta_list\":[],\"unified_edit_input\":{\"type\":\"\",\"id\":\"826e7a69-d292-7816-f467-7ee2c497b9fa\",\"material_list\":[{\"type\":\"\",\"id\":\"a5cba3fb-0290-c163-8a53-2dddfcf91122\",\"material_type\":\"image\",\"image_info\":{\"type\":\"image\",\"id\":\"c1f1eda9-f1b6-0eb6-b705-9acc2e29cf08\",\"source_from\":\"upload\",\"platform_type\":1,\"name\":\"\",\"image_uri\":\"tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f\",\"width\":682,\"height\":708,\"format\":\"\",\"uri\":\"tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f\"}}],\"meta_list\":[{\"meta_type\":\"text\",\"text\":\"中东土豪，香车美女逛街泡温泉\"}]}}],\"video_aspect_ratio\":\"1:1\",\"seed\":2176441649,\"model_req_key\":\"dreamina_seedance_40_pro\",\"priority\":0},\"video_task_extra\":\"{\\\"isDefaultSeed\\\":1,\\\"originSubmitId\\\":\\\"e12e4e52-ced7-4126-bef4-6066ccbaefb5\\\",\\\"isRegenerate\\\":false,\\\"enterFrom\\\":\\\"click\\\",\\\"position\\\":\\\"page_bottom_box\\\",\\\"functionMode\\\":\\\"omni_reference\\\",\\\"sceneOptions\\\":\\\"[{\\\\\\\"type\\\\\\\":\\\\\\\"video\\\\\\\",\\\\\\\"scene\\\\\\\":\\\\\\\"BasicVideoGenerateButton\\\\\\\",\\\\\\\"modelReqKey\\\\\\\":\\\\\\\"dreamina_seedance_40_pro\\\\\\\",\\\\\\\"videoDuration\\\\\\\":5,\\\\\\\"reportParams\\\\\\\":{\\\\\\\"enterSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"vipSource\\\\\\\":\\\\\\\"generate\\\\\\\",\\\\\\\"extraVipFunctionKey\\\\\\\":\\\\\\\"dreamina_seedance_40_pro\\\\\\\",\\\\\\\"useVipFunctionDetailsReporterHoc\\\\\\\":true},\\\\\\\"materialTypes\\\\\\\":[1]}]\\\"}\"}},\"process_type\":1}]}",
            "resources": [
                {
                    "key": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                    "type": "image",
                    "name": "",
                    "platform": 1,
                    "image_info": {
                        "image_uri": "tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f",
                        "image_url": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:0:0.image?lk3s=8e790bc3\u0026x-expires=1802335601\u0026x-signature=MxxpLPDtRx7G%2Bn7akVSPdgrl0O8%3D",
                        "width": 682,
                        "height": 708,
                        "format": "png",
                        "cover_url_map": {
                            "1080": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335601\u0026x-signature=XkXeYL38MRFzuIQrddhE0iWCI4I%3D",
                            "2400": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335601\u0026x-signature=fNDimJmPbwAvfymWrlpDAeVvF5A%3D",
                            "360": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:346:360.webp?lk3s=8e790bc3\u0026x-expires=1802335601\u0026x-signature=uNRp8%2BnFMzoY9lZGiwdhviYtH20%3D",
                            "4096": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335601\u0026x-signature=fNDimJmPbwAvfymWrlpDAeVvF5A%3D",
                            "480": "https://p3-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:462:480.webp?lk3s=8e790bc3\u0026x-expires=1802335601\u0026x-signature=CMr456jV0k%2FxuE%2F0R%2B2NgwvVrpE%3D",
                            "720": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/409b27a6e6704a46a91596435fa74c5f~tplv-tb4s082cfz-resize:682:708.webp?lk3s=8e790bc3\u0026x-expires=1802335601\u0026x-signature=fNDimJmPbwAvfymWrlpDAeVvF5A%3D"
                        },
                        "smart_crop_loc": null
                    }
                }
            ],
            "task_rets": [
                {}
            ],
            "submit_id": "e12e4e52-ced7-4126-bef4-6066ccbaefb5",
            "capflow_id": "e12e4e52-ced7-4126-bef4-6066ccbaefb5",
            "metrics_extra": "{\"isDefaultSeed\":1,\"originSubmitId\":\"e12e4e52-ced7-4126-bef4-6066ccbaefb5\",\"isRegenerate\":false,\"enterFrom\":\"click\",\"position\":\"page_bottom_box\",\"functionMode\":\"omni_reference\",\"sceneOptions\":\"[{\\\"type\\\":\\\"video\\\",\\\"scene\\\":\\\"BasicVideoGenerateButton\\\",\\\"modelReqKey\\\":\\\"dreamina_seedance_40_pro\\\",\\\"videoDuration\\\":5,\\\"reportParams\\\":{\\\"enterSource\\\":\\\"generate\\\",\\\"vipSource\\\":\\\"generate\\\",\\\"extraVipFunctionKey\\\":\\\"dreamina_seedance_40_pro\\\",\\\"useVipFunctionDetailsReporterHoc\\\":true},\\\"materialTypes\\\":[1]}]\"}",
            "generate_id": "202602111646408F660FF5CC6FD0044178",
            "finish_time": 0,
            "model_info": {
                "icon_url": "https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/Seedance2.0.jpg~tplv-tb4s082cfz-resize:0:0.webp?lk3s=8e790bc3\u0026x-expires=1802335601\u0026x-signature=kdRfAGpHDqXUuQwfPmVo1WWHgds%3D",
                "model_name_starling_key": "video_seedance_2_pro_name",
                "model_tip_starling_key": "video_seedance_2_pro_des",
                "model_req_key": "dreamina_seedance_40_pro",
                "model_name": "Seedance 2.0",
                "commercial_config": {
                    "commerce_info_map": {
                        "basic": {
                            "resource_sub_type": "aigc",
                            "resource_id_type": "str",
                            "resource_id": "generate_video",
                            "benefit_type": "dreamina_video_seedance_20_pro",
                            "amount": 0
                        },
                        "retry": {
                            "resource_sub_type": "aigc",
                            "resource_id_type": "str",
                            "resource_id": "generate_video",
                            "benefit_type": "dreamina_video_seedance_20_pro",
                            "amount": 0
                        }
                    },
                    "image_model_commerce_config": null
                },
                "video_model_options": [
                    {
                        "key": "resolution",
                        "value_type": "enum",
                        "enum_val": {
                            "enum_type": "string",
                            "string_value": [
                                "720p"
                            ],
                            "double_value": null,
                            "int_value": null,
                            "default_val_idx": 0
                        },
                        "forbidden_display": true,
                        "lens_motion_val": null
                    },
                    {
                        "key": "unified_edit",
                        "value_type": "unified_edit",
                        "forbidden_display": false,
                        "lens_motion_val": null,
                        "unified_edit_config": {
                            "supported_materials": [
                                {
                                    "material_type": 1,
                                    "limit": {
                                        "max_count": 9
                                    }
                                },
                                {
                                    "material_type": 2,
                                    "limit": {
                                        "max_count": 3,
                                        "max_duration": 15,
                                        "min_duration": 2,
                                        "max_width": 2160,
                                        "max_height": 2160,
                                        "min_width": 200,
                                        "min_height": 200,
                                        "max_file_size": 50
                                    }
                                },
                                {
                                    "material_type": 3,
                                    "limit": {
                                        "max_count": 3,
                                        "max_duration": 15,
                                        "min_duration": 2,
                                        "max_file_size": 15
                                    }
                                }
                            ],
                            "max_total_count": 12,
                            "max_total_video_duration": 15,
                            "max_total_audio_duration": 15,
                            "required_material_types": {
                                "any_of": [
                                    1,
                                    2
                                ],
                                "tips_starling_key": "video_seedance_2_audio_needed"
                            }
                        }
                    },
                    {
                        "key": "input_media_type",
                        "value_type": "enum",
                        "enum_val": {
                            "enum_type": "string",
                            "string_value": [
                                "unified_edit",
                                "prompt",
                                "first_frame",
                                "end_frame"
                            ],
                            "double_value": null,
                            "int_value": null,
                            "default_val_idx": 0
                        },
                        "forbidden_display": false,
                        "lens_motion_val": null
                    },
                    {
                        "key": "frames",
                        "value_type": "enum",
                        "enum_val": {
                            "enum_type": "int",
                            "string_value": null,
                            "double_value": null,
                            "int_value": [
                                96,
                                120,
                                144,
                                168,
                                192,
                                216,
                                240,
                                264,
                                288,
                                312,
                                336,
                                360
                            ],
                            "default_val_idx": 0
                        },
                        "forbidden_display": false,
                        "lens_motion_val": null
                    },
                    {
                        "key": "fps",
                        "value_type": "enum",
                        "enum_val": {
                            "enum_type": "int",
                            "string_value": null,
                            "double_value": null,
                            "int_value": [
                                24
                            ],
                            "default_val_idx": 0
                        },
                        "forbidden_display": true,
                        "lens_motion_val": null
                    },
                    {
                        "key": "video_aspect_ratio",
                        "value_type": "enum",
                        "enum_val": {
                            "enum_type": "string",
                            "string_value": [
                                "21:9",
                                "16:9",
                                "4:3",
                                "1:1",
                                "3:4",
                                "9:16"
                            ],
                            "double_value": null,
                            "int_value": null,
                            "default_val_idx": 1
                        },
                        "forbidden_display": false,
                        "lens_motion_val": null
                    }
                ]
            },
            "forecast_generate_cost": 537,
            "forecast_queue_cost": 34023,
            "fail_starling_key": "",
            "fail_starling_message": "",
            "min_feats": [
                "AIGC_Video_UnifiedEdit"
            ],
            "queue_info": {
                "queue_idx": 47460,
                "priority": 5,
                "queue_status": 1,
                "queue_length": 47460,
                "polling_config": {
                    "interval_seconds": 30,
                    "timeout_seconds": 86400
                },
                "priority_queue_display_threshold": {
                    "vip_queuing_time_threshold": 300,
                    "waiting_time_threshold": 60
                }
            },
            "agent_history_id": null,
            "total_image_count": 0,
            "finished_image_count": 0,
            "confirm_status": 0,
            "confirm_token": "",
            "image_type": 0,
            "pre_gen_item_ids": [
                "7605526330758794506"
            ],
            "forecast_resolution": {
                "width": 960,
                "height": 960
            }
        },
        "fail_code": "",
        "fail_starling_key": "",
        "fail_starling_message": ""
    }
}
```