function copyToClipboard(elementId) {

    // Create a "hidden" input
    var aux = document.createElement("input");
    let text = document.getElementById(elementId).innerHTML;

    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);

    // Append it to the body
    document.body.appendChild(aux);

    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");

    // Remove it from the body
    document.body.removeChild(aux);

    swal({
        title: "Copied to clipboard!",
        text: text,
        icon: "success",
        timer: "1500",
    });

}