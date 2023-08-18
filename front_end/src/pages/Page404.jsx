import { Header } from "../components/Header"
import classes from "../styles/Page404.module.css"

export function Page404() {
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.content_wrapper}>
        <h1>404</h1>
        <p>Oops... Page not found!</p>
      </div>
    </main>
  )
}
