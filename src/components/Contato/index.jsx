import React from 'react'
const Contato = () => {
    return (
        <div>
            <div class="linha">
                <section>
                    <div class="coluna col5"><br></br><br></br><br></br>
                        <h3>Localização</h3>
                        <ul class="sem-padding sem-marcador">
                            <li>Rua Ponta Negra</li>
                            <li>Bairro Parque do Agreste</li>
                            <li>Vargem Grande Paulista, SP</li>
                        </ul>

                        <h3>Contato Direto</h3>
                        <ul class="sem-padding sem-marcador">
                            <li>Fone: <strong>(11) 9 5430-9144</strong></li>
                            <li>E-mail: <strong>lucattomarianadarosa@gmail.com</strong></li>
                            <li>Instagram: <strong>@marilucatto</strong></li>
                            <li>Github: <strong>https://github.com/Mari-Lucatto</strong></li>
                        </ul>
                        
                    </div>
                    <div class="coluna col6">
                    <img src="img/portfolio-profissional.png" alt="" />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Contato;