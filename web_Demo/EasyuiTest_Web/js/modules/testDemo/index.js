define([
	'jquery',
	'jquery-easyui',
	'echarts',
	'./test',
	'./test1',
	'./test2',
	'./test3',
	'./test4'
], function (
	$,
	easyui,
	echarts,
	test,
	test1,
	test2,
	test3,
	test4
) {
	var testDemo = {
			test : test,
			test1 : test1,
			test2 : test2,
			test3 : test3,
			test4 : test4
	};
	return testDemo;
});