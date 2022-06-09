import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../Cadastro/cadastro.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Cadastro = ({ setUsuario }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("O campo é obrigatório (apenas letras)"),
    email: yup
      .string()
      .required("Este campo é obrigatório")
      .email("Email inválido"),
    senha: yup
      .string()
      .required("Este campo é obrigatório")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
        " A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial!"
      ),
    senhaConfirmada: yup
      .string()
      .required("Confirmar senha obrigatório")
      .oneOf([yup.ref("senha"), null], "As senhas devem corresponder"),
    check: yup.boolean().isTrue("Você não aceitou os termos!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    reValidateMode: "onSubmit",
  });

  const handleChange = (data) => {
    setUsuario(data);
    history.push("/logado");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <form onSubmit={handleSubmit(handleChange)}>
          <h1 className="cadastro">Cadastre-se para acessar o sistema</h1>
          <input
            type="text"
            autoComplete="none"
            {...register("name")}
            placeholder="Nome de usuário *"
          />
          <span className="erro"> {errors.name?.message} </span>

          <input
            type="email"
            {...register("email")}
            placeholder="Endereço de Email *"
          />
          <span className="erro"> {errors.email?.message}</span>

          <input type="password" {...register("senha")} placeholder="Senha *" />
          <span className="erro"> {errors.senha?.message}</span>
          <input
            type="password"
            {...register("senhaConfirmada")}
            placeholder="Confirme sua senha *"
          />

          <span className="erro">{errors.senhaConfirmada?.message}</span>
          <div className="checkbox">
            <input className="check" type="checkbox" {...register("check")} />
            <p>
              Eu li e aceito os <a href="termos de uso">termos de uso</a>{" "}
            </p>
          </div>
          {errors.check && (
            <span className="erro"> {errors.check.message}</span>
          )}
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </motion.div>
  );
};

export default Cadastro;
