import { MyDay } from "@/modules/MyDay/containers/MyDay";
import { Tasks } from "@/modules/Tasks/containers/Tasks";
import { Route, Switch, Redirect } from "react-router-dom";
import { ContentContainer } from "./ContentStyles";

export function Content() {
  return (
    <ContentContainer className="app__content">
      <Switch>
        <Route exact path="/">
          <Redirect to="/my-day"></Redirect>
        </Route>
        <Route path="/my-day">
          <MyDay></MyDay>
        </Route>
        <Route path="/important"></Route>
        <Route path="/planned"></Route>
        <Route path="/assigned-to-me"></Route>
        <Route path="/tasks">
          <Tasks></Tasks>
        </Route>
        <Route exact path="/groups/:groupId/:listId"></Route>
      </Switch>
    </ContentContainer>
  );
}
