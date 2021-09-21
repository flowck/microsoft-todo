import { Tasks } from "./Tasks";
import { StoreProvider } from "@/store";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Tasks.tsx", () => {
  it("Should add a new task", async () => {
    let wrapper = render(
      <StoreProvider>
        <Tasks />
      </StoreProvider>
    );
    const input = wrapper.getByTestId("addTaskInput");
    const newTask = "Buy dog food.";

    fireEvent.input(input, { target: { value: newTask } });
    fireEvent.submit(wrapper.getByTestId("addTaskForm"));

    const createdTask = screen.getByText(new RegExp(newTask, "i"));
    expect(createdTask.textContent).toBe(newTask);
  });
});
