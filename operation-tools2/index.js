/**
 * Created by yicj on 2019/3/14.
 */
var example = {
    "firstName": "John",
    "lastName": "Smith",
    "isAlive": true,
    "age": 25,
    "company": null,
    "height_cm": 167.64,
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
    },
    "phoneNumbers": [
        {
            "type": "home",
            "number": "212 555-1234"
        },
        {
            "type": "fax",
            "number": "646 555-4567"
        }
    ]
};

//var data = getSimpleData() ;
var tree = jsonTree.create(example, wrapper);
tree.expand() ;
//tree.expand(function(node) {
//    return node.childNodes.length < 15 || node.label === 'NetFare';
//});

$("#expand_tree_all").bind('click', function () {
    tree.expand();
}) ;

$("#collapse_tree_all").bind('click', function () {
    tree.collapse() ;
}) ;
