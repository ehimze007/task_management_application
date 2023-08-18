import { Layout } from "../components/Layout";
import { TodoItem } from "../components/TodoItem";
import { Button } from "../components/Button";
import { useState } from "react";
import classes from "../styles/Dashboard.module.css";
import plusIcon from "../images/plus-icon.svg";
import { useAuth0 } from "@auth0/auth0-react";

export function Dashboard() {
  const { user } = useAuth0();
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log(user);

  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={classes.page_title}>Today</h1>
        <p className={classes.page_subtitle}>4/6 completed</p>

        <section className={classes.todo_list}>
          <TodoItem
            title="Cooking a salmon sushi"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Write code for fizz buzz algorithm"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Build Todo Daily app"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Design Todo Daily app"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
        </section>

        {showForm ? null : (
          <div
            onClick={() => setShowForm(true)}
            className={classes.add_task_button}
          >
            <img src={plusIcon} alt="Plus icon" />
            <p>Add task</p>
          </div>
        )}

        {showForm ? (
          <form onSubmit={handleSubmit} className={classes.add_todo_form}>
            <div className={classes.add_todo_form_inputs}>
              <input type="text" placeholder="Task title" />
              <textarea rows={3} placeholder="Description"></textarea>
            </div>

            <div className={classes.add_todo_form_buttons}>
              <Button size="sm">Add</Button>
              <Button
                size="sm"
                variant="outlined"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : null}
      </main>
    </Layout>
  );
}
