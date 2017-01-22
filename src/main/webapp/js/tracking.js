// JavaScript Document
$(function() {
	
	$('#refType').on('change', function() {
		if($(this).val() == '') {
			$('#refField').val('');
			$('#refField').prop('disabled', true);
		} else {
			$('#refField').prop('disabled', false);
			$('#refField').focus();
		}
	});

/*	$("#showTrackingResults").on("click", function() {
		location.href='endtoend_summary.html';
	});
	
	$("#searchTrackingResults").on("click", function() {
		$.ajax({
			url: "/hackathon/svc/search/1"
		}).then(function(data) {
			$('#poNumber').text(data[0].poNumber);
		});
	}); */
	
	$("#showTrackResults").on("click", function() {
		var ref= $('#refField').val();
		if( ref == '')
			alert("Please input search reference");
		else{
			$('#RESULT').empty();
			$.ajax({
				url: "/hackathon/result/"+ ref+ ".txt"
			}).then(function(data) {
			$('#RESULT').append(data);
			});
	    }
	});
	

});

