import express from 'express';

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send({
    birds: [
      {
        id: 1
      },
      {
        id: 2
      }
    ]
  })
})


export default router
