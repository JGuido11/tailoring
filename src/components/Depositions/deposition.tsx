import { useState } from "react";
import { deposition } from "../../utils/depositions";
import "../../styles/css/styles.css";

export function Depositions() {
  const [activeDepositionIndex, setActiviteDepositionIndex] = useState(1);
  const depositions = deposition[activeDepositionIndex - 1];

  function handleNextPage() {
    const hasNextPage = activeDepositionIndex + 1 <= deposition.length;

    if (!hasNextPage) {
      return;
    }
    setActiviteDepositionIndex(activeDepositionIndex + 1);
  }

  function handleLastPage() {
    const hasLastPage = activeDepositionIndex - 1 <= deposition.length;

    if (!hasLastPage) {
      return;
    }
    setActiviteDepositionIndex(activeDepositionIndex - 1);
  }

  return (
    <div className="Deposition__container" id="depoimentos">
      <div className="content">
        <h1>Depoiments</h1>
        <div className="divider">
          <div className="swiperContainer">
            <div className="avatar">
              <img src={depositions.avatar} alt={depositions.name} />
            </div>

            <div className="depositionContainer">
              <div className="arrow" onClick={handleLastPage}>
                <span className="material-symbols-outlined">
                  arrow_left_alt
                </span>
              </div>
              <p className="depositionText">"{depositions.depositionText}"</p>
              <div className="arrow" onClick={handleNextPage}>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </div>
            </div>

            <p className="author">{depositions.name}</p>
            <p className="authorCareer">{depositions.job}</p>

            <div className="buttons">
              <div className="arrow" onClick={handleLastPage}>
                <span className="material-symbols-outlined">
                  arrow_left_alt
                </span>
              </div>
              <div className="dotsContainer">
                {deposition.map((dep) => (
                  <div
                    key={dep.id}
                    className={
                      dep.id === activeDepositionIndex
                        ? `${"dot"} ${"dot active"}`
                        : "dot"
                    }
                  />
                ))}
              </div>

              <div className="arrow" onClick={handleNextPage}>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
