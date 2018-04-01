define("examples/examples1/1.0.0/main", [ "jquery","echarts" ], function(require) {
    var second = require("./second");
    
    second.show();
	second.showChat1();
});

define("examples/examples1/1.0.0/second", [ "jquery","echarts" ], function(require, exports, module) {
    var $ = require("jquery");
	var echarts = require("echarts");
    exports.show=function()
    	{
    		$("#body_div").append('<div>seaJS的second模块被正常加载。</div>');
    	};
		
	exports.showChat=function()
    	{
    		// 基于准备好的dom，初始化echarts图表
			var myChart = echarts.init(document.getElementById('myChartMain'));
			var option = {
				title : {
					text : 'iphone销量',
					subtext : '纯属虚构',
					x : 'center'
				},
				tooltip : {
					trigger : 'item'
				},
				legend : {
					orient : 'vertical',
					x : 'left',
					data : [ 'iphone3', 'iphone4', 'iphone5', 'iphone6' ]
				},
				dataRange : {
					min : 0,
					max : 2500,
					x : 'left',
					y : 'bottom',
					text : [ '高', '低' ], // 文本，默认为数值文本
					calculable : true
				},
				toolbox : {
					show : true,
					orient : 'vertical',
					x : 'right',
					y : 'center',
					feature : {
						mark : {
							show : true
						},
						dataView : {
							show : true,
							readOnly : false
						},
						restore : {
							show : true
						},
						saveAsImage : {
							show : true
						}
					}
				},
				roamController : {
					show : true,
					x : 'right',
					mapTypeControl : {
						'china' : true
					}
				},
				series : [ {
					name : 'iphone3',
					type : 'map',
					mapType : 'china',
					roam : false,
					itemStyle : {
						normal : {
							label : {
								show : true
							}
						},
						emphasis : {
							label : {
								show : true
							}
						}
					},
					data : [ {
						name : '北京',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '天津',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '上海',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '重庆',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '河北',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '河南',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '云南',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '辽宁',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '黑龙江',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '湖南',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '安徽',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '山东',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '新疆',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '江苏',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '浙江',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '江西',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '湖北',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '广西',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '甘肃',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '山西',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '内蒙古',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '陕西',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '吉林',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '福建',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '贵州',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '广东',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '青海',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '西藏',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '四川',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '宁夏',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '海南',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '台湾',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '香港',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '澳门',
						value : Math.round(Math.random() * 1000)
					} ]
				}, {
					name : 'iphone4',
					type : 'map',
					mapType : 'china',
					itemStyle : {
						normal : {
							label : {
								show : true
							}
						},
						emphasis : {
							label : {
								show : true
							}
						}
					},
					data : [ {
						name : '北京',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '天津',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '上海',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '重庆',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '河北',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '安徽',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '新疆',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '浙江',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '江西',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '山西',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '内蒙古',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '吉林',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '福建',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '广东',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '西藏',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '四川',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '宁夏',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '香港',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '澳门',
						value : Math.round(Math.random() * 1000)
					} ]
				}, {
					name : 'iphone5',
					type : 'map',
					mapType : 'china',
					itemStyle : {
						normal : {
							label : {
								show : true
							}
						},
						emphasis : {
							label : {
								show : true
							}
						}
					},
					data : [ {
						name : '北京',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '天津',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '上海',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '广东',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '台湾',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '香港',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '澳门',
						value : Math.round(Math.random() * 1000)
					} ]
				} , {
					name : 'iphone6',
					type : 'map',
					mapType : 'china',
					itemStyle : {
						normal : {
							label : {
								show : true
							}
						},
						emphasis : {
							label : {
								show : true
							}
						}
					},
					data : [ {
						name : '北京',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '天津',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '上海',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '广东',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '台湾',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '香港',
						value : Math.round(Math.random() * 1000)
					}, {
						name : '澳门',
						value : Math.round(Math.random() * 1000)
					} ]
				} ]
			};

			// 为echarts对象加载数据
			myChart.setOption(option);
    	};	
		
		exports.showChat1=function()
    	{
			// 基于准备好的dom，初始化echarts图表
			var myChart = echarts.init(document.getElementById('myChartMain'));
			var option = {
				title : {
					text : 'webkit内核依赖',
					subtext : '数据来自网络',
					x : 'right',
					y : 'bottom'
				},
				tooltip : {
					trigger : 'item',
					formatter : "{b}"
				},
				toolbox : {
					show : true,
					feature : {
						restore : {
							show : true
						},
						magicType : {
							show : true,
							type : [ 'force', 'chord' ],
							option : {
								chord : {
									minRadius : 2,
									maxRadius : 10,
									ribbonType : false,
									itemStyle : {
										normal : {
											label : {
												show : true,
												rotate : true
											},
											chordStyle : {
												opacity : 0.2
											}
										}
									}
								},
								force : {
									minRadius : 5,
									maxRadius : 8,
									itemStyle : {
										normal : {
											label : {
												show : false
											},
											linkStyle : {
												opacity : 0.5
											}
										}
									}
								}
							}
						},
						saveAsImage : {
							show : true
						}
					}
				},
				legend : {
					data : [ 'HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other' ],
					orient : 'vertical',
					x : 'left'
				},
				noDataEffect : 'none',
				series : [ {
					// FIXME No data
					type : 'force',
				} ],
			};
			$.ajax({
				url : 'data/webkit-dep1.json',
				dataType : 'json',
				success : function(data) {
					option.series[0] = {
						type : 'chord',
						ribbonType : false,
						name : 'webkit-dep',
						itemStyle : {
							normal : {
								label : {
									show : true,
									rotate : true
								},
								chordStyle : {
									opacity : 0.2
								}
							}
						},
						categories : data.categories,
						nodes : data.nodes,
						links : data.links,
						minRadius : 2,
						maxRadius : 10,
						gravity : 1.1,
						scaling : 1.1,
						steps : 20,
						large : true,
						useWorker : true,
						coolDown : 0.995
					};

					myChart.setOption(option);
					myChart.hideLoading();
				}
			});
			
			
		};
});