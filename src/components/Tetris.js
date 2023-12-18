import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
// import titleImg from "../img/tetris.png";

// Custom Hooks
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import {
  DialogContainer,
  SaveButtonDialog,
  TransparentBackground,
  XButtonDialog,
} from "./styles/StyledDialog";
import axios from "axios";
import Swal from "sweetalert2";

// sets up variables to be used for game logic
const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDialogVisible(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  // moves the various pieces
  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  const handleDialog = () => {
    setDialogVisible(false);
  };

  const saveScore = () => {
    if (playerName === "") {
      Swal.fire("Please enter you name.", "Your name is required.", "warning");
      return;
    } else {
      axios
        .post("http://localhost:3001/api/save_score", {
          name: playerName,
          score,
        })
        .then((response) => {
          Swal.fire(
            "Score saved!",
            "Thanks for playing, Your score is saved!",
            "success"
          );
          setDialogVisible(false);
          setPlayerName("");
        })
        .catch((error) => {
          Swal.fire(
            "Failed to save your score.",
            "Please try again later.",
            "error"
          );
          console.log(error);
        });
    }
  };

  // the section brings in other components and shows what the game looks like
  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      {dialogVisible && (
        <>
          <DialogContainer>
            <XButtonDialog onClick={handleDialog}>x</XButtonDialog>
            <h1>🎮 Save Score 🎮</h1>
            <label>Name</label>
            <input
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <label>Score</label>
            <input readOnly={true} value={score} />

            <SaveButtonDialog onClick={saveScore}>SAVE</SaveButtonDialog>
          </DialogContainer>
          <TransparentBackground />
        </>
      )}

      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
