 var playersData = [
     { "name": "Aquero", "team": "Manchester City", "goals": 18, "shots": 66, "shots-on-target": 33, "assists": 6 },
     { "name": "Salah", "team": "Liverpool", "goals": 17, "shots": 70, "shots-on-target": 45, "assists": 7 },
     { "name": "Aubameyang", "team": "Arsenal", "goals": 16, "shots": 51, "shots-on-target": 28, "assists": 4 },
     { "name": "Kane", "team": "Totthenham Hotspurs", "goals": 15, "shots": 64, "shots-on-target": 40, "assists": 4 },
     { "name": "Mane", "team": "Liverpool", "goals": 14, "shots": 52, "shots-on-target": 31, "assists": 1 },
     { "name": "Hazzard", "team": "Chelsea", "goals": 12, "shots": 40, "shots-on-target": 30, "assists": 10 },
     { "name": "Sterling", "team": "Manchester City", "goals": 12, "shots": 35, "shots-on-target": 27, "assists": 9 },
     { "name": "Lacazette", "team": "Arsenal", "goals": 12, "shots": 47, "shots-on-target": 25, "assists": 5 },
     { "name": "Pogba", "team": "Manchester United", "goals": 11, "shots": 64, "shots-on-target": 44, "assists": 9 },
     { "name": "Son", "team": "Totthenham Hotspurs", "goals": 11, "shots": 38, "shots-on-target": 22, "assists": 5 },
     { "name": "Sigurdson", "team": "Everton", "goals": 11, "shots": 42, "shots-on-target": 25, "assists": 3 },
     { "name": "Wilson", "team": "Bournemouth", "goals": 10, "shots": 36, "shots-on-target": 20, "assists": 5 },
     { "name": "Jimenez", "team": "Wolverhampton Wanderers", "goals": 10, "shots": 68, "shots-on-target": 29, "assists": 5 },
     { "name": "Mitrovic", "team": "Fulham", "goals": 10, "shots": 75, "shots-on-target": 35, "assists": 2 },
     { "name": "Richarlison", "team": "Everton", "goals": 10, "shots": 37, "shots-on-target": 21, "assists": 1 },

 ];


 var ndx = crossfilter(playersData);
 var marginSize = { top: 10, right: 50, bottom: 30, left: 50 };
 var barHeight = 200;
 var barWidth = 1200;
 var goal_dim = ndx.dimension(dc.pluck('name'));
 var goals_per_person = goal_dim.group().reduceSum(dc.pluck('goals'));
 var chartTotal =

     // --------------- goals scored bar chart ---------------

     dc.barChart('#goal-chart')
     .width(barWidth)
     .height(barHeight)
     .margins(marginSize)
     .dimension(goal_dim)
     .group(goals_per_person)
     .transitionDuration(500)
     .x(d3.scale.ordinal())
     .xUnits(dc.units.ordinal)
     .yAxisLabel("goals")

     //---------------- puts total inside bar-----------------            
     .renderlet(function(chart) {
         var barsData = [];
         var bars = chart.selectAll('.bar').each(function(d) {
             barsData.push(d);
         });

         //Remove old values (if found)
         d3.select(bars[0][0].parentNode).select('#inline-labels').remove();
         //Create group for labels 
         var gLabels = d3.select(bars[0][0].parentNode).append('g').attr('id', 'inline-labels');

         for (var i = bars[0].length - 1; i >= 0; i--) {

             var b = bars[0][i];
             //Only create label if bar height is tall enough
             if (+b.getAttribute('height') < 18) continue;

             gLabels.append("text")
                 .text(barsData[i].data.value)
                 .attr('x', +b.getAttribute('x') + (b.getAttribute('width') / 2))
                 .attr('y', +b.getAttribute('y') + 25)
                 .attr('text-anchor', 'middle')
                 .attr('fill', 'white');
         }

     });



 // --------------- shots bar chart ---------------

 var shot_dim = ndx.dimension(dc.pluck('name'));
 var shots_per_person = shot_dim.group().reduceSum(dc.pluck('shots'));
 dc.barChart('#shot-chart')
     .width(barWidth)
     .height(barHeight)
     .margins(marginSize)
     .dimension(shot_dim)
     .group(shots_per_person)
     .transitionDuration(500)
     .x(d3.scale.ordinal())
     .xUnits(dc.units.ordinal)
     .yAxisLabel("shots")
     //---------------- puts total inside bar-----------------       
     .renderlet(function(chart) {
         var barsData = [];
         var bars = chart.selectAll('.bar').each(function(d) {
             barsData.push(d);
         });

         //Remove old values (if found)
         d3.select(bars[0][0].parentNode).select('#inline-labels').remove();
         //Create group for labels 
         var gLabels = d3.select(bars[0][0].parentNode).append('g').attr('id', 'inline-labels');

         for (var i = bars[0].length - 1; i >= 0; i--) {

             var b = bars[0][i];
             //Only create label if bar height is tall enough
             if (+b.getAttribute('height') < 18) continue;

             gLabels.append("text")
                 .text(barsData[i].data.value)
                 .attr('x', +b.getAttribute('x') + (b.getAttribute('width') / 2))
                 .attr('y', +b.getAttribute('y') + 25)
                 .attr('text-anchor', 'middle')
                 .attr('fill', 'white');
         }

     })



 // --------------- shots on target bar chart ---------------

 var ontarget_dim = ndx.dimension(dc.pluck('name'));
 var ontarget_shots = ontarget_dim.group().reduceSum(dc.pluck('shots-on-target'));



 dc.barChart('#ontarget-chart')
     .width(barWidth)
     .height(barHeight)
     .margins(marginSize)
     .dimension(ontarget_dim)
     .group(ontarget_shots)
     .transitionDuration(500)
     .x(d3.scale.ordinal())
     .xUnits(dc.units.ordinal)
     .yAxisLabel("shots on target")
     //---------------- puts total inside bar-----------------  
     .renderlet(function(chart) {
         var barsData = [];
         var bars = chart.selectAll('.bar').each(function(d) {
             barsData.push(d);
         });

         //Remove old values (if found)
         d3.select(bars[0][0].parentNode).select('#inline-labels').remove();
         //Create group for labels 
         var gLabels = d3.select(bars[0][0].parentNode).append('g').attr('id', 'inline-labels');

         for (var i = bars[0].length - 1; i >= 0; i--) {

             var b = bars[0][i];
             //Only create label if bar height is tall enough
             if (+b.getAttribute('height') < 18) continue;

             gLabels.append("text")
                 .text(barsData[i].data.value)
                 .attr('x', +b.getAttribute('x') + (b.getAttribute('width') / 2))
                 .attr('y', +b.getAttribute('y') + 25)
                 .attr('text-anchor', 'middle')
                 .attr('fill', 'white');
         }

     })


 dc.renderAll();

 //---------------- reload when reset button clicked-----------------
 function refreshPage() {
     window.location.reload();
 }
 