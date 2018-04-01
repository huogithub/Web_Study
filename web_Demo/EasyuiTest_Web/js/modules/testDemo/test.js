define(function() {
	var cmpNo = "";
	var test = {

		/* 添加资源信息 */

		initData : {},
		init: function() {
			$("#dg_ProductInfo").datagrid({
				loadMsg : 'loading',// 加载信息提示
				title : '产品信息',
				url : 'data/datagrid_data1.json',
				singleSelect:true,
				collapsible:true,
				columns : [ [  {
					field : 'itemid',
					title : 'Item ID',
					width : 80,
					align : 'center'
				}, {
					field : 'productid',
					title : 'Product',
					width : 100,
					align : 'center'
				}, {
					field : 'listprice',
					title : 'List Price',
					width : 80,
					align : 'center'
				}, {
					field : 'unitcost',
					title : 'Unit Cost',
					width : 80
				}, {
					field : 'attr1',
					title : 'Attribute',
					width : 250
				}, {
					field : 'status',
					title : 'Status',
					width : 60
				}] ],
				onLoadError : function() {
					$.messager.show({
						title : '提示',
						msg : '数据加载失败，请联系系统管理员！'
					});
				}
			});
		}
		
	
	};

	return test;
});
