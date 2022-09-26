import React, { useEffect, useState } from "react";
import "./range.css";

export default function Range(props) {
  const { min, max, onChange } = props;
  const blocks = Array.from({ length: 100 }, (_, index) => index + 1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [minp, setMinp] = useState(0);
  const [maxp, setMaxp] = useState(0);

  const handleMounseDown = (e) => {
    setMinp(0);
    setMaxp(0);
    setStart(e.target.dataset.index);
  };

  const handleMounseUp = (e) => {
    setEnd(e.target.dataset.index);
  };

  useEffect(() => {
    if (start > end) {
      setMinp(end);
      setMaxp(start);
    } else {
      setMinp(start);
      setMaxp(end);
    }
  }, [end]);

  useEffect(() => {
    setMinp(min);
    setMaxp(max);
  }, []);

  useEffect(() => {
    minp && maxp && onChange && onChange(minp, maxp);
  }, [minp, maxp]);

  return (
    <div className="container">
      <div className="content">
        {blocks.map((index) => (
          <div
            onMouseDown={handleMounseDown}
            onMouseUp={handleMounseUp}
            className="block"
            data-index={index}
            style={{
              background: index >= minp && index <= maxp ? "blue" : ""
            }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}
