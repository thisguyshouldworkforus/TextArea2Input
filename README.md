# TextArea2Input
###### A repository for TamperMonkey scripts

[![logo](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tampermonkey_logo.svg/480px-Tampermonkey_logo.svg.png)](https://www.tampermonkey.net/)  

## TextArea2Input
[TextArea2Input.js](TextArea2Input.js)

This script is intented only for **QNAP NAS Storage Devices** running firmware greater than `4.4.2.1270` where the `login.html` page was changed from an `<input>` field to a `<textarea>` page to prevent autologin services like LastPass or 1Password from filling the field.

That's bullshit.

So, I wrote this script to fix that.

This script will find the `<username>` attribute (`GetElementById`) and construct a new one.  The old `<textarea>` element is replaced by an identical field, except now that new field is an `<input>` field.

Make sure you go into the script and update the `@match` URL to your QNAP login URL.

###### Note the sample URL is `http://` ... you should consider adding an SSL to your QNAP and always logging in over `https://`

````javascript
// @match        http://YourQNAPDomain-OR-IP-Here/*
````

