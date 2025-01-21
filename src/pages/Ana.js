
import React from "react";
import girasol from '../assets/images/girasol2.gif';
import "./Ana.css";

class Ana extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        };
    }

    handlerForm = (event) => {
        let passwordElemnent = document.getElementById("password");
        if (passwordElemnent.value == 'RmVsaXogY3VtcGxlYcOxb3MgQW5h') {
            this.setState({ logged: true })
        }
    };


    render() {
        return (
            <div className="ana-body">
                {(() => {
                    const { logged } = this.state;
                    if (logged) {
                        return (
                            <span>
                                <h1 className="rainbow-text title text-center w-100 py-4 text-black">¡¡Felicidades Ana!!</h1>
                                <div className="girasoles">
                                    <img src={girasol} alt="this slowpoke moves"/>
                                    <img src={girasol} alt="this slowpoke moves"/>
                                    <img src={girasol} alt="this slowpoke moves"/>
                                </div>
                            </span>
                        );
                    }
                    else {
                        return (
                            <div className="ana-form flex justify-center">
                                <div className="mb-6 ana-password">
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Introduce el código</label>
                                    <input type="password" id="password" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button onClick={this.handlerForm} type="submit" className="rounded-lg">Submit</button>
                            </div>
                        );
                    }
                })()}
            </div>
        );
    }
}

export default Ana;