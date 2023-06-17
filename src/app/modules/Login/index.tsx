import { Button, Input } from "../../components/Atoms";
import { Content, LoginForm, LoginModule, LoginWrapper, LogoLogin, SubBanner, Text, Wrapper, WrapperContent } from "./styled";
import { LoginProps } from "./type";


export const Login: React.FC<LoginProps> = props => {
    return (
        <LoginModule>
            <LoginWrapper>
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
                <LoginForm>
                    <div style={{ position: 'relative', width: '40%', height: '100%' }}>
                        <SubBanner />
                    </div>
                    <Wrapper>
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
                            <LogoLogin />
                        </div>
                        <Input theme='dark' placeholder="Email" onChange={() => { }} />
                        <Input theme="dark" placeholder="Password" type="password" />
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <div style={{ width: '50%' }}>
                                <Button theme="warning" fullWidth >Login</Button>
                                <div style={{ justifyContent: 'flex-end', display: 'flex', marginTop: '20px' }}>
                                    <Button theme="text" color="#fff" >Forgot password ?</Button>
                                </div>
                            </div>

                        </div>
                    </Wrapper>
                </LoginForm>
            </LoginWrapper>
        </LoginModule>
    );
}
