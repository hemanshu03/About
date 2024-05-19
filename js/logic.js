function copyToClipboard(text) {
    confirmation = confirm("This will copy the link to an email ID which is linked to an email redirection service (To hide real email ID for security reasons). Do you wish to continue?");
    if (confirmation === true) {
        var tempInput = document.createElement("input");
        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
        tempInput.value = '5bb56f74-9b9d-4198-b1cb-2531f9e23f43@hemanshu03.anonaddy.com';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Copied to clipboard");
    }
}