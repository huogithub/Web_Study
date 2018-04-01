define(function() {
	var data = [];
	var editIndex = undefined;
	var test1 = {
		/* 添加资源信息 */
		initData : {},
		init : function() {
			$("#dg_ProductInfo_test1").datagrid({
				loadMsg : 'loading',// 加载信息提示
				title : '产品信息修改',
				iconCls : 'icon-edit',
				toolbar : '#dg_test1_tb',
				url : 'data/datagrid_data1.json',
				singleSelect : true,
				collapsible : true,
				columns : [ [ {
					field : 'itemid',
					title : 'Item ID',
					width : 80,
					align : 'center'
				}, {
					field : 'productid',
					title : 'Product',
					width : 100,
					align : 'center',
					formatter : function(value, row) {
						return row.productname;
					},
					editor : {
						type : 'combobox',
						options : {
							valueField : 'productid',
							textField : 'productname',
							url : 'data/products.json',
							required : true
						}
					}
				}, {
					field : 'listprice',
					title : 'List Price',
					width : 80,
					align : 'center',
					editor : {
						type : 'numberbox',
						options : {
							precision : 1
						}
					}
				}, {
					field : 'unitcost',
					title : 'Unit Cost',
					width : 80,
					editor : 'numberbox'
				}, {
					field : 'attr1',
					title : 'Attribute',
					width : 250,
					editor : 'text'
				}, {
					field : 'status',
					title : 'Status',
					width : 60,
					editor : {
						type : 'checkbox',
						options : {
							on : 'P',
							off : ''
						}
					}
				} ] ],
				onClickRow : function(index) {
					if (editIndex != index) {
						if (testDemo.test1.endEditing()) {
							$('#dg_ProductInfo_test1').datagrid('selectRow', index).datagrid('beginEdit', index);
							editIndex = index;
						} else {
							$('#dg_ProductInfo_test1').datagrid('selectRow', editIndex);
						}
					}
				}

			});

		},
		endEditing : function() {
			if (editIndex == undefined) {
				return true
			}
			if ($('#dg_ProductInfo_test1').datagrid('validateRow', editIndex)) {
				var ed = $('#dg_ProductInfo_test1').datagrid('getEditor', {
					index : editIndex,
					field : 'productid'
				});
				var productname = $(ed.target).combobox('getText');
				$('#dg_ProductInfo_test1').datagrid('getRows')[editIndex]['productname'] = productname;
				$('#dg_ProductInfo_test1').datagrid('endEdit', editIndex);
				editIndex = undefined;
				return true;
			} else {
				return false;
			}
		},
		append : function() {
			if (testDemo.test1.endEditing()) {
				$('#dg_ProductInfo_test1').datagrid('appendRow', {
					status : 'P'
				});
				editIndex = $('#dg_ProductInfo_test1').datagrid('getRows').length - 1;
				$('#dg_ProductInfo_test1').datagrid('selectRow', editIndex).datagrid('beginEdit', editIndex);
			}
		},
		removeit : function() {
			if (editIndex == undefined) {
				return
			}
			$('#dg_ProductInfo_test1').datagrid('cancelEdit', editIndex).datagrid('deleteRow', editIndex);
			editIndex = undefined;
		},
		accept : function() {
			if (testDemo.test1.endEditing()) {
				$('#dg_ProductInfo_test1').datagrid('acceptChanges');
			}
		},
		reject : function() {
			$('#dg_ProductInfo_test1').datagrid('rejectChanges');
			editIndex = undefined;
		},
		getChanges : function() {
			var rows = $('#dg_ProductInfo_test1').datagrid('getChanges');
			alert(rows.length + ' rows are changed!');
		}
	};
	return test1;
});
