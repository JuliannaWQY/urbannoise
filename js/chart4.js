// ------------------------------------------------------ 一些默认设置

var width = $('.swiper-container').width() * 0.9
var height = $('.swiper-container').height() - $('.info').height()
var lightBlue = '#9CC1F3'
var lightRed = '#EA6252'
var lightYellow = '#FED65C'
var lightGreen = '#70C260'
var darkRed = '#EA3329'
var areaColor = {
    SourceEast: '#E37B40',
    SourceMiddle: '#F0CA4D',
    SourceWest: '#46B29D',
    TargetEast: '#E37B40',
    TargetMiddle: '#F0CA4D',
    TargetWest: '#46B29D'
}

d3.json('./china.json', function(china) {
            d3.json('../data.json', function(data) {
                china = _.filter(china, function(d) {
                    return d.name != '台湾' && d.name != '香港' && d.name != '澳门'
                })

                // -----------------common data -------------------------
                var AllYear = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
                var AllValues = []
                _.each(data, function(d) {
                        AllValues = AllValues.concat(_.values(d.values))
                    })
                    // var x = d3.extent(_.map(china, function(d) {
                    //     return d.center[0]
                    // }))
                    // var y = d3.extent(_.map(china, function(d) {
                    //     return d.center[1]
                    //})) var r = d3.extent(AllValues)


                // ------------------people together -------------------
                function showPeopleTogether() {
                    var left = width * 0.05
                    var margin = {
                        left: left,
                        top: 10,
                        bottom: 100,
                        right: 0
                    }

                    var rMin = width * 0.02
                    var rMax = width * 0.13
                    var gap = 20
                    var yScale = d3.scale.ordinal()
                        .domain([0, 1, 2, 3])
                        .range([0, 80, 150, 200])
                    var svg = d3.select('#people-together').append('svg')
                        .attr('class', 'svg')
                        .attr('width', width)
                        .attr('height', height)
                    svg.append('text')
                        .attr('class', 'chart-source')
                        .attr('x', function() {
                            return width - margin.right
                        })
                        .attr('y', function(d) {
                            return height - 80
                        })
                        .text('数据来源：国家统计局')
                        .style({
                            'font-size': 13,
                            'text-anchor': 'end'
                        })

                    var lineYGap = 20
                    var lineXGap = 10
                    if (width >= 640) {
                        var lineYGap = 30
                        var lineXGap = 30
                    }
                    var lineXNum = 8
                    var lineHeight = 80
                    var lineWidth = (width - margin.left - margin.right - (lineXNum - 1) * lineXGap) / lineXNum
                    var getPos = function(num) {
                        var xPos = num % lineXNum
                        var yPos = Math.floor(num / lineXNum)
                        return {
                            x: xPos,
                            y: yPos
                        }
                    }
                    var barScale = d3.scale.linear()
                        .domain(d3.extent(AllValues))
                        .range([5, lineHeight])

                    function renderBar(data, prevData, originData) {
                        data = _.entries(data)
                        data = data.sort(function(a, b) {
                            return a[1] - b[1]
                        })
                        data = data.reverse()
                        var barGroups = svg.selectAll('g.bar-group')
                            .data(data)
                            .enter()
                            .append('g')
                            .attr('class', 'bar-group')
                            .attr('data-area', function(d) {
                                return d[0]
                            })
                            .attr('transform', function(d, i) {
                                var pos = getPos(i)
                                var x = pos.x * (lineWidth + lineXGap)
                                var y = yScale(pos.y)
                                return 'translate(' + (margin.left + x) + ',' + (y + margin.top) + ')'
                            })
                        svg.selectAll('g.bar-group')
                            .data(data)
                            .attr('class', 'bar-group')
                            .attr('data-area', function(d) {
                                return d[0]
                            })
                            .attr('transform', function(d, i) {
                                var pos = getPos(i)
                                var x = pos.x * (lineWidth + lineXGap)
                                var y = yScale(pos.y)
                                return 'translate(' + (margin.left + x) + ',' + (y + margin.top) + ')'
                            })
                        svg.selectAll('g.bar-group')
                            .data(data)
                            .exit()
                            .remove()

                        barGroups.append('rect')
                            .attr('class', 'bar-value')
                            .attr('x', 0)
                            .attr('y', function(d) {
                                return lineHeight - barScale(d[1])
                            })
                            .attr('width', lineWidth)
                            .attr('height', function(d) {
                                return barScale(d[1])
                            })
                            .attr('fill', lightBlue)
                        barGroups.append('text')
                            .attr('class', 'bar-text')
                            .attr('x', lineWidth / 2)
                            .attr('y', lineHeight)
                            .attr('dy', '1em')
                            .text(function(d) {
                                return d[0]
                            })
                            .style({
                                'font-size': 12,
                                'text-anchor': 'middle'
                            })
                        barGroups.append('text')
                            .attr('class', 'bar-text-value')
                            .attr('x', lineWidth / 2)
                            .attr('y', function(d) {
                                return lineHeight - barScale(d[1])
                            })
                            .attr('dy', '-2')
                            .text(function(d) {
                                return d[1]
                            })
                            .style({
                                'font-size': 10,
                                'text-anchor': 'middle'
                            })
                    }

                    function updateBar(data, prevData, originData) {
                        data = _.entries(data)
                        data = data.sort(function(a, b) {
                            return a[1] - b[1]
                        })
                        data = data.reverse()

                        _.each(data, function(d, i) {
                            var barGroup = svg.select('g.bar-group[data-area=' + d[0] + ']')
                                .transition()
                                .duration(1500)
                                .attr('transform', function() {
                                    var pos = getPos(i)
                                    var x = pos.x * (lineWidth + lineXGap)
                                    var y = yScale(pos.y)
                                    return 'translate(' + (margin.left + x) + ',' + (y + margin.top) + ')'
                                })

                            svg.select('g.bar-group[data-area=' + d[0] + '] rect')
                                .datum(d)
                                .transition()
                                .duration(1500)
                                .ease('linear')
                                .attr('y', function(d) {
                                    return lineHeight - barScale(d[1])
                                })
                                .attr('height', function() {
                                    return barScale(d[1])
                                })

                            svg.select('g.bar-group[data-area=' + d[0] + '] .bar-text-value')
                                .datum(d)
                                .transition()
                                .attr('y', function(d) {
                                    return lineHeight - barScale(d[1])
                                })
                                .text(function(d) {
                                    return d[1]
                                })

                        })
                    }

                    var startYear = 0
                    var yearData = {}
                    _.each(data, function(d) {
                        yearData[d.name] = d.values[AllYear[startYear]]
                    })
                    var originYearData = _.cloneDeep(yearData)

                    var handler

                    function start() {
                        console.log('start')
                        if (startYear == 0) {
                            clearInterval(handler)
                            yeadData = originYearData
                            renderBar(originYearData, originYearData, originYearData)
                            d3.select('#people-together .info p span').text(AllYear[startYear])
                            startYear++
                        } else {
                            if (AllYear[startYear]) {
                                var now = {}
                                _.each(data, function(d) {
                                    now[d.name] = d.values[AllYear[startYear]]
                                })
                                d3.select('#people-together .info p span').text(AllYear[startYear] + '年')
                                updateBar(now, yearData, originYearData)
                                yeadData = now
                                startYear++
                            }
                        }

                        handler = setInterval(function() {
                            if (AllYear[startYear]) {
                                var now = {}
                                _.each(data, function(d) {
                                    now[d.name] = d.values[AllYear[startYear]]
                                })

                                d3.select('#people-together .info p span').text(AllYear[startYear])
                                updateBar(now, yearData, originYearData)
                                yeadData = now
                                startYear++
                            } else {
                                clearInterval(handler)
                            }
                        }, 1500)
                    }

                    function stop() {
                        console.log('stop')
                        clearInterval(handler)
                    }

                    function replay() {
                        console.log('replay')
                        startYear = 0
                        start()
                    }

                    peopleTogether.start = start
                    peopleTogether.stop = stop
                    peopleTogether.replay = replay

                    d3.select('#people-together .pause').on('click', function() {
                        console.log('stop')
                        stop()
                    })
                    d3.select('#people-together .play').on('click', function() {
                        console.log('replay')
                        stop()
                        start()
                    })
                    d3.select('#people-together .replay').on('click', function() {
                            console.log('replay')
                            replay()
                        })
                        // --------------------------------------------------------------------------------
                }
                showPeopleTogether()
            })