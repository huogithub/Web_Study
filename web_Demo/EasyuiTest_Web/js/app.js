define([ 'modules/testDemo/index'
         ,'modules/menus/index' ], function(testDemo,menus) {
	/**
	 * 初始化操
	 * 
	 * 
	 * 
	 */
	var app = {
		init : function() {

			// 布局
			$('.easyui-layout').layout();
			// 菜单
			$('.easyui-accordion').accordion();
			// 菜单列表
			$('.easyui-datalist').datalist();
			// 选项卡
			$('.easyui-tabs').tabs();
			// 弹出框
			$('.easyui-dialog').dialog();
			// 按钮
			$('.easyui-linkbutton').linkbutton();
			//下拉框
			$('.easyui-combobox').combobox();
			//菜单
	       $('.easyui-menu').menu();
		},

	};
    //菜单
    window.menus = menus;
	//初始化登录信息，菜单栏
    menus.menu.init();
    window.testDemo = testDemo;

	return app;
});