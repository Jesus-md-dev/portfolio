
import React from "react";
import collage from '../assets/images/collage.jpg';
import cumpleanos from '../assets/images/cumpleanos.jpg';
import cyrus from '../assets/images/cyrus.gif';
import girasol from '../assets/images/girasol2.gif';
import hug from '../assets/images/hug.gif';
import "./QW5h.css";

class QW5h extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            messages: false,
        };
    }

    handlerEnviar = () => {
        if (document.getElementById("password").value === 'RmVsaXogY3VtcGxlYcOxb3MgQW5h') {
            this.setState({ logged: true })
        }
    };

    handlerMsg = (event) => {
        event.target.classList.add('d-none')
        document.getElementById("QW5h-body").classList.remove('screen-before')
        document.getElementById("QW5h-body").classList.add('w-100')
        this.setState({ messages: true })
    };

    render() {
        return (
            <div id="QW5h-body" className="screen-before">
                {(() => {
                    const { logged } = this.state;
                    if (logged) {
                        return (
                            <span>
                                <div className="w-100 d-flex justify-content-center">
                                    <div className="w-min bg-white rounded-pill m-4">
                                        <h1 className="w-min whitespace-nowrap rainbow-text title text-center p-4 text-black">
                                            ¡¡Felicidades Ana!!
                                        </h1>
                                    </div>
                                </div>
                                <div className="girasoles mb-5">
                                    <img src={girasol} alt="girasol" />
                                    <img src={cyrus} alt="cyrus" />
                                    <img src={girasol} alt="girasol" />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button onClick={this.handlerMsg} type="submit" className="rounded-pill">Púlsame</button>
                                </div>
                                <div className="w-100 d-flex justify-content-center">

                                    {(() => {
                                        const { messages } = this.state;
                                        if (messages) {
                                            return (
                                                <span className="w-50 d-flex msgs">
                                                    <div className="w-100">
                                                        <div className="msg1 message message-text sent">
                                                            Esto seguro no te lo veías venir e.e, a ve quien me supera felicitando cumpleaños
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg2 message message-text sent">
                                                            Después del mensaje que me mandaste, yo no podía ser menos jeje
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg3 message message-text sent">
                                                            Me alegro de que pudiésemos juntarnos de nuevo como grupo después de tantos años como si prácticamente no hubiese pasado el tiempo. Aunque no nos veamos tanto ya que estás entre Sevilla y Chiclana, eres una amistad muy importante para mí y nunca diré que no a un plan contigo (A no ser que me esté muriendo jeje)
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg4 message message-text sent">
                                                            Fue bonito poder ir contigo al Top 2 conciertos que he vivido (Fue mejor que el de Belén Aguilera, asúmelo) y aunque me cuesta socializar 24h, en ningún momento me sentí cansado de compartir tiempo contigo (y me tengo que seguir The Office, lo sé)
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg5 message message-img sent">
                                                            <img className="rounded" src={collage} alt="collage" />
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg6 message message-text sent">
                                                            Aunque en la primera foto parezca que voy borracho, tenía que aprovechar la foto que me hizo Google Fotos e.e
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg7 message message-img sent">
                                                            <img className="rounded" src={cumpleanos} alt="cumpleaños" />
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg8 message message-text sent">
                                                            Por último, este doble cumpleaños está en mi top probablemente para siempre, quién mejor para compartir el cumple (aunque no fuese el tuyo aún, por poco xD) que con quien considero una de mis hermanas
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg9 message message-text sent">
                                                            Espero que lo puedas celebrar también hoy con tus 'Mejores Amigos' y que te lo pases al menos igual (pero no mejor e.e) que en tu pre-cumpleaños
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg10 message message-img sent">
                                                            <img className="rounded" src={hug} alt="hug_gif" />
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg11 message message-text sent">
                                                            Sí, sé que pone hermanas, no me importa hacerme auto-misgender
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg12 message message-text sent">
                                                            Te dejo este temita para terminar, como ya lo han quitado de la tele, por si lo echas de menos jeje (que conste que ni sé cuál es, es la que tenía más views, creo)
                                                        </div>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="msg13 message message-text sent container">
                                                            <iframe title="hanna montana" className="rounded responsive-iframe"
                                                                src="https://www.youtube.com/embed/uVjRe8QXFHY">
                                                            </iframe>
                                                        </div>
                                                    </div>
                                                </span>
                                            );
                                        }
                                    })()}
                                </div>
                            </span>
                        );
                    }
                    else {
                        return (
                            <div className="QW5h-form justify-content-center">
                                <div className="mb-6 QW5h-password d-flex column">
                                    <label for="password" className="mb-2 font-weight-bold">Introduce el código</label>
                                    <input type="password" id="password" className="rounded-pill border" required />
                                </div>
                                <button onClick={this.handlerEnviar} type="submit" className="rounded-pill">Enviar</button>
                            </div>
                        );
                    }
                })()}
            </div>
        );
    }
}

export default QW5h;