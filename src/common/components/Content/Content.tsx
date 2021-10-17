import { ContentContainer } from "./ContentStyles";
import { TaskContainerTypes } from "@/common/typing";
import { Tasks } from "@/modules/Tasks/containers/Tasks";
import { Route, Switch, Redirect } from "react-router-dom";

export function Content() {
  return (
    <ContentContainer className="app__content">
      <Switch>
        <Route exact path="/">
          <Redirect to="/tasks"></Redirect>
        </Route>
        <Route path="/my-day">
          <Tasks title="My Day" tasksType={TaskContainerTypes.MYDAY}></Tasks>
        </Route>
        <Route path="/important">
          <Tasks title="Important" tasksType={TaskContainerTypes.IMPORTANT}></Tasks>
        </Route>
        <Route path="/planned">
          <Tasks title="Planned" tasksType={TaskContainerTypes.PLANNED}></Tasks>
        </Route>
        <Route path="/assigned-to-me">
          <Tasks title="Assigned to me" tasksType={TaskContainerTypes.ASSIGNED_TO_ME}></Tasks>
        </Route>
        <Route path="/tasks">
          <Tasks title="Tasks" tasksType={TaskContainerTypes.TASKS}></Tasks>
        </Route>
        <Route exact path="/groups/:groupId/:listId"></Route>
      </Switch>
    </ContentContainer>
  );
}
