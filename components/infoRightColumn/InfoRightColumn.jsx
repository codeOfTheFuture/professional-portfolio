import React from "react";
import styles, {
  previewShadowLt,
  previewShadowBl,
  previewShadowGn,
  previewShadowPl,
  previewLt,
  previewBl,
  previewGn,
  previewPl,
} from "./InfoRightColumn.module.scss";

const InfoRightColumn = ({ colorMode }) => {
  let mode = {};
  if (colorMode === "lightMode") {
    mode.previewShadow = previewShadowLt;
    mode.preview = previewLt;
  } else if (colorMode === "blueMode") {
    mode.previewShadow = previewShadowBl;
    mode.preview = previewBl;
  } else if (colorMode === "greenMode") {
    mode.previewShadow = previewShadowGn;
    mode.preview = previewGn;
  } else {
    mode.previewShadow = previewShadowPl;
    mode.preview = previewPl;
  }

  return (
    <div className={styles.rightColumn}>
      <div id={mode.previewShadow}>
        <div id={mode.preview}>
          <div id={styles.cornerTl} className={styles.corner}></div>
          <div id={styles.cornerTr} className={styles.corner}></div>
          <h3>What I Do</h3>
          <p>
            I develop web applications with modern JavaScript frameworks.
            Experienced in object-oriented and functional programming.
          </p>
          <div id={styles.cornerBr} className={styles.corner}></div>
          <div id={styles.cornerBl} className={styles.corner}></div>
        </div>
      </div>
    </div>
  );
};

export default InfoRightColumn;
