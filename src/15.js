app.get('/', (req, res) => {
    const user = req.query.user;
    if (!user) {
      res.status(401).send('Please provide a valid username');
      return;
    }
    const password = req.query.password;
    if (!password) {
      res.status(401).send('Please provide a valid password');
      return;
    }
    authenticateUser(user, password, (err, user) => {
      if (err) {
        res.status(500).send('Error authenticating user');
        return;
      }
      if (!user) {
        res.status(401).send('Invalid username or password');
        return;
      }
      req.logIn(user, (err) => {
        if (err) {
          res.status(500).send('Error logging in user');
          return;
        }
        res.redirect('/home');
      });
    });
  });
