// https://observablehq.com/@steren/water-energy-storage@215
function _1(md){return(
md`# Lifting water to store energy`
)}

function _2(md){return(
md`Our goal is to store that much energy`
)}

function _goal(Inputs){return(
Inputs.range([0, 1000], {label: "Goal (Wh)", value: 120, step: 10})
)}

function _4(goal,pixelbook_battery_wh,macbookpro_battery_wh,oven_power_W,md){return(
md`That's:
- ${Math.round(goal / 240  * 10)/10} [Jackery Explorer 240 Portable battery](https://www.jackery.com/products/explorer-240-portable-power-station)  
- ${Math.round(goal / pixelbook_battery_wh * 10) / 10} fully charged Pixelbooks, or ${Math.round(goal / macbookpro_battery_wh * 10) / 10} MacBook Pro 16″.  
- An oven baking for ${Math.round(goal / (oven_power_W * 1) * 60)} minutes.`
)}

function _5(md){return(
md`What is the efficiency of the pump that will lift water and of the turbine that will generate the electricity?`
)}

function _efficiency_pump(Inputs){return(
Inputs.range([0, 1], {label: "Pump efficiency", value: 0.5, step: 0.05})
)}

function _efficiency_turbine(Inputs){return(
Inputs.range([0, 1], {label: "Turbine efficiency", value: 0.5, step: 0.05})
)}

function _8(md){return(
md`How high do we store water from the ground?`
)}

function _height(Inputs){return(
Inputs.range([0, 20], {label: "Height above ground (m)", value: 3, step: 1})
)}

function _10(mass_kg,volume_m3,tub_capacity_m2,md){return(
md`We need to store **${Math.round(mass_kg)} kg of water**. 
That's ${Math.round(volume_m3 / tub_capacity_m2)} regular tub.`
)}

function _11(md){return(
md`If we store this water in a square of size:`
)}

function _length(Inputs){return(
Inputs.range([0, 10], {label: "Storage length (m)", value: 5, step: 1})
)}

function _13(volume_m3,length,md){return(
md`Then we need **${Math.round(volume_m3  / (length*length)) } m of water in our storage of size ${length}x${length} m**`
)}

function _14(md){return(
md`---

## Appendix `
)}

function _15(md){return(
md`### Constants`
)}

function _pixelbook_battery_wh(){return(
41
)}

function _macbookpro_battery_wh(){return(
99.6
)}

function _g(){return(
9.81
)}

function _volume_1kg_water_m3(){return(
0.001
)}

function _oven_power_W(){return(
2300
)}

function _tub_capacity_m2(){return(
300 / 1000
)}

function _22(md){return(
md`### Computed variables`
)}

function _goal_J(goal){return(
goal * 3600
)}

function _energy_for_efficiency_J(goal_J,efficiency_pump,efficiency_turbine){return(
goal_J / (efficiency_pump * efficiency_turbine)
)}

function _25(tex){return(
tex.block`E_g = m . g . h`
)}

function _mass_kg(energy_for_efficiency_J,g,height){return(
energy_for_efficiency_J / (g * height)
)}

function _volume_m3(mass_kg,volume_1kg_water_m3){return(
mass_kg * volume_1kg_water_m3
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("viewof goal")).define("viewof goal", ["Inputs"], _goal);
  main.variable(observer("goal")).define("goal", ["Generators", "viewof goal"], (G, _) => G.input(_));
  main.variable(observer()).define(["goal","pixelbook_battery_wh","macbookpro_battery_wh","oven_power_W","md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("viewof efficiency_pump")).define("viewof efficiency_pump", ["Inputs"], _efficiency_pump);
  main.variable(observer("efficiency_pump")).define("efficiency_pump", ["Generators", "viewof efficiency_pump"], (G, _) => G.input(_));
  main.variable(observer("viewof efficiency_turbine")).define("viewof efficiency_turbine", ["Inputs"], _efficiency_turbine);
  main.variable(observer("efficiency_turbine")).define("efficiency_turbine", ["Generators", "viewof efficiency_turbine"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("viewof height")).define("viewof height", ["Inputs"], _height);
  main.variable(observer("height")).define("height", ["Generators", "viewof height"], (G, _) => G.input(_));
  main.variable(observer()).define(["mass_kg","volume_m3","tub_capacity_m2","md"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer("viewof length")).define("viewof length", ["Inputs"], _length);
  main.variable(observer("length")).define("length", ["Generators", "viewof length"], (G, _) => G.input(_));
  main.variable(observer()).define(["volume_m3","length","md"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer("pixelbook_battery_wh")).define("pixelbook_battery_wh", _pixelbook_battery_wh);
  main.variable(observer("macbookpro_battery_wh")).define("macbookpro_battery_wh", _macbookpro_battery_wh);
  main.variable(observer("g")).define("g", _g);
  main.variable(observer("volume_1kg_water_m3")).define("volume_1kg_water_m3", _volume_1kg_water_m3);
  main.variable(observer("oven_power_W")).define("oven_power_W", _oven_power_W);
  main.variable(observer("tub_capacity_m2")).define("tub_capacity_m2", _tub_capacity_m2);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer("goal_J")).define("goal_J", ["goal"], _goal_J);
  main.variable(observer("energy_for_efficiency_J")).define("energy_for_efficiency_J", ["goal_J","efficiency_pump","efficiency_turbine"], _energy_for_efficiency_J);
  main.variable(observer()).define(["tex"], _25);
  main.variable(observer("mass_kg")).define("mass_kg", ["energy_for_efficiency_J","g","height"], _mass_kg);
  main.variable(observer("volume_m3")).define("volume_m3", ["mass_kg","volume_1kg_water_m3"], _volume_m3);
  return main;
}
