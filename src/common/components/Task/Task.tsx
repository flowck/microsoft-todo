import { useState } from "react";
import Check from "@/common/icons/check.svg";
import Favorited from "@/common/icons/favorited.svg";
import ToFavorite from "@/common/icons/toFavorite.svg";
import {
  Container,
  StatusButton,
  FavoriteButton,
} from "@/common/components/Task/TaskStyles";

export function Task() {
  const [isComplete, setIsComplete] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Container>
      <StatusButton
        onClick={() => setIsComplete(!isComplete)}
        className={isComplete ? "status-button--complete" : ""}
      >
        {isComplete ? <img src={Check} alt="Status" /> : null}
      </StatusButton>

      <span>MEIC - Work on my GSI assignment</span>

      <FavoriteButton onClick={() => setIsFavorited(!isFavorited)}>
        <img src={isFavorited ? Favorited : ToFavorite} alt="favorite" />
      </FavoriteButton>
    </Container>
  );
}
