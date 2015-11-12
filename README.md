# jsonQuery

<h3>Getting started</h3>

<b>Add a reference to jQuery library.</b>

```html
<script src="js/jquery-2.1.4.min.js"></script>
```
<b>Add a reference to jsonQuery library.</b>

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

<b>Initialize object:</b>
```javascript
var jq=new jsonQuery(users);
```
<b>1° example. Simple where query to filter json:</b>

```javascript
var re=jq.where(
{
	major:{'age':'20','nSon':7},
	equal:{'active':true}				
});
```
<b>Result:</b>
```json
[{"user":"jon","age":40,"active":true,"nSon":10}]
```
