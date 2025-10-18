import React, { useRef, useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [lengthUnit, setLengthUnit] = useState("feet");
  const [widthUnit, setWidthUnit] = useState("feet");
  const [heightUnit, setHeightUnit] = useState("feet");

  const [layers, setLayers] = useState(1);
  const [coating, setCoating] = useState("pef");
  const [coatingSide, setCoatingSide] = useState("outer");
  const [customRate, setCustomRate] = useState("");
  const [result, setResult] = useState(null);

  const rates = { pef: 24.7, wood: 77 };

  const unitToFeet = (value, unitType) => {
    if (!value) return 0;
    switch (unitType) {
      case "inches": return value / 12;
      case "cm": return value / 30.48;
      case "mm": return value / 304.8;
      case "meters": return value * 3.28084;
      default: return value;
    }
  };

  const calculate = () => {
    const l = unitToFeet(parseFloat(length), lengthUnit);
    const w = unitToFeet(parseFloat(width), widthUnit);
    const h = unitToFeet(parseFloat(height), heightUnit);

    if (!l || !w) return;

    const area = h > 0 ? 2 * (l * w + l * h + w * h) : l * w;
    const coatingArea = coatingSide === "both" ? area * 2 : area;
    const rate = customRate ? parseFloat(customRate) : rates[coating];
    const costPerLayer = coatingArea * rate;
    const totalCost = costPerLayer * layers;

    setResult({
      l, w, h,
      area: coatingArea.toFixed(2),
      rate,
      layers,
      costPerLayer: costPerLayer.toFixed(2),
      totalCost: totalCost.toFixed(2),
      coating: coating === "pef" ? "PEF Coating" : "Wooden Coating",
      side: coatingSide,
    });


     // Scroll to results
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const formatUnit = (val, unit) => `${val || 0} ${unit}`;


  const resultsRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.title}>Surface Coating</h2>

        {/* Mobile 2-row input */}
        <div className={styles.inputRow}>
          <div className={styles.rowInputs}>
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder="Length" />
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Width" />
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (optional)" />
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.rowUnits}>
            <select value={lengthUnit} onChange={(e) => setLengthUnit(e.target.value)}>
              <option value="feet">Feet</option>
              <option value="inches">Inches</option>
              <option value="cm">Centimeters</option>
              <option value="mm">Millimeters</option>
              <option value="meters">Meters</option>
            </select>
            <select value={widthUnit} onChange={(e) => setWidthUnit(e.target.value)}>
              <option value="feet">Feet</option>
              <option value="inches">Inches</option>
              <option value="cm">Centimeters</option>
              <option value="mm">Millimeters</option>
              <option value="meters">Meters</option>
            </select>
            <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
              <option value="feet">Feet</option>
              <option value="inches">Inches</option>
              <option value="cm">Centimeters</option>
              <option value="mm">Millimeters</option>
              <option value="meters">Meters</option>
            </select>
          </div>
        </div>

        {/* Layers */}
        <div className={styles.inputRow}>
          <input type="number" min="1" value={layers} onChange={(e) => setLayers(e.target.value)} placeholder="Number of Layers" />
        </div>

        {/* Coating Type */}
        <div className={styles.block}>
          <label>Coating Type</label>
          <div className={styles.radioGroup}>
            <label>
              <input type="radio" value="pef" checked={coating === "pef"} onChange={(e) => setCoating(e.target.value)} />
              PEF (₹24.70/sq ft)
            </label>
            <label>
              <input type="radio" value="wood" checked={coating === "wood"} onChange={(e) => setCoating(e.target.value)} />
              Wooden (₹77/sq ft)
            </label>
          </div>
        </div>

        {/* Custom Rate */}
        <div className={styles.inputRow}>
          <input type="number" placeholder="Custom Rate (optional)" value={customRate} onChange={(e) => setCustomRate(e.target.value)} />
        </div>

        {/* Apply Coating On */}
        <div className={styles.block}>
          <label>Apply Coating On</label>
          <div className={styles.radioGroupInline}>
            <label><input type="radio" value="outer" checked={coatingSide === "outer"} onChange={(e) => setCoatingSide(e.target.value)} /> Outer</label>
            <label><input type="radio" value="inner" checked={coatingSide === "inner"} onChange={(e) => setCoatingSide(e.target.value)} /> Inner</label>
            <label><input type="radio" value="both" checked={coatingSide === "both"} onChange={(e) => setCoatingSide(e.target.value)} /> Both</label>
          </div>
        </div>

        <button className={styles.btn} onClick={calculate}>Calculate</button>
      </div>

      <div className={styles.results} ref={resultsRef}>
        <h2 className={styles.title}>Calculated Results</h2>
        <div className={styles.resultBox}><label>Surface Area</label><span>{result ? `${result.area} sq ft` : "--"}</span></div>
        <div className={styles.resultBox}><label>Coating Type</label><span>{result ? result.coating : "--"}</span></div>
        <div className={styles.resultBox}><label>Rate</label><span>{result ? `₹${result.rate}/sq ft` : "--"}</span></div>
        <div className={styles.resultBox}><label>Number of Layers</label><span>{result ? result.layers : "--"}</span></div>
        <div className={styles.resultBox}><label>Cost per Layer</label><span>{result ? `₹${result.costPerLayer}` : "--"}</span></div>
        <div className={`${styles.resultBox} ${styles.totalBox}`}><label>Total Cost</label><span>{result ? `₹${result.totalCost}` : "--"}</span></div>

        {result && (
          <div className={styles.summaryBox}>
            <h3>Dimensions Summary</h3>
            <p>Length: {formatUnit(length, lengthUnit)} ({result.l.toFixed(2)} ft)</p>
            <p>Width: {formatUnit(width, widthUnit)} ({result.w.toFixed(2)} ft)</p>
            <p>Height: {formatUnit(height, heightUnit)} ({result.h.toFixed(2)} ft)</p>
            <p>Calculation: Surface area of a 3D object</p>
            <p>Layers: {result.layers}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
