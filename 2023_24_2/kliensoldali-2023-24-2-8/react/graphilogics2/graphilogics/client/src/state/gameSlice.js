import { createSlice } from "@reduxjs/toolkit";

export const szin = {
    FEHER: 0,
    SZURKE: 1,
    FEKETE: 2,
    PIROS: 3,
};

export const szamToSzin = {
    0: "feher",
    1: "szurke",
    2: "fekete",
    3: "piros",
};


export const gameSlice = createSlice({
    name: "game",
    initialState: {
        solution: [],
        table: [],
        checkingSolution: false,
    },
    reducers: {
        startGame(state, { payload }) {
            state.solution = payload.map((line) => line.split("").map((c) => (c === "#" ? szin.FEKETE : szin.FEHER)));
            state.table = payload.map((line) => line.split("").map(() => szin.FEHER));
        },
        clickCell(state, { payload }) {
            if (state.table[payload.row][payload.col] === szin.FEHER) {
                state.table[payload.row][payload.col] = szin.FEKETE
            } else {
                state.table[payload.row][payload.col] = szin.FEHER
            }
        },
        startSolutionChecking(state) {
            state.checkingSolution = true;
        },
        stopSolutionChecking(state) {
            state.checkingSolution = false;
        },
    }
})

export const selectRowValues = (state) => {
    return state.game.solution.map(line => {
        const lengths = [];
        let length = 0;

        line.forEach((cell, index) => {
            if (cell === szin.FEKETE) {
                length++;
            }

            if (cell === szin.FEHER && length !== 0 || index === line.length - 1) {
                lengths.push(length);
                length = 0;
            }
        })

        return lengths;
    })
}

export const selectColumnValues = (state) => {
    const lengthArrays = [];
    for (let column = 0; column < state.game.solution[0].length; column++) {
        const lengths = [];
        let length = 0;
        for (let row = 0; row < state.game.solution.length; row++) {
            const cell = state.game.solution[row][column];

            if (cell === szin.FEKETE) {
                length++;
            }

            if (cell === szin.FEHER && length !== 0 || row === state.game.solution.length - 1) {
                lengths.push(length);
                length = 0;
            }
        }
        lengthArrays.push(lengths);
    }
    return lengthArrays;
}

export const { startGame, clickCell, startSolutionChecking, stopSolutionChecking } = gameSlice.actions;

export const selectTable = (state) => {
    return state.game.table.map((row, i) =>
        row.map((cell, j) => {
            return state.game.checkingSolution ? (cell === state.game.solution[i][j] ? cell : szin.PIROS) : cell;
        })
    );
};

// thunk
export const checkSolution = (dispatch) => {
    dispatch(startSolutionChecking())

    setTimeout(() => {
        dispatch(stopSolutionChecking())
    }, 3000)
}
