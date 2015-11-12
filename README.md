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

<h3>Options reference</h3>
<b>extend:</b> Add different json data
```javascript
myJsonObject.extend({ 'user': 'tom',  'age': 41, 'active': true , 'nSon':10});
```

<b>extendData:</b> Add different json data to other json
```javascript
myJsonObject.extendData({ 'user': 'tom',  'age': 41, 'active': true , 'nSon':10},otherJsonObject);
```

<b>find:</b> Find elements from json data matched with the json param
```javascript
myJsonObject.find({name:'sofia'})
```

<b>where:</b> return data matched with the json parameter. Each condition is  evaluated as a "where (condition 1 and condition 2 and ,...)" clause.
```javascript
myJsonObject.where(
{
	major:{'age':'0','nSon':4},
	equal:{'active':true},
	minor:{'nSon':40},
	majorOrEqual:{'nSon':10},
	minorOrEqual:{'nSon':40},
});
```
<b>whereOr:</b> return data matched with the json parameter. Each condition is  evaluated as a "where (condition 1 or condition 2 or ,...)" clause.
```javascript
myJsonObject.whereOr(
{
	major:{'age':'0','nSon':4},
	equal:{'active':true},
	minor:{'nSon':40},
	majorOrEqual:{'nSon':10},
	minorOrEqual:{'nSon':40},
});
```


<b>select:</b>Select object from json
```javascript
myJsonObject.select(['user','sSon']);
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
