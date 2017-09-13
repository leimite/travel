'use strict';

/** 传播者路径分析 模块的echarts */
var diffusePath = echarts.init(document.getElementById('diffusePath'));
/*	var data = [{"name":"徐玉玉事件",
	                "children":[
	                        {"name":"新华网","children":[{"name":"211cn"},{"name":"国际在线"}]},
	                        {"name":"法制日报","children":[{"name":"四川新闻"},{"name":"新浪网"},{"name":"网易新闻"}]},
	                        {"name":"中国新闻网","children":[{"name":"搜狐新闻"},{"name":"新东方网"}]}
	                     ]
	                 }];*/
var option = {
	series: [{
		type: 'tree',
		orient: 'vertical', // vertical horizontal
		rootLocation: {
			x: 'center',
			y: 40
		}, // 根节点位置  {x: 100, y: 'center'}
		nodePadding: 90, //设置节点间距
		layerPadding: 40, //设置层间距
		hoverable: false,
		roam: false, //是否开启滚轮缩放
		//direction:'inverse',
		//symbolSize: 60,
		//symbolSize: [130, 30],
		//symbol: 'circle',	         	
		itemStyle: {
			normal: {
				color: '#fff',
				label: {
					show: true,
					position: 'inside',
					textStyle: {
						color: '#fff',
						fontSize: 14,
						fontWeight: 'bold'
					}
				},
				lineStyle: {
					color: '#7c3e34',
					type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
				}
			},
			emphasis: {
				color: '#4883b4',
				label: {
					show: false
				},
				borderWidth: 0
			}
		},
		data: [{
			name: '徐玉玉事件',
			symbolSize: [194, 113],
			symbol: 'image://../images/echart2BG.png',
			itemStyle: {
				normal: {
					label: {
						show: true,
						position: 'inside',
						textStyle: {
							color: '#ffad81',
							fontSize: 14,
							fontWeight: 'bold'
						}
					}
				}
			},
			children: [{
				name: '新华网',
				symbolSize: [98, 28],
				symbol: 'image://../images/echart2BG2.png',
				itemStyle: {
					normal: {
						//color: '#666',
						label: {
							show: true,
							position: 'inside'
						}
					}
				},
				children: [{
					name: '211cn',
					symbol: 'circle',
					symbolSize: 0,
					itemStyle: {
						normal: {
							color: '#ff315c',
							label: {
								show: true,
								position: 'bottom'
							}
						},
						emphasis: {
							label: {
								show: false
							},
							borderWidth: 0
						}
					}
				}, {
					name: '国际在线',
					symbol: 'circle',
					symbolSize: 0,
					itemStyle: {
						normal: {
							color: '#1ea9f9',
							label: {
								show: true,
								position: 'bottom'
							}
						},
						emphasis: {
							label: {
								show: false
							},
							borderWidth: 0
						}
					}
				}]
			}, {
				name: '法制日报',
				symbolSize: [98, 28],
				nodePadding: 20,
				symbol: 'image://../images/echart2BG2.png',
				itemStyle: {
					normal: {
						//color: '#666',
						label: {
							show: true,
							position: 'inside'
						}
					}
				},

				children: [{
					name: '四川新闻',
					symbol: 'circle',

					symbolSize: 0,
					itemStyle: {
						normal: {
							color: '#ff315c',
							label: {
								show: true,
								position: 'bottom'
							}
						}
					}
				}, {
					name: '浙江广播电视台',
					symbol: 'circle',
					symbolSize: 0,
					itemStyle: {
						normal: {
							color: '#1ea9f9',
							label: {
								show: true,
								position: 'bottom'
							}
						},
						emphasis: {
							label: {
								show: false
							},
							borderWidth: 0
						}
					}
				}, {
					name: '网易新闻',
					symbol: 'circle',
					symbolSize: 0,
					itemStyle: {
						normal: {
							color: '#1ea9f9',
							label: {
								show: true,
								position: 'bottom'
							}
						},
						emphasis: {
							label: {
								show: false
							},
							borderWidth: 0
						}
					}
				}]
			}, {
				name: '中国新闻网',
				//symbol: 'circle',
				symbolSize: [98, 28],
				symbol: 'image://../images/echart2BG2.png',
				itemStyle: {
					normal: {
						//color: '#666',
						label: {
							show: true,
							position: 'inside'
						}
					}
				},

				children: [{
					name: '搜狐新闻',
					symbol: 'circle',
					symbolSize: 0,
					itemStyle: {
						normal: {
							color: '#ff315c',
							label: {
								show: true,
								position: 'bottom'
							}
						},
						emphasis: {
							label: {
								show: false
							},
							borderWidth: 0
						}
					}
				}, {
					name: '新东方网',
					symbol: 'circle',
					symbolSize: 0,
					itemStyle: {
						normal: {
							color: '#1ea9f9',
							label: {
								show: true,
								position: 'bottom'
							}

						},
						emphasis: {
							label: {
								show: false
							},
							borderWidth: 0
						}
					}
				}]
			}]
		}]

	}]
};
diffusePath.setOption(option);