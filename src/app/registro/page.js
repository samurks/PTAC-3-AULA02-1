import React from 'react';
import "/home/samuel/Documentos/Development/PTAC-3-AULA02-1/src/app/stylesheet/css/Registro.css"; 

export default function Registro() {
    return (
        <div className="registro-container">
            <h1>Registre-se agora!</h1>
            <form className="registro-form">
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" />
                </div>

                <button type="submit">Registrar</button>
            </form>
        </div>
       
    );
}
