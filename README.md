# jsonQuery

<h3>Getting started</h3>

Add a reference to jQuery library.

```html
<script src="js/jquery-2.1.4.min.js"></script>
```
Add a reference to jsonQuery library.

```html
<script src="js/jsonQuery.js"></script>
```
<h3>Executing queries in json</h3>

```javascript
	var users = [
					{ 'user': 'jon',  'age': 40, 'active': true , 'nSon':10},
					{ 'user': 'susan',    'age': 40, 'active': false , 'nSon':5},
					{ 'user': 'james', 'age': 1,  'active': true, 'nSon':8 }
					];	
```

Initialize object:
```javascript
var jq=new jsonQuery(users);
```
1° example. Simple where query to filter json:

```javascript
var re=jq.where(
{
	major:{'age':'20','nSon':7},
	equal:{'active':true}				
});
```
Result:
```javascript
[{"user":"jon","age":40,"active":true,"nSon":10}]
```
