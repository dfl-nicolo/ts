class GlobalLogger {
    public static logGlobals() {
        for (let email of CONTACT_EMAIL_ARRAY) {
            console.log(`found contact: ${email}`);
        }
    }
}
window.onload = () => {
    GlobalLogger.logGlobals();
}

// infer from property
declare type inferredProperty<T> = T extends { id: infer U } ? U : never;
