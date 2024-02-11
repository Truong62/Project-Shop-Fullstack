$(document).ready(function () {
  var table;

  function initializeDataTable() {
    if ($.fn.DataTable.isDataTable('table')) {
      table.destroy();
    }
    table = $('table').DataTable({
      order: [0, 'desc']
    });
  }

  initializeDataTable();

  $('#filterSuccess, #filterPending, #filterCancel').change(function () {
    var selectedStatus = [];
    if ($('#filterSuccess').prop('checked')) {
      selectedStatus.push('Success');
    }
    if ($('#filterPending').prop('checked')) {
      selectedStatus.push('Pending');
    }
    if ($('#filterCancel').prop('checked')) {
      selectedStatus.push('Cancel');
    }
    if (selectedStatus.length === 0) {
      selectedStatus.push('Pending');
      $('#filterPending').prop('checked', true);
    }
    table.columns(5).search(selectedStatus.join('|'), true, false).draw();
  });

  $('#filterPending').prop('checked', true).trigger('change');
});
