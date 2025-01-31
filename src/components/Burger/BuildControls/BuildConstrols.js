import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const buildConstrols = props => {
  return (
    <div className={classes.BuildControls}>
    <p>Current Price : <strong> {props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl
        added={()=>props.ingredientAdded(ctrl.type)}
        removed={()=>props.ingredientRemoved(ctrl.type)}
        key={ctrl.type} label={ctrl.label}
        disabled={props.disabled[ctrl.type]}
        />
      ))}
    <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
  );
};

export default buildConstrols;
