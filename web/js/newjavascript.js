

[{"screenName":"Main","screenId":0,"screenComment":"","animate":0,"castom":"","typeScreen":0,"title":"","titleParam":"","components":[{"type":"ToolBar","componId":9,"model":{},"view":{"viewId":"tool_bar","title":"","titleParam":""}},{"type":"MenuBottom","componId":10,"model":{"menuList":{"list":[{"id_field":0,"icon":"projectdataIDE/w0tnwftvlk58lb2/res/drawable-hdpi/news.png","title":"Nnnnnnn","screen":"nnn","start":true,"divider":false,"badge":""},{"id_field":1,"icon":"projectdataIDE/w0tnwftvlk58lb2/res/drawable-hdpi/even.png","title":"Eeeeeee","screen":"eee","start":false,"divider":false,"badge":""}]}},"view":{"viewId":"menu_b"},"navigator":[]}],"textErrors":"","levelErrors":0,"navigator":[],"initData":[],"layout":{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"width":-1,"height":-1,"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"itemNav":{},"viewId":"root","children":[{"type":"ToolBar","componId":9,"viewId":"tool_bar","typeUxUi":"ux","componParam":{"type":0},"typeFull":{"name":"ToolBar","typeBlock":0},"gravLayout":{"h":3,"v":3},"gravity":{"h":4,"v":4},"width":-1,"height":56,"topMarg":"","leftMarg":"","itemNav":{},"textColor":19,"textSize":20,"background":1999,"children":[],"imgBack":"projectdataIDE/w0tnwftvlk58lb2/res/drawable-hdpi/icon_menu.png"},{"type":"MenuBottom","componId":10,"viewId":"menu_b","typeUxUi":"ux","componParam":{"type":1},"typeFull":{"name":"MenuBottom","typeBlock":0},"gravLayout":{"h":3,"v":2},"gravity":{"h":4,"v":4},"colorSet":{"textColor":3,"textSelect":4,"badgeColor":4,"enabledColor":6,"toAnimate":true,"changeColor":true,"background":"","location":"top"},"width":-1,"height":56,"topMarg":"","leftMarg":"","itemNav":{},"background":0,"children":[]}]}},{"screenName":"nnn","screenId":1,"screenComment":"","animate":0,"castom":"","typeScreen":1,"title":"Nnnnnnn","titleParam":"","components":[{"type":"List","componId":11,"model":{"method":0,"data":[[{"name":"img","type":"Img"},{"name":"title","type":"Text"}]],"progr":"standard","param":"","url":"query/w0tnwftvlk58lb2/1"},"view":{"viewId":"list","spanC":1,"orient":"vertical","no_data":""},"options":{"isCascade":false,"nextId":"","enterId":"","nameGlob":"","listVar":"","first":false},"navigator":[{"id_field":0,"viewId":"0","handler":"start","param":"detail_n","param_1":"","id":"","after":false}]}],"textErrors":"<span class=\"colorErrorL1\">[object Object]</span><br>","levelErrors":0,"navigator":[],"initData":[],"layout":{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"width":-1,"height":-1,"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"itemNav":{},"viewId":"root","children":[{"type":"List","componId":11,"viewId":"list","typeUxUi":"ux","componParam":{"type":2},"typeFull":{"name":"List","typeBlock":10},"gravLayout":{"h":3,"v":3},"gravity":{"h":4,"v":4},"width":-1,"height":-1,"itemNav":{},"children":[{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"viewId":"T_0","typeUxUi":"ui","gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"width":-1,"height":120,"children":[{"typeUxUi":"ui","type":"ImageView","typeFull":{"name":"ImageView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"scaleType":0,"viewId":"img","itemNav":{},"width":120,"height":120,"src":"img/picture.png","componParam":{"borderColor":0,"w_bord":0,"oval":false}},{"typeUxUi":"ui","type":"TextView","typeFull":{"name":"TextView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"text":"title","viewId":"title","textSize":22,"letterSpac":"0.0","componParam":{"typeValidTV":"no","format":"no","ellipsize":"none","maxLine":0},"itemNav":{},"width":-1,"height":-2,"topMarg":16,"leftMarg":12,"toRightOf":"img","textColor":"13","rightMarg":"12"},{"typeUxUi":"ui","type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"gravLayout":{"h":4,"v":2},"gravity":{"h":4,"v":4},"width":-1,"height":1,"background":6,"children":[],"itemNav":{}}],"itemNav":{}}]}]}},{"screenName":"eee","screenId":2,"screenComment":"","animate":0,"castom":"","typeScreen":1,"title":"Eeeeeee","titleParam":"","components":[{"type":"TabLayout","componId":13,"model":{"menuList":{"list":[{"id_field":0,"title":"Было","screen":"bef"},{"id_field":1,"title":"Будет","screen":"aft"}]}},"view":{"viewId":"tab_layout"}},{"type":"Pager","componId":14,"model":{},"view":{"viewId":"pager","tabLayout":"tab_layout"}}],"textErrors":"","levelErrors":0,"navigator":[],"initData":[],"layout":{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"width":-1,"height":-1,"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"itemNav":{},"viewId":"root","children":[{"type":"TabLayout","componId":13,"viewId":"tab_layout","typeUxUi":"ux","componParam":{"type":5},"typeFull":{"name":"TabLayout","typeBlock":0},"gravLayout":{"h":3,"v":3},"gravity":{"h":4,"v":4},"tabLayout":{"indColor":"1","textColor":"0","textSelect":"1","indHeight":"3"},"width":-1,"height":56,"background":"19","itemNav":{},"children":[]},{"type":"Pager","componId":14,"viewId":"pager","typeUxUi":"ux","componParam":{"type":4},"typeFull":{"name":"Pager","typeBlock":0},"gravLayout":{"h":3,"v":3},"gravity":{"h":4,"v":4},"width":-1,"height":-1,"itemNav":{},"children":[],"below":"tab_layout"}]}},{"screenName":"detail_n","screenId":3,"screenComment":"","animate":0,"castom":"","typeScreen":1,"title":"","titleParam":"","components":[{"type":"ScrollPanel","componId":12,"model":{"method":0,"data":[[{"name":"img","type":"Img"},{"name":"title","type":"Text"},{"name":"txt1","type":"Text"},{"name":"gal","type":"Gallery"},{"name":"txt2","type":"Text"}]],"progr":"standard","param":"id_news","url":"query/w0tnwftvlk58lb2/2"},"view":{"viewId":"scroll_panel"},"navigator":[]}],"textErrors":"<span class=\"colorErrorL1\">[object Object]</span><br>","levelErrors":0,"navigator":[],"initData":[],"layout":{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"width":-1,"height":-1,"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"itemNav":{},"viewId":"root","children":[{"type":"ScrollPanel","componId":12,"viewId":"scroll_panel","typeUxUi":"ux","componParam":{"type":9},"typeFull":{"name":"ScrollPanel","typeBlock":10},"gravLayout":{"h":3,"v":3},"gravity":{"h":4,"v":4},"width":-1,"height":-1,"itemNav":{},"children":[{"typeUxUi":"ui","type":"ImageView","typeFull":{"name":"ImageView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"scaleType":0,"viewId":"img","itemNav":{},"width":-1,"height":240,"src":"img/picture.png"},{"typeUxUi":"ui","type":"TextView","typeFull":{"name":"TextView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"text":"title","viewId":"title","textSize":22,"letterSpac":"0.0","componParam":{"typeValidTV":"no","format":"no","ellipsize":"none","maxLine":0},"itemNav":{},"width":-1,"height":-2,"below":"img","topMarg":"12","leftMarg":12,"rightMarg":"12","textColor":"13"},{"typeUxUi":"ui","type":"TextView","typeFull":{"name":"TextView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"text":"txt1","viewId":"txt1","textSize":14,"letterSpac":"0.0","componParam":{"typeValidTV":"no","format":"no","ellipsize":"none","maxLine":0},"itemNav":{},"width":-1,"height":-2,"below":"title","topMarg":10,"leftMarg":12,"textColor":"12","rightMarg":"12"},{"typeUxUi":"ui","type":"Gallery","typeFull":{"name":"Gallery","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"viewId":"gal","itemNav":{},"width":-1,"height":230,"rightMarg":12,"src":"img/picture.png","componParam":{"type":8,"bindEl":"ind"},"below":"txt1","topMarg":10,"leftMarg":12},{"typeUxUi":"ui","type":"TextView","typeFull":{"name":"TextView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"text":"txt2","viewId":"txt2","textSize":14,"letterSpac":"0.0","componParam":{"typeValidTV":"no","format":"no","ellipsize":"none","maxLine":0},"itemNav":{},"width":-1,"height":-2,"below":"gal","topMarg":10,"leftMarg":12,"rightMarg":"12","textColor":"12"},{"typeUxUi":"ui","children":[],"type":"Indicator","typeFull":{"name":"Indicator","typeBlock":0},"gravLayout":{"h":1,"v":3},"gravity":{"h":4,"v":4},"width":-2,"height":-2,"topMarg":"210","leftMarg":"","itemNav":{},"componParam":{"diam":7,"colorNorm":3,"colorSel":100,"type":10},"toRightOf":"","toLeftOf":"","below":"txt1","viewId":"ind"}]}]}},{"screenName":"bef","screenId":4,"screenComment":"","animate":0,"castom":"","typeScreen":1,"title":"Было","titleParam":"","components":[{"type":"List","componId":15,"model":{"method":0,"data":[[{"name":"img","type":"Img"},{"name":"title","type":"Text"},{"name":"dat","type":"Date"}]],"progr":"standard","param":"","url":"query/w0tnwftvlk58lb2/3"},"view":{"viewId":"list","spanC":1,"orient":"vertical","no_data":""},"options":{"isCascade":false,"nextId":"","enterId":"","nameGlob":"","listVar":"","first":false},"navigator":[]}],"textErrors":"<span class=\"colorErrorL1\">[object Object]</span><br>","levelErrors":0,"navigator":[],"initData":[],"layout":{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"width":-1,"height":-1,"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"itemNav":{},"viewId":"root","children":[{"type":"List","componId":15,"viewId":"list","typeUxUi":"ux","componParam":{"type":2},"typeFull":{"name":"List","typeBlock":10},"gravLayout":{"h":3,"v":3},"gravity":{"h":4,"v":4},"width":-1,"height":-1,"itemNav":{},"children":[{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"viewId":"T_0","typeUxUi":"ui","gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"width":-1,"height":-2,"children":[{"typeUxUi":"ui","type":"ImageView","typeFull":{"name":"ImageView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"scaleType":0,"viewId":"img","itemNav":{},"width":-1,"height":240,"src":"img/picture.png"},{"typeUxUi":"ui","type":"TextView","typeFull":{"name":"TextView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"text":"title","viewId":"title","textSize":22,"letterSpac":"0.0","componParam":{"typeValidTV":"no","format":"no","ellipsize":"none","maxLine":0},"itemNav":{},"width":-1,"height":-2,"below":"img","topMarg":10,"leftMarg":12,"rightMarg":"12","textColor":"13"},{"typeUxUi":"ui","type":"TextView","typeFull":{"name":"TextView","typeBlock":0},"gravLayout":{"h":2,"v":4},"gravity":{"h":4,"v":4},"text":"dat","viewId":"dat","textSize":14,"letterSpac":"0.0","componParam":{"typeValidTV":"no","format":"dd.MM.yy","ellipsize":"none","maxLine":0},"itemNav":{},"width":-2,"height":-2,"below":"title","topMarg":10,"leftMarg":12,"toRightOf":"","toLeftOf":"","rightMarg":"12","textColor":"12"},{"typeUxUi":"ui","type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"width":-1,"height":1,"background":6,"children":[],"itemNav":{},"below":"dat","topMarg":12}],"itemNav":{}}]}]}},{"screenName":"aft","screenId":5,"screenComment":"","animate":0,"castom":"","typeScreen":1,"title":"Будет","titleParam":"","components":[{"type":"List","componId":16,"model":{"method":0,"data":[[{"name":"img","type":"Img"},{"name":"title","type":"Text"},{"name":"dat","type":"Date"}]],"progr":"standard","param":"","url":"query/w0tnwftvlk58lb2/4"},"view":{"viewId":"list","spanC":1,"orient":"vertical","no_data":""},"options":{"isCascade":false,"nextId":"","enterId":"","nameGlob":"","listVar":"","first":false},"navigator":[]}],"textErrors":"<span class=\"colorErrorL1\">[object Object]</span><br>","levelErrors":0,"navigator":[],"initData":[],"layout":{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"width":-1,"height":-1,"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"itemNav":{},"viewId":"root","children":[{"type":"List","componId":16,"viewId":"list","typeUxUi":"ux","componParam":{"type":2},"typeFull":{"name":"List","typeBlock":10},"gravLayout":{"h":3,"v":3},"gravity":{"h":4,"v":4},"width":-1,"height":-1,"itemNav":{},"children":[{"type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"viewId":"T_0","typeUxUi":"ui","gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"width":-1,"height":-2,"children":[{"typeUxUi":"ui","type":"ImageView","typeFull":{"name":"ImageView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"scaleType":0,"viewId":"img","itemNav":{},"width":-1,"height":240,"src":"img/picture.png"},{"typeUxUi":"ui","type":"TextView","typeFull":{"name":"TextView","typeBlock":0},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"text":"title","viewId":"title","textSize":22,"letterSpac":"0.0","componParam":{"typeValidTV":"no","format":"no","ellipsize":"none","maxLine":0},"itemNav":{},"width":-1,"height":-2,"below":"img","topMarg":10,"leftMarg":12,"textColor":"13","rightMarg":"12"},{"typeUxUi":"ui","type":"TextView","typeFull":{"name":"TextView","typeBlock":0},"gravLayout":{"h":2,"v":4},"gravity":{"h":4,"v":4},"text":"dat","viewId":"dat","textSize":14,"letterSpac":"0.0","componParam":{"typeValidTV":"no","format":"dd.MM.yy","ellipsize":"none","maxLine":0},"itemNav":{},"width":-2,"height":-2,"below":"title","topMarg":10,"leftMarg":12,"toRightOf":"","toLeftOf":"","rightMarg":"12","textColor":"12"},{"typeUxUi":"ui","type":"RelativeLayout","typeFull":{"name":"RelativeLayout","typeBlock":2},"gravLayout":{"h":4,"v":4},"gravity":{"h":4,"v":4},"width":-1,"height":1,"background":6,"children":[],"itemNav":{},"below":"dat","topMarg":12}],"itemNav":{}}]}]}}]












