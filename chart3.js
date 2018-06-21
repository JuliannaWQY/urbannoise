var myChart = echarts.init(document.getElementById('chart3'));
                            var bdzData = '% of Places that Meeted the Sound Environment Standard';
                            var timeLineData = [2013, 2014, 2015, 2016];
                            var yData = ['Zone 0', 'Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'];
                            var WLData = ['Daytime', 'Night'];
                            var colors = ['#8ccdb0', '#80c1c0', '#50a3ba', '#669999', '#446565'];
                            WOData = {
                                    2013: [66, 87, 90.8, 97.3, 91.9],
                                    2014: [77, 87.2, 91.4, 96.5, 95.1],
                                    2015: [80.7, 87.3, 93, 97.3, 93.55],
                                    2016: [78.6, 87.4, 92.5, 97.2, 93.95],
                                },
                                WSData = {
                                    2013: [46.6, 71.1, 80.9, 88, 47.6],
                                    2014: [61.1, 72, 79.8, 86.8, 42.35],
                                    2015: [64.9, 74.7, 83.3, 88.1, 57.4],
                                    2016: [57.3, 72.8, 83.4, 88.3, 61.3],
                                },


                                option = {
                                    baseOption: {
                                        title: {},
                                        timeline: {
                                            axisType: 'category',
                                            autoPlay: true,
                                            playInterval: 3000,
                                            lineStyle: {
                                                color: '#555'
                                            },
                                            checkpointStyle: {
                                                color: '#bbb',
                                                borderColor: '#777',
                                                borderWidth: 2
                                            },
                                            controlStyle: {
                                                normal: {
                                                    color: '#666',
                                                    borderColor: '#666'
                                                },
                                                emphasis: {
                                                    color: '#aaa',
                                                    borderColor: '#aaa'
                                                }
                                            },
                                            data: [],
                                            label: {
                                                formatter: function(s) {
                                                    return (new Date(s)).getFullYear();
                                                }
                                            }
                                        },
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            },
                                            // formatter: "{a} <br/>{b} : {c}%"
                                        },
                                        legend: {
                                            data: [],
                                            right: '5%',
                                            bottom: '85%'
                                        },
                                        grid: {
                                            left: '3%',
                                            containLabel: true,
                                            top: '15%'
                                        },
                                        xAxis: {
                                            type: 'value',
                                            "axisLabel": {
                                                "interval": 0,
                                                formatter: '{value}%',
                                            }
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: yData,
                                            nameTextStyle: {
                                                color: '#333333'
                                            },
                                            inverse: true
                                        },
                                        series: [],
                                        animationEasing: 'elasticOut',
                                        animationDelayUpdate: function(idx) {
                                            return idx * 5;
                                        }
                                    },
                                    options: []
                                };
                            for (var n = 0; n < timeLineData.length; n++) {
                                option.baseOption.legend.data = WLData;
                                option.baseOption.timeline.data.push(timeLineData[n]);
                                option.options.push({
                                    title: {
                                        show: true,
                                        text: 'Compliance Rate of Environment Noise in Different Zones',
                                        subtext: timeLineData[n],
                                        subtextStyle: {
                                            fontSize: 30,
                                            fontWeight: "bold",
                                            color: '#2f4554',
                                            textAligh: 'center',
                                        },
                                        textStyle: {
                                            fontSize: 18,
                                            color: '#2f4554'
                                        },
                                        textAlign: 'left',
                                        textBaseline: 'right',
                                        padding: [10, 0, 0, 80],
                                    },
                                    series: [{
                                        name: WLData[0],
                                        type: 'bar',
                                        barGap: '10%',
                                        itemStyle: {
                                            normal: {
                                                color: '#50a3ba',
                                            },
                                        },
                                        label: {
                                            normal: {
                                                show: true
                                            }
                                        },
                                        data: WOData[timeLineData[n]],
                                    }, {
                                        name: WLData[1],
                                        type: 'bar',
                                        itemStyle: {
                                            normal: {
                                                color: '#446565',
                                            },
                                        },
                                        label: {
                                            normal: {
                                                show: true
                                            }
                                        },
                                        data: WSData[timeLineData[n]],
                                    }]
                                });
                            }
                            myChart.setOption(option)