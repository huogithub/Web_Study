define(function() {
	var commonFn = {
		easyUi : {
			datebox : {
				//格式化日期为
				formatterDate : function(date) {
					if(date) {
						var y = date.getFullYear();
						var m = date.getMonth() + 1;
						var d = date.getDate();
						var result = y + '-';
						if(m < 10) {
							result = result + "0" + m;
						} else {
							result = result + m;
						}
						result = result + "-";
						if(d < 10) {
							result = result + "0" + d;
						} else {
							result = result + d;
						}
						return result;
					}
				},
				parser : function(date) {
					if(date) {
						var dateStrings = date.split("-");
						var t = Date.parse(dateStrings[1] + "/" + dateStrings[2] + "/" + dateStrings[0]);
						if(!isNaN(t)) {
							return new Date(t);
						} else {
							return new Date();
						}
					}
				}
			},
			datetimebox : {
				// 格式化日期为
				formatterDate : function(date) {
					if(date) {
						var y = date.getFullYear();
						var m = date.getMonth() + 1;
						var d = date.getDate();
						var h = date.getHours();
						var min = date.getMinutes();
						var sec = date.getSeconds();
						return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d) + '  ' + (h < 10 ? ('0' + h) : h) + ':' + (min < 10 ? ('0' + min) : min) + ':' + (sec < 10 ? ('0' + sec) : sec);

					}
				},
				parser : function(date) {
				
				    if(!date){
				    	return new Date();
				    }
					return new Date(Date.parse(date.replace(/-/g,"/"))); 
				}
			},
			dataGrid : {
				initOperBtns : function(val, row, index, gridContainId) {
					var html = "";
					var gridContain = $("#" + gridContainId);
					if(gridContain.datagrid('options').btns) {
						var btns = gridContain.datagrid('options').btns;
						var idField = gridContain.datagrid('options').idField;
						var fieldId = row[idField];
						var operData = gridContain.data(gridContainId + "_operData");
						if(!operData) {
							operData = {};
						}
						operData[fieldId] = {
							val : val,
							row : row,
							index : index
						}
						gridContain.data(gridContainId + "_operData", operData);
						for(var p in btns) {
							var btn = btns[p];
							var btnId = btn.id + "_btns_" + "" + fieldId;
							var displayNone = "";
							if(!btn.isShow(val, row, index)) {
								displayNone = "display:none;"
							}
							html += "<div style=\"background-color: #E9FEFF;float:left;cursor:pointer;padding:1px;margin:0 2px 0 2px;" + displayNone + "\" id=\"" + btnId + "\"><span style=\"width:16px;height:16px;float:left;\" class=\"" + btn.iconCls + "\"></span><span style=\"float:left;padding:0 2px 0 2px;\">" + btn.text + "</span></div>";
						}
					}
					return html;
				},
				initOperBtnsEvent : function(gridContainId, data) {
					var gridContain = $("#" + gridContainId);
					if(gridContain.datagrid('options').btns) {
						var btns = gridContain.datagrid('options').btns;
						var operData = gridContain.data(gridContainId + "_operData");
						for(var fieldId in operData) {
							var rowData = operData[fieldId];
							rowData.data = data;
							for(var p in btns) {
								var btn = btns[p];
								var btnId = btn.id + "_btns_" + "" + fieldId;
								var eventData = {
									btn : btn,
									rowData : rowData
								}
								$("#" + btnId).bind("click", eventData, function(eventObject) {
									var _eventData = eventObject.data.rowData;
									var _btn = eventObject.data.btn;
									_btn.click(_eventData.val, _eventData.row, _eventData.index, _eventData.data);
								});
							}
						}
					}
				}
			}
		},
		dataUtils : {
			// getTime 时间戳
			formatDate : function(getTime) {
				var date = new Date(getTime);
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var today = date.getDate();
				var hour = date.getHours();
				if(hour <= 9) {
					hour = "0" + hour;
				}
				var minute = date.getMinutes();
				if(minute <= 9) {
					minute = "0" + minute;
				}
				var second = date.getSeconds();
				if(second <= 9) {
					second = "0" + second;
				}
				return year + "-" + month + "-" + today + " " + hour + ":" + minute + ":" + second;
			},
			dateFormat : function(y, m, d) {
				var result = y + '-';
				if(m < 10) {
					result = result + "0" + m;
				} else {
					result = result + m;
				}
				result = result + "-";
				if(d < 10) {
					result = result + "0" + d;
				} else {
					result = result + d;
				}
				return result;
			},
			//格式化金额为千位逗号，money 金额；point 保留小数位
			formatMoney : function(money, point) {
				var isNegative = false;
				money = money + "";
				if(money) {
					if(money.indexOf("-") != -1) {
						isNegative = true;
						money = money.replace("-", "");
					}
					point = point > 0 && point <= 20 ? point : 2;
					money = parseFloat((money + "").replace(/[^\d\.-]/g, "")).toFixed(point) + "";
					var l = money.split(".")[0].split("").reverse(), r = money.split(".")[1];
					var t = "";
					for( i = 0; i < l.length; i++) {
						t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
					}
					money = t.split("").reverse().join("") + "." + r;
					if(isNegative) {
						money = "-" + money;
					}
					return money;
				} else {
					return "";
				}

			},
			//还原千位逗号模式为数字
			rmoney : function(money) {
				return parseFloat(s.replace(/[^\d\.-]/g, ""));
			},
			chinaMoney : function(n) {
				var fraction = ['角', '分'];
				var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
				var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
				var head = n < 0 ? '欠' : '';
				n = Math.abs(n);
				var s = '';
				for(var i = 0; i < fraction.length; i++) {
					s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
				}
				s = s || '整';
				n = Math.floor(n);
				for(var i = 0; i < unit[0].length && n > 0; i++) {
					var p = '';
					for(var j = 0; j < unit[1].length && n > 0; j++) {
						p = digit[n % 10] + unit[1][j] + p;
						n = Math.floor(n / 10);
					}
					s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
				}
				return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
			},
			//格式化成日期
			formatToDate : function(date) {
				if(date && date.length == 14) {
					return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8) + " " + date.substring(8, 10) + ":" + date.substring(10, 12) + ":" + date.substring(12, 14);
				} else if(date && date.length == 8) {
					return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8);
				}

				return date;
			},
			//日期去掉时分秒
			deleteSeconds : function(date) {
				if(date && date.length == 14) {
					return date.substring(0, 4) + date.substring(4, 6) + date.substring(6, 8);
				}
				return date;
			},
			roundNumber : function(number, decimals) {
				//					if(number == 0){
				//						return "0.00
				//					}
				var newString;
				// The new rounded number
				decimals = Number(decimals);
				if(decimals < 1) {
					newString = (Math.round(number)).toString();
				} else {
					var numString = number.toString();
					if(numString.lastIndexOf(".") == -1) {// If there is no decimal point
						numString += ".";
						// give it one at the end
					}
					var cutoff = numString.lastIndexOf(".") + decimals;
					// The point at which to truncate the number
					var d1 = Number(numString.substring(cutoff, cutoff + 1));
					// The value of the last decimal place that we'll end up with
					var d2 = Number(numString.substring(cutoff + 1, cutoff + 2));
					// The next decimal, after the last one we want
					if(d2 >= 5) {// Do we need to round up at all? If not, the string will just be truncated
						if(d1 == 9 && cutoff > 0) {// If the last digit is 9, find a new cutoff point
							while(cutoff > 0 && (d1 == 9 || isNaN(d1))) {
								if(d1 != ".") {
									cutoff -= 1;
									d1 = Number(numString.substring(cutoff, cutoff + 1));
								} else {
									cutoff -= 1;
								}
							}
						}
						d1 += 1;
					}
					if(d1 == 10) {
						numString = numString.substring(0, numString.lastIndexOf("."));
						var roundedNum = Number(numString) + 1;
						newString = roundedNum.toString() + '.';
					} else {
						newString = numString.substring(0, cutoff) + d1.toString();
					}
				}
				if(newString.lastIndexOf(".") == -1) {// Do this again, to the new string
					newString += ".";
				}
				var decs = (newString.substring(newString.lastIndexOf(".") + 1)).length;
				for(var i = 0; i < decimals - decs; i++)
				newString += "0";
				return newString;
			}
		},
		system : {
			btnController : function(setting) {
				var btnOrgs = setting.btnOrgs;
				var type = setting.type;
				var tt = window.menu.accessible;
				if(!window[setting.id]) {
					window[setting.id] = window.menu.accessible;
				}
				window.menu.accessible = "";
				var accessible = window[setting.id];
				var btns = accessible.split("|");
				alert("setting:"+setting.id);
				var existBtn = [];
				if(!type) {
					//				      	console.log("accessible="+ accessible);
					for(j in btnOrgs) {
						var display = true;
						for(i in btns) {
							if(btnOrgs[j] == btns[i])
								display = false;
						}
						if(display) {
							document.getElementById(btnOrgs[j]).style.display = "none";
						}
					}
				} else {
					var t = 0;
					for(j in btnOrgs) {
						var btn = btnOrgs[j];
						var display = true;
						for(i in btns) {
							if(btn.id == btns[i]) {
								existBtn[t] = btn;
								t++;
							}
						}
					}
				}
				return existBtn;
			},
			windowOpen : function(url, target) {
				var a = $("#urlOpenA");
				if(!a) {
					$("body").append("<a id=\"urlOpenA\"></a>");
				}
				a = $("#urlOpenA");
				//重新获取该对象
				a.attr("href", url);
				if(!target) {
					target = "_blank"
				}
				a.attr("target", target);
				a.click();
			},
			Ajax : function(url, data, type, callback) {
				$.ajax({
					url : url,
					data : data,
					type : type,
					dataType : 'json',
					success : function(data) {
						callback(data);
					}
				});
			}
		}
	}

	window.commonFn = commonFn;
	return commonFn;
});
