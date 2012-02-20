# jQuery badgerfishArray

v. 1.0.0

This simple jQuery utility function when run on an object created from an XML document transformed to JSON via the badgerfish transform standard will ensure that a specified path will be an array.

Example:

`var json = {Items: {Item: {Id: 1, Name: "bob"}}};
$.badgerfishArray(json, 'Items.Item');`

Result:

`json = {Items: {Item: [{Id: 1, Name: "bob"}]}};`


