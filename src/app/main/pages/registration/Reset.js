import React, from 'react';

export default class Reset extends Component {
    render() {
        return (
              <div
                    id="div_input_signup">
                                    <LockIcon
                                        id="icon" />
                                    <input
                                        type="password"
                                        placeholder="Password" required
                                        id="input_signup"
                                        onChange={e => this.password = e.target.value}

                                    />
                                </div>
                                <div
                                    id="div_input_signup">
                                    <LockIcon
                                        id="icon" />
                                    <input
                                        type="password"
                                        placeholder="Confirm-Password" required
                                        id="input_signup"
                                        onChange={e => this.confirmPassword = e.target.value}

                                    />
                                </div>
        )
    }
}