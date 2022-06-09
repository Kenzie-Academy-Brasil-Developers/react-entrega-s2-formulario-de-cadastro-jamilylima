import "../Logado/logado.css";
import { Link } from "react-router-dom";
import img from "../Logado/img.png";
import { motion } from "framer-motion";


const Logado = ({ usuario }) => {
  console.log(usuario)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="login">Bem-vindo(a), {usuario.name}!</h1>
      <div>
        <img src={img} alt="" />
        <Link className="tagA" to="/">Voltar</Link>
      </div>
    </motion.div>
  );
};

export default Logado;
