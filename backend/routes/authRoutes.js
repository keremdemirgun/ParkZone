import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

//reg new user /auth/register post
router.post("/register", (req, res) => {
    // const body = req.body;
    const {username, password} = req.body;

    //encrypte pass
    const hashedPassword = bcrypt.hashSync(password, 8);

    //save user to the db
    try{
        const insertUser = db.prepare(`INSERT INTO users (username, password)
            VALUES (?, ?)`);

        const result = insertUser.run(username, hashedPassword);

        //create a token
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token });
        
    }   catch(err){
        console.log(err.message);
        res.sendStatus(503);
    }

});


router.post("/login", (req, res) => {


});

export default router;