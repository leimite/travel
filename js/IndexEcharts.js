'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
    var impetusEcharts = echarts.init(document.getElementById('impetusEcharts'));
    var emotionEcharts = echarts.init(document.getElementById('emotionEcharts'));
    function randomData() {
        return Math.round(Math.random() * 200);
    }
    var datetime = ['6/1/09:11', '6/2/09:11', '6/3/09:11', '6/4/09:11', '6/5/09:11', '6/6/09:11', '6/7/09:11', '6/8/09:11', '6/9/09:11', '6/10/09:11', '6/11/09:11'];
    var option1 = {
        //backgroundColor: '#190554',
        title: {
            text: '',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#F1F1F3'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'line',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ["全部", "新闻", "论坛", "微信", "博客", "视频", "微博", "贴吧"],
            right: '4%',
            top: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            data: datetime
        }],
        yAxis: [_defineProperty({
            type: 'value',
            show: true,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#24135d'
                }

            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        }, 'splitLine', {
            show: true,
            lineStyle: {
                color: '#57617B'
            }
        })],
        series: [{
            name: '全部',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)'
                }
            },
            data: [94.8, 89.6, 94.1, 96.3, 96.4, 97.5, 95.6, 98.1, 80.1, 52.4, 75.8, 94.7]
        }, {
            name: '新闻',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)'
                }
            },
            data: [100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4, 97.3, 99.2, 99.3, 84.9]
        }, {
            name: '论坛',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(219,50,51)'
                }
            },
            data: [67.5, 91.9, 101.8, 79.7, 84.2, 81.0, 87.6, 92.9, 0, 72.1, 43.7, 88.5]
        }, {
            name: '博客',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(97, 228, 224, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(97, 228, 224, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(97, 228, 224)'
                }
            },
            data: [84.2, 81.0, 91.9, 101.8, 79.7, 87.6, 92.9, 67.5, 72.1, 43.7, 88.5, 70]
        }, {
            name: '视频',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(226, 99, 245, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(226, 99, 245, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(219,50,51)'
                }
            },
            data: [52.1, 68.5, 81.9, 91.8, 33.7, 69.7, 74.2, 71.0, 57.5, 77.6, 82.9, 10]
        }, {
            name: '微博',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(219,50,51)'
                }
            },
            data: [84.2, 81.0, 43.7, 87.6, 92.9, 0, 88.5, 91.9, 101.8, 67.5, 72.1, 79.7]
        }, {
            name: '贴吧',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 229, 74, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(255, 229, 74, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(255, 229, 74)'
                }
            },
            data: [64.2, 91.0, 77.5, 72.1, 43.7, 51.5, 91.9, 80.8, 39.7, 57.6, 72.9, 10]
        }]
    };

    impetusEcharts.setOption(option1);
    emotionEcharts.setOption(option1);

    /** 媒体覆盖类型 */
    var mediaType = echarts.init(document.getElementById('mediaType'));
    var emotionSpread = echarts.init(document.getElementById('emotionSpread'));
    function randomData() {
        return Math.round(Math.random() * 500);
    }

    var data = [{
        value: randomData(),
        name: '微博'
    }, {
        value: randomData(),
        name: '论坛'
    }, {
        value: randomData(),
        name: '新闻'
    }, {
        value: randomData(),
        name: '博客'
    }, {
        value: randomData(),
        name: '贴吧'
    }];
    var data1 = ['微博', '论坛', '新闻', '博客', '贴吧'];
    var option2 = {
        title: {
            text: '媒体类型',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: '900',
                fontSize: 14,
                color: '#bbbbcd'
            }
        },
        tooltip: {
            show: false,
            formatter: "{a} <br/>{b} : ({d}%)"

        },

        legend: {
            show: true
        },
        calculable: true,
        series: [{
            name: '媒体类型',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [60, 90],
            labelLine: {
                normal: {
                    length: 20,
                    length2: 60
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#212ea1',
                    borderWidth: 2
                }

            },
            label: {
                normal: {
                    position: 'outside',
                    show: true,
                    formatter: "{d}%\n\n{b}",
                    textStyle: {
                        fontSize: 14,
                        color: '#919191'
                    }
                }
            },
            data: [{ value: 20, name: '中性', itemStyle: { //数据填充
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: 'rgba(201,85,205,.9)'
                        }, {
                            offset: 0,
                            color: 'rgba(136,53,255,.9)'
                        }]) }
                } }, { value: 60, name: '博客', itemStyle: { //数据填充
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: 'rgba(65,43,123,.9)'
                        }, {
                            offset: 0,
                            color: 'rgba(136,53,255,.9)'
                        }]) }
                } }, { value: 20, name: '负面', itemStyle: { //数据填充
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: 'rgba(76,142,250,.9)'
                        }, {
                            offset: 0,
                            color: 'rgba(31,103,255,.9)'
                        }]) }
                } }]
        }, {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [60, 55],
            labelLine: {
                normal: {
                    show: false
                }

            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: '#3535cf'
                        }, {
                            offset: 0,
                            color: '#9a9ad0'
                        }]) }
                },
                tooltip: { show: false }
            }]
        }, {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [96, 97],
            labelLine: {
                normal: {
                    show: false

                }

            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: '#52528a' }
                },
                tooltip: { show: false }
            }]
        }]
    };
    mediaType.setOption(option2);
    emotionSpread.setOption(option2);

    /** 媒体来源排行  */

    var mediaRank = echarts.init(document.getElementById('mediaRank'));
    function toPercent(point) {
        var str = Number(point * 10).toFixed(1);
        str += "%";
        return str;
    }
    var data = [5, 9, 3, 8, 6, 4, 7, 6, 9, 6];
    /*Array.prototype.min = function(){ 
    	return Math.min.apply({},this) 
    } */
    var data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var option3 = {
        /*backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1,
                                color: 'rgba(22,48,149,.9)'
                            }, {
                                offset: 0,
                                color: 'rgba(49,17,100,.9)'
                            }]),*/
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function formatter(params) {
                var res = "";
                res += "媒体来源:" + params[1].value + "条";

                return res;
            }
        },
        legend: {
            show: false,
            data: ['媒体来源', ''],
            right: "40",
            textStyle: { color: "#82bcff" }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '13%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                interval: 0,
                rotate: '45',
                textStyle: {
                    fontSize: 16,
                    color: "#82bcff",
                    fontFamily: "微软雅黑"
                },
                margin: 10
            },
            axisLine: {
                lineStyle: {
                    color: '#6290DB'
                }
            },
            data: ['微信公众号', '中国青年网', '中国藏族网', '网易', '新浪网', '未来网', '今日头条', 'ZAKER', '河南网', '中国江苏网']
        },
        yAxis: {
            type: 'value',
            max: 10,
            /*name: '百分比（%）',*/
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 16,
                    color: "#82bcff",
                    fontFamily: "微软雅黑"
                },
                margin: 10
            },

            axisLine: {
                lineStyle: {
                    color: '#6290DB'
                }
            }

        },
        series: [{
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    //barBorderRadius: 10,
                    borderColor: '#ff8464',
                    color: '#ff8464'

                }
            },
            data: data1,
            barMinHeight: 2
        }, {
            name: '媒体来源',
            type: 'bar',
            stack: '总量',
            barWidth: 40,
            itemStyle: {
                normal: {
                    //barBorderRadius: 10,
                    borderColor: '#3fa7dc',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(21,83,211,.9)'
                    }, {
                        offset: 0,
                        color: 'rgba(136,53,255,.9)'
                    }])

                }
            },
            data: data
        }, {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    /*barBorderRadius: 10,*/
                    borderColor: '#ff8464',
                    color: '#ff8464'

                }
            },
            data: data1,
            barMinHeight: 2
        }]
    };
    mediaRank.setOption(option3);

    /** 负面信息来源媒体 */
    var downsideMedia = echarts.init(document.getElementById('downsideMedia'));
    function randomData() {
        return Math.round(Math.random() * 500);
    }
    var data = [{
        value: randomData(),
        name: '新浪网'
    }, {
        value: randomData(),
        name: '微信公众号'
    }, {
        value: randomData(),
        name: 'ZAKER'
    }];
    var option4 = {
        tooltip: {
            show: false,
            formatter: "{a} <br/>{b} : ({d}%)"

        },

        legend: {
            show: true
        },
        calculable: true,

        series: [{
            name: '情感分析',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [0, 90],
            labelLine: {
                normal: {
                    length: 20,
                    length2: 60
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#ff872e',
                    borderWidth: 2
                }

            },
            label: {
                normal: {
                    position: 'outside',
                    show: true,
                    formatter: "{d}%\n\n{b}",
                    textStyle: {
                        fontSize: 14,
                        color: '#919191'
                    }
                }
            },
            data: [{ value: 20, name: '微信公众号', itemStyle: { //数据填充
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: 'rgba(201,85,205,.9)'
                        }, {
                            offset: 0,
                            color: 'rgba(136,53,255,.9)'
                        }]) }
                } }, { value: 60, name: '新浪网', itemStyle: { //数据填充
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: 'rgba(65,43,123,.9)'
                        }, {
                            offset: 0,
                            color: 'rgba(136,53,255,.9)'
                        }]) }
                } }, { value: 20, name: 'ZAKER', itemStyle: { //数据填充
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: 'rgba(76,142,250,.9)'
                        }, {
                            offset: 0,
                            color: 'rgba(31,103,255,.9)'
                        }]) }
                } }]
        }, {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [97, 96],
            labelLine: {
                normal: {
                    show: false

                }

            },
            data: [{
                value: 223,
                itemStyle: {
                    normal: {
                        color: '#52528a', //颜色填充   
                        opacity: 0.5
                    }
                },
                tooltip: { show: false }
            }]
        }]
    };
    downsideMedia.setOption(option4);

    /** 舆情相关词 */
    var sentimentWords = echarts.init(document.getElementById('sentimentWords'));
    var option5 = {
        tooltip: {
            trigger: 'item',
            formatter: function formatter(d) {
                return d.data.name + ':' + d.data.value;
            }
        },
        series: [{
            type: 'graph',
            layout: 'force',
            edgeSymbol: ['', 'circle'],
            edgeSymbolSize: 16,
            force: {
                gravity: 0.08,
                edgeLength: 8,
                repulsion: 80
            },
            graph: {
                height: 400,
                width: 700
            },
            grid: {
                top: '10%',
                left: '1%',
                right: '1%',
                bottom: '10%',
                containLabel: true
            },
            symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 14,
                        color: '#FFF'
                    }
                }
            },
            lineStyle: {
                normal: {
                    color: 'target',
                    curveness: 0,
                    width: 2
                }
            },
            itemStyle: { normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(76,142,250,.9)'
                    }, {
                        offset: 0,
                        color: 'rgba(31,103,255,.9)'
                    }]),
                    borderColor: '#3b72f8',
                    borderWidth: 2
                } },
            data: [{
                name: '徐玉玉事件', x: 80, y: 60,
                symbolSize: 80,
                value: "",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: 'rgba(159,41,255,.9)'
                        }, {
                            offset: 0,
                            color: 'rgba(97,9,255,.9)'
                        }]),
                        borderColor: '#fab844',
                        borderWidth: 2

                    } },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 14,
                            color: '#e797a0'
                        }
                    }
                }
            }, {
                name: '诈骗', x: 35, y: 25,
                value: ""
            }, {
                name: '警方', x: 35, y: 25,
                value: ""
            }, {
                name: '信息', x: 200, y: 35,
                value: ""
            }, {
                name: '团伙', x: 150, y: 43,
                value: ""
            }, {
                name: '账户', x: 200, y: 35,
                value: ""
            }, {
                name: '手机', x: 150, y: 43,
                value: ""
            }, {
                name: '公安', x: 200, y: 35,
                value: ""
            }, {
                name: '中心', x: 150, y: 43,
                value: ""
            }, {
                name: '银行', x: 200, y: 35,
                value: ""
            }, {
                name: '工作', x: 150, y: 43,
                value: ""
            }, {
                name: '犯罪', x: 200, y: 35,
                value: ""
            }, {
                name: '公司', x: 150, y: 43,
                value: ""
            }, {
                name: '电话', x: 200, y: 35,
                value: ""
            }, {
                name: '民警', x: 150, y: 43,
                value: ""
            }, {
                name: '网络', x: 220, y: 35,
                value: ""
            }],
            links: [{ source: '诈骗', target: '徐玉玉事件' }, { source: '团伙', target: '徐玉玉事件' }, { source: '信息', target: '徐玉玉事件' }, { source: '警方', target: '徐玉玉事件' }, { source: '账户', target: '徐玉玉事件' }, { source: '手机', target: '徐玉玉事件' }, { source: '公安', target: '徐玉玉事件' }, { source: '中心', target: '徐玉玉事件' }, { source: '银行', target: '徐玉玉事件' }, { source: '工作', target: '徐玉玉事件' }, { source: '犯罪', target: '徐玉玉事件' }, { source: '公司', target: '徐玉玉事件' }, { source: '电话', target: '徐玉玉事件' }, { source: '民警', target: '徐玉玉事件' }, { source: '网络', target: '徐玉玉事件' }]
        }]
    };

    sentimentWords.setOption(option5);
});