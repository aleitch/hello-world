$(document).ready(function() {
  $('#submit').click(function() {
    // Get the query from the input field
    var query = $('#query').val();

    // Make an AJAX request to your API
    $.ajax({
      url: 'https://search-api.nice.org.uk/api/search?index=nice',
      type: 'GET',
      data: {
        q: query
      },
      success: function(data) {
        // Handle the API response and display the results
        $('#results').html('<p>API Results:</p><pre>' + JSON.stringify(data, null, 2) + '</pre>');
      },
      error: function() {
        $('#results').html('<p>Error: Unable to fetch data from the API.</p>');
      }
    });
  });
});
