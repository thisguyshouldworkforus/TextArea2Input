// ==UserScript==
// @name         TextArea2Input
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  -----------------------------------------------------------------------
// @description  This script is intented only for QNAP NAS Storage Devices running
// @description  firmware greater than 4.4.2.1270 where the login.html page was
// @description  changed from an <input> field to a <textarea> page to prevent autologin
// @description  services like LastPass or 1Password from filling the field.
// @description  That's bullshit.
// @description  So, I wrote this script to fix that.
// @description  This script will find the <username> attribute (GetElementById) and construct a new one.
// @description  The old <textarea> element is replaced by an identical field, except now that new field is an <input> field
// @description  which is now properly filled by LastPass (only one i've tested on).
// @description  -----------------------------------------------------------------------
// @author       Ryan Meinzer, Alexander Snyder
// @source       https://github.com/thisguyshouldworkforus/TextArea2Input
// @updateURL    https://github.com/thisguyshouldworkforus/TextArea2Input
// @match        http://YourQNAPDomain-OR-IP-Here/*
// @icon64       data:image/gif;base64,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
// @icon64URL    https://github.com/thisguyshouldworkforus/TextArea2Input/blob/main/images/qnap_favicon_64.gif
// @icon         data:image/gif;base64,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
// @iconURL      https://github.com/thisguyshouldworkforus/TextArea2Input/blob/main/images/qnap_favicon_32.gif
// @grant        none
// @run-at       document-end
// ==/UserScript==

const originalItem = document.getElementById("username")
const newItem = document.createElement("input")
newItem.setAttribute("type", "text")
newItem.setAttribute("class", "qStr")
newItem.setAttribute("data-qstrph", "LDAP_SERVER_STR12")
newItem.setAttribute("id", "username")
newItem.setAttribute("autocomplete", "on")
newItem.setAttribute("placeholder", "Username")
originalItem.replaceWith(newItem);

