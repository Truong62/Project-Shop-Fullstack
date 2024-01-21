$(document).ready(function () {
  var savedValue = localStorage.getItem('orderStatus');
  if (savedValue) {
      $('#orderStatusSelect').val(savedValue);
  }

  $('#orderStatusSelect').on('change', function () {
      var selectedValue = $(this).val();

      localStorage.setItem('orderStatus', selectedValue);

      var newUrl = 'http://localhost:8000/list-order?status=' + encodeURIComponent(selectedValue);
      console.log(encodeURIComponent(selectedValue));
      window.location.href = newUrl;
  });
});