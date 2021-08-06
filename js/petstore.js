$(document).ready(function () {
    $.fn.dataTable.ext.errMode = 'none';
    var petStoreData = $('#myTable').DataTable({
        "lengthChange": false,
        "responsive": true,
        "ajax": {
            url: "getpets_action.php",
            type: "POST",
            data: {action: 'getPets'},
            dataSrc: "",
            dataType: "json"
        },
        "columns": [
            { "data": "id" },
            { "data": "category.id" },
            { "data": "category.name" },
            { "data": "name" },
            { "data": "photoUrls.0" },
            { "data": "tags.0.id" },
            { "data": "tags.0.name" },
            { "data": "status" }
        ],
        "pageLength": 10
    });
});