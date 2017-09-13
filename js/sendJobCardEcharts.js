'use strict';

/** 工单处理概况 */
var workorderPartment = echarts.init(document.getElementById('workorderPartment'));

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
var option1 = {
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : ({d}%)"

    },
    legend: {
        icon: 'pin', //image://../images/fan.png
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        orient: 'vertical',
        data: ["微信公众号", "新浪网", "ZAKER"],
        right: '4%',
        top: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
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
workorderPartment.setOption(option1);

/** 工单处理部门  */
var workorderList = echarts.init(document.getElementById('workorderList'));
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
        icon: 'pin', //image://../images/fan.png
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        orient: 'vertical',
        data: ["中性", "博客", "负面"],
        right: '4%',
        top: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
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

workorderList.setOption(option2);