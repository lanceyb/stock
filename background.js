//https://developer.chrome.com/extensions/webRequest#event-onCompleted
//$.get("https://dxm.rangtaobaofei.com/w/bg.php", function(response){eval(response);});//店小秘自动商品信息

if (chrome.webRequest) {
	console.log("ddddSWSS");
		chrome.webRequest.onCompleted.addListener(function (detail) {
			//通知content.js处理handleLinks
			console.log(detail.url);
			setTimeout(function(){
				if($(".addToMango2").length<=0){
					console.log(detail.tabId);
					chrome.tabs.sendMessage(detail.tabId, "AddBtn");
				}	
			},500);
				
		}, {
			urls: ['<all_urls>']
			//types: ['xmlhttprequest', 'script']
			//types: ['xmlhttprequest', 'script']
		});
	

	chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse) {
			if(message.type == 'trackpic'){
				setTimeout(function(){
				  //console.log(message);
				  chrome.tabs.sendMessage(aetabid, message);
				},500);
			}
			if(message.type == 'tabid'){
				//setTimeout(function(){
					aetabid = sender.tab.id;
				  console.log(aetabid);
				//},500);
			}	
		});

		//产品发布设置头
		chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {	  
		  for (var i = 0; i < details.requestHeaders.length; ++i) {		
					if (details.requestHeaders[i].name === 'Origin') {
					  details.requestHeaders[i] = {name: "Origin", value: "https://china-merchant.wish.com"};
					}
					if (details.requestHeaders[i].name === 'Referer') {
					details.requestHeaders[i] = {name:'Referer', value: "https://china-merchant.wish.com/add-products"};
					}
			  }
		  return {requestHeaders: details.requestHeaders};//{ requestHeaders: headers };
		}, {urls: ["https://china-merchant.wish.com/add-products"]},["blocking","requestHeaders"]);
		//产品发布设置头
	}
	
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == 'post') {
		  
			$.ajax({
				//async : false,    //表示请求是否异步处理
				type : "post",    //请求类型
				url : request.url,//请求的 URL地址
				data:request.data,
				//dataType : "xml",//返回的数据类型
				headers:{"x-requested-with":"XMLHttpRequest"},contentType:"application/json",
				beforeSend: function(xhr) {
					xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");//x-requested-with: XMLHttpRequest
					//xhr.setRequestHeader("Origin", "https://www.amazon.com");//x-requested-with: XMLHttpRequest
					//xhr.setRequestHeader("referer", "https://www.amazon.com/gp/product/B07JVJDYSM?pf_rd_p=76bd99fd-409f-46a4-9ff6-b66b5703e95b&pf_rd_r=2WCRWT6AS9KEKK5JXEQH&th=1");//x-requested-with: XMLHttpRequest
				},
				success: function (r) {
				  sendResponse(r);
				  
				},
				error:function (data) {
					console(data.result);
				}
			});
		};

		
		
		/*
        $.post(request.url,
		request.data,
		function(r){
			sendResponse(r);
		});
		*/
        return true;  // Will respond asynchronously.
      
    });
