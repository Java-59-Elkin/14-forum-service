
const changeRole = (req, res, next) => {
    const principal = req.principal;

    if (principal.roles.includes('Administrator')) {
        return next();
    }
    return res.status(403).send('Forbidden');
}

export default changeRole;