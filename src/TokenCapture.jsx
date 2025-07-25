import { useState } from "react"

function useCaptureLogic(){
    const [positions, setPositions] = useState({
    Red: 0,
    Blue: 0,
    Green: 0,
    Yellow: 0,
    });
    const moveToken = (player, diceValue) => {
        setPositions((prev) => {
            const newPosition = prev[player] + diceValue;
            const opponent = Object.entries(prev).find(
                ([otherPlayer, pos]) => otherPlayer !== player && pos === newPosition
            );
            const updated = {prev, [player]: newPosition};

            if (opponent){
                const [opponentPlayer] = opponent;
              }
            return updated
        })
    }
    return {positions, moveToken}
}

export default useCaptureLogic