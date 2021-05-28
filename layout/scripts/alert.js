$('.btn').click(successClick);

function successClick(){
    swal("Alert", "Are you sure you want to navigate to another page?", "warning", {
        buttons: ["No", "Yes"]});
}