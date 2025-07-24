import { useState } from "react";

function useCaptureLogic() {
    const safeZones = [1, 9, 14, 22, 27, 35, 40, 48];
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
            const updated = { ...prev, [player]: newPosition };

            if (opponent) {
                const [opponentPlayer] = opponent;
                if (!safeZones.includes(newPosition)) {
                    updated[opponentPlayer] = 0;
                    alert(`${player} captured ${opponentPlayer}'s token!`);
                } else {
                    console.log(`${opponentPlayer} is safe at position ${newPosition}`);
                }
            }
            return updated;
        });
    };

    return { positions, moveToken };
}

export default useCaptureLogic;