// https://observablehq.com/@steren/space-to-earth-solar-energy@355
function _1(md){return(
md`How could we harvest the sun's energy even at night?`
)}

function _2(md){return(
md`Our goal is to generate as this much power:  `
)}

function _goal(Inputs){return(
Inputs.range([0, 1000000000], {label: "Goal (W)", value: 100000000, step: 1000000})
)}

function _4(goal,net_demand_ca,md){return(
md`That's ${Math.round(goal / 1000000)} MW.
California's net demand is ${Math.round(net_demand_ca / goal)}x that.`
)}

function _5(md){return(
md`Assume our space station has solar panels which produce this power per m<sup>2</sup>:`
)}

function _panel_power_per_m2(Inputs){return(
Inputs.range([0, 2000], {label: "Solar panel power generation per square meter (W)", value: 500, step: 10})
)}

function _7(md){return(
md`The atmosphere will absorb some of this before it reaches earth:`
)}

function _atmAbsorbtion(Inputs){return(
Inputs.range([0, 100], {label: "Atmosphere absorption (%)", value: 23, step: 1})
)}

function _9(power_received_per_m2,panels_needed_m2,md){return(
md`Each m<sup>2</sup> of panel will only deliver ${Math.round(power_received_per_m2)} W on Earth, so we need ${panels_needed_m2.toFixed(0)} m<sup>2</sup> of panels, i.e. a square of side ${Math.sqrt(panels_needed_m2).toFixed(0) }m. For reference, the ISS is 109m long.`
)}

function _10(md){return(
md`Each m<sup>2</sup> of panel weights:`
)}

function _panel_weight(Inputs){return(
Inputs.range([0, 20], {label: "m2 of panel weight (kg)", value: 5, step: 0.1})
)}

function _12(weight,md){return(
md`Only considering panels (ignoring the weight of the system to beam energy), the weight of the space station would be ${Math.round(weight / 1000)} tons.`
)}

function _13(cost,goal,nuclear_cost_per_W,md){return(
md`If launched using [SpaceX Falcon Heavy](https://www.spacex.com/media/Capabilities&Services.pdf), it would **cost $${ Math.round(cost/1000000000)}B**, which is **${Math.round((cost / goal) / nuclear_cost_per_W)}x more expensive than a nuclear power plant**.`
)}

function _14(md){return(
md`## How to bean energy?`
)}

function _15(md){return(
md`We could beam the energy using lasers, let's assume they will continuously beam energy from space to earth (to a few base stations). If each laser has a max average power of:`
)}

function _laserPower(Inputs){return(
Inputs.range([0, 1000], {label: "Laser average power (W)", value: 100, step: 10})
)}

function _weight_laser_kg(Inputs){return(
Inputs.range([0, 0.5], {label: "Laser weight (kg)", value: 0.05, step: 0.01})
)}

function _18(num_lasers,weight_lasers_kg,md){return(
md`We need ${Math.round(num_lasers)} lasers, which adds ${Math.round(weight_lasers_kg / 1000)} tons to our spaceship.`
)}

function _19(md){return(
md`---

## Appendix `
)}

function _20(md){return(
md`### Computed variables`
)}

function _power_received_per_m2(panel_power_per_m2,atmAbsorbtion){return(
panel_power_per_m2 * (1 - atmAbsorbtion / 100)
)}

function _panels_needed_m2(goal,power_received_per_m2){return(
goal / power_received_per_m2
)}

function _need_to_collect_W(goal,atmAbsorbtion){return(
goal / (1- atmAbsorbtion / 100)
)}

function _net_demand_ca(){return(
20000000000
)}

function _weight(panels_needed_m2,panel_weight){return(
panels_needed_m2 * panel_weight
)}

function _spacex_cargo_weight(){return(
63800
)}

function _spacex_cargo_cost_usd(){return(
100000000
)}

function _cost(weight,spacex_cargo_weight,spacex_cargo_cost_usd){return(
weight / spacex_cargo_weight  * spacex_cargo_cost_usd
)}

function _cost_per_W(cost,goal){return(
cost / goal
)}

