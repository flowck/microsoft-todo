import { useState } from "react";
import Check from "@/common/icons/check.svg";
import { Task } from "@/modules/Tasks/store/task";
import Favorited from "@/common/icons/favorited.svg";
import ToFavorite from "@/common/icons/toFavorite.svg";
import { Container, StatusButton, FavoriteButton } from "@/modules/Tasks/components/TaskItem/TaskItemStyles";

interface Props {
  task: Task;
}

export function TaskItem({ task }: Props) {
  const [isComplete, setIsComplete] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Container isComplete={isComplete}>
      <StatusButton onClick={() => setIsComplete(!isComplete)} className={isComplete ? "status-button--complete" : ""}>
        {isComplete ? <img src={Check} alt="Status" /> : null}
      </StatusButton>

      <span>{task.content}</span>

      <FavoriteButton onClick={() => setIsFavorited(!isFavorited)}>
        <img src={isFavorited ? Favorited : ToFavorite} alt="favorite" />
      </FavoriteButton>
    </Container>
  );
}
