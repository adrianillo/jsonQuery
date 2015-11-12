/*
 * jsonQuery 0.0.1 - A Jquery mobile  menu
 * Homepage: https://www.articlage.com/adrianillo/article/jsonQuery
 *
 * Author:      Adrianillo
 * Twitter:     @adrianillo
 * Mail:        elcorreillodeadrianillo@gmail.com
 *
 * licensed under the MIT (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 *
 * requiere: jquery 
 */

var jsonQuery = function(json)
{
	var json=json;
	
	//Find elements from the json data second parameter parameter matched with the json param, Multidimensional
	json.findInData=function(c,d,m, or)
	{	
		var modeOperation='equal';
		
		if(m!=null)
		{
			if(m=='major' || m=='minor' || m=='equal' || m=='majorOrEqual' ||  m=='minorOrEqual')
			{
				modeOperation=m;
			}
		}
		
		var result=null;
		var find=false;
		var key='';
		var valueKey='';	
		var check=null;
		result=d.filter(function( i ) {			
			
			
			 check=function (c,datarow) {
				find=false;
			if(!datarow)
			{
				datarow=i;
			}
			 $.each(c, function( index, value ){				
				key=index;
				valueKey=value;	
				if($.isPlainObject(valueKey))
				{
					 if(!or)
					 {
					 	find=false;
					 }
					 else
					 {
						 if(find)
						 {
							return false; 
						 }
					 }
					 check(valueKey,datarow[key]);
					 if(!or)
					 {
						 if(!find)
						 {
						 	return false;
						 }
					 }					 
					 return;
				}
						
			   	 if(datarow[key]!=null)
					{
						if(modeOperation=='major')
						{
							if(datarow[key]>valueKey)
							find= true;
						}
						else if (modeOperation=='minor')
						{
							if(datarow[key]<valueKey)
							find= true;
						}
						else if (modeOperation=='majorOrEqual')
						{
							if(datarow[key]>=valueKey)
							find= true;
						}
						else if (modeOperation=='minorOrEqual')
						{
							if(datarow[key]<=valueKey)
							find= true;
						}
						else
						{
						if(datarow[key]==valueKey)
							find= true;
						}
					}
					if(!or)
					{
						if(!find)
						{
							return false;
						}	
					}				
			  	});				  
				
				
			}
			 check(c);
				  
		return find;
		});		
		return result;
	};
	//Add different json data to Data
	json.extendData=function(d,data)
	{
		var find=false;
		var q=Object.keys(d).length;
		for (var i=0;i<data.length;i++)
		{
			var c=0;
			var cInCurrentRow=Object.keys(data[i]).length;
			$.each(data[i], function( key, value ){
				if(d[key]!=null)
				{					
					if(d[key]==value)
					{
						c++;
					}				
				}
				if(c==q && c==cInCurrentRow)
				{
					find=true;
					return false;
				}				
			});		
		}
		if(!find)
		{
			return new  jsonQuery(data.concat(d));
		}
		return data;		
	};
	
	//Add different json data
	json.extend=function(d)
	{
		var find=false;
		var q=Object.keys(d).length;
		var me=this;
		for (var i=0;i<me.length;i++)
		{
			var c=0;
			var cInCurrentRow=Object.keys(me[i]).length;
			$.each(me[i], function( key, value ){
				if(d[key]!=null)
				{					
					if(d[key]==value)
					{
						c++;
					}				
				}
				if(c==q && c==cInCurrentRow)
				{
					find=true;
					return false;
				}				
			});		
		}
		if(!find)
		{
			return new jsonQuery(me.concat(d));
		}
		
		return me;				
	};
	
	//Find elements from the json data matched with the json param 
	json.find=function(c)
	{		
		result=null;		
		result=this.filter(function( i ) {			
			find=false;
			 $.each(c, function( index, value ){				
				key=index;
				valueKey=value;			
			   	 if(i[key]!=null)
					{
						if(i[key]==valueKey)
							find= true;
					}					
			  	});
		return find;
		});		
		return result;
	};
	
//return data matched with the json parameter. Each condition is evaluated as "condition or" with the following condition. 
json.whereOr=function(c)
	{	
		var me=this;
		var data=[];
		var tQuery=null;
		$.each(c, function( typeQuery, dataQuery )
		{			
			tQuery=typeQuery;		
			$.each(dataQuery, function( index, value )
			{
				var jsn='';
				if($.isPlainObject(value))
				{
					jsn={};
					jsn[index]=value;
				}
				else
				{
					
					if(typeof value=="string")
					{
						jsn=$.parseJSON('{"'+index+'":"'+value+'"}');
					}
					else
					{
						jsn=$.parseJSON('{"'+index+'":'+value+'}');
					}
				}
				var dataFind=me.findInData(jsn,me,tQuery,true);
				dataFind.forEach(function(element) {
					data=me.extendData(element,data);
				}, this);
				
			});		
		});		
		return new jsonQuery(data);			
	};
	
	// return data matched with the json parameter
	json.where=function(c)
	{	
		var me=this;
		var data;
		if(jQuery.isArray( this))
		{
			 data=this;			
		}
		else
		{
			data=[this];
		}
		var tQuery=null;
		$.each(c, function( typeQuery, dataQuery )
		{			
			tQuery=typeQuery;		
			$.each(dataQuery, function( index, value )
			{	
				var jsn='';
				if($.isPlainObject(value))
				{
					jsn={};
					jsn[index]=value;
				}
				else
				{
					
					if(typeof value=="string")
					{
						jsn=$.parseJSON('{"'+index+'":"'+value+'"}');
					}
					else
					{
						jsn=$.parseJSON('{"'+index+'":'+value+'}');
					}
				}
				data=me.findInData(jsn,data,tQuery);
			});		
		});		
		return new jsonQuery(data);			
	};
	
	//return select data in  array parameter from json 
	json.select=function(c)
	{
		var result=[];
		var me=this;
		$.each(me, function( i, data )
		{
			var row={};			
			for (var j=0;j<=c.length;j++)
			{
				var currentField=data[c[j]];
				if(currentField)
				{
					row[c[j]]=currentField;
				}
			}
			result.push(row);			
		});	
		return result;	
	};
	 
	
	return json;
}