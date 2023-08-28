const {body, validationResult} = require('express-validator');

const validacion = [
    body("usuario").notEmpty().withMessage("El Usuario debe ser obligatorio"),
    body("contraseña").notEmpty().withMessage("La contraseña es obligatoria").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
];

const validarEsquema = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  next();
};

module.exports = {validacion, validarEsquema};