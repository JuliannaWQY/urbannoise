var myChart = echarts.init(document.getElementById('map'));
                            var geoCoordMap = {
                                'Ningbo': [29.86, 121.54],
                                'Qingdao': [120.33, 36.07],
                                'Lhasa': [91.11, 29.97],
                                'Shanghai': [121.48, 31.22],
                                'Xiamen': [118.1, 24.46],
                                'Fuzhou': [119.3, 26.08],
                                'Nanning': [108.33, 22.84],
                                'Guangzhou': [113.23, 23.16],
                                'Taiyuan': [112.53, 37.87],
                                'Kunming': [102.73, 25.04],
                                'Shenzhen': [114.07, 22.62],
                                'Haikou': [110.35, 20.02],
                                'Dalian': [121.62, 38.92],
                                'Shenyang': [123.38, 41.8],
                                'Changchun': [125.35, 43.88],
                                'Yinchuan': [106.27, 38.47],
                                'Nanchang': [115.89, 28.68],
                                'Xining': [101.74, 36.56],
                                'Hohhot': [111.65, 40.82],
                                'Chengdu': [104.06, 30.67],
                                'XiAn': [108.95, 34.27],
                                'Chongqing': [106.54, 29.59],
                                'Nanjing': [118.78, 32.04],
                                'Guiyang': [106.71, 26.57],
                                'Beijing': [116.46, 39.92],
                                'Urumqi': [87.68, 43.77],
                                'Hangzhou': [120.19, 30.26],
                                'Jinan': [117, 36.65],
                                'Lanzhou': [103.73, 36.03],
                                'Tianjin': [117.2, 39.13],
                                'Zhengzhou': [113.65, 34.76],
                                'Harbin': [126.63, 45.75],
                                'Shijiazhuang': [114.48, 38.03],
                                'Changsha': [113, 28.21],
                                'Hefei': [117.27, 31.86],
                                'Wuhan': [114.31, 30.52],
                            };

                            var convertData = function(data) {
                                var res = [];
                                for (var i = 0; i < data.length; i++) {
                                    var geoCoord = geoCoordMap[data[i].name];
                                    if (geoCoord) {
                                        res.push({
                                            name: data[i].name,
                                            value: geoCoord.concat(data[i].value)
                                        });
                                    }
                                }
                                return res;
                            };

                            option = {
                                baseOption: {
                                    timeline: {
                                        data: ['Daytime', 'Night'],
                                        axisType: 'category',
                                        tooltip: {
                                            show: false
                                        },
                                        playInterval: 10000,
                                        checkpointStyle: {
                                            color: '#bbb',
                                            borderColor: '#777',
                                            borderWidth: 2
                                        },
                                    },
                                    title: {
                                        text: 'Compliance Rate of Environment Noise in Major Cities of China, 2016',
                                        textStyle: {
                                            color: '#2f4554'
                                        },
                                        subtextStyle: {
                                            fontSize: 30,
                                            color: '#2f4554'
                                        },
                                        sublink: 'http://www.pm25.in',
                                        x: 'center',
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: function(params) {
                                            return params.name + ' : ' + params.value[2];
                                        }
                                    },
                                    visualMap: {
                                        min: 100,
                                        max: 0,
                                        splitNumber: 4,
                                        seriesIndex: 0,
                                        //:series.data,
                                        textStyle: {
                                            color: '#2f4554'
                                        },
                                        showLabel: true,
                                        text: ['Compliance Rate (%)'],
                                        hoverlink: true,
                                        inRange: {
                                            color: ['#d94e5d', '#eac736', '#50a3ba']
                                        },
                                    },
                                    geo: {
                                        map: 'china',
                                        label: {
                                            emphasis: {
                                                show: false
                                            }
                                        },
                                        itemStyle: {
                                            normal: {
                                                color: '#828282',
                                                borderColor: '#111'
                                            },
                                            emphasis: {
                                                areaColor: '#BDC0BA'
                                            }
                                        }
                                    },
                                },

                                options: [{
                                    title: {
                                        subtext: 'Daytime'
                                    },
                                    series: [{
                                        name: 'Daytime',
                                        type: 'scatter',
                                        coordinateSystem: 'geo',
                                        symbol: 'roundRect',
                                        symbolSize: 20,
                                        data: convertData([{
                                            name: 'Beijing',
                                            value: 81.3
                                        }, {
                                            name: 'Tianjin',
                                            value: 86.3
                                        }, {
                                            name: 'Shijiazhuang',
                                            value: 89.6
                                        }, {
                                            name: 'Taiyuan',
                                            value: 94.4
                                        }, {
                                            name: 'Hohhot',
                                            value: 100
                                        }, {
                                            name: 'Shenyang',
                                            value: 92.9
                                        }, {
                                            name: 'Changchun',
                                            value: 90.6
                                        }, {
                                            name: 'Harbin',
                                            value: 70.6
                                        }, {
                                            name: 'Shanghai',
                                            value: 93.0
                                        }, {
                                            name: 'Nanjing',
                                            value: 96.9
                                        }, {
                                            name: 'Hangzhou',
                                            value: 84.1
                                        }, {
                                            name: 'Hefei',
                                            value: 93.1
                                        }, {
                                            name: 'Fuzhou',
                                            value: 98.8
                                        }, {
                                            name: 'Nanchang',
                                            value: 95
                                        }, {
                                            name: 'Jinan',
                                            value: 80.6
                                        }, {
                                            name: 'Zhengzhou',
                                            value: 50.0
                                        }, {
                                            name: 'Wuhan',
                                            value: 77.1
                                        }, {
                                            name: 'Changsha',
                                            value: 78.3
                                        }, {
                                            name: 'Guangzhou',
                                            value: 63.6
                                        }, {
                                            name: 'Nanning',
                                            value: 89.3
                                        }, {
                                            name: 'Haikou',
                                            value: 100
                                        }, {
                                            name: 'Chongqing',
                                            value: 84.9
                                        }, {
                                            name: 'Chengdu',
                                            value: 79.3
                                        }, {
                                            name: 'Guiyang',
                                            value: 100
                                        }, {
                                            name: 'Kunming',
                                            value: 100
                                        }, {
                                            name: 'Lhasa',
                                            value: 100
                                        }, {
                                            name: 'XiAn',
                                            value: 62.5
                                        }, {
                                            name: 'Lanzhou',
                                            value: 71.4
                                        }, {
                                            name: 'Xining',
                                            value: 60
                                        }, {
                                            name: 'Yinchuan',
                                            value: 100
                                        }, {
                                            name: 'Urumqi',
                                            value: 93.3
                                        }])
                                    }]
                                }, {
                                    title: {
                                        subtext: 'Night'
                                    },
                                    series: [{
                                        name: 'Night',
                                        type: 'scatter',
                                        coordinateSystem: 'geo',
                                        data: convertData([{
                                            name: 'Beijing',
                                            value: 43.8
                                        }, {
                                            name: 'Tianjin',
                                            value: 57.5
                                        }, {
                                            name: 'Shijiazhuang',
                                            value: 35.4
                                        }, {
                                            name: 'Taiyuan',
                                            value: 72.2
                                        }, {
                                            name: 'Hohhot',
                                            value: 45.0
                                        }, {
                                            name: 'Shenyang',
                                            value: 85.7
                                        }, {
                                            name: 'Changchun',
                                            value: 39.1
                                        }, {
                                            name: 'Harbin',
                                            value: 50
                                        }, {
                                            name: 'Shanghai',
                                            value: 68.8
                                        }, {
                                            name: 'Nanjing',
                                            value: 87.5
                                        }, {
                                            name: 'Hangzhou',
                                            value: 58
                                        }, {
                                            name: 'Hefei',
                                            value: 75.9
                                        }, {
                                            name: 'Fuzhou',
                                            value: 70
                                        }, {
                                            name: 'Nanchang',
                                            value: 68.8
                                        }, {
                                            name: 'Jinan',
                                            value: 50
                                        }, {
                                            name: 'Zhengzhou',
                                            value: 31.3
                                        }, {
                                            name: 'Wuhan',
                                            value: 43.8
                                        }, {
                                            name: 'Changsha',
                                            value: 41.7
                                        }, {
                                            name: 'Guangzhou',
                                            value: 56.8
                                        }, {
                                            name: 'Nanning',
                                            value: 46.4
                                        }, {
                                            name: 'Haikou',
                                            value: 62.5
                                        }, {
                                            name: 'Chongqing',
                                            value: 57
                                        }, {
                                            name: 'Chengdu',
                                            value: 53.7
                                        }, {
                                            name: 'Guiyang',
                                            value: 31.3
                                        }, {
                                            name: 'Kunming',
                                            value: 71.9
                                        }, {
                                            name: 'Lhasa',
                                            value: 87.5
                                        }, {
                                            name: 'XiAn',
                                            value: 31.3
                                        }, {
                                            name: 'Lanzhou',
                                            value: 28.6
                                        }, {
                                            name: 'Xining',
                                            value: 35
                                        }, {
                                            name: 'Yinchuan',
                                            value: 100
                                        }, {
                                            name: 'Urumqi',
                                            value: 56.7
                                        }])
                                    }]
                                }]
                            }
                            myChart.setOption(option)