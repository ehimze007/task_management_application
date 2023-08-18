import { Layout } from "../components/Layout"
import { TodoItem } from "../components/TodoItem"
import classes from "../styles/Dashboard.module.css"

export function Upcoming() {
  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={classes.page_title}>Upcoming</h1>

        <div className={classes.calendar_wrapper}>
          <p>January 2022</p>

          <div className={classes.days_wrapper}>
            {Array(12)
              .fill(0)
              .map((number, index) => (
                <div className={index === 0 ? classes.current_day : ""}>
                  <p>{index + 1}</p>
                </div>
              ))}
          </div>
        </div>

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
        </section>
      </main>
    </Layout>
  )
}
