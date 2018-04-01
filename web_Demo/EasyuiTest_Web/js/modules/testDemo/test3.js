define(function() {
	var test3 = {

		/* 添加资源信息 */

		initData : {},
		init : function() {

			// 基于准备好的dom，初始化echarts图表
			var myChart = echarts.init(document.getElementById('myChartMain1'));

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
				url : 'data/webkit-dep.json',
				dataType : 'json',
				success : function(data) {
					option.series[0] = {
						type : 'force',
						name : 'webkit-dep',
						itemStyle : {
							normal : {
								linkStyle : {
									opacity : 0.5
								}
							}
						},
						categories : data.categories,
						nodes : data.nodes,
						links : data.links,
						minRadius : 5,
						maxRadius : 8,
						gravity : 1.1,
						scaling : 1.1,
						steps : 20,
						large : true,
						useWorker : true,
						coolDown : 0.995,
						ribbonType : false
					};

					myChart.setOption(option);
					myChart.hideLoading();
				}
			});

		}
	};

	return test3;
});
