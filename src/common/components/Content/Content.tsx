import { MyDay } from "@/modules/MyDay/containers/MyDay";
import { Route, Switch, Redirect } from "react-router-dom";

export function Content() {
  return (
    <section>
      <Switch>
        <Route exact path="/">
          <Redirect to="/my-day"></Redirect>
        </Route>
        <Route path={`/my-day`}>
          <MyDay></MyDay>
        </Route>
        <Route path="/important"></Route>
        <Route path="/planned"></Route>
        <Route path="/assigned-to-me"></Route>
        <Route path="/tasks"></Route>
        <Route path="/groups/:groupId/:listId"></Route>
      </Switch>
    </section>
  );
}
