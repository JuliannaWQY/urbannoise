        $.getJSON('echartsmaps/beijing.json', function(data) {
            echarts.registerMap('beijing', data);
            var chart = echarts.init(document.getElementById('beijingMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'beijing'
                }]
            });
        });

        $.getJSON('echartsmaps/dandong.json', function(data) {
            echarts.registerMap('dandong', data);
            var chart = echarts.init(document.getElementById('dandongMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'dandong'
                }]
            });
        });

        $.getJSON('echartsmaps/dongguan.json', function(data) {
            echarts.registerMap('dongguan', data);
            var chart = echarts.init(document.getElementById('dongguanMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'dongguan'
                }]
            });
        });
        $.getJSON('echartsmaps/hangzhou.json', function(data) {
            echarts.registerMap('hangzhou', data);
            var chart = echarts.init(document.getElementById('hangzhouMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'hangzhou'
                }]
            });
        });
        $.getJSON('echartsmaps/hongkong.json', function(data) {
            echarts.registerMap('hongkong', data);
            var chart = echarts.init(document.getElementById('hongkongMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'hongkong'
                }]
            });
        });
        $.getJSON('echartsmaps/quanzhou.json', function(data) {
            echarts.registerMap('quanzhou', data);
            var chart = echarts.init(document.getElementById('quanzhouMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'quanzhou'
                }]
            });
        });
        $.getJSON('echartsmaps/shanghai.json', function(data) {
            echarts.registerMap('shanghai', data);
            var chart = echarts.init(document.getElementById('shanghaiMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'shanghai'
                }]
            });
        });
        $.getJSON('echartsmaps/shenzhen.json', function(data) {
            echarts.registerMap('shenzhen', data);
            var chart = echarts.init(document.getElementById('shenzhenMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'shenzhen'
                }]
            });
        });
        $.getJSON('echartsmaps/tongcheng.json', function(data) {
            echarts.registerMap('tongcheng', data);
            var chart = echarts.init(document.getElementById('tongchengMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'tongcheng'
                }]
            });
        });
        $.getJSON('echartsmaps/guangzhou.json', function(data) {
            echarts.registerMap('guangzhou', data);
            var chart = echarts.init(document.getElementById('guangzhouMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'guangzhou'
                }]
            });
        });