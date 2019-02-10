# jquery.textAdjust

jQuery-Plugin adjusting height of textareas based on value.

## How it works
When user typing in bound textareas, the rows-attribute gets adjusted from min-rows up to max-rows trying not to see a scrollbar (except max-rows reached).  
Rows gets calculated based on scrollHeight and line-height gets respected.  

## Example
Bind all textareas with default settings.
```
  $('textarea').textAdjust();
```
After reaching `max-rows` a scrollbar will appear.

## Min/Max rows

### via options

```
  <textarea id="textarea-1" rows="4"></textarea>
  <script>
  $('#textarea-1').textAdjust({ min: 7, max: 9 });
  </script>
```
This textarea will grow/shrink between 7 and 9 rows.


### via data-attributes
```
  <textarea id="textarea-2" rows="4" data-min-rows="5" data-max-rows="10"></textarea>
  <script>
  $('#textarea-2').textAdjust();
  </script>
```
This textarea will grow/shrink between 5 and 10 rows.



## Options
Name | Type | Default | Description
--- | --- | --- | --- 
min | integer | 2 | Minimum rows to shrink 
max | integer | 10 | Maximum rows to grow

## Methods
### .textAdjust('destroy')
Removes plugin from target and unbinds all events.
```
  <textarea id="textarea-3" rows="4" data-min-rows="5" data-max-rows="10"></textarea>
  <a href="javascript:;" id="textarea-3-unbind">Unbind</a>
  <script>
  $('#textarea-3').textAdjust();
  $('#textarea-3-unbind-button').on('click', function(){
    $('#textarea-3').textAdjust('destroy');
  });
  </script>
```

## Events
Name |  Description
--- |  --- 
textAdjust.init |  Fired after init
textAdjust.shrink | Fired on shrink (rows decreased)
textAdjust.grow | Fired on grow (rows increased)
textAdjust.nochange | Fired on nochange (no change on rows)
textAdjust.destroy | Fired on destroy

grow, shrink and nochange get 2 additional parameters in callback function: 
 - number of old rows
 - number of new rows

```javascript
$('#textarea-3').on('textAdjust.grow', function (event, oldRows, newRows) {
  console.log('The textarea changed from ' + oldRows + ' to ' + newRows + 'rows');
});
```


