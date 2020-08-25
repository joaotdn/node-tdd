/**
 * Responsibility: Start application
 */
import setupApp from './app'

(async() => {
  const port = 3000
  try {
    const app = await setupApp()
    const server = app.listen(port, () => console.info(`Listen on ${port}`))
    // close open connections
    // close db connection
    // close application with success
    const exitSignal = ["SIGINT", "SIGTERM", "SIGQUIT"]
    exitSignal.map(sig =>
      process.on(sig, () =>
        server.close(err => {
          if (err) {
            console.log(err)
            process.exit(1) // close with errors
          }
          app.database.connection.close(function() {
            console.log('Database connection closed')
            process.exit(0) // success close
          })
        })
      )
    )
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
})()