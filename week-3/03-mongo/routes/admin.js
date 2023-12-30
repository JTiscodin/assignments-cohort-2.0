const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db/index")
// Admin Routes
// Every Route starts from /admin
router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    console.log(password)
    const admin = await new Admin({
        username: username,
        password: password
    })
    await admin.save()
    res.json({message: "Created new Admin"})
});

router.post('/courses', adminMiddleware, (req, res) => {
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;