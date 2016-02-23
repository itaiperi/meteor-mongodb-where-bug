Test = new Mongo.Collection('testcollection');

Test.insert({_id: '12345678901234567', test_field: 'test'}, function (err) {
	console.log('Should print empty array:', Test.find({
		_id: '12345678901234567',
		$where: function() { return false; },
	}).fetch());

	console.log('Should print document added:', Test.find({
		_id: '12345678901234567',
		$where: function() { return true; },
	}).fetch());
});