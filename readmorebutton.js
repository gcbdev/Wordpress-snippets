jQuery(document).ready(function($) {
    console.log("Test Test Test");
  
    // Define the content element
    var content = $('.prod-desc .elementor-widget-container');
  
    // Define the maximum number of characters to display
    var max_chars = 450;
  
    // Store the full content in a variable
    var full_content = content.html();
  
    // Check if the content exceeds the maximum number of characters
    if (full_content.length > max_chars) {
      // Truncate the content
      var truncated = full_content.substr(0, max_chars) + '...';
  
      // Replace the content with the truncated content
      content.html(truncated);
  
      // Append the "Read More" button
      var read_more_button = $('<button>', {
        text: 'Read More',
        class: 'read-more-btn read-more-less-btn'
      });
      content.append(read_more_button);
  
      // Add a click event listener to the "Read More" button
      read_more_button.click(function() {
        // Replace the truncated content with the original content
        content.html(full_content);
  
        // Append the "Read Less" button
        var read_less_button = $('<button>', {
          text: 'Read Less',
          class: 'read-less-btn read-more-less-btn'
        });
        content.append(read_less_button);
  
        // Add a click event listener to the "Read Less" button
        read_less_button.click(function() {
          // Replace the full content with the truncated content
          content.html(truncated);
  
          // Re-append the "Read More" button
          content.append(read_more_button);
  
          // Remove the "Read Less" button
          read_less_button.remove();
        });
  
        // Remove the "Read More" button
        read_more_button.remove();
      });
    }
  
    // Add a click event listener to the re-appended "Read More" button
    content.on('click', '.read-more-btn', function() {
      // Replace the truncated content with the original content
      content.html(full_content);
  
      // Append the "Read Less" button
      var read_less_button = $('<button>', {
        text: 'Read Less',
        class: 'read-less-btn read-more-less-btn'
      });
      content.append(read_less_button);
  
      // Add a click event listener to the "Read Less" button
      read_less_button.click(function() {
        // Replace the full content with the truncated content
        content.html(truncated);
  
        // Re-append the "Read More" button
        content.append(read_more_button);
  
        // Remove the "Read Less" button
        read_less_button.remove();
      });
    });
  });

