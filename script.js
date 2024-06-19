function signIn(){
    var oauth2endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    
    var form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", oauth2endpoint);

    var params = {
        'client_id': 'YOUR CLIENT ID',
        'redirect_uri': 'http://127.0.0.1:5500/profile.html',
        'response_type': 'token',
        'scope': 'https://mail.google.com/',
        'include_granted_scopes': 'true',
        'state': 'pass-through value'
    };

    for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
}

