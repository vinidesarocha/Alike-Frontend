import React, { useCallback, useRef } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import signInBackground from '../../assets/backgroundSignIn/backgroundSignIn.png';

import Input from '../../components/Input';
import GoOn from '../../components/GoOn';

import { Container, Background, Title } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        /* zeramos os erros */
        formRef.current?.setErrors({});
        /* Criaremos um schema validar o nosso formulário */
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        /* Verifica as credencias do usuário */
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer o login, cheque as credenciais.'
        );
      }
    },
    [signIn]
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Background source={signInBackground}>
            <Container>
              <View style={{ width: '100%' }}>
                <Title>Bem{'\n'}Vindo!</Title>
              </View>

              <Form
                ref={formRef}
                style={{ width: '100%' }}
                onSubmit={handleSignIn}
              >
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                />
                <Input
                  ref={passwordInputRef}
                  returnKeyType="send"
                  secureTextEntry
                  name="password"
                  icon="lock"
                  placeholder="Senha"
                  onSubmitEditing={() => {
                    formRef.current?.submitForm();
                  }}
                />
              </Form>

              <GoOn
                style={{ flex: 1, paddingTop: '22%' }}
                formRef={formRef}
                name="Sign In"
              />
            </Container>
          </Background>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