function _nuclear_cost_per_W(){return(
5
)}

function _num_lasers(need_to_collect_W,laserPower){return(
need_to_collect_W / laserPower
)}

function _weight_lasers_kg(num_lasers,weight_laser_kg){return(
num_lasers* weight_laser_kg
)}

function _33(md){return(
md`### References

* [Solar power generated per square meters](https://www.quora.com/How-much-solar-energy-is-generated-per-square-metre)
* [Laser power](https://photos.app.goo.gl/NkW5fwnqQnah2UsNA)`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("viewof goal")).define("viewof goal", ["Inputs"], _goal);
  main.variable(observer("goal")).define("goal", ["Generators", "viewof goal"], (G, _) => G.input(_));
  main.variable(observer()).define(["goal","net_demand_ca","md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("viewof panel_power_per_m2")).define("viewof panel_power_per_m2", ["Inputs"], _panel_power_per_m2);
  main.variable(observer("panel_power_per_m2")).define("panel_power_per_m2", ["Generators", "viewof panel_power_per_m2"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _7);
  main.variable(observer("viewof atmAbsorbtion")).define("viewof atmAbsorbtion", ["Inputs"], _atmAbsorbtion);
  main.variable(observer("atmAbsorbtion")).define("atmAbsorbtion", ["Generators", "viewof atmAbsorbtion"], (G, _) => G.input(_));
  main.variable(observer()).define(["power_received_per_m2","panels_needed_m2","md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer("viewof panel_weight")).define("viewof panel_weight", ["Inputs"], _panel_weight);
  main.variable(observer("panel_weight")).define("panel_weight", ["Generators", "viewof panel_weight"], (G, _) => G.input(_));
  main.variable(observer()).define(["weight","md"], _12);
  main.variable(observer()).define(["cost","goal","nuclear_cost_per_W","md"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer("viewof laserPower")).define("viewof laserPower", ["Inputs"], _laserPower);
  main.variable(observer("laserPower")).define("laserPower", ["Generators", "viewof laserPower"], (G, _) => G.input(_));
  main.variable(observer("viewof weight_laser_kg")).define("viewof weight_laser_kg", ["Inputs"], _weight_laser_kg);
  main.variable(observer("weight_laser_kg")).define("weight_laser_kg", ["Generators", "viewof weight_laser_kg"], (G, _) => G.input(_));
  main.variable(observer()).define(["num_lasers","weight_lasers_kg","md"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer("power_received_per_m2")).define("power_received_per_m2", ["panel_power_per_m2","atmAbsorbtion"], _power_received_per_m2);
  main.variable(observer("panels_needed_m2")).define("panels_needed_m2", ["goal","power_received_per_m2"], _panels_needed_m2);
  main.variable(observer("need_to_collect_W")).define("need_to_collect_W", ["goal","atmAbsorbtion"], _need_to_collect_W);
  main.variable(observer("net_demand_ca")).define("net_demand_ca", _net_demand_ca);
  main.variable(observer("weight")).define("weight", ["panels_needed_m2","panel_weight"], _weight);
  main.variable(observer("spacex_cargo_weight")).define("spacex_cargo_weight", _spacex_cargo_weight);
  main.variable(observer("spacex_cargo_cost_usd")).define("spacex_cargo_cost_usd", _spacex_cargo_cost_usd);
  main.variable(observer("cost")).define("cost", ["weight","spacex_cargo_weight","spacex_cargo_cost_usd"], _cost);
  main.variable(observer("cost_per_W")).define("cost_per_W", ["cost","goal"], _cost_per_W);
  main.variable(observer("nuclear_cost_per_W")).define("nuclear_cost_per_W", _nuclear_cost_per_W);
  main.variable(observer("num_lasers")).define("num_lasers", ["need_to_collect_W","laserPower"], _num_lasers);
  main.variable(observer("weight_lasers_kg")).define("weight_lasers_kg", ["num_lasers","weight_laser_kg"], _weight_lasers_kg);
  main.variable(observer()).define(["md"], _33);
  return main;
}
