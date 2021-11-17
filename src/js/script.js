import * as $ from 'jquery';

$(document).ready(function () {
    getIndex();
    closeModal();
});

function getIndex() {
    $('.tr_title').click(function (e) {
        const index = e.target.parentNode.rowIndex;
		const title = $('.tr_title:eq('+ index +')').html();
		const content = '<b>' + $('.tr_center2:eq('+ index +')').html() + '</b><br>' + $('.td_left:eq('+ index +') .hidden').html();
		$('.modal-table-content-title').html(title);
		$('.modal-table-content-text').html(content);
        $('.modal-table').fadeIn();
    });
}

function closeModal() {
    $('.modal-table').fadeOut();
}