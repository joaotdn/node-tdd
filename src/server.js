/**
 * Responsibility: Start application
 */
import app from './app'
const port = 3000

app.listen(port, () => {
  console.log(`listen on ${port}`)
})