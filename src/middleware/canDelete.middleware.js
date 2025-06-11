
const deleteUser = (req, res, next) => {
    const principal = req.principal;
    const login = req.params.user;

    if ((principal.username === login) || (principal.roles.includes('Moderator'))) {
        return next();
    }
    return res.status(403).send('Forbidden');
}

export default deleteUser;