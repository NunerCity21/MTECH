$(document).ready(function() {
    $('#submit').click(function() {
        var displayName = $('#displayName').val();
        var comment = $('#comment').val();
        if (displayName && comment) {
            var newPost = `
                <div class="post">
                    <div class="postContent">
                        <div class="profilePhoto">
                            <img src="Pic.png" alt="Profile Photo">
                        </div>
                        <div class="postText">
                            <p>${displayName}</p>
                            <h1>${comment}</h1>
                        </div>
                        <div class="editingText"></div>
                    </div>
                    <div class="postButtons">
                        <p type="button" class="editButton">Edit</p>
                        <p type="button" class="deleteButton">Delete</p>
                    </div>
                </div>
            `;
            $('.postContainer').prepend(newPost);
            $('#displayName').val('');
            $('#comment').val('');
        }
    });
    

    $('#posts').on('click', '.deleteButton', function() {
        $(this).closest('.post').remove();
    });

    $('#posts').on('click', '.editButton', function() {
        var post = $(this).closest('.post');
        post.addClass('editing');
        post.find('.editingText').remove();
        
        var editingTextDiv = $(`
            <div class="editingText">
                <input type="text" id="editText" placeholder="Edit Your Comment">
                <div id="editControls">
                    <p type="button" id="submitEdit">Submit</p>
                </div>
            </div>
        `);
    
        post.find('.postContent').append(editingTextDiv);
    });
    

    $('#posts').on('click', '#submitEdit', function() {
        var editedComment = $('#editText').val();
        if (editedComment) {
            var post = $(this).closest('.post');
            post.removeClass('editing');
            var postContent = post.find('.postContent');
            var editingTextDiv = postContent.children('.editingText');
            var h1Element = postContent.find('h1');
            h1Element.text(editedComment);
            editingTextDiv.remove();
        }
    }); 
});
// Class changes for debugging.