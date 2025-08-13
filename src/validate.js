function getInputErrorMessage(input) {
    if (input.validity.valueMissing) {
        return "Oi! This ain't optional, genius.";
    }

    if (input.validity.typeMismatch) {
        if (input.type === "email") return "That’s not even a real email, mate.";
    }

    if (input.validity.patternMismatch) {
        if (input.type === "password") return "Must have at least 8 characters, including uppercase, lowercase and numbers"
        return "That pattern’s all wrong, champ.";
    }

    return input.validationMessage;
}

export { getInputErrorMessage };
