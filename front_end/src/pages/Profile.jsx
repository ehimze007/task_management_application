import { Layout } from "../components/Layout"
import { Button } from "../components/Button"
import classes from "../styles/Profile.module.css"
import uploadIcon from "../images/upload-icon.png"

export function Profile() {
  return (
    <Layout>
      <main className={classes.main}>
        <form
          onSubmit={(event) => event.preventDefault()}
          className={classes.form}
        >
          <div className={classes.image_input}>
            <img src={uploadIcon} alt="Upload icon" />
            <input type="file" accept="image/*" />
          </div>

          <input
            className={classes.text_input}
            type="text"
            placeholder="Enter your name"
          />
          <input
            className={classes.text_input}
            type="text"
            placeholder="Enter your username"
          />

          <div className={classes.buttons_wrapper}>
            <Button size="sm">Apply</Button>
            <Button size="sm" variant="outlined">
              Cancel
            </Button>
          </div>
        </form>
      </main>
    </Layout>
  )
}
