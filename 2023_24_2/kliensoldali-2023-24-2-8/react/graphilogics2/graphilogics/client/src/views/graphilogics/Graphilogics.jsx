import { useDispatch, useSelector } from "react-redux";
import {
  checkSolution,
  // checkSolution,
  clickCell,
  selectColumnValues,
  selectRowValues,
  selectTable, startSolutionChecking, stopSolutionChecking,
  szamToSzin,
} from "../../state/gameSlice";

export const GraphiLogics = () => {
  const rowValues = useSelector(selectRowValues);
  const columnValues = useSelector(selectColumnValues);
  const board = useSelector(selectTable);
  const dispatch = useDispatch();

  console.log(rowValues);
  console.log(columnValues);
  console.log(board);

  return (
    <>
      <table id="layout">
        <tbody>
          <tr>
            <td></td>
            <td>
              <table id="felso">
                <tbody>
                  <tr>
                    {columnValues.map((values, index) => (
                      <td key={index}>
                        {values.map((value, index) => (
                          <span key={index}>{value}</span>
                        ))}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table id="bal">
                <tbody>
                  {rowValues.map((values, index) => (
                    <tr key={index}>
                      <td>
                        {values.map((value, index) => (
                          <span key={index}>{value}</span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
            <td>
              <table id="tabla">
                <tbody>
                  {board.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, colIndex) => (
                        <td
                          key={colIndex}
                          className={szamToSzin[cell]}
                          onClick={() => dispatch(clickCell({ row: rowIndex, col: colIndex }))}
                        ></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => {
        dispatch(checkSolution)
      }}>Megoldás mutatása</button>
    </>
  );
};
