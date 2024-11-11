$(document).ready(function(){
    $('button[data-filter]').click(function(){
        var filter = $(this).data('filter');
        $('.review-card').show();

        if (filter === 'good') {
            $('.review-card').filter(function() {
                return $(this).data('rating') < 3;
            }).hide();
        } else if (filter === 'bad') {
            $('.review-card').filter(function() {
                return $(this).data('rating') >= 3;
            }).hide();
        }
    });

    $('#searchInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#reviewCards .review-card').filter(function() {
            $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(value) > -1);
        });
    });
});
