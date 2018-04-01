/**
 * 配置文件
 * <p>各模块映射/p>
 *
 *
 */
require.config({
	baseUrl: './js',
	urlArgs: 't='+ +new Date(),
    paths: {
        'jquery': 'lib/jquery/jquery.min',
        'jquery-easyui': 'lib/jquery/jquery.easyui.min',
        'underscore':'lib/underscore/underscore-min',
		'echarts':'lib/echarts/echarts-all'
      },
    shim:{
        'jquery': {
            exports: '$'
        },
        'echarts':{
        	exports: "echarts"
        },
        'jquery-easyui': {
            deps: ['jquery']
        }
    }
});
