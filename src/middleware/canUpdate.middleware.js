
const updateUser = (req, res, next) => {
    const principal = req.principal;
    const login = req.params.user;

    if (principal.username === login) {
        return next();
    }
    return res.status(403).send('Forbidden');
}

export default updateUser;