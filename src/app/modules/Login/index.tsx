import { useImmer } from "use-immer";
import { Button, Input } from "app/components/Atoms";
import { Content, LoginForm, LoginModule, LoginWrapper, LogoLogin, SubBanner, Text, Wrapper, WrapperContent } from "./styled";
import { LoginProps, TState } from "./type";
import { TEXT_ERROR } from "constants/errors";
import LoginServices from 'app/services/LoginServices'
import { ROUTES } from "constants/routes";
import { useHistory } from "react-router-dom";
import { MODULE_CONFIG } from "./config";
import { actions } from "./actions";
import { Dispatch, compose } from "redux";
import { ConnectedProps, connect } from "react-redux";
import reducer from './reducer';
import { injectReducer } from "redux-injectors";

const initialState: () => TState = () => ({
    email: {
        value: '',
        isValid: true,
        errors: [],
    },
    password: {
        value: '',
        isValid: true,
        errors: [],
    },
});

type PropsFromRedux = ConnectedProps<typeof withConnector>;
type LoginPropsWithConnect = PropsFromRedux & LoginProps;


const Login: React.FC<LoginPropsWithConnect> = props => {

    const [state, setState] = useImmer<TState>(initialState());
    const history = useHistory();
    const { email, password } = state;


    const renderLeftContent = () => (
        <WrapperContent>
            <Content>
                <Text>
                    Explore automated trading in the cryptocurrency market with our advanced trading bots.
                </Text>
            </Content>
            <div style={{ width: '150px' }}>
                <Button style={{ fontWeight: 'bold' }} theme="success" fullWidth>Start trial</Button>
            </div>
        </WrapperContent>

    );

    const changeValue = (type: keyof TState, value: string) => {
        setState((draft: any) => {
            draft[type].value = value
        });
    };

    const handleLoginForm = async () => {
        let isValid = false;
        const listKeyStates = (Object.keys(state) as Array<keyof TState>);

        if (listKeyStates.some(key => !state[key].value)) {
            listKeyStates.forEach((key) => {
                if (!state[key].value) {
                    setState(draft => {
                        draft[key].isValid = false;
                        draft[key].errors = [TEXT_ERROR.FILED_REQUIRED];
                    });
                };
            });
        } else {
            isValid = true;
        };

        if (isValid) {
            const params = {
                email: state.email.value,
                password: state.password.value,
                // token: 
            };
            const res: any = await LoginServices.login(params);

            if (res && res.code === 200) {
                props.loginSuccess(res.data);
                const router = `/${res.data.userId}/general`;
                history.push('/');
            }
        };
    };

    const renderLoginForm = () => (
        <LoginForm>
            <div className="p-relative h-100" style={{ width: '40%' }}>
                <SubBanner />
            </div>
            <Wrapper>
                <div className="d-flex justify-center" style={{ padding: '15px' }}>
                    <LogoLogin />
                </div>
                <Input value={email.value} theme='dark' placeholder="Email" onChange={(e) => changeValue('email', e.target.value)} />
                <Input value={password.value} theme="dark" placeholder="Password" onChange={(e) => changeValue('password', e.target.value)} type="password" />
                <div className="d-flex justify-center" style={{ marginTop: '20px' }}>
                    <div className="w-50">
                        <Button onClick={handleLoginForm} theme="warning" fullWidth >Login</Button>
                        <div className="d-flex justify-end" style={{ marginTop: '20px' }}>
                            <Button theme="text" color="#fff" >Forgot password ?</Button>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </LoginForm>
    );

    return (
        <LoginModule>
            <LoginWrapper>
                {renderLeftContent()}
                {renderLoginForm()}
            </LoginWrapper>
        </LoginModule>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loginSuccess: (params: any) => {
            dispatch({ type: `${MODULE_CONFIG.key}${actions.LOGIN_SUCCESS}`, payload: { data: params } })
        }
    }
};

const withReducer = injectReducer({ key: MODULE_CONFIG.key, reducer });

const withConnector = connect(null, mapDispatchToProps);

export default compose(withConnector, withReducer)(Login);

Login.defaultProps = {};
