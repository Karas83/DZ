$.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json',function(data){
console.log(_.uniq(_.flattenDeep(_.map(data,'skills'))).sort());
console.log(_.uniq(_.map(_.flattenDeep(_.map(data,'friends')),'name')).sort());
console.log(_.map(_.sortBy(data, function (data){return data.friends.length;}), 'name'));
});




