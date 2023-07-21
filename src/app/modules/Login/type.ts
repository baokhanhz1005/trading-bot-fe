

export type LoginProps = {}

export type TState = {
    email: {
        value: string,
        isValid: boolean,
        errors: string[],
    },
    password: {
        value: string,
        isValid: boolean,
        errors: string[],
    }
};

export type RootStateLogin = {
    user: TState,
    isLoggingIn: boolean,
}