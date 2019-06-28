$(document).ready(function(){
	//$("#pic_url").val(chrome.storage.sync.get('pic_url'));
	$("#save").click(function(){
		//var pic_re = 
		
		chrome.storage.sync.set(
			{
				discont_group_info:$("#discont_group_info").val(),
			},
			function(){
				$("#s").fadeIn();
				setTimeout(function(){
					$("#s").fadeOut();
				},600);
			}
		);
	});
	
	chrome.storage.sync.get({discont_group_info:""},function(item){
		$("#discont_group_info").val(item.discont_group_info);
		console.log(item);
	});
});

